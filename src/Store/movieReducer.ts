import {createReducer, createAsyncThunk, configureStore, AnyAction, ThunkAction, Action, createAction} from '@reduxjs/toolkit';
import {getMoviesApi, deleteMovieApi, createOrUpdateMovieApi, getMovieApi} from '../Services/MovieService';
import {Movie} from '../Components/App';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import { enhancer } from 'addon-redux-strh';

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

export interface MovieRequest{
  searchQuery: string,
  searchParams: string
}

export const getMovies = createAsyncThunk('getMovies', async ({searchQuery, searchParams}: MovieRequest) => {
  return getMoviesApi(searchQuery, searchParams);
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

export const resetMovie = createAction('resetMovie');

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
      })
      .addCase(resetMovie, (state) => {
        state.movie = null;
      });
});


const reducer = (state: ReturnType<typeof movieReducer>, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return movieReducer(state, action);
  }
};

export const store = () =>
  configureStore({
    reducer, enhancers: [enhancer],
  });

type Store = ReturnType<typeof store>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper(store, {debug: true});
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
