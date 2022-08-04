import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {SearchToggle} from '../../Components/Header/SearchToggle/SearchToggle';

export default {
  title: 'Header/SearchToggle',
  component: SearchToggle,
} as ComponentMeta<typeof SearchToggle>;

export const searchToggle = () => <SearchToggle />;
