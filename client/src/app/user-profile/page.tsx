'use client'
import { Button } from '@headlessui/react'
import Image from 'next/image'
import { useState } from 'react'
import About from '../../components/profile/about'
import Events from '../../components/profile/events'
import QuizResults from '../../components/profile/quiz-results'
import cameraIcon from '../assets/icons/Camera.svg'
import quag from '../assets/icons/quag.png'

const UserProfilePage = () => {
  const [activeTab, setActiveTab] = useState('about')

  return (
    // header
    <div>
      <div className="mt-16 w-full bg-[#5FADE6] flex flex-col items-center gap-8 h-[300px]" />
      {/* profile photo */}
      <div className="rounded-full border border-gray-200 border-5 bg-white p-8 shadow-md w-[250px] h-[250px] mx-auto -mt-[200px] z-10 relative">
        <Image alt="Profile Photo" className="rounded-full" fill src={quag} />
        <Button className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 mr-4 mb-4">
          <Image alt="Camera Icon" className="h-6 w-6" src={cameraIcon} />
        </Button>
      </div>

      {/* tabs section */}
      <div className="flex flex-col bg-white -mt-[50px] w-full relative">
        <div className="text-3xl text-center mt-20 mb-15">Welcome, User!</div>
        <div className="w-full flex justify center">
          <div className="flex justify-between mb-2.5 bottom md:ml-30">
            <ul className="flex px-5 py-1.5>">
              <li className="px-3 font-semibold text-gray-600">
                <Button
                  className={`${activeTab === 'about' ? 'text-blue-600' : 'text-gray-600'}`}
                  onClick={() => setActiveTab('about')}
                >
                  About
                </Button>
              </li>
              <li className="px-3 font-semibold text-gray-600">
                <Button
                  className={`${activeTab === 'quizresults' ? 'text-blue-600' : 'text-gray-600'}`}
                  onClick={() => setActiveTab('quizresults')}
                >
                  Quiz Results
                </Button>
              </li>
              <li className="px-3 font-semibold text-gray-600">
                <Button
                  className={`${activeTab === 'events' ? 'text-blue-600' : 'text-gray-600'}`}
                  onClick={() => setActiveTab('events')}
                >
                  Events
                </Button>
              </li>
            </ul>
          </div>
          <Button className="absolute right-0 bg-blue-500 text-white p-2 hover:bg-blue-600 md:mr-30 rounded-lg">
            Edit Profile
          </Button>
        </div>
        <div className="border border-black-900 mt-8 px-6 md:mx-30" />
        <div className="rounded-lg mt-8 px-6 md:mx-30 mb-20">
          {activeTab == 'about' && <About />}
          {activeTab == 'quizresults' && <QuizResults />}
          {activeTab == 'events' && <Events />}
        </div>
      </div>
    </div>
  )
}
export default UserProfilePage
