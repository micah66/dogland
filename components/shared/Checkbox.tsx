'use client'

import { ReactNode, ComponentPropsWithoutRef } from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Checkbox as ShadCheckbox } from '../ui/checkbox'
import { cn } from '@/lib/utils'
import { Label } from '../ui/label'

interface CheckboxProps
  extends ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  label: ReactNode
}

export default function Checkbox({
  label,
  className,
  ...checkboxProps
}: CheckboxProps) {
  return (
    <div className="flex items-center">
      <ShadCheckbox
        id="checkbox"
        {...checkboxProps}
        className={cn(
          'h-6 w-6 border-2 data-[state=checked]:border-transparent data-[state=checked]:bg-blue-500',
          className,
        )}
      />
      <Label
        htmlFor="checkbox"
        className="cursor-pointer pl-2 text-base leading-5 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </Label>
    </div>
  )
}
