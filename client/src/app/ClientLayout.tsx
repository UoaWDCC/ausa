'use client'

import '@/styles/globals.css'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import NavigationBar from '@/components/navbar/Navbar'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const hideNavbarOn = ['/portal']
  const shouldHideNavbar = hideNavbarOn.includes(pathname)

  return (
    <div className="relative flex min-h-screen flex-col">
      {!shouldHideNavbar && <NavigationBar />}
      <div className="pointer-events-none fixed inset-0 -z-10 brightness-35">
        <Image
          alt="University of Auckland"
          className="object-cover object-center"
          fill
          priority
          sizes="100vw"
          src={'/static/backgrounds/uoa-background.jpg'}
        />
      </div>
      <main className="relative z-10 w-full max-w-full flex-1 overflow-x-hidden">
        <div className="container mx-auto px-4 pb-16 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  )
}
