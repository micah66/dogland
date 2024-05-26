import type { Meta, StoryObj } from '@storybook/react'
import Icons from '@/components/shared/Icon'

const meta = {
  title: 'Components/Icons/Bone',
  component: Icons.Bone,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Icons.Bone>

export default meta
type Story = StoryObj<typeof meta>

export const Bone: Story = {
  args: {
    fill: 'red',
    width: '32px',
  },
}
