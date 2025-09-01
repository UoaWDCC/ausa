import {
  BatteryMedium,
  BookOpen,
  Heart,
  MapPin,
  MessageCircleMore,
  Users,
  Utensils,
} from 'lucide-react'
import { useState } from 'react'

interface ProfileAboutProps {
  isEditing: boolean
}

const ProfileAbout = ({ isEditing }: ProfileAboutProps) => {
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

  const renderField = (key: keyof typeof profile, label: string) =>
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
      {/* About Me */}
      <div className="shadow-sm border rounded-2xl bg-white/80 p-6">
        <div className="flex items-center gap-3 mb-4">
          <Heart className="text-pink-500 w-6 h-6" />
          <h2 className="text-2xl font-semibold text-gray-800">About Me</h2>
        </div>
        {renderField('about', 'About Me')}
      </div>

      {/* Current Course */}
      <div className="shadow-sm border rounded-2xl bg-white/80 p-6">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="text-blue-500 w-6 h-6" />
          <h2 className="text-2xl font-semibold text-gray-800">
            Current Course
          </h2>
        </div>
        {renderField('course', 'Current Course')}
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
            {renderField('recharge', 'Recharge')}
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <Utensils className="text-yellow-500 w-5 h-5" /> Comfort food
              during exam season
            </h3>
            {renderField('comfortFood', 'Comfort Food')}
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <MapPin className="text-purple-500 w-5 h-5" /> Favourite spot on
              campus
            </h3>
            {renderField('spot', 'Favourite Spot')}
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <MessageCircleMore className="text-red-500 w-5 h-5" /> From one
              uni student to another
            </h3>
            {renderField('advice', 'Advice')}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileAbout
