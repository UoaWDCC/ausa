import React, { ReactNode } from 'react'

interface IPortalItemProps {
  title: string
  content: ReactNode
}

const PortalItem = ({ title, content }: IPortalItemProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{content}</div>
    </div>
  )
}

export default PortalItem
