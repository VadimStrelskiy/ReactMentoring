import './MovieDetails.scss';
import {Context} from '../../App';
import {useContext} from 'react';
import {stringUtil} from '../../../Utils/stringUtil'

export function MovieDetails() {
  const movie = useContext(Context).movie;

  return (
    <>
      <img className='movie-details-image' src={movie.image}/>
      <div className='movie-details'>
        <p className='movie-title'>{movie.title}</p>
        <p className='movie-rating'>{movie.rating}</p>
        <p className='movie-genre'>{movie.genre}</p>
        <p className='movie-year'>{movie.date.getFullYear()}</p>
        <p className='movie-runtime'>{stringUtil.formatMinutesToHoursMinutes(movie.runtime)}</p>
        <p className='movie-description'>{movie.description}</p>
      </div>
    </>
  );
}

