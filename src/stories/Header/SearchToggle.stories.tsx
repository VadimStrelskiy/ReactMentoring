import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchToggle } from '../../Components/Header/SearchToggle/SearchToggle';

export default {
  title: 'Header/SearchToggle',
  component: SearchToggle
} as ComponentMeta<typeof SearchToggle>;

const Template: ComponentStory<typeof SearchToggle> = () => <SearchToggle />;

export const Default = Template.bind({});