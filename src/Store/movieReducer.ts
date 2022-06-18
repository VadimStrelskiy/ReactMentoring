import { createReducer, createAction, createAsyncThunk, PayloadAction  } from '@reduxjs/toolkit';
import { getMoviesApi } from '../Services/MovieService';
import { Movie } from '../Components/App';

export interface State{
    error : string,
    movies : Movie[]
};

const initialState : State = {
    error: null,
    movies : []
}


export const getMovies = createAsyncThunk('getMovies', async () => {
    var data;
    try {
        const response = await window.fetch('http://localhost:4000/movies');
        data = await response.json();
        if (response.ok) {
          return data.data;
        }

        throw new Error(response.statusText)
    } catch (err) {
        return Promise.reject(err.message ? err.message : data)
    }
});

export const movieReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getMovies.fulfilled, (state, action) => {
        state.movies = state.movies.concat(action.payload)
    })
    .addCase(getMovies.rejected, (state, action) => {
        state.error = action.error.message;
    })
});

