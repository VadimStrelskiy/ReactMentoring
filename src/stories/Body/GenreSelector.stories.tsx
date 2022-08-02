import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {GenreSelector} from '../../Components/Body/GenreSelector/GenreSelector';

export default {
  title: 'Body/GenreSelector',
  component: GenreSelector,
} as ComponentMeta<typeof GenreSelector>;

export const genreSelector = () => <GenreSelector />;
