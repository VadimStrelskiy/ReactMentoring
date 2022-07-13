import {useCallback, useState, useEffect, useRef} from 'react';
import {useParams} from 'react-router-dom';
import {Genres} from '../../../Store/genres';
import {useNavigateMovie} from '../../../Hooks/useNavigateMoive';

const ALL = 'ALL';
export const allGenres = [ALL, ...Genres.sort()];

export const useGenres = () => {
  let genresQuery = null;
  const [genres, setGenres] = useState(genresQuery ? genresQuery : allGenres);
  const navigate = useNavigateMovie();
  const mounted = useRef(null);
  const params = useParams();

  if (params.searchQuery) {
    const filter = new URLSearchParams(params.searchQuery).get('filter');
    if (filter) {
      genresQuery = filter.split(',');
    }
  }

  const updateGenres = useCallback((genre : string) => {
    let newGenres;

    if (genre === ALL) {
      if (genres.includes(ALL)) {
        newGenres = [];
      } else {
        newGenres = [...allGenres];
      }
    } else if (genres.includes(genre)) {
      newGenres = [...genres.filter((g) => g !== genre && g !== ALL)];
    } else {
      genres.push(genre);
      if (genres.length == allGenres.length - 1) {
        genres.push(ALL);
      }

      newGenres = [...genres];
    }

    setGenres(newGenres);

    let urlSearchParams;
    if (params.searchQuery) {
      urlSearchParams = new URLSearchParams(params.searchQuery);
    } else {
      urlSearchParams = new URLSearchParams();
    }

    if (newGenres.includes(ALL) || newGenres.length == 0) {
      if (!urlSearchParams.get('sortBy')) {
        navigate('');
      } else {
        urlSearchParams.delete('filter');
        navigate(urlSearchParams.toString());
      }
    } else {
      urlSearchParams.set('filter', newGenres.filter((g) => g !== ALL).join(','));
      navigate(urlSearchParams.toString());
    }
  }, [genres]);

  useEffect(() => {

    if (!mounted.current) {
      mounted.current = true;
      setGenres(genresQuery ? genresQuery : allGenres);
    } else {
      if (params.searchQuery) {
        setGenres(genresQuery ? genresQuery : allGenres);
      }
    }
  }, [params]);

  return [genres, updateGenres];
};
