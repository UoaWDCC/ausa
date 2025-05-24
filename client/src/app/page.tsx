'use client'
import Image from 'next/image'
import { motion } from 'motion/react'
import { Button } from './components/button/Button'
import Icon1 from './assets/icons/_.svg'

const Home = () => {
  return (
    <div className="overflow-hidden bg-white">
      {/* Info Expanding Section */}
      <div className="flex h-[58vh] flex-row bg-[#FAF7F2]">
        {/* Left side text and button */}
        <div className="flex flex-col justify-center px-16">
          <h1 className="font-geist mb-8 text-6xl font-semibold text-neutral-600">
            Your Support
          </h1>{' '}
          <div className="items-center justify-center gap-8 font-semibold md:ml-8 md:flex">
            <div className="-translate-y-4">
              <motion.div
                className="w-[80px]"
                animate={{
                  scale: [1, 1.25, 1],
                  rotate: [0, 180, -180, 0],
                }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  ease: 'easeInOut',
                }}
              >
                <Image src={Icon1} width={80} height={80} alt="Purple Icon" />
              </motion.div>
            </div>{' '}
            <h1 className="font-geist mb-8 text-6xl text-neutral-600">
              Starts Here.
            </h1>
          </div>
          <p className="font-geist mb-6 text-xl text-neutral-500">
            Insert description text about something
          </p>
          <div>
            <Button
              variant="outline"
              className="rounded-partial cursor-pointer border-none bg-[#FEDEA5] px-6 py-6 text-black shadow-md hover:bg-[#FED280] hover:text-black"
            >
              Start Wellbeing Quiz
            </Button>{' '}
          </div>{' '}
        </div>
        <div id="slider-component" className="ml-auto hidden md:flex">
          <div className="h-full border border-black p-4">1</div>
          <div className="h-full border border-black p-4">2</div>
          <div className="h-full border border-black p-4">3</div>
          <div className="h-full border border-black p-4">4</div>
        </div>
      </div>
    </div>
  )
}

export default Home
