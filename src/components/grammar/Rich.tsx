import { Fragment } from 'react';

/** Renders `**bold**` inside lesson text; everything else is plain text. */
export function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split('**').map((part, i) => (
        <Fragment key={i}>{i % 2 === 1 ? <strong>{part}</strong> : part}</Fragment>
      ))}
    </>
  );
}
