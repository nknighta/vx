import type { Meta, StoryObj } from '@storybook/react';

import Threebox from './threebox';

const meta = {
  component: Threebox,
} satisfies Meta<typeof Threebox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};