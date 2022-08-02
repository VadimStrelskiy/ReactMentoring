import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {Footer} from '../Components/Footer/Footer';

export default {
  title: 'Footer/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

export const footer = () => <Footer><p>Footer text</p></Footer>;

