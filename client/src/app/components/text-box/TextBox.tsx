import React, { ReactNode } from 'react'

type TextBoxProps = {
  text: string
  theme: 'primary' | 'secondary' | 'ghost' | 'warning' | 'error'
  border?: boolean
  children?: ReactNode
}

const themes: Record<
  TextBoxProps['theme'],
  { bg: string; text: string; border: string }
> = {
  primary: {
    bg: 'bg-primary-dark',
    text: 'text-white',
    border: 'border-primary',
  },
  secondary: {
    bg: 'bg-background',
    text: 'text-text-blue',
    border: 'border-secondary',
  },
  ghost: { bg: '', text: 'text-ghost-dark', border: 'border-ghost-light' },
  warning: { bg: '', text: 'text-warning', border: 'border-warning' },
  error: { bg: '', text: 'text-error', border: 'border-error' },
}

const TextBox = ({ text, theme, border, children }: TextBoxProps) => {
  const styles = themes[theme]
  const className = React.useMemo(() => {
    return `${styles.bg} ${styles.text} ${border && `${styles.border} border-3`} px-4 py-2 rounded-md flex flex-col justify-center w-[10rem] md:w-[20rem]`
  }, [theme, border])
  return (
    <div className={className}>
      <p>{text}</p>
      {children}
    </div>
  )
}

const TextBoxComponent = React.memo(TextBox)
export default TextBoxComponent
