import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GenreSelector } from '../../Components/Body/GenreSelector/GenreSelector';

export default {
  title: 'Body/GenreSelector',
  component: GenreSelector
} as ComponentMeta<typeof GenreSelector>;

const Template: ComponentStory<typeof GenreSelector> = () => <GenreSelector />;

export const Default = Template.bind({});