import React from 'react'
import type { PortalItem } from './portal-items'
import Link from 'next/link'

interface IPortalItemProps extends PortalItem {
  link: string
}

const PortalItem = ({ title, content, link }: IPortalItemProps) => {
  return (
    <div className="flex flex-col items-center rounded-md border border-gray-300 bg-white p-8 shadow-md">
      <h1 className="text-lg font-bold text-blue-800">{title}</h1>
      <div className="text-gray-400">{content}</div>
      <Link href={link}>
        <p className="text-blue-500 underline">Check it out</p>
      </Link>
    </div>
  )
}

export default PortalItem
