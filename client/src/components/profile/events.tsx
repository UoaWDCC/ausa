import { Button } from '@headlessui/react'

type Event = {
  name: string
  date: string
  time: string
  location: string
  organization: string
}

const pastEvents: Event[] = [
  {
    name: 'Engineering BBQ Mixer',
    date: 'September 10, 2025',
    time: '12:00 PM - 3:00 PM',
    location: 'University Quad',
    organization: 'Engineering Students Association',
  },
  {
    name: 'AI in Healthcare Seminar',
    date: 'September 15, 2025',
    time: '4:00 PM - 6:00 PM',
    location: 'Room 204, Science Centre',
    organization: 'AI Research Club',
  },
]

const upcomingEvents: Event[] = [
  {
    name: 'Engineering BBQ Mixer',
    date: 'September 10, 2025',
    time: '12:00 PM - 3:00 PM',
    location: 'University Quad',
    organization: 'Engineering Students Association',
  },
  {
    name: 'AI in Healthcare Seminar',
    date: 'September 15, 2025',
    time: '4:00 PM - 6:00 PM',
    location: 'Room 204, Science Centre',
    organization: 'AI Research Club',
  },
  {
    name: 'Cultural Night Festival',
    date: 'September 22, 2025',
    time: '6:00 PM - 10:00 PM',
    location: 'Main Auditorium',
    organization: 'International Students Club',
  },
]

const ProfileEvents = () => {
  return (
    <div className="space-y-6">
      <div className="border bg-white shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Your Upcoming Events
        </h2>
        <div className="space-y-4">
          {upcomingEvents.map((event, index) => (
            <div
              className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              key={index}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {event.name}
              </h3>
              <p className="text-sm text-gray-600">
                <strong>Date:</strong> {event.date}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Time:</strong> {event.time}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Location:</strong> {event.location}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Hosted by:</strong> {event.organization}
              </p>
              <Button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
                Sign Up
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="border bg-white shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Past Events</h2>
        <div className="space-y-4">
          {pastEvents.map((event, index) => (
            <div
              className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              key={index}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {event.name}
              </h3>
              <p className="text-sm text-gray-600">
                <strong>Date:</strong> {event.date}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Time:</strong> {event.time}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Location:</strong> {event.location}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Hosted by:</strong> {event.organization}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfileEvents
