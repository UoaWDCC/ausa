'use client'

import { useEffect, useState } from 'react'
import { EventCard } from '@/components/event-card/EventCard'
import client from '@/services/fetch-client'
import type { Event } from '@/types/types'
import { Button } from '@/components/ui/button'

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const pageSize = 6

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await client.GET('/events')

        if (response.error) {
          throw new Error('Failed to fetch events from API')
        }

        if (response.data) {
          setEvents(response.data as unknown as Event[])
        } else {
          setEvents([])
        }
      } catch (err) {
        setError('Failed to load events. Please try again later.')
        console.error('Error fetching events:', err)
        setEvents([])
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const handleRetry = () => {
    setError(null)
    const fetchEvents = async () => {
      try {
        setLoading(true)
        const response = await client.GET('/events')

        if (response.error) {
          throw new Error('Failed to fetch events from API')
        }

        if (response.data) {
          setEvents(response.data as unknown as Event[])
        } else {
          setEvents([])
        }
      } catch (err) {
        setError('Failed to load events. Please try again later.')
        console.error('Error fetching events:', err)
        setEvents([])
      } finally {
        setLoading(false)
      }
    }
    fetchEvents()
  }

  const totalPages = Math.max(1, Math.ceil(events.length / pageSize))
  const start = (page - 1) * pageSize
  const pagedEvents = events.slice(start, start + pageSize)

  useEffect(() => {
    if (events.length > 0) {
    setPage((p) => Math.min(p, totalPages))
    }
  }, [events, totalPages])

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <div className="mb-12 flex flex-col gap-4 justify-center items-center">
        <h1 className="mt-16 mb-4 text-6xl font-md text-white text-center">
          Event Gallery
        </h1>
        <p className="w-[90%] text-white text-center">
          We provide a variety of events throughout the year. Explore our
          upcoming and past events. Stay tuned for more exciting activities! We
          provide a variety of events throughout the year. Explore our upcoming
          and past events. Stay tuned for more exciting activities!
        </p>
      </div>

      {loading ? (
        <div className="flex min-h-[300px] items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-t-4 border-white border-t-purple-600" />
        </div>
      ) : error ? (
        <div className="rounded-lg bg-red-100 p-6 text-center">
          <p className="text-red-700">{error}</p>
          <button
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
            disabled={loading}
            onClick={handleRetry}
          >
            {loading ? 'Retrying...' : 'Retry'}
          </button>
        </div>
      ) : events.length === 0 ? (
        <div className="rounded-lg bg-white/10 backdrop-blur-sm p-8 text-center">
          <p className="text-xl text-white">
            No events currently scheduled. Check back later!
          </p>
        </div>
      ) : (
        <div>
          <div className="mb-4 flex items-center justify-between text-white">
            <p>
              Showing {start + 1} – {Math.min(page * pageSize, events.length)} of {events.length}
            </p>
            <div className="flex items-center gap-2">
              <Button
                className="rounded px-3 py-1 bg-white/10 hover:bg-white/20 disabled:opacity-40"
                disabled={page === 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
              >
                ‹ Prev
              </Button>
                {page} / {totalPages}
              <Button
                className="rounded px-3 py-1 bg-white/10 hover:bg-white/20 disabled:opacity-40"
                disabled={page === totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              >
                Next ›
              </Button>
            </div>
          </div>

        <div className="grid gap-9 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {pagedEvents.map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
        </div>
      </div>
      )}
    </div>
  )
}
