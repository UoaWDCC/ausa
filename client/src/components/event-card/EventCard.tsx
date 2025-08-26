import Image from 'next/image'
import Link from 'next/link'
import type { Event } from '@/types/types'

interface EventCardProps {
  event: Event
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl">
      {event.heroImage && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            alt={event.heroImage.alt}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={event.heroImage.src}
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 text-xl font-bold text-gray-900">{event.title}</h3>
        {event.content.subtitle && (
          <p className="mb-3 text-sm font-medium text-purple-600">{event.content.subtitle}</p>
        )}
        <p className="mb-4 flex-1 text-gray-600">
          {event.content.body ? event.content.body.substring(0, 100) : 'No description available'}...
        </p>
        {event.content.callToAction && (
          <Link className="mt-auto inline-flex items-center justify-center rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700" href={event.content.callToAction.href}>
            {event.content.callToAction.text}
          </Link>
        )}
      </div>
    </div>
  )
}
