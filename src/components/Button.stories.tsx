import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

// configurações globais
export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create account',
  },
  argTypes: {},
} as Meta<ButtonProps>;

// configurações por variações do componente

export const Default: StoryObj<ButtonProps> = {};
