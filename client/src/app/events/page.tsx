'use client'

import { useState } from 'react'
import { EventCard } from '@/components/event-card/EventCard'
import type { Event } from '@/types/types'

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Orientation Week',
    heroImage: {
      src: '/static/icons/ausa.svg',
      alt: 'Students at orientation'
    },
    content: {
      subtitle: 'By AUSA',
      body: 'Join us for a week of activities, club showcases, and social events to kick off the new semester. Meet fellow students and discover everything AUSA has to offer.',
      callToAction: {
        text: 'View Details',
        href: '/event-details?id=1&title=Orientation%20Week'
      }
    }
  },
  {
    id: '2',
    title: 'End of Semester Party',
    heroImage: {
      src: '/static/icons/ausa.svg',
      alt: 'End of semester celebration'
    },
    content: {
      subtitle: 'By AUSA',
      body: 'Youve made it through another semester! Join us at Shadows Bar for music, games, and a chance to unwind before the break.',
      callToAction: {
        text: 'View Details',
        href: '/event-details?id=2&title=End%20of%20Semester%20Party'
      }
    }
  },
  {
    id: '3',
    title: 'Career Fair',
    heroImage: {
      src: '/static/icons/ausa.svg',
      alt: 'Career fair booth setup'
    },
    content: {
      subtitle: 'By AUSA',
      body: 'Meet representatives from top companies across multiple industries. Bring your CV and your questions - this is your opportunity to explore internships and graduate roles.',
      callToAction: {
        text: 'View Details',
        href: '/event-details?id=3&title=Career%20Fair'
      }
    }
  },
  {
    id: '4',
    title: 'Graduation Ceremony',
    heroImage: {
      src: '/static/icons/ausa.svg',
      alt: 'Graduation Ceremony'
    },
    content: {
      subtitle: 'By AUSA',
      body: 'Show everyone your best self and graduate roles. This is your chance to shine and celebrate your achievements.',
      callToAction: {
        text: 'View Details',
        href: '/event-details?id=4&title=Graduation%20Ceremony'
      }
    }
  }
];

export default function EventsPage() {
  const [events] = useState<Event[]>(mockEvents);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mt-16 mb-4 text-4xl font-bold text-white">Upcoming Events</h1>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
    </div>
  )
}
