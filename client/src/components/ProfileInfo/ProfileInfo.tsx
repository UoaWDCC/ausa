'use client'
import React from 'react'
import { FaEdit, FaSave } from 'react-icons/fa'

const ProfileInfo = () => {
  const [editing, setEditing] = React.useState(false)
  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      {editing ? (
        <div className="flex flex-col">
          <div className="flex justify-end">
            <FaEdit
              className="cursor-pointer text-xl"
              onClick={() => setEditing(!editing)}
            />
          </div>
          <h2 className="text-xl font-semibold mb-2">Profile Information</h2>
          <p className="text-gray-600 mb-2 p-2">Name: John Doe</p>
          <p className="text-gray-600 mb-2 p-2">Email: john.doe@example.com</p>
          <p className="text-gray-600 mb-2 p-2">Location: San Francisco, CA</p>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="flex justify-end">
            <FaSave
              className="cursor-pointer text-xl"
              onClick={() => setEditing(!editing)}
            />
          </div>
          <h2 className="text-xl font-semibold mb-2">Profile Information</h2>
          <input
            className="text-gray-600 mb-2 p-2 rounded outline outline-1 outline-gray-300 focus:outline-blue-500"
            defaultValue="John Doe"
            placeholder="Name"
            type="text"
          />
          <input
            className="text-gray-600 mb-2 p-2 rounded outline outline-1 outline-gray-300 focus:outline-blue-500"
            defaultValue="John Doe"
            placeholder="Name"
            type="text"
          />
          <input
            className="text-gray-600 mb-2 p-2 rounded outline outline-1 outline-gray-300 focus:outline-blue-500"
            defaultValue="John Doe"
            placeholder="Name"
            type="text"
          />
        </div>
      )}
    </div>
  )
}

export default ProfileInfo
