import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {ContextMenu, ContextMenuElement} from '../../Components/Common/ContextMenu/ContextMenu';

export default {
  title: 'Common/ContextMenu',
  component: ContextMenu,

} as ComponentMeta<typeof ContextMenu>;

const elements : ContextMenuElement[] = [
  {
    label: 'Edit',
    onClick: () => {},
  },
  {
    label: 'Delete',
    onClick: () => {},
  },
];

export const contextMenu = () => <ContextMenu elements={elements} trigger={<button>Trigger</button>}/>;

