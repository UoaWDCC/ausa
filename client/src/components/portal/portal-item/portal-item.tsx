// import React from 'react'
import type { PortalItem } from './portal-items'
import Link from 'next/link'

interface IPortalItemProps extends PortalItem {
  link: string
}

const PortalItem1 = ({ title, link }: IPortalItemProps) => {
  return (
    <Link
      href={link}
      className="relative block w-full sm:w-30 h-24 sm:h-30 rounded-lg bg-white/10 p-6 text-center shadow-md backdrop-blur-md transition hover:bg-white/20"
    >
      {/* Inner white border inset */}
      <div className="pointer-events-none absolute inset-2 rounded-lg border border-white/30"></div>

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
