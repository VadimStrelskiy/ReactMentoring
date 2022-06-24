import './MovieDetails.scss';

import {stringUtil} from '../../../Utils/stringUtil';
import {Movie} from '../../App';

interface MovieDetailsProps{
  movie : Movie
}

export function MovieDetails({movie} : MovieDetailsProps) {
  return (
    <>
      <img className='movie-details-image' src={movie.poster_path}/>
      <div className='movie-details'>
        <p className='movie-title'>{movie.title}</p>
        <p className='movie-rating'>{movie.vote_average}</p>
        <p className='movie-genre'>{movie.genres}</p>
        <p className='movie-year'>{new Date(movie.release_date).getFullYear()}</p>
        <p className='movie-runtime'>{stringUtil.formatMinutesToHoursMinutes(movie.runtime)}</p>
        <p className='movie-description'>{movie.overview}</p>
      </div>
    </>
  );
}

