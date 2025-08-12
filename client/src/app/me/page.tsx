'use client'
import Sidebar from '@/components/sidebar/sidebar'
import { IoMdPerson } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { useAuth } from '@/auth/AuthContext';

export default function Me() {
  const { user } = useAuth();
  
  const links = [
    { label: 'Profile', href: '/me/profile', icon: IoMdPerson },
    { label: 'Notifications', href: '/me/notifications', icon: FaBell },
    { label: 'Privacy', href: '/me/privacy', icon: MdLock },
    { label: 'Language', href: '/me/languages', icon: TbWorld },
    { label: 'Help', href: '/me/events', icon: LuMessageCircleQuestion},
  ];

  const handleImageUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.click();
  };

  return (
    <div className="w-full min-h-screen h-full flex">
      <Sidebar links={links} />
      <div className="flex-1 pl-72 pr-8 pt-20 bg-[#FAF7F2] h-screen">
        <h1 className="text-4xl font-semibold text-black mb-4">Account Settings</h1>
        {/* black line */}
        <div className="w-full h-px bg-black mb-10"></div>
        {/* profile circle container */}
        <div className="flex flex-col items-center gap-6 mb-8">
          {/* profile icon */}
          <div className="w-70 h-70 bg-gray-300 rounded-full flex items-center justify-center">
            <IoMdPerson className="text-4xl text-gray-600" />
          </div>
          {/* Display name */}
          <div className="text-2xl font-medium text-gray-800 text-center">
            {user?.displayName || user?.email?.split('@')[0] || 'User'}
          </div>
          <button 
            onClick={handleImageUpload}
            className="text-gray-800 hover:text-blue-400 underline cursor-pointer"
          >
            Upload an image
          </button>
        </div>
      </div>
    </div>
  );
}

