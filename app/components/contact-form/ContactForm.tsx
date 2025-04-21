'use client'

import emailjs from '@emailjs/browser'

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
    <div className="bg-white rounded-[32px] p-5 text-black w-[300px] md:w-[500px] lg:w-full drop-shadow-sm">
      <form onSubmit={sendEmail} className="flex flex-col gap-4">
        <label className="flex flex-col font-bold">
          Full Name
          <input
            type="text"
            placeholder="Ray Zhao 🥵🥵🥵🥵😩"
            className="bg-[#E2E2E2] placeholder-[#9D9D9D] rounded-lg p-2 mt-1"
          />
        </label>
        <label className="flex flex-col font-bold">
          Email
          <input
            type="text"
            placeholder="example@mail.com"
            className="bg-[#E2E2E2] placeholder-[#9D9D9D] rounded-lg p-2 mt-1"
          />
        </label>
        <label className="flex flex-col font-bold">
          {/* this input should be a dropdown menu -- need component */}
          Type of Enquiry
          <input
            type="text"
            placeholder="Dropdown menu"
            className="bg-[#E2E2E2] placeholder-[#9D9D9D] rounded-lg p-2 mt-1"
          />
        </label>
        <label className="flex flex-col font-bold">
          Message
          <textarea
            rows={6}
            placeholder="Write enquiry here"
            className="bg-[#E2E2E2] placeholder-[#9D9D9D] rounded-lg p-2 mt-1"
          />
        </label>
        <button
          type="submit"
          className="ml-auto py-2 px-4 w-35 text-xl rounded-full text-left bg-[#D9D9D9] font-bold flex justify-center"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm
