import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {Body} from '../../Components/Body/Body';
import {useAppDispatch, getMovies} from '../../Store/movieReducer';

export default {
  title: 'Body/Body',
  component: Body,
} as ComponentMeta<typeof Body>;

export const body = () => {
  const dispatch = useAppDispatch();
  dispatch(getMovies({searchParams: '', searchQuery: ''}));
  return (
    <Body/>
  );
};
