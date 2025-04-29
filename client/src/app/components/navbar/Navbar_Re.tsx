'use client'
import { useState } from 'react'
import logo from '../../assets/icons/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { X, Menu } from 'lucide-react'
const NavbarRe = () => {
  const [open, setOpen] = useState(false)
  const handleToggle = () => setOpen(!open)
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white p-4 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-4">
        <Link href="/" className="">
          <div>AUSA LOGO</div>
        </Link>
        {/* Desktop Navbar*/}
        <div className="ml-auto hidden items-center md:flex md:gap-8 lg:gap-12">
          <Link
            href="/"
            className="text-gray-700 transition hover:text-violet-500 dark:text-gray-300"
          >
            Home
          </Link>
          <Link
            href="/faq"
            className="text-gray-700 transition hover:text-violet-500"
          >
            faqs
          </Link>
          <Link
            href="/external-resources"
            className="text-gray-700 transition hover:text-violet-500"
          >
            external links
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 transition hover:text-violet-500"
          >
            contact
          </Link>
        </div>{' '}
        <div className="flex md:hidden">
          <button className="cursor-pointer" onClick={handleToggle}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {/* Mobile Navbar*/}

      {/* Slide-in Drawer Menu */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-3/4 max-w-xs transform bg-white p-6 shadow-md transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col`}
      >
        {/* Header with Logo and Close Button */}
        <div className="mb-8 flex items-center justify-between">
          <Image src={logo} width={100} height={100} alt="logo" />
          <button className="cursor-pointer" onClick={handleToggle}>
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="font-size: 0.75rem; flex flex-col gap-4">
          <Link
            href="/"
            className="transition duration-300 hover:translate-x-2"
          >
            STUDENT EXPERIENCE
          </Link>
          <Link
            href="/"
            className="transition duration-300 hover:translate-x-2"
          >
            STUDENT VOICE
          </Link>
          <Link
            href="/"
            className="transition duration-300 hover:translate-x-2"
          >
            YOUR AUSA
          </Link>
          <Link
            href="/"
            className="transition duration-300 hover:translate-x-2"
          >
            STUDENT SUPPORT
          </Link>
        </nav>
      </div>
    </nav>
  )
}

export default NavbarRe
