'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import FlexContainer from '@/components/shared/FlexContainer'
import FormField from '@/components/shared/FormField'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Component } from '@/types/react'
import { Address, User } from '@prisma/client'
import ButtonGroup from '@/components/shared/ButtonGroup'
import Button from '@/components/shared/Button'
import Icons from '@/components/shared/Icon'

const formSchema = z.object({
  firstName: z
    .string()
    .min(1, {
      message: 'First Name is a required field',
    })
    .trim(),
  lastName: z
    .string()
    .min(1, {
      message: 'Last Name is a required field',
    })
    .trim(),
  email: z
    .string()
    .min(1, {
      message: 'Email is a required field',
    })
    .trim()
    .email({ message: 'Email must be in valid email format' }),
  phone: z.string().trim().optional(),
  city: z.string().trim().optional(),
  street: z.string().trim().optional(),
  house: z.string().optional(),
  apt: z.string().optional(),
})
type OmitableFields =
  | 'id'
  | 'clerkId'
  | 'userId'
  | 'addressId'
  | 'createdAt'
  | 'updatedAt'
type SettingsFormProps = Omit<User & Address, OmitableFields>

const SettingsForm: Component<Partial<SettingsFormProps>> = ({
  first_name,
  last_name,
  email,
  phone,
  city,
  street,
  house,
  apartment,
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: first_name ?? '',
      lastName: last_name ?? '',
      email: email ?? '',
      phone: phone ?? '',
      city: city ?? '',
      street: street ?? '',
      house: house ?? '',
      apt: apartment ?? '',
    },
  })

  return (
    <FlexContainer
      column
      className="h-full w-full shrink-0 gap-2 rounded-xl bg-blue-50 p-6"
    >
      <h1 className="text-[40px]">Settings</h1>
      <Separator className="bg-slate-800" />
      <Form {...form}>
        <form
          className="grow"
          onSubmit={form.handleSubmit((formData) => {
            console.log(formData)
          })}
        >
          <FlexContainer column className="h-full justify-between">
            <div className="-ml-1 overflow-scroll pl-1">
              <FlexContainer column className="gap-9">
                <section>
                  <FlexContainer column className="gap-4">
                    <h2 className="text-[24px]">Profile</h2>
                    <FlexContainer className="gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        label="First Name"
                        defaultValue={first_name ?? ''}
                        error={Boolean(form.formState.errors.firstName)}
                        inputElement={Input}
                        inputProps={{
                          placeholder: 'First Name',
                        }}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        label="Last Name"
                        defaultValue={last_name ?? ''}
                        error={Boolean(form.formState.errors.lastName)}
                        inputElement={Input}
                        inputProps={{
                          placeholder: 'Last Name',
                        }}
                      />
                    </FlexContainer>
                    <FormField
                      control={form.control}
                      name="email"
                      label="Email"
                      className="w-[220px]"
                      defaultValue={email ?? ''}
                      error={Boolean(form.formState.errors.email)}
                      inputElement={Input}
                      inputProps={{
                        placeholder: 'Email',
                        type: 'email',
                      }}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      label="Phone"
                      defaultValue={phone ?? ''}
                      error={Boolean(form.formState.errors.phone)}
                      inputElement={Input}
                      inputProps={{
                        placeholder: 'Phone',
                        type: 'tel',
                      }}
                    />
                    <FlexContainer className="flex-wrap gap-4">
                      <FormField
                        control={form.control}
                        name="city"
                        label="City"
                        defaultValue={city ?? ''}
                        error={Boolean(form.formState.errors.city)}
                        inputElement={Input}
                        inputProps={{
                          placeholder: 'City',
                        }}
                      />
                      <FormField
                        control={form.control}
                        name="street"
                        label="Street"
                        defaultValue={street ?? ''}
                        error={Boolean(form.formState.errors.street)}
                        inputElement={Input}
                        inputProps={{
                          placeholder: 'Street',
                        }}
                      />
                      <FormField
                        control={form.control}
                        name="house"
                        label="House"
                        error={Boolean(form.formState.errors.house)}
                        inputElement={Input}
                        inputProps={{
                          placeholder: '0',
                          type: 'number',
                          min: 0,
                        }}
                        className="w-16"
                        defaultValue={house ?? ''}
                      />
                      <FormField
                        control={form.control}
                        name="apt"
                        label="Apt"
                        error={Boolean(form.formState.errors.apt)}
                        inputElement={Input}
                        inputProps={{
                          placeholder: '0',
                          type: 'number',
                          min: 0,
                        }}
                        className="w-16"
                        defaultValue={apartment ?? ''}
                      />
                    </FlexContainer>
                  </FlexContainer>
                </section>
                <section>
                  <div className="flex flex-col gap-4">
                    <h2 className="text-[24px]">My Dogs</h2>
                    <Button
                      variant="ghost"
                      className="w-fit pl-0"
                      startIcon={<Icons.Add />}
                    >
                      Add a dog
                    </Button>
                  </div>
                </section>
              </FlexContainer>
            </div>
            <ButtonGroup className="flex-row-reverse">
              <Button
                shape="pill"
                disabled={!form.formState.isDirty}
                type="submit"
              >
                Save
              </Button>
              <Button
                shape="pill"
                variant="outlined"
                disabled={!form.formState.isDirty}
                onClick={() => form.reset()}
              >
                Cancel
              </Button>
            </ButtonGroup>
          </FlexContainer>
        </form>
      </Form>
    </FlexContainer>
  )
}

export default SettingsForm
