import {ErrorView} from '../ErrorView/ErrorView';
import {useAppSelector} from '../../../Store/movieReducer';
import { useEffect } from 'react';

type ErrorBoundaryProps = {
    children: React.ReactNode
}

export function ErrorBoundary(props: ErrorBoundaryProps) {
  var error =  useAppSelector((state) => state.error);

  return <>{error === null ? props.children : <ErrorView/>}</>;
}
