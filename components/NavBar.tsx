import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Icons from './shared/Icon'
import NavItem from './NavItem'
import { Separator } from './ui/separator'
import { TLink, linkMap } from '@/lib/constants'
import logo from '@/public/dogland_logo.png'
import { Component } from '@/types/react'

type Links = {
  id: number
  links: TLink[]
}
// TODO: get links from server
const links: Links[] = [
  {
    id: 1,
    links: ['/about', '/gallery'],
  },
  {
    id: 2,
    links: ['/kenneling', '/training', '/grooming', '/store'],
  },
  {
    id: 3,
    links: ['/sign-in'],
  },
]

const NavBar: Component = () => {
  return (
    <div className="flex h-screen w-[220px] flex-col items-center justify-between py-12">
      <nav className="w-full">
        <ul>
          <li className="mb-6">
            <div className="mx-6">
              <Link href="/">
                <Image
                  alt="dogland logo"
                  src={logo}
                  className="aspect-[4/3] rounded-[4px] drop-shadow-xl"
                />
              </Link>
            </div>
          </li>
          {links.map((section, i) => {
            return (
              <Fragment key={section.id}>
                {!!Boolean(i) && <Separator />}
                {section.links.map((link) => {
                  const { icon: Icon, label } = linkMap[link]
                  return (
                    <li key={link}>
                      <NavItem
                        href={link}
                        label={label}
                        icon={<Icon width="100%" />}
                      />
                    </li>
                  )
                })}
              </Fragment>
            )
          })}
        </ul>
      </nav>
      <div className="github">
        <Link href="https://github.com/micah66/dogland">
          <Icons.GitHub />
        </Link>
      </div>
    </div>
  )
}

export default NavBar
