import {useNavigate, useSearchParams} from 'react-router-dom';
import {useCallback} from 'react';

export const useNavigateMovie = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const doNavigate = useCallback((query) => {
    const movieId = searchParams.get('movie');

    let url = '/search' + (query ? '/' + query : '');
    if (movieId) {
      url += '?movie=' + movieId;
    }

    navigate(url);
  }, []);

  return doNavigate;
};


