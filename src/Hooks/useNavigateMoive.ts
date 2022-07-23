import {useCallback} from 'react';
import { ParsedUrlQuery, stringify } from 'querystring';
import { useRouter } from 'next/router'

export const useNavigateMovie = () => {
  const router = useRouter();

  const doNavigate = useCallback((searchQuery : string, searchParams : ParsedUrlQuery) => {
    const queryPart = searchQuery ? ('/' + searchQuery) : '';
    const paramPart = '?' + stringify(searchParams);
    router.push('/search' + queryPart + paramPart);
  }, []);

  return doNavigate;
};


