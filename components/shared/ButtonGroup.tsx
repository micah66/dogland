import { Component } from '@/types/react'
import { ButtonProps } from './Button'
import FlexContainer, { FlexContainerProps } from './FlexContainer'
import { ReactElement } from 'react'
import { cn } from '@/lib/utils'

type ButtonGroupProps = {
  children:
    | ReactElement<Partial<ButtonProps>>
    | ReactElement<Partial<ButtonProps>>[]
} & FlexContainerProps

const ButtonGroup: Component<ButtonGroupProps> = ({ className, children }) => {
  return (
    <FlexContainer className={cn('gap-2', className)}>{children}</FlexContainer>
  )
}

export default ButtonGroup
