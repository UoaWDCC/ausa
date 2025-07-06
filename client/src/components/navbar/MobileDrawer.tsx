import { X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import {
  isNavDropdown,
  type NavConfig,
  type NavItem,
} from '@/types/navbar.types'
import NavSearch from '@/components/nav-search/NavSearch'

interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
  config: NavConfig
  className?: string
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  config,
  className,
}) => {
  const mobileItems =
    config.mobileNavItems ||
    (() => {
      const flatItems: NavItem[] = []
      config.navItems.forEach((item) => {
        if (isNavDropdown(item)) {
          // If it's a dropdown, add all its items
          flatItems.push(...item.items)
        } else {
          // If it's a regular nav item, add it
          flatItems.push(item)
        }
      })
      return flatItems
    })()

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 left-0 z-50 h-full w-3/4 max-w-sm transform bg-white/95 backdrop-blur-md border-r border-white/20 shadow-2xl transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full',
          className,
        )}
      >
        <div className="flex h-full flex-col p-6">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <Link href={config.logo.href} onClick={onClose}>
              <Image
                src={config.logo.src}
                width={config.logo.width * 0.8}
                height={config.logo.height * 0.8}
                alt={config.logo.alt}
                className="drop-shadow-md"
              />
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Search Bar */}
          {config.showSearch && (
            <div className="mb-6">
              <NavSearch />
            </div>
          )}

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-1 flex-1">
            {mobileItems.map((item, index) => (
              <Link
                key={`mobile-${item.href}-${index}`}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                onClick={onClose}
                className="group flex items-center gap-3 rounded-md px-3 py-3 text-gray-700 font-medium transition-all duration-200 hover:bg-purple-50 hover:text-purple-900 hover:translate-x-1"
              >
                {item.icon && (
                  <item.icon className="h-5 w-5 text-gray-500 group-hover:text-purple-600" />
                )}
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          {config.actionButtons && config.actionButtons.length > 0 && (
            <div className="mt-auto pt-6 border-t border-gray-200">
              <div className="space-y-2">
                {config.actionButtons.map((button, index) => (
                  <Link
                    key={`mobile-action-${button.href}-${index}`}
                    href={button.href}
                    target={button.external ? '_blank' : undefined}
                    rel={button.external ? 'noopener noreferrer' : undefined}
                    onClick={onClose}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-3 text-white font-semibold shadow-lg hover:bg-purple-700 hover:shadow-xl transition-all duration-200"
                  >
                    {button.icon && <button.icon className="h-4 w-4" />}
                    {button.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
