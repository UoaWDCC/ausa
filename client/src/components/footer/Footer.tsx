import Image from 'next/image'
import Link from 'next/link'
// import ausa from '../../app/assets/icons/ausa.svg'
import facebook from '../../app/assets/icons/facebook.svg'
import gps from '../../app/assets/icons/gps.svg'
import instagram from '../../app/assets/icons/instagram.svg'
import linkedin from '../../app/assets/icons/linkedin.svg'
import phone from '../../app/assets/icons/phone.svg'

const Footer = () => {
  return (
    <div className="bg-transparent backdrop-blur-md">
      {/* Links */}
      <div className="bottom-0 left-0 z-50 w-full transition-all duration-500 ease-out py-6 px-30 text-white flex flex-col md:grid md:grid-cols-[0.35fr_0.20fr_0.20fr_0.20fr_0.35fr] md:gap-x-10">
        {/* About Us */}
        <div className="flex flex-col ">
          <div className="flex flex-col gap-4 p-2">
            <h1 className="text-2xl font-bold">AUSA</h1>
            <span className="border-white">
              This is a description of the TRK-AUSA organisation. Our mission is
              to *insert here*, and we plan on doing this alongside our values
              *insert here*.
            </span>
          </div>
        </div>
        {/* About Us */}
        <div className="flex flex-col ">
          <div className="flex flex-col gap-4 p-2">
            <h1 className="text-2xl font-bold">About Us</h1>
            <Link href="#">
              <span className="border-white hover:border-b-1">
                Student Council
              </span>
            </Link>
            <Link href="#">
              <span className="border-white hover:border-b-1">
                AUSA Website
              </span>
            </Link>
          </div>
        </div>
        {/* Services */}
        <div className="flex md:justify-center">
          <div className="flex flex-col gap-4 p-2">
            <h1 className="text-2xl font-bold">Services</h1>
            <Link href="#">
              <span className="border-white hover:border-b-1">Advocacy</span>
            </Link>
            <Link href="#">
              <span className="border-white hover:border-b-1">
                Buddy Program
              </span>
            </Link>
            <Link href="#">
              <span className="border-white hover:border-b-1">
                Class Representatives
              </span>
            </Link>
            <Link href="#">
              <span className="border-white hover:border-b-1">
                Health Counseling
              </span>
            </Link>
          </div>
        </div>
        {/* Emergency Help */}
        <div className="flex md:justify-end">
          <div className="flex flex-col gap-4 p-2">
            <h1 className="text-2xl font-bold">Emergency Help</h1>
            <Link href="#">
              <span className="border-white hover:border-b-1">
                Emergency Contacts
              </span>
            </Link>
          </div>
        </div>
        {/* Logo */}
        <div className="flex flex-col ">
          <div className="flex flex-col gap-4 p-2">
            {/* <div className="relative flex-shrink-0 md:mt-0 md:block md:h-25 md:w-25">
            <Image src={ausa} alt="TRK AUSA" className="rounded-md" fill/>
          </div> */}
            <div className="flex flex-row gap-2">
              <Image alt="Facebook" className="h-[20px] w-[20px]" src={gps} />4
              Alfred Street, Auckland Central, Auckland 1010
            </div>
            <div className="flex flex-row gap-2">
              <Image alt="Facebook" className="h-[20px] w-[20px]" src={phone} />
              09 309 0789
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="bottom-0 left-0 z-50 w-full transition-all duration-500 ease-out p-6 text-white flex flex-col md:grid md:grid-cols-[0.95fr_0.075fr] md:gap-x-6">
        <div className="flex flex-col gap-4 p-2">
          © Te Rōpū Kahikatea - Auckland University Students’ Association 2025.
          All Rights Reserved.
        </div>
        {/* Social Media */}
        <div className="flex flex-row items-center gap-4 mt-2">
          {/* Facebook */}
          <div className="flex flex-row mb-4 h-[20px] w-[20px] flex-shrink-0 md:mb-0">
            <Link className="" href="#">
              <Image alt="Facebook" className="" src={facebook} />
            </Link>
          </div>
          {/* Instagram */}
          <div className="flex flex-row mb-4 h-[20px] w-[20px] flex-shrink-0 md:mb-0">
            <Link className="" href="#">
              <Image
                alt="Instagram"
                className="mb-4 h-[20px] w-[20px] md:mb-0"
                src={instagram}
              />
            </Link>
          </div>
          {/* LinkedIn */}
          <div className="flex flex-row mb-4 h-[20px] w-[20px] flex-shrink-0 md:mb-0">
            <Link className="" href="#">
              <Image
                alt="LinkedIn"
                className="mb-4 h-[20px] w-[20px] md:mb-0"
                src={linkedin}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
