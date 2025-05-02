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
    | 'secondary-out'
  disabled?: boolean
  click: void
}

const themes: Record<
  ButtonProps['theme'],
  { bg: string; text: string; border?: string }
> = {
  primary: {
    bg: 'bg-primary',
    text: 'text-white',
  },
  secondary: {
    bg: 'bg-background',
    text: 'text-text-blue',
  },
  ghost: { bg: '', text: 'text-ghost-dark', border: 'border-ghost-light' },
  warning: { bg: '', text: 'text-warning', border: 'border-warning' },
  success: { bg: '', text: 'text-success', border: 'border-success' },
  error: { bg: '', text: 'text-error', border: 'border-error' },
}

const Button = ({ theme, disabled, click }: ButtonProps) => {
  return (
    <button>
      <p>Button</p>
    </button>
  )
}

export default Button
