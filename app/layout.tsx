import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

import NavBar from '@/components/NavBar'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Dogland',
  description: 'Official website of Dogland',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="flex h-screen w-screen">
          <NavBar />
          <div className="content grow">{children}</div>
        </div>
      </body>
    </html>
  )
}
