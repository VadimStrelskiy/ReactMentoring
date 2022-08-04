import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {Header} from '../../Components/Header/Header';

export default {
  title: 'Header/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const header = () => <Header />;

