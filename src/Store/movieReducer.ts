import {createReducer, createAction, createAsyncThunk, configureStore} from '@reduxjs/toolkit';
import {getMoviesApi, deleteMovieApi, createOrUpdateMovieApi, getMovieApi} from '../Services/MovieService';
import {Movie} from '../Components/App';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export interface State{
    error : string,
    movies : Movie[],
    movie : Movie
};

const initialState : State = {
  error: null,
  movies: [],
  movie: null,
};

export const getMovies = createAsyncThunk('getMovies', async (searchQuery : string) => {
  return getMoviesApi(searchQuery);
});

export const getMovie = createAsyncThunk('getMovie', async (id : string) => {
  return getMovieApi(id);
});

export const deleteMovie = createAsyncThunk('deleteMovie', async (id : number) => {
  return deleteMovieApi(id);
});

export const updateMovie = createAsyncThunk('updateMovie', async (movie : Movie) => {
  return createOrUpdateMovieApi(movie);
});

export const hideMovieDetails = createAction<Movie>('hideMovieDetails');

export const movieReducer = createReducer(initialState, (builder) => {
  builder
      .addCase(getMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.error = null;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getMovie.fulfilled, (state, action) => {
        state.movie = action.payload;
        state.error = null;
      })
      .addCase(getMovie.rejected, (state, action) => {
        state.error = action.error.message;
      });
});

export const store = configureStore({
  reducer: movieReducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
