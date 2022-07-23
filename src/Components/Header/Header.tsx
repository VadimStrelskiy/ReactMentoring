import {Search} from './Search/Search';
import {SearchToggle} from './SearchToggle/SearchToggle';
import {MovieDetails} from './MovieDetails/MovieDetails';
import {getMovie, getMovies, useAppDispatch, useAppSelector} from '../../Store/movieReducer';
import styles from './Header.module.scss';
import {useEffect} from 'react';
import { useRouter } from 'next/router'
import { stringify } from 'querystring';

export function Header() {
  const movie = useAppSelector((state) => state.movie);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { searchQuery } = router.query;
  

  useEffect(() => {
    dispatch(getMovies({searchQuery: searchQuery as string, searchParams: stringify(router.query)}));
  }, [searchQuery, router.query]);

  const movieId = router.query.movie as string;

  if (movieId && (!movie || movie.id.toString() != movieId)) {
    dispatch(getMovie(movieId));
  }

  return (
    <header className={styles.header}>
      <p className={styles.netflixRoulettText}><strong>netflix</strong>roulette</p>

      {movie == null || !movieId ?
        (<Search/>) :
        (<>
          <SearchToggle/>
          <br/>
          <MovieDetails movie={movie}/>
        </>)
      }
    </header>
  );
}

