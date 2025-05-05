'use client'
import React, { FC } from 'react'

type InputProps = {
  theme: 'primary' | 'secondary' | 'ghost' | 'error' | 'success'
  disabled?: boolean
  size?: string
  content: string
}

const themes: Record<
  InputProps['theme'],
  { bg: string; border: string; text: string }
> = {
  primary: {
    bg: 'bg-primary/10',
    text: 'text-primary',
    border: 'border-primary',
  },
  secondary: {
    bg: 'bg-primary/20',
    text: 'text-primary',
    border: 'border-primary',
  },
  ghost: {
    bg: 'bg-ghost-light/20',
    text: 'text-ghost-dark',
    border: 'border-ghost-dark',
  },
  success: {
    bg: 'bg-success/20',
    text: 'text-success',
    border: 'border-sucess',
  },
  error: {
    bg: 'bg-error/20',
    text: 'text-error',
    border: 'border-error',
  },
}

const Input: FC<InputProps> = ({ theme, content }: InputProps) => {
  const styles = themes[theme]
  const className = React.useMemo(() => {
    return `font-geist p-2 rounded-md font-semibold ${styles.bg} ${styles.text} border-2 ${styles.border} focus:outline-none focus:ring-3 focus:ring-primary/20`
  }, [theme])
  return <input className={className} placeholder={content} />
}

export default Input
