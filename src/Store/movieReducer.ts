import {createReducer, createAction, createAsyncThunk, configureStore} from '@reduxjs/toolkit';
import {getMoviesApi, deleteMovieApi, createOrUpdateMovieApi} from '../Services/MovieService';
import {Movie} from '../Components/App';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export interface State{
    error : string,
    movies : Movie[]
};

const initialState : State = {
  error: null,
  movies: []
};

export const getMovies = createAsyncThunk('getMovies', async (searchQuery : string) => {
  return getMoviesApi(searchQuery);
});

export const deleteMovie = createAsyncThunk('deleteMovie', async (id : number) => {
  return deleteMovieApi(id);
});

export const updateMovie = createAsyncThunk('updateMovie', async (movie : Movie) => {
  return createOrUpdateMovieApi(movie);
});

export const showMovieDetails = createAction<Movie>('showMovieDetails');

export const movieReducer = createReducer(initialState, (builder) => {
  builder
      .addCase(getMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.error = null;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteMovie.fulfilled, () => {
      });
});

export const store = configureStore({
  reducer: movieReducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
