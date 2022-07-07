import {MovieCard} from '../MovieCard/MovieCard';
import {useEffect} from 'react';
import {getMovies, useAppDispatch, useAppSelector} from '../../../Store/movieReducer';

export function MoviesList() {
  const movies = useAppSelector((state) => state.movies);

  return (
    <>
      {
        movies.map((movie) =>
          (
            <MovieCard key={movie.title} movie={movie}/>
          ),
        )}
    </>);
}

