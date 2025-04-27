'use client'

import emailjs from '@emailjs/browser'

import DropdownInput from '../dropdown-input/DropdownInput'

const ContactForm = () => {
  const sendEmail = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    emailjs.sendForm(
      'service_r8v8vhv', //service_id
      'template_72vhxtq', // template_id
      e.target,
      'tRl_tRUBfRLeko-rI', // public_key
    )
  }
  return (
    <div className="bg-white rounded-[32px] p-5 text-black w-[300px] md:w-[700px] shadow-md drop-shadow-sm duration-300 hover:scale-105">
      <form onSubmit={sendEmail} className="flex flex-col gap-4">
        <label className="flex flex-col font-bold">
          Full Name
          <input
            type="text"
            placeholder="Ray Zhao 🥵🥵🥵🥵😩"
            className="bg-[#E2E2E2] placeholder-[#9D9D9D] rounded-lg p-2 mt-1 hover:outline hover:outline-black hover:outline-2"
          />
        </label>
        <label className="flex flex-col font-bold">
          Email
          <input
            type="text"
            placeholder="example@mail.com"
            className="bg-[#E2E2E2] placeholder-[#9D9D9D] rounded-lg p-2 mt-1 hover:outline hover:outline-black hover:outline-2"
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
            rows={6}
            placeholder="Write enquiry here"
            className="bg-[#E2E2E2] placeholder-[#9D9D9D] rounded-lg p-2 mt-1 hover:outline hover:outline-black hover:outline-2"
          />
        </label>
        <button
          type="submit"
          className="ml-auto py-2 px-4 w-35 text-xl rounded-full text-left bg-[#D9D9D9] font-bold flex justify-center hover:outline hover:outline-black hover:outline-2"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm
