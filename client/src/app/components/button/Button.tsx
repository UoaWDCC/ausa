import React from 'react'
type ButtonProps = {
  theme:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'ghost'
    | 'warning'
    | 'success'
    | 'error'
    | 'primary-out'
  disabled?: boolean
  click?: void
  border: boolean
}

const themes: Record<
  ButtonProps['theme'],
  { bg: string; text: string; border?: string }
> = {
  primary: {
    bg: 'bg-primary/20',
    text: 'text-primary',
    border: 'border-primary',
  },
  secondary: {
    bg: 'bg-secondary',
    text: 'text-text-blue',
  },
  danger: {
    bg: 'bg-danger',
    text: 'text-ghost-dark',
    border: 'border-ghost-light',
  },
  ghost: {
    bg: 'bg-ghost',
    text: 'text-ghost-dark',
    border: 'border-ghost-light',
  },
  warning: { bg: '', text: 'text-warning', border: 'border-warning' },
  success: { bg: '', text: 'text-success', border: 'border-success' },
  error: { bg: '', text: 'text-error', border: 'border-error' },
  'primary-out': {
    bg: '',
    text: 'text-primary-dark',
    border: 'border-primary-dark',
  },
}

const Button = ({ theme, border }: ButtonProps) => {
  const styles = themes[theme]
  const className = React.useMemo(() => {
    return `font-geist hover:${styles.bg}/50 px-4 py-2 rounded-md font-semibold cursor-pointer ${styles.bg} ${styles.text} ${border && `${styles.border} border-2`}`
  }, [theme, border])
  return (
    <button className={className}>
      <p>Button</p>
    </button>
  )
}

const ButtonComponent = React.memo(Button)
export default ButtonComponent
