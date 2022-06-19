import {GenreSelector} from './GenreSelector/GenreSelector';
import {SortPanel} from './SortPanel/SortPanel';
import {MoviesList} from './MoviesList/MoviesList';
import {ErrorBoundary} from './ErrorBoundary/ErrorBoundary';
import {MoviesListProps} from '../App';
import './Body.scss';
import {useAppSelector} from '../../Store/hooks';


export function Body({onDelete, sortMoviesHandler}: MoviesListProps) {

  const moviesCount =  useAppSelector((state) => state.movies.length);

  return (
    <main className="page-body">
      <ErrorBoundary>
        <GenreSelector/>
        <SortPanel onValueChanged={sortMoviesHandler}/>
        <hr/>
        <p className='movie-count'>{moviesCount} movies found</p>
        <MoviesList onDelete={onDelete} sortMoviesHandler={sortMoviesHandler}/>
      </ErrorBoundary>
    </main>
  );
}
