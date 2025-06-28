import { HomePageContentService } from '@/services/content-services/HomePageContentService'
import { HeroSection, HomeCarousel } from '@/components/page-specific/home'

const Home = () => {
  const heroData = HomePageContentService.getMockHeroData()
  const carouselData = HomePageContentService.getMockCarouselData()

  return (
    <div className="">
      <HeroSection
        title={heroData.title}
        description={heroData.description}
        primaryButton={heroData.primaryButton}
        secondaryButton={heroData.secondaryButton}
      />
      <HomeCarousel items={carouselData} />
    </div>
  )
}
export default Home
