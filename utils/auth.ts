import { prisma } from './db'
import { auth } from '@clerk/nextjs/server'
import type { Prisma } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'

export const getLoggedInUser = async (
  select: Prisma.UserSelect<DefaultArgs> = { id: true },
) => {
  const { userId } = auth()

  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId!,
    },
    select,
  })

  return user
}
