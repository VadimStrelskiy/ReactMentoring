import {GenreSelector} from './GenreSelector/GenreSelector';
import {SortPanel} from './SortPanel/SortPanel';
import {MoviesList} from './MoviesList/MoviesList';
import {ErrorBoundary} from './ErrorBoundary/ErrorBoundary';
import {MoviesListProps} from '../App';
import './Body.scss';

const MOVIE_COUNT = 39;

export function Body({onDelete, sortMoviesHandler}: MoviesListProps) {
  return (
    <main className="page-body">
      <ErrorBoundary>
        <GenreSelector/>
        <SortPanel onValueChanged={sortMoviesHandler}/>
        <hr/>
        <p className='movie-count'>{MOVIE_COUNT} movies found</p>
        <MoviesList onDelete={onDelete} sortMoviesHandler={sortMoviesHandler}/>
      </ErrorBoundary>
    </main>
  );
}
