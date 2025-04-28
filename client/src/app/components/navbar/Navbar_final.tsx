'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../../assets/icons/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import search_icon from '../../assets/icons/search_icon.svg'
import profile_icon from '../../assets/icons/profile_icon.svg'
const NavigationBar = () => {
  const [open, setOpen] = useState(false)
  const handleToggle = () => setOpen(!open)

  return (
    <nav className="bg-white shadow-md p-6 w-full h-[70px]">
      {/* Overlay when menu is open */}
      {open && <div className="fixed inset-0 bg-black/40 z-40" onClick={handleToggle} />}
      {/*logo */}
      <div className="max-w-7xl flex mx-auto justify-between ">
        <div className="">
          <Image className="absolute" src={logo} width={80} height={80} alt="logo" />
        </div>

        {/* navbar links */}
        <div className="hidden md:flex text-gray-700 md:gap-4 lg:gap-8 translate-y-2">
          <Link className="hover:border-b-6 border-violet-500 pb-2" href="/">
            Homepage
          </Link>
          <Link className="hover:border-b-6 border-violet-500 pb-2" href="/faq">
            FAQ
          </Link>
          <Link className="hover:border-b-6 border-violet-500 pb-2" href="/external-resources">
            External Resources
          </Link>
          <Link className="hover:border-b-6 border-violet-500 pb-2" href="/contact">
            Contact
          </Link>

          <div className="hidden md:flex md:gap-4 lg:gap-8">
            <Link href="/">
              <Image src={search_icon} width={25} height={25} alt="search icon" />
            </Link>
            <Link href="/">
              <Image src={profile_icon} width={25} height={25} alt="profile icon" />
            </Link>
          </div>
        </div>

        {/* Mobile Navbar*/}
        <div className="flex md:hidden items-center justify-between">
          <button className="cursor-pointer" onClick={handleToggle}>
            {open ? <X /> : <Menu />}
          </button>
          {/* <Image src={logo} width={100} height={100} alt="logo" className="mx-auto" /> */}
        </div>
      </div>

      {/* Slide-in Drawer Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white z-50 p-6 transform transition-transform duration-300 ease-in-out ${
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
          <Link
            href="/"
            className="transition hover:translate-x-2 duration-300 hover:border-l-4 border-violet-500 hover:pl-2"
          >
            STUDENT EXPERIENCE
          </Link>
          <Link
            href="/"
            className="transition hover:translate-x-2 duration-300 hover:border-l-4 border-violet-500 hover:pl-2"
          >
            STUDENT VOICE
          </Link>
          <Link
            href="/"
            className="transition hover:translate-x-2 duration-300 hover:border-l-4 border-violet-500 hover:pl-2"
          >
            YOUR AUSA
          </Link>
          <Link
            href="/"
            className="transition hover:translate-x-2 duration-300 hover:border-l-4 border-violet-500 hover:pl-2"
          >
            STUDENT SUPPORT
          </Link>
        </nav>
      </div>
    </nav>
  )
}
export default NavigationBar
