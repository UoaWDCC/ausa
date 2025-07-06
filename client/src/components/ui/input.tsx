import type * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Base layout and sizing
        'flex h-9 w-full min-w-0',

        // Border and background
        'border border-input rounded-xs bg-white dark:bg-input/30',

        // Spacing and typography
        'px-3 py-1 text-base md:text-sm',

        // Visual effects
        'shadow-xs transition-[color,box-shadow] outline-none',

        // Placeholder and selection styles
        'placeholder:text-muted-foreground',
        'selection:bg-primary selection:text-primary-foreground',

        // File input specific styles
        'file:inline-flex file:h-7 file:border-0 file:bg-transparent',
        'file:text-sm file:font-medium file:text-foreground',

        // Focus states
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',

        // Invalid states
        'aria-invalid:border-destructive aria-invalid:ring-destructive/20',
        'dark:aria-invalid:ring-destructive/40',

        // Disabled states
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',

        className,
      )}
      {...props}
    />
  )
}

export { Input }
