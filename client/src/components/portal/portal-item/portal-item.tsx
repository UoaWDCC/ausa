import React from 'react'
import type { PortalItem } from './portal-items'
import Link from 'next/link'

interface IPortalItemProps extends PortalItem {
  link: string
}

const PortalItem = ({ title, content, link }: IPortalItemProps) => {
  return (
    <div className="flex flex-col items-center rounded-md border border-white/10 bg-white/10 p-6 shadow-md backdrop-blur-md">
      <h2 className="mb-1 text-lg font-semibold text-white drop-shadow-sm">
        {title}
      </h2>

      <Link
        href={link}
        className="mb-2 text-sm text-blue-300 underline transition-colors duration-150 hover:text-white"
      >
        {content}
      </Link>
    </div>
  )
}

export default PortalItem
