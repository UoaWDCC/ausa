'use client'

import emailjs from '@emailjs/browser'
import { useState } from 'react'
import DropdownInput from '../dropdown-input/DropdownInput'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email_from: '',
    message: '',
  })
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(true)
  }
  const sendEmail = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formData.name || !formData.email_from || !formData.message) {
      alert('Please fill in all fields before submitting!')
      setClicked(false)
      return
    }
    emailjs
      .sendForm(
        'service_vo27jod', //service_id
        'template_q845yhw', // template_id
        e.target,
        'DPs78eLGecvnCMXH1', // public_key
      )
      .then(() => {
        setFormData({
          name: '',
          email_from: '',
          message: '',
        })
        setClicked(false)
      })
  }
  return (
    <div className="bg-white rounded-[32px] p-5 text-black w-[300px] md:w-[700px] shadow-md drop-shadow-sm duration-300 hover:scale-105">
      <form onSubmit={sendEmail} className="flex flex-col gap-4">
        <label className="flex flex-col font-bold">
          Full Name
          <input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            type="text"
            name="name"
            placeholder="Ray Zhao 🥵🥵🥵🥵😩"
            className="bg-[#E2E2E2] placeholder-[#9D9D9D] rounded-lg p-2 mt-1 hover:outline-black hover:outline-2"
          />
        </label>
        <label className="flex flex-col font-bold">
          Email
          <input
            value={formData.email_from}
            onChange={(e) => setFormData({ ...formData, email_from: e.target.value })}
            type="text"
            name="email_from"
            placeholder="example@mail.com"
            className="bg-[#E2E2E2] placeholder-[#9D9D9D] rounded-lg p-2 mt-1 hover:outline-black hover:outline-2"
          />
        </label>
        <label className="flex flex-col font-bold">
          Type of Enquiry
          <DropdownInput
            options={[
              'Membership & Recruitment',
              'Events',
              'Collaboration & Partnerships',
              'Wellbeing',
            ]}
            placeholder="Select enquiry type"
          />
        </label>
        <label className="flex flex-col font-bold">
          Message
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            name="message"
            rows={6}
            placeholder="Write enquiry here"
            className="bg-[#E2E2E2] placeholder-[#9D9D9D] rounded-lg p-2 mt-1 hover:outline-black hover:outline-2"
          />
        </label>
        <button
          onClick={handleClick}
          type="submit"
          className={`ml-auto py-2 px-4 w-35 text-xl rounded-full text-left  ${clicked ? 'bg-gray-200 text-gray-300 cursor-not-allowed' : 'bg-[#D9D9D9] hover:outline-2'} font-bold flex justify-center hover:outline-black`}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm
