import {Search} from './Search/Search';
import {SearchToggle} from './SearchToggle/SearchToggle';
import {MovieDetails} from './MovieDetails/MovieDetails';
import {useAppSelector} from '../../Store/movieReducer';
import styles from './Header.module.scss';

export function Header() {
  const movie = useAppSelector((state) => state.movie);
  
  return (
    <header className={styles.header}>
      <p className={styles.netflixRoulettText}><strong>netflix</strong>roulette</p>

      {movie == null ?
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

