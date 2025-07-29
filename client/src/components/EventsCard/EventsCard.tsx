'use client'
import React from 'react'

interface EventsCardProps {
  event: {
    id: string
    title: string
    date: string
    location: string
  }
}

const EventsCard: React.FC<EventsCardProps> = React.memo(({ event }) => {
  return (
    <div className="border-b border-gray-300 py-2">
      <h3 className="text-lg font-semibold">{event.title}</h3>
      <p className="text-gray-600">{event.date}</p>
      <p className="text-gray-600">{event.location}</p>
    </div>
  )
})

EventsCard.displayName = 'EventsCard'

export default EventsCard
