import './MovieDetails.scss';
import {Context} from '../../App';
import { useContext } from 'react';

export function MovieDetails() {

  const movie = useContext(Context).movie;

  function formatRuntime(allMinutes: number) : string {
      const hours = Math.floor(movie.runtime/60);
      const minutes = movie.runtime%60;

      return `${hours}h ${minutes}min`;
  }

  return (
    <>
      <img className='movie-details-image' src={`/static/${movie.image}`}/>
      <div className='movie-details'>
        <p className='movie-title'>{movie.title}</p>
        <p className='movie-rating'>{movie.rating}</p>
        <p className='movie-genre'>{movie.genre}</p>
        <p className='movie-year'>{movie.date.getFullYear()}</p>
        <p className='movie-runtime'>{formatRuntime(movie.runtime)}</p>
        <p className='movie-description'>{movie.description}</p>
      </div>
    </>
  );
}

