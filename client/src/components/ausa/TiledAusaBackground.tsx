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
export const TiledAusaBackground = () => {
  return (
    <div
      className="absolute inset-0 opacity-5"
      style={{
        backgroundImage: `url(/static/icons/logo.svg)`,
        backgroundSize: '140px 50px',
        backgroundRepeat: 'space',
        backgroundPosition: 'center',
        transform: 'rotate(5deg)',
      }}
    />
  )
}
