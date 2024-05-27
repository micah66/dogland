'use client'

import { ReactNode, ComponentPropsWithoutRef, ReactElement } from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import {
  RadioGroup as ShadRadioGroup,
  RadioGroupItem as ShadRadioItem,
} from '../ui/radio-group'
import { Label } from '../ui/label'
import { cn } from '@/lib/utils'

interface RadioGroupProps
  extends ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  col?: boolean
  children:
    | ReactElement<RadioGroupItemProps>
    | ReactElement<RadioGroupItemProps>[]
}

export function RadioGroup({
  col = false,
  children,
  className,
  ...radioGroupProps
}: RadioGroupProps) {
  return (
    <ShadRadioGroup
      {...radioGroupProps}
      className={cn('flex flex-wrap gap-6', col && 'flex-col', className)}
    >
      {children}
    </ShadRadioGroup>
  )
}

interface RadioGroupItemProps
  extends ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  children: [ReactNode]
}

export function RadioGroupItem({
  value,
  id,
  className,
  children,
  ...radioProps
}: RadioGroupItemProps) {
  return (
    <div className="flex items-center">
      <ShadRadioItem
        id={id}
        value={value}
        {...radioProps}
        className={cn('peer h-6 w-6 border-2 text-blue-500')}
      />
      <Label
        htmlFor={id}
        className="cursor-pointer pl-2 text-base leading-5 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {children}
      </Label>
    </div>
  )
}
