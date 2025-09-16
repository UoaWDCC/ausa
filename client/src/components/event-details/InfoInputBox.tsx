/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
'use client'

import { useState } from 'react'

type InfoInputBoxProps = {
  date: string
  location: string
  startTime: string
  endTime: string
  setDate: (val: string) => void
  setLocation: (val: string) => void
  setStartTime: (val: string) => void
  setEndTime: (val: string) => void
  onSubmit: () => void
}

export default function InfoInputBox({
  date,
  location,
  startTime,
  endTime,
  setDate,
  setLocation,
  setStartTime,
  setEndTime,
  onSubmit,
}: InfoInputBoxProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <aside
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#2b2d31',
        padding: '1.2rem',
        borderRadius: '12px',
        minHeight: '220px',
        boxShadow: hovered
          ? '0 8px 24px rgba(0,0,0,0.4)'
          : '0 4px 12px rgba(0,0,0,0.2)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        transform: hovered ? 'scale(1.05)' : 'scale(1)',
        cursor: 'pointer',
      }}
    >
      <h2 style={{ marginBottom: '1rem' }}>Enter Event Info</h2>
      <input
        onChange={(e) => setDate(e.target.value)}
        placeholder="Enter date"
        style={{
          width: '100%',
          padding: '0.7rem',
          marginBottom: '0.8rem',
          borderRadius: '8px',
          border: '1px solid #555',
          background: 'transparent',
          color: 'white',
        }}
        type="text"
        value={date}
      />
      <input
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location"
        style={{
          width: '100%',
          padding: '0.7rem',
          marginBottom: '0.8rem',
          borderRadius: '8px',
          border: '1px solid #555',
          background: 'transparent',
          color: 'white',
        }}
        type="text"
        value={location}
      />
      <input
        onChange={(e) => setStartTime(e.target.value)}
        placeholder="Start time"
        style={{
          width: '100%',
          padding: '0.7rem',
          marginBottom: '0.8rem',
          borderRadius: '8px',
          border: '1px solid #555',
          background: 'transparent',
          color: 'white',
        }}
        type="text"
        value={startTime}
      />
      <input
        onChange={(e) => setEndTime(e.target.value)}
        placeholder="End time"
        style={{
          width: '100%',
          padding: '0.7rem',
          marginBottom: '0.8rem',
          borderRadius: '8px',
          border: '1px solid #555',
          background: 'transparent',
          color: 'white',
        }}
        type="text"
        value={endTime}
      />
      <button
        onClick={onSubmit}
        style={{
          marginTop: '1rem',
          padding: '1rem 2rem',
          background: hovered ? '#4752c4' : '#5865f2',
          border: 'none',
          borderRadius: '8px',
          color: 'white',
          fontWeight: 'bold',
          cursor: 'pointer',
          fontSize: '1rem',
          boxShadow: hovered ? '0 4px 16px rgba(88,101,242,0.3)' : 'none',
          transition: 'background 0.2s, box-shadow 0.2s',
        }}
      >
        Add
      </button>
    </aside>
  )
}
