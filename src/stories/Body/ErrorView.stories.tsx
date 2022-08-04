import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {ErrorView} from '../../Components/Body/ErrorView/ErrorView';

export default {
  title: 'Body/ErrorView',
  component: ErrorView,
} as ComponentMeta<typeof ErrorView>;

export const errorView = () => <ErrorView />;
