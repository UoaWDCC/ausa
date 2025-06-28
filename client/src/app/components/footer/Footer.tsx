import Image from 'next/image'
import Link from 'next/link'
import ausa from '../../assets/icons/ausa.svg'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import linkedin from '../../assets/icons/linkedin.svg'

const Footer = () => {
  return (
    <div className="flex w-full flex-col gap-8 bg-[#393980] p-10 text-white md:grid md:grid-cols-3">
      {/* col1 */}
      <div className="flex md:justify-start">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl">About us</h1>
          <Link href="#">
            <span className="border-white hover:border-b-1">
              Student Council
            </span>
          </Link>
          <Link href="#">
            <span className="border-white hover:border-b-1">AUSA Website</span>
          </Link>
        </div>
      </div>
      {/* col2 */}
      <div className="flex md:justify-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl">Services</h1>
          <Link href="#">
            <span className="border-white hover:border-b-1">Advocacy</span>
          </Link>
          <Link href="#">
            <span className="border-white hover:border-b-1">Buddy Program</span>
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
      {/* col3 */}
      <div className="flex md:justify-end">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl">Emergency help</h1>
          <Link href="#">
            <span className="border-white hover:border-b-1">
              Emergency Contacts
            </span>
          </Link>
        </div>
      </div>
      {/* last row */}
      <div className="col-span-3 grid grid-cols-2 gap-4 border-t-1 border-white py-8 md:grid-cols-3">
        <div className="mt-4 hidden h-[100px] w-[100px] flex-shrink-0 md:mt-0 md:block md:h-40 md:w-40">
          <Image src={ausa} alt="TRK AUSA" className="rounded-md" />
        </div>

        {/* middle column, random information */}
        <div className="mt-4 flex flex-col gap-4 md:m-0 md:h-full">
          <div>
            © Te Rōpū Kahikatea - Auckland University Students’ Association
            2025. All Rights Reserved.
          </div>
          <div className="">
            Visit Us: 4 Alfred Street, Auckland Central, Auckland 1010
          </div>
          <div className="">Phone: 09 309 0789</div>
        </div>

        {/* logo image */}
        {/* icon links to socials (instagram, linkedin, facebook) */}
        <div className="col-span-2 mt-4 flex max-h-[160px] flex-shrink-0 justify-start gap-3 md:col-span-1 md:m-0 md:grid md:justify-end">
          <div className="mb-4 h-[40px] w-[40px] flex-shrink-0 md:mb-0">
            <Link href="#" className="">
              <Image src={facebook} alt="Facebook" className="" />
            </Link>
          </div>

          <div className="mb-4 h-[40px] w-[40px] flex-shrink-0 md:mb-0">
            <Link href="#" className="">
              <Image
                src={instagram}
                alt="Instagram"
                className="mb-4 h-[40px] w-[40px] md:mb-0"
              />
            </Link>
          </div>

          <div className="mb-4 h-[40px] w-[40px] flex-shrink-0 md:mb-0">
            <Link href="#" className="">
              <Image
                src={linkedin}
                alt="LinkedIn"
                className="mb-4 h-[40px] w-[40px] md:mb-0"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
