import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {App} from '../Components/App';
import {useAppDispatch, getMovies} from '../Store/movieReducer';

export default {
  title: 'App',
  component: App,
} as ComponentMeta<typeof App>;

export const app = () => {
  const dispatch = useAppDispatch();
  dispatch(getMovies({searchParams: '', searchQuery: ''}));
  return (
    <App/>
  );
};
