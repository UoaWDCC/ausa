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
import NavSearch from '../navSearch/navSearch'

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
        'fixed top-0 left-0 z-50 w-full transition-all duration-300',
        hasScrolled
          ? 'bg-purple-900/90 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-purple-900/80 backdrop-blur-sm',
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={config.logo.href} className="block">
              <Image
                src={config.logo.src}
                width={config.logo.width}
                height={config.logo.height}
                alt={config.logo.alt}
                className="h-10 w-auto drop-shadow-lg transition-transform duration-200 hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {/* Search */}
            {config.showSearch && <NavSearch />}

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

            {/* Action Buttons */}
            {config.actionButtons?.map((button, index) => (
              <Button
                key={`action-${button.href}-${index}`}
                asChild
                variant="default"
                size="sm"
                className="shadow-lg hover:shadow-xl"
              >
                <Link
                  href={button.href}
                  target={button.external ? '_blank' : undefined}
                  rel={button.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2"
                >
                  {button.icon && <button.icon className="h-4 w-4" />}
                  {button.label}
                </Link>
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              type="button"
              onClick={toggleMobileMenu}
              className="rounded-md p-2 text-white hover:bg-white/10 transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
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
