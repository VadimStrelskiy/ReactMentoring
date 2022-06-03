import {ErrorView} from '../ErrorView/ErrorView';

type ErrorBoundaryProps = {
    children: React.ReactNode
}

export function ErrorBoundary(props: ErrorBoundaryProps) {
  const isOk = true;
  return <>{isOk ? props.children : <ErrorView/>}</>;
}
