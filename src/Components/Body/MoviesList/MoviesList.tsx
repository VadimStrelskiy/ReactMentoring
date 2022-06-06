import { MovieCard } from '../MovieCard/MovieCard';
import { MoviesListProps } from '../../App';


export function MoviesList({movies, onDelete}: MoviesListProps) {

  return (
    <>
      {
        movies.map((movie) =>
          (
            <MovieCard key={movie.title} movie={movie} onDelete={onDelete}/>
          ),
        )}
    </>);
}

