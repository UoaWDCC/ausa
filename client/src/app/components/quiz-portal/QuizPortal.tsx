import React from 'react'
import logo from '../../assets/icons/logo.svg'
import Image, { StaticImageData } from 'next/image'
import { ChevronRightIcon } from 'lucide-react'

type CardProp = {
  name: string
  image: StaticImageData
  alt: string
}

const Card = ({ name, image, alt }: CardProp) => {
  return (
    <div className="flex h-15 items-center justify-between rounded-sm border-2 border-[#a3a3a3]/50">
      <div className="p-4">{name}</div>
      <div className="flex gap-2 p-4">
        <div>
          <Image
            src={image}
            alt={alt}
            width={60}
            height={60}
            className="inline-block"
          />
        </div>
        <ChevronRightIcon className="h-5 w-5 text-gray-500" />
      </div>
    </div>
  )
}

const QuizPortal = () => {
  return (
    <div className="font-MS container mx-auto max-w-7xl bg-[#F6F6F6] px-8 text-slate-800 sm:px-10 md:px-14 lg:px-20">
      <h3 className="my-1 text-center text-xl font-bold sm:text-2xl md:my-2 md:text-3xl lg:my-4 lg:text-4xl">
        What Kind of Headspace are You In?
      </h3>
      <p className="text-center text-sm sm:text-lg md:text-xl">
        We can help lead you to the right resources
      </p>
      <div className="m-6 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        <Card name="Stress less" image={logo} alt="logo" />
        <Card name="Sleep soundly" image={logo} alt="logo" />
        <Card name="Manage anxiety" image={logo} alt="logo" />
        <Card name="Process thoughts" image={logo} alt="logo" />
        <Card name="Practice meditation" image={logo} alt="logo" />
        <Card name="Start therapy" image={logo} alt="logo" />
      </div>
    </div>
  )
}

export default QuizPortal
