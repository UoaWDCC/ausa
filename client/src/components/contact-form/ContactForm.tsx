'use client'

import emailjs from '@emailjs/browser'
import { useState } from 'react'
import DropdownInput from '../dropdown-input/DropdownInput'
import {Button} from '../ui/button'

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

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
    if (!isValidEmail(formData.email_from)) {
      alert('Please enter a valid email address!')
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
    <div className="w-[300px] rounded-md bg-[#272B31]/80 p-5 text-white shadow-2xl md:w-[700px]">
      <form onSubmit={sendEmail} className="flex flex-col gap-4">
        <label className="flex flex-col font-bold">
          Full Name
          <input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            type="text"
            name="name"
            placeholder="Name"
            className="mt-1 rounded-sm bg-white/10 p-2 placeholder-[#9D9D9D] hover:outline-2 hover:outline-white"
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
              'Other',
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
          />
        </label>
        <Button type="submit" onClick={handleClick} className={`ml-auto w-35 rounded-md px-4 py-2 text-left text-xl ${clicked ? 'cursor-not-allowed' : ''} flex justify-center`}>
          SUBMIT
        </Button>
      </form>
    </div>
  )
}

export default ContactForm
