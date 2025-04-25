'use client'
import { ChevronDown } from 'lucide-react'
import ExternalLinkCard from './ExternalLinkCard'
import sampleImage from '../assets/images/sample.jpg'
import { motion } from 'framer-motion'

const ExternalResources = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center m-4 justify-center "
    >
      <div className="space-y-2 flex flex-col ml-20 gap-4 p-2 mt-4">
        <h1 className="font-bold text-2xl">
          NAVIGATING THROUGH <br /> EXTERNAL RESOURCES
        </h1>
        <h2>
          insert description of the purpose <br /> of this page etc..
        </h2>
        <button className="w-[200px] cursor-pointer border border-black bg-black text-white px-4 py-2 rounded opacity-80 hover:opacity-100 transition duration-300 ease-in-out">
          Explore now <ChevronDown className="inline-block" />
        </button>
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-10 p-10 pl-20">
        <ExternalLinkCard
          ExternalLinkImage={sampleImage}
          title="card 1"
          description="some some some smoe"
        />
        <ExternalLinkCard
          ExternalLinkImage={sampleImage}
          title="card 2"
          description="some some some smoe"
        />
        <ExternalLinkCard
          ExternalLinkImage={sampleImage}
          title="card 3"
          description="some some some smoe"
        />
        <ExternalLinkCard
          ExternalLinkImage={sampleImage}
          title="card 4"
          description="some some some smoe"
        />
        <ExternalLinkCard
          ExternalLinkImage={sampleImage}
          title="card 5"
          description="some some some smoe"
        />
        <ExternalLinkCard
          ExternalLinkImage={sampleImage}
          title="card 6"
          description="some some some smoe"
        />
        <ExternalLinkCard
          ExternalLinkImage={sampleImage}
          title="card 7"
          description="some some some smoe"
        />
        <ExternalLinkCard
          ExternalLinkImage={sampleImage}
          title="card 8"
          description="some some some smoe"
        />
      </div>*/}
    </motion.div>
  )
}
export default ExternalResources
