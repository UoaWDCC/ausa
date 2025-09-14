import { cn } from '@/lib/utils'

interface TiledAusaBackgroundProps {
  /**
   * Set this to true if you are using this on a light background.
   *
   * Flips the colors to be more visible.
   */
  inverted?: boolean

  /**
   * Set this to true if you want the background to be flipped horizontally.
   */
  flipped?: boolean
}

/**
 * You must use this component with a relative parent:
 *
 * @example
 * ```
 * <div className="relative">
 *    <TiledAusaBackground />
 * </div>
 * ```
 */
export const TiledAusaBackground = ({
  inverted = false,
  flipped = false,
}: TiledAusaBackgroundProps) => {
  return (
    <div
      className={cn(
        'absolute inset-0 opacity-5 pointer-events-none cursor-none',
        inverted ? 'invert-100' : '',
        flipped ? '-rotate-6' : 'rotate-6',
      )}
      style={{
        backgroundImage: 'url(/static/icons/logo.svg)',
        backgroundSize: '140px 50px',
        backgroundRepeat: 'space',
        backgroundPosition: 'center',
      }}
    />
  )
}
