import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {MoviesList} from '../../Components/Body/MoviesList/MoviesList';
import {useAppDispatch, getMovies} from '../../Store/movieReducer';

export default {
  title: 'Body/MoviesList',
  component: MoviesList,
} as ComponentMeta<typeof MoviesList>;

export const moviesList = () => {
  const dispatch = useAppDispatch();
  dispatch(getMovies({searchParams: '', searchQuery: ''}));
  return (
    <MoviesList/>
  );
};
