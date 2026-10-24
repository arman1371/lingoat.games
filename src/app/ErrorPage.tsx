import { Link, useRouteError } from 'react-router';
import { Button } from '@/components/ui/Button';
import { StatePanel } from '@/components/ui/StatePanel';

export function ErrorPage() {
  const error = useRouteError();
  const message = error instanceof Error ? error.message : 'Unknown error';
  return (
    <StatePanel
      kind="error"
      as="h1"
      title="Something went wrong"
      action={
        <Link to="/">
          <Button>Back to home</Button>
        </Link>
      }
    >
      {message}
    </StatePanel>
  );
}
