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
    <div className="">
      {/* The parabola Background */}
      <div className="translate-y-[-0px]">
        <div className="absolute inset-0 bottom-0 z-0">
          <Practice />
        </div>

        <div className="relative z-10 px-4 pt-100">
          <Carousel>
            {/* Spaces next and previous button to top right */}
            <div className="mb-4 flex justify-end space-x-2">
              <CarouselPrevious className="static translate-x-0 translate-y-0 rotate-0" />
              <CarouselNext className="static translate-x-0 translate-y-0 rotate-0" />
            </div>

            {/* Carousel content with responsive item sizes */}
            <CarouselContent>
              <CarouselItem>slide #1</CarouselItem>
              <CarouselItem>slide #2</CarouselItem>
              <CarouselItem>slide #3</CarouselItem>
              <CarouselItem>slide #4</CarouselItem>
              <CarouselItem>slide #5</CarouselItem>
              <CarouselItem>slide #6</CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  )
}
export default Home
