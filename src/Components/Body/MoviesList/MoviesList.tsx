import { MovieCard } from '../MovieCard/MovieCard';
import { MoviesListProps } from '../../App';



export function MoviesList({movies, onEdit, onDelete}: MoviesListProps) {

  return (
    <>
      {
        movies.map((movie) =>
          (
            <MovieCard key={movie.title} movie={movie} onDelete={onDelete} onEdit={onEdit}/>
          ),
        )}
    </>);
}

