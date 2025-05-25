'use client'
import Image from 'next/image'
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react'

import { Button } from './components/button/Button'
import Card from './components/card/Card'
import Icon1 from './assets/icons/_.svg'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../shadcn_components/ui/accordion'

const Home = () => {
  const cards = [
    {
      title: "Mental Health Support",
      content: "Find the right resources to help you feel better.",
      className: "bg-yellow-100 border-blue-300 w-full h-full  hidden lg:block",
    },
    {
      title: "Academic Advice",
      content: "Tips and services to keep your study on track.",
      className: "bg-red-800 border-green-300 w-full h-full  hidden lg:block",
    },
    {
      title: "Community",
      content: "Connect with others, join events, find your people.",
      className: "bg-green-100 border-yellow-300 w-full h-full  hidden lg:block",
    },
    {
      title: "Emergency Help",
      content: "Quick access to emergency contacts and procedures.",
      className: "bg-blue-100 border-red-300 w-full h-full  hidden lg:block",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0)
  const current = cards[activeIndex]

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
                  rotate: [0, 180,-180, 0],
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
        <AnimatePresence mode="wait">
          <motion.div className="w-full"
            key={activeIndex}
            initial={{ opacity: 0, x: 0}}
            animate={{ opacity: 2, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            <Card title={current.title} className={current.className} >
              <p>
                This is a custom styled card with blue background and border.
              </p>
            </Card>
          </motion.div>
        </AnimatePresence>
        <div>

        </div>
        <div id="slider-component" className="ml-auto  hidden lg:flex">
          <div className="h-full border border-black cursor-pointer bg-yellow-100 p-4" onClick={() => setActiveIndex(0)}>1</div>
          <div className="h-full border border-black cursor-pointer bg-red-800 p-4" onClick={() => setActiveIndex(1)}>2</div>
          <div className="h-full border border-black cursor-pointer bg-green-100 p-4" onClick={() => setActiveIndex(2)}>3</div>
          <div className="h-full border border-black cursor-pointer bg-blue-100 p-4" onClick={() => setActiveIndex(3)}>4</div>
        </div>
      </div>
      <div className="m-4 flex flex-col lg:hidden">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Awareness</AccordionTrigger>
            <AccordionContent>
              Mental health is health. The first step to healing is
              understanding. We believe in building awareness by opening
              minds—breaking down the silence, one truth at a time.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Support</AccordionTrigger>
            <AccordionContent>
              You are not alone. Whether you're struggling, healing, or
              growing—we're here. Support isn't just a word. It's a network of
              real people, real stories, and real care.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Communication</AccordionTrigger>
            <AccordionContent>
              Talk. Share. Listen. Communication connects us—it turns pain into
              empathy, and isolation into understanding. This is your safe space
              to speak and be heard.
            </AccordionContent>
          </AccordionItem>{' '}
          <AccordionItem value="item-4">
            <AccordionTrigger>Self Care</AccordionTrigger>
            <AccordionContent>
              Take a breath. Log off for a while. Say no when you need to.
              Self-care isn't selfish—it's survival, it's maintenance, it's
              reclaiming your peace one day at a time.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5"></AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default Home
