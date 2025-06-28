import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  Menu as HeadlessMenu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { NavDropdown, NavItem } from '@/types/navbar.types'

interface NavDropdownMenuProps {
  dropdown: NavDropdown
  className?: string
}

export const NavDropdownMenu: React.FC<NavDropdownMenuProps> = ({
  dropdown,
  className,
}) => {
  return (
    <HeadlessMenu
      as="div"
      className={cn('relative inline-block text-left', className)}
    >
      <MenuButton className="group relative inline-flex items-center gap-x-1.5 px-3 py-2 rounded-lg text-white/90 hover:text-white transition-all duration-300 ease-out font-medium overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 opacity-0 transition-all duration-300 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 group-hover:opacity-100" />

        {/* Border highlight */}
        <div className="absolute inset-0 rounded-lg border border-transparent bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 bg-clip-border transition-all duration-300 group-hover:from-blue-500/30 group-hover:via-purple-500/30 group-hover:to-pink-500/30" />

        {/* Icon with enhanced animation */}
        {dropdown.icon && (
          <dropdown.icon className="relative z-10 h-4 w-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
        )}

        {/* Text */}
        <span className="relative z-10 overflow-hidden">
          <span className="relative inline-block transition-transform duration-300 group-hover:translate-y-[-1px]">
            {dropdown.label}
          </span>
        </span>

        <ChevronDownIcon
          className="relative z-10 h-4 w-4 text-white/70 transition-all duration-300 group-hover:text-white "
          aria-hidden="true"
        />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right overflow-hidden rounded-lg border border-slate-700/50 bg-slate-900/95 backdrop-blur-xl shadow-xl shadow-slate-900/25 ring-1 ring-slate-700/30 transition focus:outline-none data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
      >
        <div className="py-2">
          {dropdown.items.map((item, index) => (
            <MenuItem key={`${item.href}-${index}`}>
              <Link
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="group relative flex items-center gap-3 px-4 py-3 text-sm text-slate-200 transition-all duration-200 overflow-hidden data-focus:bg-gradient-to-r data-focus:from-blue-500/10 data-focus:via-purple-500/10 data-focus:to-pink-500/10 data-focus:text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:via-purple-500/10 hover:to-pink-500/10 hover:text-white"
              >
                {/* Subtle background glow for menu items */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

                {item.icon && (
                  <item.icon className="relative z-10 h-4 w-4 text-slate-400 transition-all duration-200 group-hover:text-white group-hover:scale-105" />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </HeadlessMenu>
  )
}

interface NavLinkItemProps {
  item: NavItem
  className?: string
}

export const NavLinkItem: React.FC<NavLinkItemProps> = ({
  item,
  className,
}) => {
  return (
    <Link
      href={item.href}
      target={item.external ? '_blank' : undefined}
      rel={item.external ? 'noopener noreferrer' : undefined}
      className={cn(
        'group relative inline-flex items-center gap-2 px-3 py-2 rounded-lg text-white/90 hover:text-white transition-all duration-300 ease-out font-medium overflow-hidden',
        className,
      )}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 opacity-0 transition-all duration-300 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 group-hover:opacity-100" />

      {/* Border highlight */}
      <div className="absolute inset-0 rounded-lg border border-transparent bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 bg-clip-border transition-all duration-300 group-hover:from-blue-500/30 group-hover:via-purple-500/30 group-hover:to-pink-500/30" />

      {/* Icon with enhanced animation */}
      {item.icon && (
        <item.icon className="relative z-10 h-4 w-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
      )}

      {/* Text with gradient underline and shimmer effect */}
      <span className="relative z-10 overflow-hidden">
        <span className="relative inline-block transition-transform duration-300 group-hover:translate-y-[-1px]">
          {item.label}
        </span>
        {/* Animated underline */}
        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-all duration-300 ease-out group-hover:w-full" />
      </span>
    </Link>
  )
}
