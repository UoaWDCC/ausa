'use client'

import { useEffect, useState } from 'react'
import { EventCard } from '@/components/event-card/EventCard'
import type { Event } from '@/types/types'

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true)
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'
        const response = await fetch(`${apiUrl}/events`)

        if (!response.ok) {
          throw new Error('Failed to fetch events')
        }

        const data = await response.json()
        setEvents(data.data || [])
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

// const mockEvents: Event[] = [
//   {
//     id: '1',
//     title: 'Orientation Week',
//     heroImage: {
//       src: '/static/icons/ausa.svg',
//       alt: 'Students at orientation'
//     },
//     content: {
//       subtitle: 'March 1st',
//       body: 'Join us for a week of activities, club showcases, and social events to kick off the new semester. Meet fellow students and discover everything AUSA has to offer.',
//       callToAction: {
//         text: 'Register',
//         href: ''
//       }
//     }
//   },
//   {
//     id: '2',
//     title: 'End of Semester Party',
//     heroImage: {
//       src: '/static/icons/ausa.svg',
//       alt: 'End of semester celebration'
//     },
//     content: {
//       subtitle: 'June 24th',
//       body: 'Youve made it through another semester! Join us at Shadows Bar for music, games, and a chance to unwind before the break.',
//       callToAction: {
//         text: 'Register',
//         href: ''
//       }
//     }
//   },
//   {
//     id: '3',
//     title: 'Career Fair',
//     heroImage: {
//       src: '/static/icons/ausa.svg',
//       alt: 'Career fair booth setup'
//     },
//     content: {
//       subtitle: 'April 15th',
//       body: 'Meet representatives from top companies across multiple industries. Bring your CV and your questions - this is your opportunity to explore internships and graduate roles.',
//       callToAction: {
//         text: 'Register',
//         href: ''
//       }
//     }
//   },
//   {
//     id: '4',
//     title: 'Graduation Ceremony',
//     heroImage: {
//       src: '/static/icons/ausa.svg',
//       alt: 'Graduation Ceremony'
//     },
//     content: {
//       subtitle: 'November 15th',
//       body: 'Show everyone your best self and graduate roles. This is your chance to shine and celebrate your achievements.',
//       callToAction: {
//         text: 'Register',
//         href: ''
//       }
//     }
//   }
// ];

// export default function EventsPage() {
//   const [events] = useState<Event[]>(mockEvents);

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <div className="mb-12 text-center">
//         <h1 className="mt-16 mb-4 text-4xl font-bold text-white">Upcoming Events</h1>
//       </div>

//       <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {events.map((event) => (
//           <EventCard event={event} key={event.id} />
//         ))}
//       </div>
//     </div>
//   )
// }
