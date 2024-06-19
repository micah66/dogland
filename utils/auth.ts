import { prisma } from './db'
import { auth } from '@clerk/nextjs/server'
import type { Address, User } from '@prisma/client'

type Selectables = Record<keyof User, boolean>

export const getLoggedInUser = async (
  select: Partial<Selectables> = { id: true },
) => {
  const { userId } = auth()

  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId!,
    },
    select,
  })

  let address: Address | null = null
  if (user?.addressId && select.addressId) {
    address = await prisma.address.findUnique({
      where: {
        id: user.addressId,
      },
    })
  }

  return { ...user, ...address }
}
