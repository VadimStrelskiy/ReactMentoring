import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {MovieDetails} from '../../Components/Header/MovieDetails/MovieDetails';
import {Movie} from '../../Components/App';

export default {
  title: 'Header/MovieDetails',
  component: MovieDetails,
} as ComponentMeta<typeof MovieDetails>;

const movie : Movie = {
  id: 5,
  title: 'test title',
  release_date: new Date(),
  poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
  vote_average: 50,
  genres: ['Adventure', 'Comedy'],
  runtime: 120,
  overview: 'test overview',
};

export const movieDetails = () => <MovieDetails movie={movie}/>;
