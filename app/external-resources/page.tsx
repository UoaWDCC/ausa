'use client'
import { useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import ExternalLinkCard from './ExternalLinkCard'
import sampleImage from '../assets/images/sample.jpg'
import { motion } from 'framer-motion'

const ExternalResources = () => {
  const wellRef = useRef<HTMLDivElement | null>(null)
  const expRef = useRef<HTMLDivElement | null>(null)
  const repRef = useRef<HTMLDivElement | null>(null)
  return (
    <>
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex flex-col h-screen justify-center px-20 max-w-xl space-y-4">
          <h1 className="font-bold text-2xl">EXTERNAL RESOURCES</h1>
          <button
            onClick={() => {
              wellRef.current?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="w-[200px] cursor-pointer border border-black bg-black text-white px-4 py-2 rounded opacity-80 hover:opacity-100 transition duration-300 ease-in-out"
          >
            Student Wellfare <ChevronDown className="inline-block" />
          </button>
          <button
            onClick={() => {
              expRef.current?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="w-[200px] cursor-pointer border border-black bg-black text-white px-4 py-2 rounded opacity-80 hover:opacity-100 transition duration-300 ease-in-out"
          >
            Student Experience <ChevronDown className="inline-block" />
          </button>
          <button
            onClick={() => {
              repRef.current?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="w-[200px] cursor-pointer border border-black bg-black text-white px-4 py-2 rounded opacity-80 hover:opacity-100 transition duration-300 ease-in-out"
          >
            Class Reps <ChevronDown className="inline-block" />
          </button>
        </div>

        <div className="flex justify-center">
          <h1 className="font-bold text-2xl">Student Wellfare</h1>
        </div>
        <div
          ref={wellRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-10 p-10 pl-20"
        >
          <ExternalLinkCard
            ExternalLinkImage={sampleImage}
            title="Student Emergency Fund"
            description="University of Auckland is able to help students if, due to an expected event, face financial difficulties which threaten their studies."
          />
          <ExternalLinkCard
            ExternalLinkImage={sampleImage}
            title="Emergency Needs Grant"
            description="StudyLink may be able to provide up to $200 for urgent things like food, bedding, or medical costs"
          />
          <ExternalLinkCard
            ExternalLinkImage={sampleImage}
            title="Food Banks"
            description="Work and Income, StudyLink, or the Citizens Advice Bureau can help you find a local food bank. WINZ or StudyLink can help provide a letter to prove your eligibility if necessary."
          />
          <ExternalLinkCard
            ExternalLinkImage={sampleImage}
            title="Queerspace"
            description="A safe space for queer students on campus (but we're not exclusionary! non-queer students are welcome)."
          />
        </div>

        <div className="flex justify-center">
          <h1 className="font-bold text-2xl">Student Experience</h1>
        </div>
        <div
          ref={expRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-10 p-10 pl-20"
        >
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
        </div>

        <h1 className="font-bold text-2xl">Class Reps</h1>
        <div
          ref={repRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-10 p-10 pl-20"
        >
          <ExternalLinkCard
            ExternalLinkImage={sampleImage}
            title="What Are Class Reps?"
            description="An introduction to what class reps do, and why they're important!"
          />
          <ExternalLinkCard
            ExternalLinkImage={sampleImage}
            title="Class Rep Resources"
            description="Guides, documents, and presentations to help you be the best class rep you can be."
          />
          <ExternalLinkCard
            ExternalLinkImage={sampleImage}
            title="Class Rep FAQs"
            description="Some commonly asked questions about the Class Rep role."
          />
          <ExternalLinkCard
            ExternalLinkImage={sampleImage}
            title="Find Your Class Rep"
            description="Not sure who your class rep is? Enter your course code and find out now!"
          />
          <ExternalLinkCard
            ExternalLinkImage={sampleImage}
            title="Enquire About Class Reps"
            description="Submit an enquiry about class reps to our representatives."
          />
          <ExternalLinkCard
            ExternalLinkImage={sampleImage}
            title="AUSA's Class Rep Knowledge Repository"
            description="Stores the SSCC/FSSCC Minutes, and eVoice Diary Reports"
          />
        </div>
      </motion.div>
    </>
  )
}
export default ExternalResources
