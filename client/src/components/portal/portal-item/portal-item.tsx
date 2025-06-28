import React, { ReactNode } from 'react'
import type { PortalItem } from './portal-items'

interface IPortalItemProps extends PortalItem {
  link: string
}

const PortalItem = ({ title, content }: IPortalItemProps) => {
  return (
    <div className="rounded-md border border-gray-300 bg-white p-4">
      <h1 className="text-lg">{title}</h1>
      <div>{content}</div>
    </div>
  )
}

export default PortalItem
