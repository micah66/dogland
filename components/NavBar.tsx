import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

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
          {links.map((section) => {
            return (
              <Fragment key={section.id}>
                {section.links.map((link) => {
                  return (
                    <li key={link}>
                      <Link className="flex grow items-center" href={link}>
                        <NavItem link={link} />
                      </Link>
                    </li>
                  )
                })}
                <Separator />
              </Fragment>
            )
          })}
          <SignedOut>
            <li>
              <SignInButton>
                <NavItem link="/sign-up" />
              </SignInButton>
            </li>
          </SignedOut>
          <SignedIn>
            <li>
              <Link href="/settings">
                <NavItem link="/settings" />
              </Link>
            </li>
            <li>
              <SignOutButton redirectUrl="/">
                <NavItem link="/sign-out" />
              </SignOutButton>
            </li>
          </SignedIn>
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
