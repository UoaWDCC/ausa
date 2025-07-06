import { HomePageContentService } from '@/services/content-services/HomePageContentService'
import { HeroSection, HomeCarousel } from '@/components/page-specific/home'
import Practice from '@/components/shapes/Parabola'

const Home = () => {
  const heroData = HomePageContentService.getMockHeroData()
  const carouselData = HomePageContentService.getMockCarouselData()

  return (
    <div className="">
        <Practice />

    
    </div>
  )
}
export default Home
