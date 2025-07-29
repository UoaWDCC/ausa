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
    <div className="border-b rounded outline outline-1 outline-gray-300 focus:outline-blue-500 p-2">
      <h3 className="text-lg font-semibold">{event.title}</h3>
      <p className="text-gray-600">{event.date}</p>
      <p className="text-gray-600">{event.location}</p>
    </div>
  )
})

EventsCard.displayName = 'EventsCard'

export default EventsCard
