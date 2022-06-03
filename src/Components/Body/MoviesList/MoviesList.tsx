import { MovieCard } from '../MovieCard/MovieCard';
import { Movie } from '../Body';

interface MoviesList{
  movies: Movie[]
}

export function MoviesList({movies}: MoviesList) {
  return (
    <>
      {
        movies.map((movie) =>
          (
            <MovieCard key={movie.title} {...movie}/>
          ),
        )}
    </>);
}

