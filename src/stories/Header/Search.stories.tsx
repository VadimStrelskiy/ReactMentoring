import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {Search} from '../../Components/Header/Search/Search';

export default {
  title: 'Header/Search',
  component: Search,
} as ComponentMeta<typeof Search>;

export const search = () => <Search />;
