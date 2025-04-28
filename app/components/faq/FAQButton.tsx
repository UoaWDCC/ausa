'use client'

import Link from 'next/link'

const FAQButton = () => {
  return (
    <div className="flex justify-center py-10">
      <Link href="/contact" passHref>
        <button className="bg-gray-600 font-EM font-semibold text-lg text-white py-2 px-6 rounded-md hover:bg-gray-800 transition">
          Submit Contact Enquiry
        </button>
      </Link>
    </div>
  )
}

export default FAQButton
