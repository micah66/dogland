import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import {
  FormField as ShadFormField,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '@/components/ui/tooltip'
import {
  FieldValues,
  FieldPath,
  ControllerProps,
  Control,
  Path,
} from 'react-hook-form'
import FlexContainer from './FlexContainer'
import Icons from './Icon'

type FormFieldProps<
  TFieldValues extends FieldValues,
  TInputProps extends JSX.IntrinsicAttributes,
> = {
  label?: string
  description?: ReactNode
  className?: string
  inputElement: React.FC<TInputProps>
  inputProps: TInputProps
  control: Control<TFieldValues>
  name: FieldPath<TFieldValues>
  error: boolean
  errorExplaination?: ReactNode
} & Omit<ControllerProps<TFieldValues, Path<TFieldValues>>, 'render'>

const FormField = <
  TFieldValues extends FieldValues,
  TInputProps extends JSX.IntrinsicAttributes,
>({
  label,
  description,
  className,
  inputElement: InputElement,
  inputProps,
  control,
  name,
  error,
  errorExplaination,
  ...props
}: FormFieldProps<TFieldValues, TInputProps>) => {
  return (
    <ShadFormField
      control={control}
      name={name}
      {...props}
      render={({ field }) => (
        <FormItem className={cn('w-32', className)}>
          <FormLabel className="px-2 text-xs leading-[14px]">{label}</FormLabel>
          <FormControl>
            <InputElement
              {...inputProps}
              {...field}
              className={cn(
                'border-none bg-transparent focus-visible:bg-blue-100',
                error &&
                  'bg-red-200 text-red-500 placeholder:text-red-300 focus-visible:bg-red-200 focus-visible:ring-red-300',
              )}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FlexContainer className="-mb-[22px] justify-between px-2">
            <FormMessage className=" text-xs leading-3" />
            {error && errorExplaination && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Icons.Info
                      className="shrink-0"
                      fill="#dc2626"
                      width="18px"
                    />
                  </TooltipTrigger>
                  <TooltipContent side="right" sideOffset={0}>
                    {errorExplaination}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </FlexContainer>
        </FormItem>
      )}
    />
  )
}

export default FormField
