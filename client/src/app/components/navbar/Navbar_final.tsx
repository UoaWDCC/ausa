'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../../assets/icons/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import search_icon from '../../assets/icons/search_icon.svg'
import profile_icon from '../../assets/icons/profile_icon.svg'
import { IoSearchOutline } from 'react-icons/io5'
import NavSearch from '../navSearch/navSearch'
const NavigationBar = () => {
  const [open, setOpen] = useState(false)
  const handleToggle = () => setOpen(!open)

  return (
    <nav className="font-Inter h-[70px] bg-white w-full p-6 fixed top-0 left-0">
      {/* Overlay when menu is open */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={handleToggle}
        />
      )}
      {/* logo */}
      <div className="mx-auto flex max-w-7xl justify-between">
        <div className="">
          <Image
            className="absolute"
            src={logo}
            width={80}
            height={80}
            alt="logo"
          />
        </div>

        {/* navbar links */}
        <div className="hidden text-gray-700 md:flex md:gap-4 lg:gap-8">
          <Link
            className="group transition-all duration-300 ease-in-out"
            href="/"
          >
            <span className="bg-gradient-to-r from-gray-500 to-gray-500 bg-[length:0%_5px] bg-left-bottom bg-no-repeat pb-4 transition-all duration-500 ease-out group-hover:bg-[length:100%_5px]">
              Homepage
            </span>
          </Link>
          <Link
            className="group transition-all duration-300 ease-in-out"
            href="/faq"
          >
            <span className="bg-gradient-to-r from-gray-500 to-gray-500 bg-[length:0%_5px] bg-left-bottom bg-no-repeat pb-4 transition-all duration-500 ease-out group-hover:bg-[length:100%_5px]">
              FAQ
            </span>
          </Link>
          <Link
            className="group transition-all duration-300 ease-in-out"
            href="/external-resources"
          >
            <span className="bg-gradient-to-r from-gray-500 to-gray-500 bg-[length:0%_5px] bg-left-bottom bg-no-repeat pb-4 transition-all duration-500 ease-out group-hover:bg-[length:100%_5px]">
              External Resources
            </span>
          </Link>
          <Link
            className="group transition-all duration-300 ease-in-out"
            href="/contact"
          >
            <span className="bg-gradient-to-r from-gray-500 to-gray-500 bg-[length:0%_5px] bg-left-bottom bg-no-repeat pb-4 transition-all duration-500 ease-out group-hover:bg-[length:100%_5px]">
              Contact
            </span>
          </Link>

          <div className="hidden md:flex md:gap-4 lg:gap-8">
            <NavSearch />
            <Link href="/">
              <Image
                src={search_icon}
                width={25}
                height={25}
                alt="search icon"
                className="cursor-pointer"
                />
            </Link>
            <Link href="/">
              <Image
                src={profile_icon}
                width={25}
                height={25}
                alt="profile icon"
              />
            </Link>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex items-center justify-between md:hidden">
          <button className="cursor-pointer" onClick={handleToggle}>
            {open ? <X /> : <Menu />}
          </button>
          {/* <Image src={logo} width={100} height={100} alt="logo" className="mx-auto" /> */}
        </div>
      </div>

      {/* Slide-in Drawer Menu */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-3/4 max-w-xs transform bg-white p-6 transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'
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
            className="border-gray-500 transition duration-300 hover:translate-x-2 hover:border-l-4 hover:pl-2"
          >
            STUDENT EXPERIENCE
          </Link>
          <Link
            href="/"
            className="border-gray-500 transition duration-300 hover:translate-x-2 hover:border-l-4 hover:pl-2"
          >
            STUDENT VOICE
          </Link>
          <Link
            href="/"
            className="border-gray-500 transition duration-300 hover:translate-x-2 hover:border-l-4 hover:pl-2"
          >
            YOUR AUSA
          </Link>
          <Link
            href="/"
            className="border-gray-500 transition duration-300 hover:translate-x-2 hover:border-l-4 hover:pl-2"
          >
            STUDENT SUPPORT
          </Link>
        </nav>
      </div>
    </nav>
  )
}
export default NavigationBar
