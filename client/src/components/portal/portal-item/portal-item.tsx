import React from 'react'
import type { PortalItem } from './portal-items'
import Link from 'next/link'

interface IPortalItemProps extends PortalItem {
  link: string
}

const PortalItem = ({ title, content, link }: IPortalItemProps) => {
  return (
    <div className="rounded-md border border-gray-300 bg-white p-4">
      <h1 className="text-lg">{title}</h1>
      <div>{content}</div>
      <Link href={link}>
        <p className="text-blue-500 underline">Check it out</p>
      </Link>
    </div>
  )
}

export default PortalItem
