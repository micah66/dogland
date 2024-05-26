import type { Meta, StoryObj } from '@storybook/react'
import Button from '@/components/shared/Button'
import Icons from '@/components/shared/Icon'

const meta = {
  title: 'Components/Buttons',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    usage: {
      options: ['primary', 'danger', 'success'],
      control: { type: 'inline-radio' },
    },
    variant: {
      options: ['filled', 'outlined'],
      control: { type: 'inline-radio' },
    },
    shape: {
      options: ['rounded', 'pill'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['small', 'medium', 'large', 'xl'],
      control: { type: 'inline-radio' },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Button1: Story = {
  args: {
    usage: 'primary',
    variant: 'filled',
    shape: 'rounded',
    size: 'medium',
    disabled: false,
    startIcon: Icons.Bone({}),
    children: 'Click Here',
    endIcon: Icons.Pawprint({}),
  },
}
