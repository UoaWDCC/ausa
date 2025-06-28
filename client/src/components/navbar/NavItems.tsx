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
      className={cn('relative inline-block text-left mb-1', className)}
    >
      <MenuButton className="inline-flex items-center gap-x-1.5 text-white hover:text-white/80 transition-colors duration-200 font-medium">
        {dropdown.icon && <dropdown.icon className="h-4 w-4" />}
        {dropdown.label}
        <ChevronDownIcon className="h-4 w-4 text-white/70" aria-hidden="true" />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right overflow-hidden rounded-lg border border-white/20 bg-white/95 backdrop-blur-md shadow-xl ring-1 ring-black/5 transition focus:outline-none data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          {dropdown.items.map((item, index) => (
            <MenuItem key={`${item.href}-${index}`}>
              <Link
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-3 px-4 py-3 text-sm text-gray-700 transition-colors data-focus:bg-purple-50 data-focus:text-purple-900 hover:bg-purple-50 hover:text-purple-900"
              >
                {item.icon && (
                  <item.icon className="h-4 w-4 text-gray-500 group-hover:text-purple-600" />
                )}
                {item.label}
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
        'group relative inline-flex items-center gap-2 text-white hover:text-white/80 transition-all duration-300 ease-in-out font-medium',
        className,
      )}
    >
      {item.icon && <item.icon className="h-4 w-4" />}
      <span className="bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-1 transition-all duration-300 ease-out group-hover:bg-[length:100%_2px]">
        {item.label}
      </span>
    </Link>
  )
}
