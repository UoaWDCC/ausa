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
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50 p-4">
      <div className="max-w-7xl mx-auto py-4 flex justify-between items-center">
        <Link href="/" className="">
          <div>AUSA LOGO</div>
        </Link>
        {/* Desktop Navbar*/}
        <div className="hidden md:flex items-center md:gap-8 lg:gap-12 ml-auto">
          <Link
            href="/"
            className="text-gray-700 dark:text-gray-300 hover:text-violet-500 transition"
          >
            Home
          </Link>
          <Link href="/faq" className="text-gray-700 hover:text-violet-500 transition">
            faqs
          </Link>
          <Link
            href="/external-resources"
            className="text-gray-700  hover:text-violet-500 transition"
          >
            external links
          </Link>
          <Link href="/contact" className="text-gray-700  hover:text-violet-500  transition">
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
        className={`fixed top-0 left-0 h-full w-3/4 max-w-xs shadow-md bg-white z-50 p-6 transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col`}
      >
        {/* Header with Logo and Close Button */}
        <div className="flex justify-between items-center mb-8">
          <Image src={logo} width={100} height={100} alt="logo" />
          <button className="cursor-pointer" onClick={handleToggle}>
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-4 font-size: 0.75rem;">
          <Link href="/" className="transition hover:translate-x-2 duration-300">
            STUDENT EXPERIENCE
          </Link>
          <Link href="/" className="transition hover:translate-x-2 duration-300">
            STUDENT VOICE
          </Link>
          <Link href="/" className="transition hover:translate-x-2 duration-300">
            YOUR AUSA
          </Link>
          <Link href="/" className="transition hover:translate-x-2 duration-300">
            STUDENT SUPPORT
          </Link>
        </nav>
      </div>
    </nav>
  )
}

export default NavbarRe
