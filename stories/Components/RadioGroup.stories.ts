import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup, RadioGroupItem } from '@/components/shared/RadioGroup'

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      RadioGroupItem({ value: 'Item 1', id: 'item1', children: ['Item 1'] }),
      RadioGroupItem({ value: 'Item 2', id: 'item2', children: ['Item 2'] }),
      RadioGroupItem({
        value: 'Item 3',
        id: 'item3',
        children: ['Item 3'],
        disabled: true,
      }),
    ],
  },
}
