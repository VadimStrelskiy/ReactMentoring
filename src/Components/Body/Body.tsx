import {GenreSelector} from './GenreSelector/GenreSelector';
import {SortPanel} from './SortPanel/SortPanel';
import {MoviesList} from './MoviesList/MoviesList';
import {ErrorBoundary} from './ErrorBoundary/ErrorBoundary';
import styles from './Body.module.scss';
import {useAppSelector} from '../../Store/movieReducer';


export function Body() {
  const moviesCount = useAppSelector((state) => state.movies.length);

  return (
    <main className={styles.pageBody}>
      <ErrorBoundary>
        <GenreSelector/>
        <SortPanel/>
        <hr/>
        <p className={styles.movieCount}>{moviesCount} movies found</p>
        <MoviesList />
      </ErrorBoundary>
    </main>
  );
}
