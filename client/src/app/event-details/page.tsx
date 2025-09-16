/** biome-ignore-all assist/source/useSortedAttributes: <explanation> */
'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useAuth } from '@/auth/AuthContext'
import AboutInputBox from '@/components/event-details/AboutInputBox'
import EventAboutSection from '@/components/event-details/EventAboutSection'
import EventHeroImage from '@/components/event-details/EventHeroImage'
import EventInfoCard from '@/components/event-details/EventInfoCard'
import InfoInputBox from '@/components/event-details/InfoInputBox'
import client from '@/services/fetch-client'

export default function Page() {
  const { user } = useAuth()

  // Get query params
  const searchParams = useSearchParams()
  const router = useRouter()
  const mode = searchParams.get('mode')
  const eventId = searchParams.get('id')

  const isAddMode = mode === 'add'
  const isEditMode = mode === 'edit'
  const isRegisterMode = mode === 'register'

  const [eventTitle, setEventTitle] = useState(
    isAddMode ? 'New Event' : searchParams.get('title') || 'Event',
  )
  const eventSubtitle = 'By AUSA'
  const [eventLogo, setEventLogo] = useState<string | undefined>(undefined)

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

  useEffect(() => {
    if (isEditMode && eventId) {
      fetchEventData(eventId)
    } else if (isRegisterMode && eventId) {
      fetchEventData(eventId)
    }
  }, [eventId, isEditMode, isRegisterMode])

  const fetchEventData = async (id: string) => {
    try {
      const { data, error } = await client.GET('/events/{eventId}', {
        params: { path: { eventId: id } },
      })

      if (error) {
        throw new Error('Failed to fetch event')
      }

      if (data) {
        console.log(data)

        setAboutTitle(data.title)
        setEventTitle(data.title)
        setAboutDescription(data.content.body)
        setDate(data.content.subtitle ?? '')
        setEndTime(data.endTime ?? '')
        setStartTime(data.startTime ?? '')
        setLocation(data.location ?? '')
        if (data.heroImage && data.heroImage.src) {
          setEventLogo(data.heroImage.src)
        }
        setAboutSubmitted(true)
        setInfoSubmitted(true)
      } else {
        alert('Failed to load event data')
      }
    } catch (error) {
      console.error('Error fetching event:', error)
      alert('Error loading event data')
    }
  }

  const handleSaveEvent = async () => {
    try {
      const eventPayload = {
        title: aboutTitle,
        content: {
          subtitle: date,
          body: aboutDescription,
          callToAction: {
            text: 'Register',
            href: '',
          },
        },
        heroImage: {
          src: '/static/icons/ausa.svg',
          alt: `${aboutTitle} event image`,
        },
      }

      let response
      if (isEditMode && eventId) {
        response = await client.PATCH('/events', {
          headers: { 'Content-Type': 'application/json' },
          body: { ...eventPayload, id: eventId },
        })
      } else {
        response = await client.POST('/events', {
          headers: { 'Content-Type': 'application/json' },
          body: eventPayload,
        })
      }

      if (response.data) {
        alert('Event created successfully!')
        router.push('/events')
      } else {
        alert('Error creating event.')
      }
    } catch (error) {
      console.error('Error saving event:', error)
      alert('Error saving event. Please try again.')
    }
  }

  const handleRegister = async () => {
    if (!user) {
      return
    }
    if (!eventId) {
      alert('No event ID found.')
      return
    }
    try {
      const response = await client.POST('/events/register', {
        body: { userId: user.uid, eventId },
        headers: { 'Content-Type': 'application/json' },
      })
      if (response.data) {
        alert('Successfully registered for event!')
        router.push('/events')
      } else {
        alert('Failed to register for event.')
      }
    } catch (error) {
      console.error('Error registering for event:', error)
      alert('Error registering for event. Please try again.')
    }
  }

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
      {/* Header with mode indication */}
      <div className="text-center py-4">
        <h1 className="text-3xl font-bold">
          {isAddMode ? 'Add New Event' : 'Event Details'}
        </h1>
      </div>

      {/* Hero Image */}
      <EventHeroImage
        imageUrl={eventLogo || ''}
        subtitle={eventSubtitle}
        title={eventTitle}
      />

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

      {/* Save Button - Only shown after both forms are submitted and not in register mode */}
      {aboutSubmitted && infoSubmitted && !isRegisterMode && (
        <div className="text-center py-6">
          <button
            type="button"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-base cursor-pointer"
            onClick={handleSaveEvent}
          >
            Create Event
          </button>
        </div>
      )}

      {/* Register Button - Only in register mode and after both forms are submitted */}
      {aboutSubmitted && infoSubmitted && isRegisterMode && (
        <div className="text-center py-6">
          <button
            type="button"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-base cursor-pointer"
            onClick={handleRegister}
          >
            Register for Event
          </button>
        </div>
      )}
    </main>
  )
}
