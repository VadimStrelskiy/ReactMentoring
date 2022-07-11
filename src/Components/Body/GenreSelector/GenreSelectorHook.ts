import {useCallback, useState, useEffect, useRef} from 'react';
import {useNavigate, useMatch} from "react-router-dom";
import {Genres} from '../../../Store/genres';

const ALL = 'ALL';
export const allGenres = [ALL, ...Genres.sort()];

export const useGenres = () => {
  const match =  useMatch("search/:searchQuery");
  let genresQuery = null;
  const [genres, setGenres] = useState(genresQuery ? genresQuery : allGenres);
  const navigate = useNavigate();
  const mounted = useRef(null);
  
  if(match) {
    const filter = new URLSearchParams(match.params.searchQuery).get('filter');
    if(filter){
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
      newGenres = [...genres];
    }

    setGenres(newGenres);

    let urlSearchParams;
    if(match){
      urlSearchParams = new URLSearchParams(match.params.searchQuery);
    }
    else{
      urlSearchParams = new URLSearchParams();
    }

    if (newGenres.includes(ALL) || newGenres.length == 0) {
      if(!urlSearchParams.get('sortBy')){
        navigate('/search');
      }
      else{
        urlSearchParams.delete('filter');
        navigate('/search/' + urlSearchParams.toString());
      }
    } else {
      urlSearchParams.set('filter', newGenres.filter((g) => g !== ALL).join(','));
      navigate('/search/' + urlSearchParams.toString());
    }
  }, [genres]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      setGenres(genresQuery ? genresQuery : allGenres);
    } else {
      if(match){
        setGenres(genresQuery ? genresQuery : allGenres);
      }
      else{
        setGenres(allGenres);
      }
    }
  }, [match]);

  return [genres, updateGenres];
};
