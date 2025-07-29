'use client'
import React from 'react'
import EventsCard from '../EventsCard/EventsCard'

interface EventsListProps {
  events: Array<{
    id: string
    title: string
    date: string
    location: string
  }>
}

const EventsList: React.FC<EventsListProps> = React.memo(({ events }) => {
  return (
    <div className="w-full max-w-xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Events List</h2>
      {events.map((event) => (
        <EventsCard event={event} key={event.id} />
      ))}
    </div>
  )
})

EventsList.displayName = 'EventsList'

export default EventsList
