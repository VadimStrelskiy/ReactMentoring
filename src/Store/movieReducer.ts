import { createReducer, createAction, createAsyncThunk, PayloadAction, configureStore } from '@reduxjs/toolkit';
import { getMoviesApi } from '../Services/MovieService';
import { Movie, SortOptionType } from '../Components/App';

export interface State{
    error : string,
    movies : Movie[],
    genres : string[],
    sortBy : SortOptionType
    
};

const initialState : State = {
    error: null,
    movies : [],
    genres: [],
    sortBy: SortOptionType.ReleaseDateAsc
}


export const getMovies = createAsyncThunk('getMovies', async (_, thunkAPI)  => {
    var data;
    try {

        var url = 'http://localhost:4000/movies?';

        const state = thunkAPI.getState() as RootState;
        let filter;
        if(state.genres.length > 0){
            filter = '&filter=' + state.genres.join(',');
        }

        let sort;
        switch(state.sortBy){
            case SortOptionType.RatingAsc:
                sort = 'sortOrder=asc&sortBy=vote_average';
                break;
            case SortOptionType.RatingDesc:
                sort = 'sortOrder=desc&sortBy=vote_average';
                break;
            case SortOptionType.ReleaseDateAsc:
                sort = 'sortOrder=asc&sortBy=release_date';
                break;
            case SortOptionType.ReleaseDateDesc:
                sort = 'sortOrder=desc&sortBy=release_date';
                break;
        }

        url += sort;

        if(filter){
            url+= filter;
        }

        const response = await window.fetch(url);
        data = await response.json();
        if (response.ok) {
          return data.data;
        }

        throw new Error(response.statusText)
    } catch (err) {
        return Promise.reject(err.message ? err.message : data)
    }
});

export const deleteMovie = createAsyncThunk('deleteMovie', async (_, thunkAPI)  => {
    var data;
    try {

        var url = 'http://localhost:4000/movies?';

        const state = thunkAPI.getState() as RootState;
        let filter;
        if(state.genres.length > 0){
            filter = '&filter=' + state.genres.join(',');
        }

        const response = await window.fetch(url);
        data = await response.json();
        if (response.ok) {
          return data.data;
        }

        throw new Error(response.statusText)
    } catch (err) {
        return Promise.reject(err.message ? err.message : data)
    }
}

export const setFilter = createAction<string[]>('setFilter');
export const setSortBy = createAction<SortOptionType>('setSortBy');

export const movieReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
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
});

const store = configureStore({
  reducer: movieReducer
});
  
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;