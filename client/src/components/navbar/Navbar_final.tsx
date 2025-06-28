'use client'
import {
  Menu as HeadlessMenu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import logo from '../../app/assets/icons/logo.svg'
import { Button } from '../button/Button'
import { NavLink } from '../navLink/navLink'
import NavSearch from '../navSearch/navSearch'

const NavigationBar = () => {
  const [open, setOpen] = useState(false)
  const handleToggle = () => setOpen(!open)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true)
      } else {
        setHasScrolled(false)
      }
    }
    window.addEventListener('scroll', scrollHandler)

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <nav
      className={`font-Supreme h-[70px] ${hasScrolled ? 'bg-[#393980] opacity-90' : 'bg-[#393980]'} fixed top-0 left-0 z-50 w-full p-6 transition-opacity duration-300`}
    >
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
        <div className="hidden text-white md:flex md:gap-4 lg:gap-8">
          <NavSearch />
          <NavLink href="/client/public" text="Home" />
          <NavLink href="/client/public" text="Support" />
          <NavLink href="/faq" text="FAQs" />
          {/* <NavLink href="/contact" text="Contacts" /> */}
          {/* contacts drop down */}
          <HeadlessMenu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5">
                Contacts
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 size-5 text-gray-400"
                />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="/client/public"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    placeholder text
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="/client/public"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    placeholder text
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="/client/public"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    placeholder text
                  </a>
                </MenuItem>
                <form action="#" method="POST">
                  <MenuItem>
                    <button
                      type="submit"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      placeholder text
                    </button>
                  </MenuItem>
                </form>
              </div>
            </MenuItems>
          </HeadlessMenu>
          <Button variant="default" className="h-[25px]">
            Login
          </Button>

          {/* <div className="hidden md:flex md:gap-4 lg:gap-8">
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
          </div> */}
        </div>

        {/* Mobile Navbar */}
        <div className="flex items-center justify-between md:hidden">
          <button
            type="button"
            className="cursor-pointer"
            onClick={handleToggle}
          >
            {open ? <X /> : <Menu />}
          </button>
          {/* <Image src={logo} width={100} height={100} alt="logo" className="mx-auto" /> */}
        </div>
      </div>

      {/* Slide-in Drawer Menu */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-3/4 max-w-xs transform bg-white p-6 transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col`}
      >
        {/* Header with Logo and Close Button */}
        <div className="mb-8 flex items-center justify-between">
          <Image src={logo} width={100} height={100} alt="logo" />
          <button
            type="button"
            className="cursor-pointer"
            onClick={handleToggle}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="font-size: 0.75rem; flex flex-col gap-4">
          <Link
            href="/client/public"
            className="border-gray-500 transition duration-300 hover:translate-x-2 hover:border-l-4 hover:pl-2"
          >
            STUDENT EXPERIENCE
          </Link>
          <Link
            href="/client/public"
            className="border-gray-500 transition duration-300 hover:translate-x-2 hover:border-l-4 hover:pl-2"
          >
            STUDENT VOICE
          </Link>
          <Link
            href="/client/public"
            className="border-gray-500 transition duration-300 hover:translate-x-2 hover:border-l-4 hover:pl-2"
          >
            YOUR AUSA
          </Link>
          <Link
            href="/client/public"
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
