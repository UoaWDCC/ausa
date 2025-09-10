import Image from 'next/image'
import Link from 'next/link'
import type { Event } from '@/types/types'
import { useAuth } from '@/auth/AuthContext'
import { useRouter } from 'next/navigation'

interface EventCardProps {
  event: Event
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const { user } = useAuth()
  const router = useRouter()

  const handleRegisterClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    if (user) {
      router.push('/event-details')
    } else {
      router.push('/login')
    }
  }

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
          <p className="mb-3 text-sm font-medium text-purple-600">
            {event.content.subtitle}
          </p>
        )}
        <p className="mb-4 flex-1 text-gray-600">
          {event.content.body.substring(0, 100)}...
        </p>
        {event.content.callToAction && (
          <a
            className="mt-auto inline-flex items-center justify-center rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700"
            href={event.content.callToAction.href}
            onClick={handleRegisterClick}
          >
            {event.content.callToAction.text}
          </a>
        )}
      </div>
    </div>
  )
}
