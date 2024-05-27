import type { Meta, StoryObj } from '@storybook/react'
import Checkbox from '@/components/shared/Checkbox'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Checkbox',
    disabled: false,
  },
}
