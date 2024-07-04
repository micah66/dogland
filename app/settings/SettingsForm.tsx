'use client'

import { z } from 'zod'
import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import FlexContainer from '@/components/shared/FlexContainer'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Component } from '@/types/react'
import ButtonGroup from '@/components/shared/ButtonGroup'
import Button from '@/components/shared/Button'
import Icons from '@/components/shared/Icon'
import { RadioGroup, RadioGroupItem } from '@/components/shared/RadioGroup'
import { CompleteUser } from '@/utils/db'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import FormFieldTextInput from '@/components/shared/FormFieldTextInput'
import FormFieldRadioGroup from '@/components/shared/FormFieldRadioGroup'

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
  address: z.object({
    city: z.string().trim().optional(),
    street: z.string().trim().optional(),
    house: z.string().optional(),
    apartment: z.string().optional(),
  }),
  dogs: z.array(
    z.object({
      name: z.string().min(1, 'Name is a required field'),
      gender: z.enum(['MALE', 'FEMALE']),
      birthday: z.date().optional(),
      breed: z.string().min(1, 'Breed is a required field'),
      fixed: z.boolean().default(false),
      additionalComments: z.string().optional(),
    }),
  ),
})
type OmitableFields =
  | 'id'
  | 'clerkId'
  | 'userId'
  | 'addressId'
  | 'createdAt'
  | 'updatedAt'

type SettingsFormProps = Omit<CompleteUser, OmitableFields>

const SettingsForm: Component<Partial<SettingsFormProps>> = ({
  first_name,
  last_name,
  email,
  phone,
  address,
  dogs,
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: first_name ?? '',
      lastName: last_name ?? '',
      email: email ?? '',
      phone: phone ?? '',
      address: address || {
        city: '',
        street: '',
        house: '',
        apartment: '',
      },
      dogs: dogs || [],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'dogs',
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
          className="flex min-h-0 grow flex-col justify-between"
          onSubmit={form.handleSubmit((formData) => {
            console.log(formData)
          })}
        >
          <FlexContainer column className="-ml-1 gap-9 overflow-scroll pl-1">
            <section>
              <FlexContainer column className="gap-4">
                <h2 className="text-[24px]">Profile</h2>
                <FlexContainer className="gap-4">
                  <FormFieldTextInput
                    control={form.control}
                    name="firstName"
                    label="First Name"
                    defaultValue={first_name ?? ''}
                    error={Boolean(form.formState.errors.firstName)}
                    inputProps={{
                      placeholder: 'First Name',
                    }}
                  />
                  <FormFieldTextInput
                    control={form.control}
                    name="lastName"
                    label="Last Name"
                    defaultValue={last_name ?? ''}
                    error={Boolean(form.formState.errors.lastName)}
                    inputProps={{
                      placeholder: 'Last Name',
                    }}
                  />
                </FlexContainer>
                <FormFieldTextInput
                  control={form.control}
                  name="email"
                  label="Email"
                  className="w-[220px]"
                  defaultValue={email ?? ''}
                  error={Boolean(form.formState.errors.email)}
                  inputProps={{
                    placeholder: 'Email',
                    type: 'email',
                  }}
                />
                <FormFieldTextInput
                  control={form.control}
                  name="phone"
                  label="Phone"
                  defaultValue={phone ?? ''}
                  error={Boolean(form.formState.errors.phone)}
                  inputProps={{
                    placeholder: 'Phone',
                    type: 'tel',
                  }}
                />
                <FlexContainer className="flex-wrap gap-4">
                  <FormFieldTextInput
                    control={form.control}
                    name="address.city"
                    label="City"
                    defaultValue={address?.city ?? ''}
                    error={Boolean(form.formState.errors.address?.city)}
                    inputProps={{
                      placeholder: 'City',
                    }}
                  />
                  <FormFieldTextInput
                    control={form.control}
                    name="address.street"
                    label="Street"
                    defaultValue={address?.street ?? ''}
                    error={Boolean(form.formState.errors.address?.street)}
                    inputProps={{
                      placeholder: 'Street',
                    }}
                  />
                  <FormFieldTextInput
                    control={form.control}
                    name="address.house"
                    label="House"
                    error={Boolean(form.formState.errors.address?.house)}
                    inputProps={{
                      placeholder: '0',
                      type: 'number',
                      min: 0,
                    }}
                    className="w-16"
                    defaultValue={address?.house ?? ''}
                  />
                  <FormFieldTextInput
                    control={form.control}
                    name="address.apartment"
                    label="Apt"
                    error={Boolean(form.formState.errors.address?.apartment)}
                    inputProps={{
                      placeholder: '0',
                      type: 'number',
                      min: 0,
                    }}
                    className="w-16"
                    defaultValue={address?.apartment ?? ''}
                  />
                </FlexContainer>
              </FlexContainer>
            </section>
            <section>
              <div className="flex flex-col gap-4">
                <h2 className="text-[24px]">My Dogs</h2>
                <FlexContainer column className="max-w-[80%]">
                  {fields.map((field, iDog) => (
                    <Accordion key={field.id} type="single" collapsible>
                      <AccordionItem value={field.id} className="border-none">
                        <AccordionTrigger className="bg-slate-50 px-6 hover:bg-slate-100 data-[state=closed]:rounded-lg data-[state=open]:rounded-t-lg">
                          {field.name}
                        </AccordionTrigger>
                        <AccordionContent className="rounded-b-lg bg-slate-100 p-6">
                          <FlexContainer>
                            <FlexContainer column className="grow gap-4">
                              <FormFieldRadioGroup
                                className="w-full"
                                control={form.control}
                                name={`dogs.${iDog}.gender` as const}
                                label="Gender"
                                error={Boolean(
                                  form.formState.errors.dogs?.[iDog]?.breed,
                                )}
                                options={['male', 'female']}
                              />
                              <FormFieldTextInput
                                control={form.control}
                                name={`dogs.${iDog}.breed` as const}
                                label="Breed"
                                error={Boolean(
                                  form.formState.errors.dogs?.[iDog]?.breed,
                                )}
                                inputProps={{
                                  placeholder: 'Breed',
                                }}
                                defaultValue={dogs?.[iDog]?.breed ?? ''}
                              />
                              <p>
                                {dogs?.[iDog]?.birthday?.toLocaleDateString()}
                              </p>
                            </FlexContainer>
                            <Button
                              variant="filled"
                              usage="danger"
                              size="small"
                              onClick={() => {
                                remove(iDog)
                              }}
                              className="self-start"
                            >
                              Delete
                            </Button>
                          </FlexContainer>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </FlexContainer>
                <Button
                  variant="ghost"
                  className="w-fit pl-0"
                  startIcon={<Icons.Add />}
                  onClick={() =>
                    append({
                      breed: '',
                      gender: 'MALE',
                      name: '',
                      fixed: false,
                    })
                  }
                >
                  Add a dog
                </Button>
              </div>
            </section>
          </FlexContainer>
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
        </form>
      </Form>
    </FlexContainer>
  )
}

export default SettingsForm
