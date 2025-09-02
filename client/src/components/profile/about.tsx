'use client'
import { Button } from '@headlessui/react'
import {
  BatteryMedium,
  BookOpen,
  Heart,
  MapPin,
  MessageCircleMore,
  Users,
  Utensils,
} from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface ProfileAboutProps {
  isEditing: boolean
  selectedFrame: string
  setSelectedFrame: (frame: string) => void
}

const frames = [
  'https://i.imgur.com/0aDdQyR.png',
  'https://i.imgur.com/cuaCwYj.png',
  'https://i.imgur.com/T1lahme.png',
  'https://i.imgur.com/0bCzwK4.png',
]

const ProfileAbout = ({
  isEditing,
  selectedFrame,
  setSelectedFrame,
}: ProfileAboutProps) => {
  const [profile, setProfile] = useState({
    about:
      "Hi! I'm just a desperate compsci student looking for a job... The job market be looking a lil cooked atm.",
    course: 'Bachelor of Science majoring in Computer Science',
    recharge: 'Gymming with the bros',
    comfortFood: 'Subway with A LOT of jalapeños',
    spot: 'Munchy',
    advice: 'NOT using your bag to reserve study spots on campus',
  })

  const handleChange = (key: keyof typeof profile, value: string) => {
    setProfile((prev) => ({ ...prev, [key]: value }))
  }

  const renderField = (key: keyof typeof profile) =>
    isEditing ? (
      <textarea
        className="w-full border rounded-lg p-2 text-gray-700"
        onChange={(e) => handleChange(key, e.target.value)}
        value={profile[key]}
      />
    ) : (
      <p className="text-gray-600 leading-relaxed">{profile[key]}</p>
    )

  return (
    <div className="space-y-6">
      {/* Frame selection */}
      {isEditing && (
        <div className="flex flex-wrap justify-center gap-4">
          {frames.map((frame, idx) => (
            <Button
              className={`w-20 h-20 rounded-full border-2 p-1 transition ${
                selectedFrame === frame
                  ? 'border-blue-500 ring-2 ring-blue-300'
                  : 'border-gray-300'
              }`}
              key={idx}
              onClick={() => setSelectedFrame(frame)}
            >
              <Image
                alt={`Frame ${idx + 1}`}
                className="rounded-full w-full h-full"
                height={100}
                src={frame}
                width={100}
              />
            </Button>
          ))}
        </div>
      )}

      {/* About Me */}
      <div className="shadow-sm border rounded-2xl bg-white/80 p-6">
        <div className="flex items-center gap-3 mb-4">
          <Heart className="text-pink-500 w-6 h-6" />
          <h2 className="text-2xl font-semibold text-gray-800">About Me</h2>
        </div>
        {renderField('about')}
      </div>

      {/* Current Course */}
      <div className="shadow-sm border rounded-2xl bg-white/80 p-6">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="text-blue-500 w-6 h-6" />
          <h2 className="text-2xl font-semibold text-gray-800">
            Current Course
          </h2>
        </div>
        {renderField('course')}
      </div>

      {/* Wellbeing Tips */}
      <div className="shadow-sm border rounded-2xl bg-white/80 p-6">
        <div className="flex items-center gap-3 mb-4">
          <Users className="text-green-500 w-6 h-6" />
          <h2 className="text-2xl font-semibold text-gray-800">
            Wellbeing Tips
          </h2>
        </div>

        <div className="space-y-5">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <BatteryMedium className="text-blue-500 w-5 h-5" /> Recharge
              between/after classes
            </h3>
            {renderField('recharge')}
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <Utensils className="text-yellow-500 w-5 h-5" /> Comfort food
              during exam season
            </h3>
            {renderField('comfortFood')}
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <MapPin className="text-purple-500 w-5 h-5" /> Favourite spot on
              campus
            </h3>
            {renderField('spot')}
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <MessageCircleMore className="text-red-500 w-5 h-5" /> From one
              uni student to another
            </h3>
            {renderField('advice')}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileAbout
