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

        <div className="relative z-10 px-4 pt-160">
      
        </div>
      </div>
    </div>
  )
  return <div className="m-4 flex gap-2"></div>
}
export default Home
