import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {SortPanel} from '../../Components/Body/SortPanel/SortPanel';

export default {
  title: 'Body/SortPanel',
  component: SortPanel,
} as ComponentMeta<typeof SortPanel>;

export const sortPanel = () => <SortPanel />;

