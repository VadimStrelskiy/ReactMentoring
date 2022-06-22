import {ErrorView} from '../ErrorView/ErrorView';

type ErrorBoundaryProps = {
    children: React.ReactNode
}

export function ErrorBoundary(props: ErrorBoundaryProps) {
  //const error =  useAppSelector((state) => state.movieDetails);

  const isOk = true;
  return <>{isOk ? props.children : <ErrorView/>}</>;
}
