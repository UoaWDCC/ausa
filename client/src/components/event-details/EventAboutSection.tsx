'use client'

import React, { useState } from 'react'

type EventAboutSectionProps = {
  title: string
  description: string
}

export default function EventAboutSection({
  title,
  description,
}: EventAboutSectionProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <section
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#1e1f22',
        color: 'white',
        padding: '2rem',
        borderRadius: '12px',
        marginTop: '2rem',
        lineHeight: '1.6',
        transition: 'transform 0.3s, box-shadow 0.3s',
        transform: hovered ? 'scale(1.05)' : 'scale(1)',
        boxShadow: hovered
          ? '0 8px 24px rgba(0,0,0,0.4)'
          : '0 4px 12px rgba(0,0,0,0.2)',
        cursor: 'pointer',
        wordBreak: 'break-word',
        overflowWrap: 'break-word',
        whiteSpace: 'normal',
      }}
    >
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h2>
      <p style={{ opacity: 0.9 }}>{description}</p>
    </section>
  )
}
