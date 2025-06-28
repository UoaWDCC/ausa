'use client'
import { type ClassValue, clsx } from 'clsx'
import React, { type FC } from 'react'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type ButtonProps = {
  theme:
    | 'primary'
    | 'secondary'
    | 'ghost'
    | 'warning'
    | 'success'
    | 'error'
    | 'primary-out'
    | 'secondary-out'
  disabled?: boolean
  click?: () => void
  border: boolean
}

const themes: Record<
  ButtonProps['theme'],
  { bg: string; text: string; border?: string }
> = {
  primary: {
    bg: 'bg-primary/50 hover:bg-primary/80',
    text: 'text-primary-dark hover:text-white',
    border: 'border-primary-dark/70',
  },
  secondary: {
    bg: 'bg-secondary/60 hover:bg-secondary/80',
    text: 'text-accent hover:text-white',
    border: 'border-secondary',
  },
  warning: {
    bg: 'bg-warning/10 hover:bg-warning/0',
    text: 'text-warning',
    border: 'border-warning hover:border-warning/50',
  },
  ghost: {
    bg: 'bg-ghost-dark/10 hover:bg-ghost-dark/0',
    text: 'text-ghost-dark',
    border: 'border-ghost-light hover:border-ghost-light/50',
  },
  success: { bg: '', text: 'text-success', border: 'border-success' },
  error: {
    bg: 'bg-error/10 hover:bg-error/0',
    text: 'text-error',
    border: 'border-error hover:border-error/50',
  },
  'primary-out': {
    bg: 'bg-primary/10 hover:bg-primary/0',
    text: 'text-primary-dark',
    border: 'border-primary-dark hover:border-primary-dark/50',
  },
  'secondary-out': {
    bg: 'bg-secondary/10 hover:bg-secondary/0',
    text: 'text-primary',
    border: 'border-primary hover:border-primary/50',
  },
}

const Button: FC<ButtonProps> = ({ theme, border, click }: ButtonProps) => {
  const styles = themes[theme]
  const className = React.useMemo(() => {
    return cn(
      `font-geist px-4 py-2 rounded-md font-semibold duration-300 cursor-pointer ${styles.bg} ${styles.text} ${border && `${styles.border} border-2`}`,
    )
  }, [border, styles])
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        if (typeof click === 'function') {
          click()
        }
      }}
    >
      <p>Button</p>
    </button>
  )
}

const ButtonComponent = React.memo(Button)
export default ButtonComponent
