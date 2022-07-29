import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ErrorView } from '../../Components/Body/ErrorView/ErrorView';

export default {
  title: 'Body/ErrorView',
  component: ErrorView
} as ComponentMeta<typeof ErrorView>;

const Template: ComponentStory<typeof ErrorView> = () => <ErrorView />;

export const Default = Template.bind({});