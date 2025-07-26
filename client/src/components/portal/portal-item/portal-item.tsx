import Link from 'next/link'
import type { PortalItem } from './portal-items'

interface IPortalItemProps extends PortalItem {
  link: string
}

const PortalItem1 = ({ title, link }: IPortalItemProps) => {
  return (
    <Link
      className="relative block w-full sm:w-30 h-24 sm:h-30 rounded-lg bg-white/10 p-6 text-center shadow-md backdrop-blur-md transition hover:bg-white/20 hover:underline underline-offset-2"
      href={link}
    >
      {/* Inner white border inset */}
      <div className="pointer-events-none absolute inset-2 rounded-lg" />

      {/* Title centered */}
      <div className="flex h-full w-full items-center justify-center">
        <h2 className="text-lg sm:text-xl font-semibold text-white drop-shadow-sm">
          {title}
        </h2>
      </div>
    </Link>
  )
}

export default PortalItem1
