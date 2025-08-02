import Image from 'next/image'
import { memo } from 'react'

interface ResourcesTitleProps {
  title: string
  description: string
}

export const ResourcesTitle = memo(
  ({ title, description }: ResourcesTitleProps) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-20 [0.5fr_0.5fr] text-white">
        <div>
          <Image
            width={500}
            height={200}
            src={'/static/backgrounds/uoa-background.jpg'}
            alt={''}
            className="h-48 object-cover"
          />
        </div>
        <div>
          <h1 className="text-center font-mono font-bold text-4xl">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    )
  },
)
ResourcesTitle.displayName = 'ResourcesTitle'
