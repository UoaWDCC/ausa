/**
 * Navigation link configuration
 */
export interface NavItem {
  /** Display text for the navigation item */
  label: string
  /** URL or route path */
  href: string
  /** Optional icon component */
  icon?: React.ComponentType<{ className?: string }>
  /** Whether this item should open in a new tab */
  external?: boolean
}

/**
 * Dropdown menu configuration
 */
export interface NavDropdown {
  /** Display text for the dropdown trigger */
  label: string
  /** Array of dropdown menu items */
  items: NavItem[]
  /** Optional icon for the dropdown trigger */
  icon?: React.ComponentType<{ className?: string }>
}

/**
 * Navigation configuration
 */
export interface NavConfig {
  /** Logo configuration */
  logo: {
    /** Logo image source */
    src: string
    /** Logo alt text */
    alt: string
    /** Logo link destination */
    href: string
    /** Logo dimensions */
    width: number
    height: number
  }
  /** Main navigation items */
  navItems: (NavItem | NavDropdown)[]
  /** Action buttons (login, signup, etc.) */
  actionButtons?: NavItem[]
  /** Whether to show search functionality */
  showSearch?: boolean
  /** Mobile menu items (can be different from desktop) */
  mobileNavItems?: NavItem[]
}

/**
 * Type guard to check if item is a dropdown
 */
export const isNavDropdown = (
  item: NavItem | NavDropdown,
): item is NavDropdown => {
  return 'items' in item
}
