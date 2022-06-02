import {GenreSelector} from './GenreSelector/GenreSelector';
import {SortPanel} from './SortPanel/SortPanel';
import {MoviesList} from './MoviesList/MoviesList';
import {ErrorBoundary} from './ErrorBoundary/ErrorBoundary';
import './Body.scss';

const MOVIE_COUNT = 39;

export function Body() {
  return (
    <main className="page-body">
      <ErrorBoundary>
        <GenreSelector/>
        <SortPanel/>
        <hr/>
        <p className='movie-count'>{MOVIE_COUNT} movies found</p>
        <MoviesList/>
      </ErrorBoundary>
    </main>
  );
}
