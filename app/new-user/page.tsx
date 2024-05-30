import { prisma } from '@/utils/db'
import { currentUser } from '@clerk/nextjs/server'

import { Component } from '@/types/react'
import { redirect } from 'next/navigation'

const NewUser: Component = async () => {
  const user = (await currentUser())!

  const existingUser = await prisma.user.findUnique({
    where: {
      clerkId: user.id,
    },
  })

  if (!existingUser) {
    await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        first_name: user.firstName,
        last_name: user.lastName,
        phone: user.phoneNumbers[0]?.phoneNumber,
      },
    })
  }

  redirect('/settings')
}

export default NewUser
