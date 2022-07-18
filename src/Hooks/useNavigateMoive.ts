import {useNavigate} from 'react-router-dom';
import {useCallback} from 'react';

export const useNavigateMovie = () => {
  const navigate = useNavigate();

  const doNavigate = useCallback((searchQuery : string, searchParams : URLSearchParams) => {
    const queryPart = searchQuery ? ('/' + searchQuery) : '';
    const paramPart = searchParams.toString() ? ('?' + searchParams.toString()) : '';
    navigate('/search' + queryPart + paramPart);
  }, []);

  return doNavigate;
};


