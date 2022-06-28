import {ErrorView} from '../ErrorView/ErrorView';
import {useAppSelector} from '../../../Store/movieReducer';

type ErrorBoundaryProps = {
    children: React.ReactNode
}

export function ErrorBoundary(props: ErrorBoundaryProps) {
  const error = useAppSelector((state) => state.error);

  return <>{error === null ? props.children : <ErrorView/>}</>;
}
