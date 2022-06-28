import {useCallback, useState} from 'react';
import {Genres} from '../../../Store/genres';
import {getMovies, setFilter, useAppDispatch} from '../../../Store/movieReducer';

const ALL = 'ALL';
export const allGenres = [ALL, ...Genres.sort()];

export const useGenres = () => {
  const dispatch = useAppDispatch();
  const [genres, setGenres] = useState(allGenres);

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
      newGenres = [...genres];
    }

    setGenres(newGenres);

    if (newGenres.includes(ALL)) {
      dispatch(setFilter([]));
      dispatch(getMovies());
    } else {
      dispatch(setFilter([...newGenres.filter((g) => g !== ALL)]));
      dispatch(getMovies());
    }
  }, [genres]);

  return {genres, updateGenres};
};
