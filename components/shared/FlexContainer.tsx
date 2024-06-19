import { cn } from '@/lib/utils'
import { Component } from '@/types/react'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type FlexContainerProps = {
  column?: boolean
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const FlexContainer: Component<FlexContainerProps> = ({
  column = false,
  className,
  children,
  ...divProps
}) => {
  return (
    <div className={cn('flex', column && 'flex-col', className)} {...divProps}>
      {children}
    </div>
  )
}

export default FlexContainer
