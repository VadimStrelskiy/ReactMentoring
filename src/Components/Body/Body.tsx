import GenreSelector from './GenreSelector/GenreSelector';
import SortPanel from './SortPanel/SortPanel';
import './Body.scss';
import MoviesList from './MoviesList/MoviesList';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
const movieCount = 39;

function Body() {
  return (
    <div className="page-body">
      <ErrorBoundary>
        <GenreSelector/>
        <SortPanel/>
        <hr/>
        <p className='movie-count'>{movieCount} movies found</p>
        <MoviesList/>
      </ErrorBoundary>
    </div>
  );
}

export default Body;
