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
        // service_id
        'service_vo27jod',
        // template_id
        'template_q845yhw',
        e.target,
        // public_key
        'DPs78eLGecvnCMXH1',
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
    <div className="w-[300px] rounded-[32px] bg-white p-5 text-black shadow-md drop-shadow-sm duration-300 hover:scale-105 md:w-[700px]">
      <form className="flex flex-col gap-4" onSubmit={sendEmail}>
        <label className="flex flex-col font-bold">
          Full Name
          <input
            className="mt-1 rounded-lg bg-[#E2E2E2] p-2 placeholder-[#9D9D9D] hover:outline-2 hover:outline-black"
            name="name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Ray Zhao 🥵🥵🥵🥵😩"
            type="text"
            value={formData.name}
          />
        </label>
        <label className="flex flex-col font-bold">
          Email
          <input
            className="mt-1 rounded-lg bg-[#E2E2E2] p-2 placeholder-[#9D9D9D] hover:outline-2 hover:outline-black"
            name="email_from"
            onChange={(e) =>
              setFormData({ ...formData, email_from: e.target.value })
            }
            placeholder="example@mail.com"
            type="text"
            value={formData.email_from}
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
            className="mt-1 rounded-lg bg-[#E2E2E2] p-2 placeholder-[#9D9D9D] hover:outline-2 hover:outline-black"
            name="message"
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="Write enquiry here"
            rows={6}
            value={formData.message}
          />
        </label>
        <button
          className={`ml-auto w-35 rounded-full px-4 py-2 text-left text-xl ${clicked ? 'cursor-not-allowed bg-gray-200 text-gray-300' : 'bg-[#D9D9D9] hover:outline-2'} flex justify-center font-bold hover:outline-black`}
          onClick={handleClick}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm
