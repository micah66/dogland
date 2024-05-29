import { Component } from '@/types/react'
import Link, { LinkProps } from 'next/link'

import { cn } from '@/lib/utils'
import { TLink, linkMap } from '@/lib/constants'

type NavItemProps = {
  link: TLink
}

const NavItem: Component<NavItemProps> = ({ link }) => {
  const { icon: Icon, label } = linkMap[link]
  return (
    <div
      className={cn(
        'group flex w-full items-center border-l-4 border-transparent py-2 hover:border-blue-300',
      )}
    >
      <div className="mr-3 h-6 w-6">
        <Icon width="100%" />
      </div>
      <div className="grow text-base leading-5">{label}</div>
    </div>
  )
}

export default NavItem
