import {MovieCard} from '../MovieCard/MovieCard';
import {MoviesListProps} from '../../App';
import {useEffect} from 'react';
import {State, getMovies} from '../../../Store/movieReducer';
import {useSelector, useDispatch} from 'react-redux';
import { AsyncThunk } from '@reduxjs/toolkit';
import {useAppDispatch, useAppSelector} from '../../../Store/hooks';


export function MoviesList({onDelete}: MoviesListProps) {

  const movies =  useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMovies());
  }, []);

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

