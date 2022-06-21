import {GenreSelector} from './GenreSelector/GenreSelector';
import {SortPanel} from './SortPanel/SortPanel';
import {MoviesList} from './MoviesList/MoviesList';
import {ErrorBoundary} from './ErrorBoundary/ErrorBoundary';
import './Body.scss';
import {useAppSelector} from '../../Store/movieReducer';


export function Body() {

  const moviesCount =  useAppSelector((state) => state.movies.length);

  return (
    <main className="page-body">
      <ErrorBoundary>
        <GenreSelector/>
        <SortPanel/>
        <hr/>
        <p className='movie-count'>{moviesCount} movies found</p>
        <MoviesList />
      </ErrorBoundary>
    </main>
  );
}
