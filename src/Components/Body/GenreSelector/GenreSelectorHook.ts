import {useCallback, useState, useEffect, useRef} from 'react';
import {useParams, useSearchParams} from 'react-router-dom';
import {Genres} from '../../../Store/genres';
import {useNavigateMovie} from '../../../Hooks/useNavigateMoive';

const ALL = 'ALL';
export const allGenres = [ALL, ...Genres.sort()];

export const useGenres = () => {
  let genresFilter = null;

  const navigate = useNavigateMovie();
  const mounted = useRef(null);
  const {searchQuery} = useParams();
  const [searchParams] = useSearchParams();

  const filter = searchParams.get('filter');
  if (filter) {
    genresFilter = filter.split(',');
  }

  const [genres, setGenres] = useState(genresFilter ? genresFilter : allGenres);

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

    if (newGenres.includes(ALL) || newGenres.length == 0) {
      searchParams.delete('filter');
      navigate(searchQuery, searchParams);
    } else {
      searchParams.set('filter', newGenres.filter((g) => g !== ALL).join(','));
      navigate(searchQuery, searchParams);
    }
  }, [genres, searchQuery, searchParams]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      if (genres.length > 0) {
        setGenres(genresFilter ? genresFilter : allGenres);
      }
    }
  }, [searchParams]);

  return [genres, updateGenres];
};
