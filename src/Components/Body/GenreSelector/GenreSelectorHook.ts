import {useCallback, useState} from 'react';
import {ALL, allGenres} from './GenreSelector';
import {useNavigate} from "react-router-dom";

export const useGenres = (initialValues) => {
  const [genres, setGenres] = useState(initialValues);
  const navigate = useNavigate();
  
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

    if (newGenres.includes(ALL) || newGenres.length == 0) {
      navigate('/search');
    } else {
      navigate('/search/filter=' + newGenres.filter((g) => g !== ALL).join(','));
    }
  }, [genres]);

  return [genres, setGenres, updateGenres];
};
