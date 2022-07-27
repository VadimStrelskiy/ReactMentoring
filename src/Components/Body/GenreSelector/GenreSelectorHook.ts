import {useCallback, useState, useEffect, useRef} from 'react';
import {useRouter} from 'next/router';
import {Genres} from '../../../Store/genres';
import {useNavigateMovie} from '../../../Hooks/useNavigateMoive';

const ALL = 'ALL';
export const allGenres = [ALL, ...Genres.sort()];

export const useGenres = () => {
  let genresFilter = null;

  const navigate = useNavigateMovie();
  const mounted = useRef(null);
  const router = useRouter();
  const {searchQuery} = router.query;

  const filter = router.query.filter as string;
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
      if (genres.length === allGenres.length - 1) {
        genres.push(ALL);
      }

      newGenres = [...genres];
    }

    setGenres(newGenres);

    if (newGenres.includes(ALL) || newGenres.length === 0) {
      router.query.filter = null;
      navigate(searchQuery as string, router.query);
    } else {
      router.query.filter = newGenres.filter((g) => g !== ALL).join(',');
      navigate(searchQuery as string, router.query);
    }
  }, [genres, searchQuery, router.query]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      if (genres.length > 0) {
        setGenres(genresFilter ? genresFilter : allGenres);
      }
    }
  }, [router.query]);

  return [genres, updateGenres];
};
