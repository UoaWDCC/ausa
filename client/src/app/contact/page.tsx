'use client'

import Image from 'next/image'
import Link from 'next/link'
import { TiledAusaBackground } from '@/components/ausa/TiledAusaBackground'
import ContactForm from '@/components/contact-form/ContactForm'
import facebook from '../../app/assets/icons/facebook.svg'
import instagram from '../../app/assets/icons/instagram.svg'
import linkedin from '../../app/assets/icons/linkedin.svg'

const Contact = () => {
  return (
    <div className="relative z-10 py-20 text-white font-RG">
      <div className="font-RK">
        <div className="relative z-10 mx-auto max-w-6xl sm:px-4">
          <div className="relative overflow-hidden rounded-md border border-white/20 bg-black/40 p-8 sm:p-10 shadow-2xl backdrop-blur-sm">
            <TiledAusaBackground />

            <div className="relative z-10 flex flex-col items-center gap-10 xl:flex-row xl:gap-16">
              {/* Content above background */}
              <div className="relative z-10 flex flex-col items-center gap-5 text-center xl:items-start xl:gap-25 xl:text-left">
                <div>
                  {/* only show this text on wide-screen displays */}
                  <h1 className="hidden text-3xl font-bold text-white xl:block xl:text-5xl">
                    Let's Talk
                  </h1>

                  <h2 className="mt-2 mb-4 text-3xl font-extrabold text-white xl:text-5xl">
                    We're Here to Support You!
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

              <div className="relative z-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
