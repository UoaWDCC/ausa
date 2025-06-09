'use client'
import React from 'react'

type CardProps = {
  /** Optional heading text */
  title?: string
  /** Card content */
  children: React.ReactNode
  /** Additional Tailwind (or CSS) classes */
  className?: string
}

const Card: React.FC<CardProps> = ({ title, children, className }) => {
  return (
    <div
      className={`rounded-md border-gray-200 p-4 shadow-sm ${className ?? ''} `}
    >
      {title && <h2 className="mb-2 text-lg font-semibold">{title}</h2>}
      <div>{children}</div>
    </div>
  )
}

export default Card
