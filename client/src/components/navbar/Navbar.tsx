'use client'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type React from 'react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { NavConfig } from '@/types/navbar.types'
import { isNavDropdown } from '@/types/navbar.types'
import { MobileDrawer } from './MobileDrawer'
import { NavDropdownMenu, NavLinkItem } from './NavItems'
import NavSearch from '@/components/nav-search/NavSearch'

interface NavigationBarProps {
  config: NavConfig
  className?: string
}

export const NavigationBar: React.FC<NavigationBarProps> = ({
  config,
  className,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 z-50 w-full transition-all duration-500 ease-out',
        hasScrolled
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-xl shadow-slate-900/25'
          : 'bg-slate-900/50 backdrop-blur-none border-b border-transparent shadow-none',
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between gap-2 sm:gap-4">
          {/* Logo */}
          <div className="flex-shrink-0 min-w-0">
            <Link href={config.logo.href} className="block">
              <Image
                src={config.logo.src}
                width={config.logo.width}
                height={config.logo.height}
                alt={config.logo.alt}
                className="drop-shadow-lg transition-transform duration-200 hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Tablet/Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6 flex-1 justify-end">
            {/* Navigation Items */}
            {config.navItems.map((item) => (
              <div key={`nav-${item.label}`}>
                {isNavDropdown(item) ? (
                  <NavDropdownMenu dropdown={item} />
                ) : (
                  <NavLinkItem item={item} />
                )}
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search - Show on larger screens */}
            {config.showSearch && (
              <span className="hidden lg:flex items-center">
                <NavSearch />
              </span>
            )}

            {/* Action Buttons - Adaptive sizing */}
            <div className="hidden sm:flex sm:items-center sm:gap-2">
              {config.actionButtons?.map((button, index) => (
                <Button
                  key={`action-${button.href}-${index}`}
                  asChild
                  variant="default"
                  className="shadow-lg hover:shadow-xl text-xs sm:text-sm px-2 sm:px-3"
                >
                  <Link
                    href={button.href}
                    target={button.external ? '_blank' : undefined}
                    rel={button.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-1 sm:gap-2"
                  >
                    {button.icon && (
                      <button.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                    )}
                    <span className="hidden sm:inline">{button.label}</span>
                  </Link>
                </Button>
              ))}
            </div>

            {/* Mobile/Tablet Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                type="button"
                onClick={toggleMobileMenu}
                className="rounded-md p-1.5 sm:p-2 text-white hover:bg-white/10 transition-colors"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        config={config}
      />
    </nav>
  )
}

const defaultNavConfig: NavConfig = {
  logo: {
    src: '/static/icons/logo.svg',
    alt: 'AUSA Logo',
    href: '/',
    width: 80,
    height: 80,
  },
  navItems: [
    { label: 'Home', href: '/' },
    { label: 'Support', href: '/support' },
    { label: 'FAQs', href: '/faq' },
    {
      label: 'Contacts',
      items: [
        { label: 'General Enquiries', href: '/contact/general' },
        { label: 'Student Support', href: '/contact/support' },
        { label: 'Academic Affairs', href: '/contact/academic' },
        { label: 'Events', href: '/contact/events' },
      ],
    },
  ],
  actionButtons: [{ label: 'Login', href: '/login' }],
  showSearch: true,
}

// Default export with configuration for backwards compatibility
const NavigationBarWithDefaults: React.FC<Partial<NavigationBarProps>> = ({
  config = defaultNavConfig,
  ...props
}) => {
  return <NavigationBar config={config} {...props} />
}

export default NavigationBarWithDefaults
