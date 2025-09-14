import Image from 'next/image'
import { TiledAusaBackground } from '@/components/ausa/TiledAusaBackground'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

/**
 * Props for the HeroSection component
 */
interface HeroSectionProps {
  /** The main title displayed in the hero section */
  title: string
  /** The description text below the title */
  description: string
  /** Configuration for the primary call-to-action button */
  primaryButton: {
    /** The text displayed on the button */
    text: string
    /** The URL the button links to */
    href: string
  }
  /** Configuration for the secondary call-to-action button */
  secondaryButton: {
    /** The text displayed on the button */
    text: string
    /** The URL the button links to */
    href: string
  }
}

/**
 * HeroSection component for the home page
 *
 * Displays a prominent hero section with AUSA branding, title, description,
 * and call-to-action buttons. Features a tiled logo background and glassmorphism styling.
 *
 * @param props - The component props
 * @returns JSX element representing the hero section
 *
 * @example
 * ```tsx
 * <HeroSection
 *   title="Auckland University Student Association"
 *   description="Your voice, your community, your future..."
 *   primaryButton={{
 *     text: "Get Involved",
 *     href: "/get-involved"
 *   }}
 *   secondaryButton={{
 *     text: "Learn More",
 *     href: "/about"
 *   }}
 * />
 * ```
 */
export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  primaryButton,
  secondaryButton,
}: HeroSectionProps) => {
  return (
    <header className="relative z-10 overflow-hidden py-40 text-center text-white">
      <div className="relative z-10 mx-auto max-w-4xl sm:px-4">
        <div className="overflow-hidden rounded-md border border-white/20 bg-black/40 py-8 px-4 sm:px-8 shadow-2xl backdrop-blur-sm">
          {/* Featured AUSA logo */}
          <div className="mb-8 flex justify-center">
            <Image
              alt="AUSA Logo"
              className="h-20 w-auto drop-shadow-lg sm:h-24 lg:h-28"
              height={300}
              src="/static/icons/logo.svg"
              width={400}
            />
          </div>

          <TiledAusaBackground />
          <Separator />

          <h1 className="mt-4 mb-6 text-2xl leading-tight font-bold drop-shadow-lg sm:text-3xl lg:text-4xl">
            {title}
          </h1>

          <p className="mb-8 text-lg leading-relaxed drop-shadow-md sm:text-xl lg:text-2xl">
            {description}
          </p>

          <nav className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <a href={primaryButton.href}>{primaryButton.text}</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={secondaryButton.href}>{secondaryButton.text}</a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default HeroSection
