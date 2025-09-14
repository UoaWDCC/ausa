import { HeroSection, HomeCarousel } from '@/components/page-specific/home'
import { HomePageContentService } from '@/services/content-services/HomePageContentService'

const Home = () => {
  const heroData = HomePageContentService.getMockHeroData()
  const carouselData = HomePageContentService.getMockCarouselData()

  return (
    <div className="">
      <HeroSection
        description={heroData.description}
        primaryButton={heroData.primaryButton}
        secondaryButton={heroData.secondaryButton}
        title={heroData.title}
      />
      <HomeCarousel items={carouselData} />
    </div>
  )
}
export default Home
