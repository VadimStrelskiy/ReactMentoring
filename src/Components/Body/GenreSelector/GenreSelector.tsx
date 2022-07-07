import './GenreSelector.scss';
import {useEffect, useRef} from 'react';
import {useGenres} from './GenreSelectorHook';
import { useMatch } from "react-router-dom";
import {Genres} from '../../../Store/genres';

export const ALL = 'ALL';
export const allGenres = [ALL, ...Genres.sort()];

export function GenreSelector() {

  const match =  useMatch("search/:searchQuery");
  let genresQuery = null;
  const mounted = useRef(null);

  if(match) {
    const filter = new URLSearchParams(match.params.searchQuery).get('filter');
    if(filter){
      genresQuery = filter.split(',');
    }
  }

  const [genres, setGenres, updateGenres] = useGenres(genresQuery ? genresQuery : allGenres);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      if(match){
        setGenres(genresQuery ? genresQuery : allGenres);
      }
      else{
        setGenres(allGenres);
      }
    }
  }, [match]);

  return (
    <div className='genre-selector'>
      {
        allGenres.map((g) =>
          <a key={g} onClick={() => updateGenres(g)} className={genres.includes(g) ? 'selected' : ''}>{g}</a>,
        )
      }
    </div>
  );
}

