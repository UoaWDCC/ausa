import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/carousel/Carousel'
import Image from 'next/image'

/**
 * Data structure for a single carousel item
 */
interface CarouselItemData {
  /** Unique identifier for the carousel item */
  id: string
  /** The main title of the carousel item */
  title: string
  /** Brief description of the carousel item */
  description: string
  /** Hero image configuration */
  heroImage: {
    /** Image source URL */
    src: string
    /** Alt text for accessibility */
    alt: string
  }
  /** Content details for the carousel item */
  content: {
    /** Optional subtitle */
    subtitle?: string
    /** Main body text */
    body: string
    /** Optional call-to-action button */
    callToAction?: {
      /** Button text */
      text: string
      /** Button link URL */
      href: string
    }
  }
}

/**
 * Props for the HomeCarousel component
 */
interface HomeCarouselProps {
  /** Array of carousel items to display */
  items: CarouselItemData[]
}

/**
 * HomeCarousel component for the home page
 *
 * Displays a horizontal carousel of featured content items with navigation controls.
 * Each item includes a hero image, title, description, and optional call-to-action button.
 *
 * @param props - The component props
 * @returns JSX element representing the carousel section
 *
 * @example
 * ```tsx
 * const carouselData = [
 *   {
 *     id: '1',
 *     title: 'Student Services',
 *     description: 'Support and resources for students',
 *     heroImage: {
 *       src: '/images/services.jpg',
 *       alt: 'Student services'
 *     },
 *     content: {
 *       subtitle: 'Get Help',
 *       body: 'Access academic support, counseling, and more.',
 *       callToAction: {
 *         text: 'Learn More',
 *         href: '/services'
 *       }
 *     }
 *   }
 * ]
 *
 * <HomeCarousel items={carouselData} />
 * ```
 */
export const HomeCarousel: React.FC<HomeCarouselProps> = ({
  items,
}: HomeCarouselProps) => {
  return (
    <div className="relative z-10 mt-4 px-4">
      <Carousel>
        <div className="mb-4 flex justify-end space-x-2">
          <CarouselPrevious className="static translate-x-0 translate-y-0 rotate-0" />
          <CarouselNext className="static translate-x-0 translate-y-0 rotate-0" />
        </div>

        <CarouselContent>
          {items.map((item) => (
            <CarouselItem
              key={item.id}
              heroImage={
                <Image
                  width={400}
                  height={200}
                  src={item.heroImage.src}
                  alt={item.heroImage.alt}
                  className="h-48 w-full object-cover"
                />
              }
            >
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                {item.content.subtitle && (
                  <h4 className="text-lg font-semibold text-purple-700">
                    {item.content.subtitle}
                  </h4>
                )}
                <p className="text-gray-700">{item.content.body}</p>
                {item.content.callToAction && (
                  <Button asChild>
                    <a href={item.content.callToAction.href}>
                      {item.content.callToAction.text}
                    </a>
                  </Button>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default HomeCarousel
