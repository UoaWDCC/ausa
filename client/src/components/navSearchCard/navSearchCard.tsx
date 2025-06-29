import type React from 'react'

interface NavSearchCardProps {
  title: string
  description: string
}

export const NavSearchCard: React.FC<NavSearchCardProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex w-full flex-col justify-center rounded-lg border border-gray-200 bg-white p-4 shadow-md transition-shadow duration-300 ease-in-out hover:shadow-2xl">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
