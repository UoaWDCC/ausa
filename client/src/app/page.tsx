// import { Button } from './components/button/Button'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './components/carousel/Carousel'
import Practice from './components/shapes/Parabola'

const Home = () => {
  return (
    <div>
      {/* <Button>Button</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button> */}

      {/* The parabola Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Practice />
      </div>

      <div className="relative z-10 px-4 pt-45">
        <Carousel>
          {/* Spaces next and previous button to top right */}
          <div className="mb-4 flex justify-end space-x-2">
            <CarouselPrevious className="static translate-x-0 translate-y-0 rotate-0" />
            <CarouselNext className="static translate-x-0 translate-y-0 rotate-0" />
          </div>

          {/* Carousel content with responsive item sizes */}
          <CarouselContent className="mb-10 -ml-2 md:-ml-4">
            <CarouselItem>
            slide
            </CarouselItem>
            <CarouselItem>
            slider
            </CarouselItem>
            <CarouselItem>
            wack
            </CarouselItem>
            <CarouselItem>
            lesgoooo
            </CarouselItem>
            <CarouselItem>
            crazyyy
            </CarouselItem>
            <CarouselItem>
            this is so cooked
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}
export default Home
