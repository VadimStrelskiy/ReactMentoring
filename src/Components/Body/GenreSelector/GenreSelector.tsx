import './GenreSelector.scss';
import {Genres} from '../../../Store/genres';
import {useState} from 'react';
import {useAppDispatch} from '../../../Store/hooks';
import {getMovies, setFilter} from '../../../Store/movieReducer';

const ALL = "ALL";
const allGenres = [ALL, ...Genres.sort()]

export function GenreSelector() {

  const dispatch = useAppDispatch();
  const [genres, setGenres] = useState(allGenres);

  function updateGenres(genre){
    let newGenres;
    if(genre === ALL){
      if(genres.includes(ALL)){
        newGenres = [];
      }
      else{
        newGenres = [...allGenres];
      }
      
    } else if(genres.includes(genre)){
      
      newGenres = [...genres.filter(g => g !== genre && g !== ALL)]; 
    }
    else{
      genres.push(genre);
      newGenres = [...genres];
    }

    setGenres(newGenres);

    if(newGenres.includes(ALL)){
      dispatch(setFilter([]));
      dispatch(getMovies());
    }
    else{
      dispatch(setFilter([...newGenres.filter(g => g !== ALL)]));
      dispatch(getMovies());
    }
  }


  return (
    <div className='genre-selector'>
      {
        allGenres.map((g) =>
          <a key={g} onClick={(e) => updateGenres(g)} className={genres.includes(g) ? "selected" : ""}>{g}</a>,
        )
      }
    </div>
  );
}

