import { Component } from '@/types/react'
import SettingsForm from './SettingsForm'
import { getLoggedInUser } from '@/utils/auth'

const SettingsPage: Component = async () => {
  const user = await getLoggedInUser({
    first_name: true,
    last_name: true,
    email: true,
    phone: true,
    address: true,
    dogs: true,
  })

  return <SettingsForm {...user} />
}

export default SettingsPage
