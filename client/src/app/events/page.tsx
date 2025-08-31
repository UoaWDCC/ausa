'use client'

import { useEffect, useState } from 'react'
import { EventCard } from '@/components/event-card/EventCard'
import type { Event } from '@/types/types'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true)
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
        console.log('Fetching from:', `${apiUrl}/events`)
        const response = await fetch(`${apiUrl}/events`)

        console.log('Response status:', response.status)
        console.log('Response ok:', response.ok)

        if (!response.ok) {
          // Log the actual error response
          const errorText = await response.text()
          console.log('Error response:', errorText)
          throw new Error(`Failed to fetch events: ${response.status} - ${errorText}`)
        }

        const data = await response.json()
        console.log('Received data:', data)
        setEvents(data || [])
      } catch (err) {
        setError('Failed to load events. Please try again later.')
        console.error('Error fetching events:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
          <h1 className="mt-16 mb-4 text-4xl font-bold text-white">Upcoming Events</h1>
          <Link href="/event-details?mode=add">
            <Button className="mt-4 bg-green-600 hover:bg-green-700">
              Add Event
            </Button>
          </Link>
      </div>

      {loading ? (
        <div className="flex min-h-[300px] items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-t-4 border-white border-t-purple-600"></div>
        </div>
      ) : error ? (
        <div className="rounded-lg bg-red-100 p-6 text-center">
          <p className="text-red-700">{error}</p>
        </div>
      ) : events.length === 0 ? (
        <div className="rounded-lg bg-white/10 backdrop-blur-sm p-8 text-center">
          <p className="text-xl text-white">No events currently scheduled. Check back later!</p>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
        </div>
      )}
    </div>
  )
}
