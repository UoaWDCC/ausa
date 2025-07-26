import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/carousel/Carousel'
import type { ExternalResource } from '@/types/types'

interface ResourcesCarouselProps {
  resources: ExternalResource[]
}
export const ResourcesCarousel = memo(
  async ({ resources }: ResourcesCarouselProps) => {
    return (
      <div className="relative z-10 mt-4 px-4 text-white">
        <Carousel>
          <div className="mb-4 flex justify-end space-x-2">
            <CarouselPrevious className="static translate-x-0 translate-y-0 rotate-0" />
            <CarouselNext className="static translate-x-0 translate-y-0 rotate-0" />
          </div>
          <CarouselContent>
            {resources.map((resource) => (
              <CarouselItem
                key={resource.id}
                className="md:basis-1/2 lg:basis-1/3 hover:scale-105"
              >
                <Link href="#" className="">
                  <Image
                    width={500}
                    height={200}
                    src={'/static/backgrounds/uoa-background.jpg'}
                    alt={''}
                    className="h-48 w-full object-cover"
                  />
                  <h2 className="text-lg font-bold text-center">
                    {resource.title}
                  </h2>
                  <p>{resource.description}</p>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    )
  },
)
