import { Component } from '@/types/react'
import Link, { LinkProps } from 'next/link'

import { cn } from '@/lib/utils'

type NavItemProps = {
  icon: JSX.Element
  label: string
} & LinkProps

const NavItem: Component<NavItemProps> = ({ icon, label, href }) => {
  return (
    <div
      className={cn(
        'group flex w-full items-center border-l-4 border-transparent py-2 hover:border-blue-300',
      )}
    >
      <Link className="flex grow items-center" href={href}>
        <div className="mr-3 h-6 w-6">{icon}</div>
        <div className="grow text-base leading-5">{label}</div>
      </Link>
    </div>
  )
}

export default NavItem
