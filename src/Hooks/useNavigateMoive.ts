import {useCallback} from 'react';
import {ParsedUrlQuery, stringify} from 'querystring';
import {useRouter} from 'next/router';

export const useNavigateMovie = () => {
  const router = useRouter();

  const doNavigate = useCallback((searchQuery : string, searchParams : ParsedUrlQuery) => {
    const queryPart = searchQuery ? ('/' + searchQuery) : '';

    const params = new URLSearchParams(stringify(searchParams));
    params.delete('searchQuery');
    if (params.get('filter') === '') {
      params.delete('filter');
    }

    if (params.get('movie') === '') {
      params.delete('movie');
    }

    let paramPart = '';
    if (params.toString() != '') {
      paramPart = '?' + params.toString();
    }

    router.push('/search' + queryPart + paramPart);
  }, []);

  return doNavigate;
};


