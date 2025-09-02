'use client'
import { Button } from '@headlessui/react'
import Image from 'next/image'
import { useRef, useState } from 'react'
import About from '../../components/profile/about'
import Events from '../../components/profile/events'
import QuizResults from '../../components/profile/quiz-results'
import cameraIcon from '../assets/icons/Camera.svg'
import quag from '../assets/icons/quag.png'

const UserProfilePage = () => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [activeTab, setActiveTab] = useState('about')
  const [isEditing, setIsEditing] = useState(false)
  const [selectedFrame, setSelectedFrame] = useState(
    'https://i.imgur.com/0aDdQyR.png',
  )
  const handleFileClick = () => {
    fileInputRef.current?.click()
  }
  const handleEditToggle = () => {
    setIsEditing((prev) => !prev)
    setActiveTab('about')
  }
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      console.log('Selected file:', file)
    }
  }

  return (
    <div>
      {/* Profile Header */}
      <div className="mt-16 w-full bg-[#5FADE6] flex flex-col items-center gap-8 h-[300px]" />

      <div className="relative w-[250px] h-[250px] mx-auto -mt-[200px] z-10">
        {/* Profile Picture */}
        <div className="relative w-full h-full rounded-full overflow-hidden shadow-md">
          <Image alt="Profile Photo" className="object-cover" fill src={quag} />
        </div>
        <input
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
          ref={fileInputRef}
          type="file"
        />

        {/* Avatar Frame */}
        <div className="absolute -top-[8.5%] -left-[8.5%] w-[118%] h-[118%] rounded-full pointer-events-none">
          <Image
            alt="Avatar Frame"
            className="object-cover rounded-full"
            fill
            src={selectedFrame}
          />
        </div>

        {/* Camera Button */}
        <Button
          className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 mr-2 mb-2"
          onClick={handleFileClick}
        >
          <Image alt="Camera Icon" className="h-6 w-6" src={cameraIcon} />
        </Button>
      </div>

      {/* Tabs Section */}
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

        {/* Tab Content (depending on what tab is currently clicked on) */}
        <div className="rounded-lg mt-8 px-6 md:mx-30 mb-20">
          {activeTab === 'about' && (
            <About
              isEditing={isEditing}
              selectedFrame={selectedFrame}
              setSelectedFrame={setSelectedFrame}
            />
          )}
          {activeTab === 'quizresults' && <QuizResults />}
          {activeTab === 'events' && <Events />}
        </div>
      </div>
    </div>
  )
}

export default UserProfilePage
