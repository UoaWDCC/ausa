import Image from 'next/image'

interface DecorationImageProps {
  src: string
  alt: string
  rotation?: number
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom'
  customSize?: string
}
/**
 * src and alt must be configured inside the component using
 * {@link DecorationImage}
 */
export type CustomisableDecorationImageProps = Omit<
  DecorationImageProps,
  'src' | 'alt'
>

/**
 * A decorative image component that can be rotated and sized for visual enhancement.
 *
 * @param src - The source URL of the image
 * @param alt - Alternative text for the image
 * @param rotation - Rotation angle in degrees (default: -45)
 * @param size - Predefined size or 'custom' for custom sizing
 * @param customSize - Custom CSS classes when size is 'custom'
 *
 * @example
 * ```tsx
 * <DecorationImage
 *   src="/star.png"
 *   alt="Decorative star"
 *   rotation={30}
 *   size="lg"
 * />
 * ```
 *
 * @example
 * ```tsx
 * <DecorationImage
 *   src="/logo.svg"
 *   alt="Company logo"
 *   size="custom"
 *   customSize="h-16 w-16"
 * />
 * ```
 */
export function DecorationImage({
  src,
  alt,
  rotation = -45,
  size = 'custom',
  customSize,
}: DecorationImageProps) {
  const getSizeStyles = () => {
    if (size === 'custom' && customSize) {
      return customSize
    }

    switch (size) {
      case 'sm':
        return 'h-2 w-2'
      case 'md':
        return 'h-4 w-4'
      case 'lg':
        return 'h-6 w-6'
      case 'xl':
        return 'h-8 w-8'
      default:
        return [
          'h-4 w-4',
          'sm:h-6 sm:w-6',
          'md:h-8 md:w-8',
          'lg:h-10 lg:w-10',
          'xl:h-12 xl:w-12',
        ].join(' ')
    }
  }

  return (
    <div className={`${getSizeStyles()} pointer-events-none select-none`}>
      <div
        className="relative scale-500"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <Image
          alt={alt}
          className="h-full w-full object-cover"
          draggable={false}
          height={500}
          src={src}
          width={500}
        />
      </div>
    </div>
  )
}
