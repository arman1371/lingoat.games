import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Mascot } from '@/components/ui/Mascot';
import { SpeakButton } from '@/components/ui/SpeakButton';
import { parsePriceToCents } from '@/lib/answer-check';
import { formatPrice, priceToGerman } from '@/lib/german/numbers';
import { t } from '@/i18n';
import { FeedbackFooter, GameFrame, verdictTitle } from '../shared/GameFrame';
import { useAutoSpeak } from '../shared/useAutoSpeak';
import { useSequence } from '../shared/useSequence';
import type { GameProps } from '../types';
import { adjust, basketMatches, totalCents, type Basket } from './logic';

export function Market({ config, seed, onFinish }: GameProps<'market'>) {
  const seq = useSequence(config.orders, seed, onFinish);
  const order = seq.item;
  const [basket, setBasket] = useState<Basket>({});
  const [step, setStep] = useState<'basket' | 'pay'>('basket');
  const [paid, setPaid] = useState('');
  const [mistake, setMistake] = useState(false);
  const [hint, setHint] = useState<string | null>(null);
  const [done, setDone] = useState<null | 'correct' | 'wrong'>(null);
  useAutoSpeak(order.request);

  const total = totalCents(order.items, config.products);

  const checkBasket = () => {
    if (basketMatches(basket, order.items)) {
      setHint(null);
      setStep('pay');
    } else {
      setMistake(true);
      setHint('That is not what the customer asked for. Read the order again!');
    }
  };
  const checkPay = () => {
    const cents = parsePriceToCents(paid);
    const ok = cents === total;
    if (!ok) setMistake(true);
    const clean = ok && !mistake;
    setDone(clean ? 'correct' : 'wrong');
    seq.answer(clean);
  };
  const next = () => {
    setBasket({});
    setStep('basket');
    setPaid('');
    setMistake(false);
    setHint(null);
    setDone(null);
    seq.advance();
  };

  return (
    <GameFrame
      index={seq.index}
      total={seq.total}
      title="Market stand"
      footer={
        done ? (
          <FeedbackFooter
            kind={done}
            title={verdictTitle(done)}
            detail={
              <p>
                Das macht <strong>{priceToGerman(total)}</strong> ({formatPrice(total)}).
              </p>
            }
            isLast={seq.isLast}
            onNext={next}
          />
        ) : step === 'basket' ? (
          <div className="flex flex-col gap-2">
            {hint ? (
              <p
                role="status"
                className="rounded-2xl border-2 border-danger bg-danger-soft p-3 text-ink"
              >
                {hint}
              </p>
            ) : null}
            <Button
              size="lg"
              block
              disabled={Object.keys(basket).length === 0}
              onClick={checkBasket}
            >
              Check basket
            </Button>
          </div>
        ) : null
      }
    >
      <div className="rounded-3xl bg-surface-2 p-4 text-center">
        <p className="flex items-center justify-center gap-2 text-sm font-bold text-muted">
          <Mascot mood="happy" size={32} />
          Kunde
        </p>
        <p
          className="flex items-center justify-center gap-2 text-2xl font-extrabold text-ink"
          data-testid="prompt"
        >
          {order.request}
          <SpeakButton text={order.request} />
        </p>
        {order.translation ? <p className="text-muted">{order.translation}</p> : null}
      </div>

      {step === 'basket' && !done ? (
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3" aria-label="Products">
          {config.products.map((p) => {
            const qty = basket[p.id] ?? 0;
            return (
              <li
                key={p.id}
                className={`flex flex-col items-center gap-1 rounded-2xl border-2 p-3 ${qty > 0 ? 'border-primary bg-primary-soft shadow-[0_3px_0_var(--primary-soft-border)]' : 'border-line bg-surface shadow-[0_3px_0_var(--border)]'}`}
              >
                <span aria-hidden="true" className="text-4xl">
                  {p.emoji}
                </span>
                <span className="font-extrabold text-ink">{p.name}</span>
                <span className="text-sm text-muted">{formatPrice(p.priceCents)}</span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    aria-label={`Remove ${p.name}`}
                    disabled={qty === 0}
                    onClick={() => setBasket((b) => adjust(b, p.id, -1))}
                  >
                    −
                  </Button>
                  <span
                    className="min-w-6 text-center text-lg font-extrabold text-ink"
                    aria-label={`${p.name} quantity`}
                  >
                    {qty}
                  </span>
                  <Button
                    variant="secondary"
                    size="sm"
                    aria-label={`Add ${p.name}`}
                    onClick={() => setBasket((b) => adjust(b, p.id, 1))}
                  >
                    +
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : null}

      {step === 'pay' || done ? (
        <form
          className="flex flex-col items-center gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            if (!done && paid.trim()) checkPay();
          }}
        >
          <p className="text-lg font-bold text-ink">
            Basket:{' '}
            {order.items
              .map((i) => `${i.qty}× ${config.products.find((p) => p.id === i.product)!.name}`)
              .join(', ')}
          </p>
          <label htmlFor="total" className="text-xl font-extrabold text-ink">
            Was kostet das zusammen? (in €)
          </label>
          <input
            id="total"
            value={paid}
            onChange={(e) => setPaid(e.target.value)}
            disabled={done !== null}
            inputMode="decimal"
            autoComplete="off"
            className="min-h-14 w-40 rounded-2xl border-2 border-line bg-surface px-4 text-center text-2xl font-bold text-ink"
          />
          {!done ? (
            <Button size="lg" onClick={checkPay} disabled={paid.trim() === ''}>
              {t('common.check')}
            </Button>
          ) : null}
        </form>
      ) : null}
    </GameFrame>
  );
}

export default Market;
