import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {DeleteModal} from '../../Components/Modals/DeleteModal/DeleteModal';

export default {
  title: 'Modals/DeleteModal',
  component: DeleteModal,
} as ComponentMeta<typeof DeleteModal>;

export const deleteModal = () => <DeleteModal id={0} onClose={()=>{}}/>;

