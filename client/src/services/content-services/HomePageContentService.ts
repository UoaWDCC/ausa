interface CarouselItemData {
  id: string
  title: string
  description: string
  heroImage: {
    src: string
    alt: string
  }
  content: {
    subtitle?: string
    body: string
    callToAction?: {
      text: string
      href: string
    }
  }
}

interface HeroSectionData {
  title: string
  description: string
  primaryButton: {
    text: string
    href: string
  }
  secondaryButton: {
    text: string
    href: string
  }
}

class HomePageContentService {
  static getMockHeroData(): HeroSectionData {
    return {
      title: 'Auckland University Student Association',
      description:
        'Your voice, your community, your future. AUSA represents and advocates for all University of Auckland students, providing services, support, and opportunities to enhance your university experience.',
      primaryButton: {
        text: 'Get Involved',
        href: '/get-involved',
      },
      secondaryButton: {
        text: 'Learn More',
        href: '/about',
      },
    }
  }

  static getMockCarouselData(): CarouselItemData[] {
    return [
      {
        id: '1',
        title: 'Tropical Paradise',
        description: 'Discover the beauty of tropical destinations',
        heroImage: {
          src: 'https://picsum.photos/400/200?random=1',
          alt: 'Tropical beach with palm trees',
        },
        content: {
          subtitle: 'Adventure Awaits',
          body: 'Experience the perfect blend of relaxation and adventure in our tropical paradise destinations.',
          callToAction: {
            text: 'Explore Now',
            href: '/destinations/tropical',
          },
        },
      },
      {
        id: '2',
        title: 'Mountain Adventures',
        description: 'Conquer peaks and explore wilderness',
        heroImage: {
          src: 'https://picsum.photos/400/200?random=2',
          alt: 'Mountain landscape with snow peaks',
        },
        content: {
          subtitle: 'Reach New Heights',
          body: 'Challenge yourself with breathtaking mountain adventures and discover the beauty of alpine landscapes.',
          callToAction: {
            text: 'Start Climbing',
            href: '/destinations/mountains',
          },
        },
      },
      {
        id: '3',
        title: 'City Escapes',
        description: 'Urban adventures and cultural experiences',
        heroImage: {
          src: 'https://picsum.photos/400/200?random=3',
          alt: 'Modern city skyline at sunset',
        },
        content: {
          subtitle: 'Urban Explorer',
          body: 'Immerse yourself in vibrant city life, from world-class dining to cultural landmarks.',
          callToAction: {
            text: 'Discover Cities',
            href: '/destinations/cities',
          },
        },
      },
      {
        id: '4',
        title: 'Desert Wonders',
        description: 'Mystical landscapes and ancient cultures',
        heroImage: {
          src: 'https://picsum.photos/400/200?random=4',
          alt: 'Desert dunes under starry sky',
        },
        content: {
          subtitle: 'Desert Magic',
          body: 'Journey through enchanting desert landscapes and discover ancient traditions and cultures.',
          callToAction: {
            text: 'Desert Tours',
            href: '/destinations/desert',
          },
        },
      },
      {
        id: '5',
        title: 'Ocean Adventures',
        description: 'Dive into underwater worlds',
        heroImage: {
          src: 'https://picsum.photos/400/200?random=5',
          alt: 'Underwater coral reef scene',
        },
        content: {
          subtitle: 'Dive Deep',
          body: 'Explore the mysteries of the ocean depths and witness incredible marine life.',
          callToAction: {
            text: 'Book Dive',
            href: '/activities/diving',
          },
        },
      },
      {
        id: '6',
        title: 'Forest Retreats',
        description: 'Connect with nature in pristine wilderness',
        heroImage: {
          src: 'https://picsum.photos/400/200?random=6',
          alt: 'Dense forest with sunlight filtering through trees',
        },
        content: {
          subtitle: 'Natural Sanctuary',
          body: 'Find peace and rejuvenation in our carefully selected forest retreat destinations.',
          callToAction: {
            text: 'Forest Getaway',
            href: '/destinations/forest',
          },
        },
      },
    ]
  }
}

export { HomePageContentService }
