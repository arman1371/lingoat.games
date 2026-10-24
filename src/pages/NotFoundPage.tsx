import { Link } from 'react-router';
import { Button } from '@/components/ui/Button';
import { StatePanel } from '@/components/ui/StatePanel';
import { t } from '@/i18n';

export function NotFoundPage() {
  return (
    <StatePanel
      kind="empty"
      as="h1"
      title={t('notFound.title')}
      action={
        <Link to="/">
          <Button>{t('notFound.home')}</Button>
        </Link>
      }
    >
      {t('notFound.body')}
    </StatePanel>
  );
}

export default NotFoundPage;
