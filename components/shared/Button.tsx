import { ButtonHTMLAttributes, ReactElement, cloneElement } from 'react'
import { Button as HeadlessButton } from '@mui/base/Button'
import { clsx } from 'clsx'
import { cva, type VariantProps } from 'cva'

import { IconComponent } from '@/components/shared/Icon'
import cn from '@/utils/cn'

const button = cva('flex items-center border-2 disabled:cursor-not-allowed', {
  variants: {
    usage: {
      primary: '',
      danger: '',
      success: '',
    },
    variant: {
      filled: ['text-white', 'border-transparent', 'disabled:bg-gray-500'],
      outlined: [
        'bg-white',
        'hover:bg-gray-200',
        'disabled:text-gray-500',
        'disabled:border-gray-500',
      ],
    },
    size: {
      small: ['gap-1', 'rounded', 'px-2', 'py-1', 'text-xs', 'leading-3'],
      medium: [
        'gap-1.5',
        'rounded-md',
        'px-3',
        'py-1.5',
        'text-base',
        'leading-5',
      ],
      large: [
        'gap-2',
        'rounded-[10px]',
        'px-4',
        'py-2',
        'text-2xl',
        'leading-7',
      ],
      xl: ['gap-3', 'rounded-xl', 'px-6', 'py-3', 'text-[32px]', 'leading-9'],
    },
    shape: {
      rounded: '',
      pill: 'rounded-full',
    },
  },
  compoundVariants: [
    {
      usage: 'primary',
      variant: 'filled',
      className: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      usage: 'primary',
      variant: 'outlined',
      className: 'text-blue-500 border-blue-500',
    },
    {
      usage: 'danger',
      variant: 'filled',
      className: 'bg-red-500 hover:bg-red-600',
    },
    {
      usage: 'danger',
      variant: 'outlined',
      className: 'text-red-500 border-red-500',
    },
    {
      usage: 'success',
      variant: 'filled',
      className: 'bg-green-500 hover:bg-green-600',
    },
    {
      usage: 'success',
      variant: 'outlined',
      className: 'text-green-500 border-green-500',
    },
  ],
  defaultVariants: {
    usage: 'primary',
    variant: 'filled',
    shape: 'rounded',
    size: 'medium',
  },
})

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  startIcon: ReactElement<IconComponent>
  endIcon: ReactElement<IconComponent>
}

export default function Button({
  variant = 'filled',
  usage = 'primary',
  shape = 'rounded',
  size = 'medium',
  startIcon,
  endIcon,
  className,
  children,
  ...btnProps
}: Partial<ButtonProps>) {
  const iconSizes = {
    'w-9': size === 'xl',
    'w-7': size === 'large',
    'w-5': size === 'medium',
    'w-3.5': size === 'small',
  }

  return (
    <HeadlessButton
      className={cn(button({ variant, usage, shape, size, className }))}
      {...btnProps}
    >
      {startIcon && (
        <span className={clsx(iconSizes)}>
          {cloneElement(startIcon, { width: '100%' })}
        </span>
      )}
      {children}
      {endIcon && (
        <span className={clsx(iconSizes)}>
          {cloneElement(endIcon, { width: '100%' })}
        </span>
      )}
    </HeadlessButton>
  )
}
