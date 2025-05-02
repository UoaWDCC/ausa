import React from 'react'

type TextBoxProps = {
  text: string
  theme: 'primary' | 'secondary' | 'ghost' | 'warning' | 'error'
  border?: boolean
}

const themes: Record<TextBoxProps['theme'], { bg: string; text: string }> = {
  primary: { bg: 'bg-primary-dark', text: 'text-white' },
  secondary: { bg: 'bg-secondary', text: 'text-text-blue' },
  ghost: { bg: '', text: 'text-ghost-dark' },
  warning: { bg: '', text: 'text-warning' },
  error: { bg: '', text: 'text-error' },
}

const TextBox = ({ text, theme, border }: TextBoxProps) => {
  const styles = themes[theme]
  const className = React.useMemo(() => {
    return `${styles.bg} ${styles.text} px-4 py-2 rounded-md flex flex-col justify-center w-[10rem] md:w-[20rem]`
  }, [theme, border])
  return (
    <div className={className}>
      <p>{text}</p>
    </div>
  )
}

const TextBoxComponent = React.memo(TextBox)
export default TextBoxComponent
