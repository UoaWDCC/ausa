'use client'

import ContactForm from '@/components/contact-form/ContactForm'
import Link from 'next/link'
import Image from 'next/image'
import facebook from '../../app/assets/icons/facebook.svg'
import instagram from '../../app/assets/icons/instagram.svg'
import linkedin from '../../app/assets/icons/linkedin.svg'

const Contact = () => {
  return (
    <div className="font-RG pt-20">
      <div className="font-RK">
        <div className="min-h-screen flex flex-col items-center overflow-hidden mb-0 pb-0">
          <div className="mt-2 flex w-[90%] flex-col items-center gap-10 rounded-[55px] bg-[#2C2C2C] p-8 md:w-[95%] md:justify-center lg:max-w-[1500px] xl:max-w-[1800px] xl:flex-row xl:p-10">
            <div className="flex flex-col items-center gap-5 text-center xl:items-start xl:gap-25 xl:text-left">
              <div>
                {/* only show this text on wide-screen displays */}
                <p className="mb-2 hidden text-xl text-white xl:block">
                  Submit an enquiry we’re here to help
                </p>

                {/* only show this text on wide-screen displays */}
                <h1 className="hidden text-3xl font-bold text-white xl:block xl:text-5xl">
                  Let’s Talk
                </h1>

                <h2 className="mt-2 mb-4 text-3xl font-extrabold text-white xl:text-5xl">
                  We’re Here to Support You!
                </h2>
                <p className="text-md text-white xl:text-xl">
                  AUSA Independent Student Advice offers free, confidential, and
                  professional support, advice, and information to all current
                  students at the University of Auckland.
                </p>
              </div>

              <div className="flex flex-row gap-4 xl:flex-col">
                <div className="h-[40px] w-[40px]">
                  <Link href="https://facebook.com" target="_blank">
                    <Image src={facebook} alt="Facebook" />
                  </Link>
                </div>

                <div className="h-[40px] w-[40px]">
                  <Link href="https://instagram.com" target="_blank">
                    <Image src={instagram} alt="Instagram" />
                  </Link>
                </div>

                <div className="h-[40px] w-[40px]">
                  <Link href="https://linkedin.com" target="_blank">
                    <Image src={linkedin} alt="LinkedIn" />
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
