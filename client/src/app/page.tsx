'use client'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'motion/react'

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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const cards = [
    {
      title: 'Awareness',
      style: 'h-full bg-[#3A7D8C]',
      content:
        'Mental health is health. The first step to healing is understanding. We believe in building awareness by opening minds—breaking down the silence, one truth at a time.',
    },
    {
      title: 'Support',
      style: 'h-full bg-[#5A9B8C]',
      content:
        "You are not alone. Whether you're struggling, healing, or growing—we're here. Support isn't just a word. It's a network of real people, real stories, and real care.",
    },
    {
      title: 'Communication',
      style: 'h-full bg-[#B2D8D8]',
      content:
        'Talk. Share. Listen. Communication connects us—it turns pain into empathy, and isolation into understanding. This is your safe space to speak and be heard.',
    },
    {
      title: 'Self Care',
      style: 'h-full bg-[#8A6DA8]',
      content:
        "Take a breath. Log off for a while. Say no when you need to. Self-care isn't selfish—it's survival, it's maintenance, it's reclaiming your peace one day at a time.",
    },
  ]

  const handleCardClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="overflow-hidden bg-white">
      {/* Info Expanding Section */}
      <div className="flex h-[58vh] flex-row bg-[#FAF7F2]">
        {/* Left side text and button */}
        <div className="v-[40vh] my-4 ml-8 flex flex-col justify-center gap-4">
          <h1 className="font-geist mb-8 text-4xl text-neutral-600">
            Your Support
          </h1>{' '}
          {/* <div className="items-center justify-center gap-8 font-semibold md:ml-8 md:flex"> */}
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
          <p className="font-geist text-5xl font-bold text-neutral-600">
            Starts Here.
          </p>{' '}
          {/* </div> */}
          <p className="font-geist my-4 text-xl text-neutral-500">
            A safe space for students to explore mental health resources tailored to your needs
          </p>
          <div>
            <Button
              variant="outline"
              className="rounded-partial cursor-pointer border-none bg-[#6A8C7D] px-6 py-6 text-black shadow-md hover:bg-[#5A7C6D] hover:text-black"
            >
              Start Wellbeing Quiz
            </Button>{' '}
          </div>{' '}
        </div>

        <div className="relative z-100 hidden w-screen justify-end overflow-x-hidden lg:flex">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="absolute right-0 h-full w-[500px]"
              style={{
                zIndex: expandedIndex === i ? 50 : (cards.length - i) * 10,
              }}
              animate={{
                width: expandedIndex === i ? '60%' : '200px',
                right: `${(cards.length - 1 - i) * 100}px`,
                transition: { duration: 0.3 },
              }}
              onClick={() => handleCardClick(i)}
            >
              <Card
                className={`${card.style} ${expandedIndex === i ? 'flex flex-col p-8' : 'h-full'}`}
              >
                {expandedIndex === i ? (
                  <>
                    <div className="mb-6 flex items-center justify-between">
                      <h2 className="text-3xl font-bold">{card.title}</h2>
                      <button
                        className="text-2xl font-bold"
                        onClick={(e) => {
                          e.stopPropagation()
                          setExpandedIndex(null)
                        }}
                      >
                        ×
                      </button>
                    </div>
                    <p className="text-lg">{card.content}</p>
                  </>
                ) : (
                  <p className="mr-8 mt-30 origin-bottom-right rotate-90 text-lg font-semibold">
                    {card.title}
                  </p>
                )}
              </Card>
            </motion.div>
          ))}
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
