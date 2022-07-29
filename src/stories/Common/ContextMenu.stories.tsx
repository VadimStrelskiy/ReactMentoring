import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ContextMenu, ContextMenuElement } from '../../Components/Common/ContextMenu/ContextMenu';

export default {
  title: 'Header/ContextMenu',
  component: ContextMenu,
  
} as ComponentMeta<typeof ContextMenu>;

const elements : ContextMenuElement[] = [
    {
      label: 'Edit',
      onClick: () => {}
    },
    {
      label: 'Delete',
      onClick: () => {}
    },
  ];

const Template: ComponentStory<typeof ContextMenu> = () => <ContextMenu elements={elements} trigger={<button>Trigger</button>}/>;

export const Default = Template.bind({});