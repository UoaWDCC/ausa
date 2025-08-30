import { Button } from '@headlessui/react'
import Image from 'next/image'
import cameraIcon from '../assets/icons/Camera.svg'

const UserProfilePage = () => {
  return (
    // header
    <div>
      <div className="mt-16 w-full bg-[#5FADE6] flex flex-col items-center gap-8 h-[300px]" />
      {/* profile photo */}
      <div className="rounded-full border border-gray-200 border-5 bg-white p-8 shadow-md w-[250px] h-[250px] mx-auto -mt-[200px] z-10 relative">
        <Button className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 mr-4 mb-4">
          <Image alt="Camera Icon" className="h-6 w-6" src={cameraIcon} />
        </Button>
      </div>

      {/* white section */}
      <div className="flex flex-col h-screen bg-white -mt-[50px] w-full relative">
        <div className="text-3xl text-center mt-20">Welcome, User!</div>
        <div className="border border-black-900 mt-8 " />
      </div>
    </div>
  )
}
export default UserProfilePage
