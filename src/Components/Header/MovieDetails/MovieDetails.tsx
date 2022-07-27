import styles from './MovieDetails.module.scss';

import {stringUtil} from '../../../Utils/stringUtil';
import {Movie} from '../../App';

interface MovieDetailsProps{
  movie : Movie
}

export function MovieDetails({movie} : MovieDetailsProps) {
  return (
    <>
      <img className={styles.movieDetailsImage} src={movie.poster_path}/>
      <div className={styles.movieDetails}>
        <p className={styles.movieTitle}>{movie.title}</p>
        <p className={styles.movieRating}>{movie.vote_average}</p>
        <p className={styles.movieGenre}>{movie.genres}</p>
        <p className={styles.movieYear}>{new Date(movie.release_date).getFullYear()}</p>
        <p className={styles.movieRuntime}>{stringUtil.formatMinutesToHoursMinutes(movie.runtime)}</p>
        <p className={styles.movieDescription}>{movie.overview}</p>
      </div>
    </>
  );
}

