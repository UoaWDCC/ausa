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
  const [activeTab, setActiveTab] = useState('about') // About tab is default when you first open the page
  const [isEditing, setIsEditing] = useState(false)

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev)
    setActiveTab('about') // About tab is open for editing
  }

  return (
    <div>
      {/* Header */}
      <div className="mt-16 w-full bg-[#5FADE6] flex flex-col items-center gap-8 h-[300px]" />

      {/* Profile photo */}
      <div className="rounded-full border border-gray-200 border-5 bg-white p-8 shadow-md w-[250px] h-[250px] mx-auto -mt-[200px] z-10 relative">
        <Image alt="Profile Photo" className="rounded-full" fill src={quag} />
        <Button className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 mr-4 mb-4">
          <Image alt="Camera Icon" className="h-6 w-6" src={cameraIcon} />
        </Button>
      </div>

      {/* Tabs section */}
      <div className="flex flex-col bg-white -mt-[50px] w-full relative">
        <div className="text-3xl text-center mt-20 mb-15">Welcome, User!</div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between px-6 lg:px-30 mb-4">
          {/* Tabs */}
          <ul className="flex flex-1 justify-center lg:justify-start gap-6 mb-4 lg:mb-0">
            <li className="font-semibold text-gray-600">
              <Button
                className={`${activeTab === 'about' ? 'text-blue-600' : 'text-gray-600'}`}
                onClick={() => setActiveTab('about')}
              >
                About
              </Button>
            </li>
            <li className="font-semibold text-gray-600">
              <Button
                className={`${activeTab === 'quizresults' ? 'text-blue-600' : 'text-gray-600'}`}
                onClick={() => setActiveTab('quizresults')}
              >
                Quiz Results
              </Button>
            </li>
            <li className="font-semibold text-gray-600">
              <Button
                className={`${activeTab === 'events' ? 'text-blue-600' : 'text-gray-600'}`}
                onClick={() => setActiveTab('events')}
              >
                Events
              </Button>
            </li>
          </ul>

          {/* Edit Profile Button */}
          <div className="flex justify-center lg:justify-end flex-none">
            <Button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              onClick={handleEditToggle}
            >
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="border border-black-900 mt-8 px-6 md:mx-30" />

        {/* Tab Content */}
        <div className="rounded-lg mt-8 px-6 md:mx-30 mb-20">
          {activeTab === 'about' && <About isEditing={isEditing} />}
          {activeTab === 'quizresults' && <QuizResults />}
          {activeTab === 'events' && <Events />}
        </div>
      </div>
    </div>
  )
}

export default UserProfilePage
