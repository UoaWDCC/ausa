'use client'

import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import AboutInputBox from '@/components/event-details/AboutInputBox'
import EventAboutSection from '@/components/event-details/EventAboutSection'
import EventHeroImage from '@/components/event-details/EventHeroImage'
import EventInfoCard from '@/components/event-details/EventInfoCard'
import InfoInputBox from '@/components/event-details/InfoInputBox'

export default function Page() {
  // Get query params
  const searchParams = useSearchParams()
  const eventTitle = searchParams.get('title') || 'Event'
  const eventSubtitle = 'By AUSA'

  // About state
  const [aboutTitle, setAboutTitle] = useState('')
  const [aboutDescription, setAboutDescription] = useState('')
  const [aboutSubmitted, setAboutSubmitted] = useState(false)

  // Info state
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [infoSubmitted, setInfoSubmitted] = useState(false)

  return (
    <main
      style={{
        background: '#313338',
        marginTop: '80px',
        minHeight: '120vh',
        color: 'white',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Hero Image */}
      <EventHeroImage imageUrl="" subtitle={eventSubtitle} title={eventTitle} />

      {/* Main content layout */}
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          padding: '2rem',
          flexWrap: 'wrap',
          alignItems: 'stretch',
        }}
      >
        {/* About section OR form */}
        <div style={{ flex: '2 1 600px' }}>
          {!aboutSubmitted ? (
            <AboutInputBox
              description={aboutDescription}
              onSubmit={() => setAboutSubmitted(true)}
              setDescription={setAboutDescription}
              setTitle={setAboutTitle}
              title={aboutTitle}
            />
          ) : (
            <EventAboutSection
              description={aboutDescription}
              title={aboutTitle}
            />
          )}
        </div>

        {/* Info section OR form */}
        <div style={{ flex: '1 1 250px' }}>
          {!infoSubmitted ? (
            <InfoInputBox
              date={date}
              endTime={endTime}
              location={location}
              onSubmit={() => setInfoSubmitted(true)}
              setDate={setDate}
              setEndTime={setEndTime}
              setLocation={setLocation}
              setStartTime={setStartTime}
              startTime={startTime}
            />
          ) : (
            <EventInfoCard
              date={date}
              endTime={endTime}
              location={location}
              startTime={startTime}
            />
          )}
        </div>
      </div>
    </main>
  )
}
