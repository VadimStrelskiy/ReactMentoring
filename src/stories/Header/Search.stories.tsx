import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Search } from '../../Components/Header/Search/Search';

export default {
  title: 'Header/Search',
  component: Search
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = () => <Search />;

export const Default = Template.bind({});