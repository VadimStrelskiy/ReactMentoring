import {createReducer, createAction, createAsyncThunk, configureStore} from '@reduxjs/toolkit';
import {getMoviesApi, deleteMovieApi, updateMovieApi} from '../Services/MovieService';
import {Movie, SortOptionType} from '../Components/App';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export interface State{
    error : string,
    movies : Movie[],
    genres : string[],
    sortBy : SortOptionType
    movieDetails : Movie
};

const initialState : State = {
  error: null,
  movies: [],
  genres: [],
  sortBy: SortOptionType.ReleaseDateAsc,
  movieDetails: null,
};

export const getMovies = createAsyncThunk('getMovies', async (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  return getMoviesApi(state.genres, state.sortBy);
});

export const deleteMovie = createAsyncThunk('deleteMovie', async (id : number) => {
  return deleteMovieApi(id);
});

export const updateMovie = createAsyncThunk('updateMovie', async (movie : Movie) => {
  return updateMovieApi(movie);
});

export const setFilter = createAction<string[]>('setFilter');
export const setSortBy = createAction<SortOptionType>('setSortBy');
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
      .addCase(setFilter, (state, action) => {
        state.genres = action.payload;
      })
      .addCase(setSortBy, (state, action) => {
        state.sortBy = action.payload;
      })
      .addCase(deleteMovie.fulfilled, () => {
      })
      .addCase(showMovieDetails, (state, action) => {
        state.movieDetails = action.payload;
      });
});

export const store = configureStore({
  reducer: movieReducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
