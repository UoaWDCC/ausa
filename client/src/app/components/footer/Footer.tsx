import Image from 'next/image'
import ausa from '../../assets/icons/ausa.svg'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import linkedin from '../../assets/icons/linkedin.svg'
const Footer = () => {
  return (
    <div className="absolute bottom-0 flex w-full flex-col gap-8 bg-[#393980] p-10 text-white md:grid md:grid-cols-3">
      {/* col1 */}
      <div className="flex md:justify-start">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl">About us</h1>
          <h2>Student Council</h2>
          <h2>AUSA website</h2>
        </div>
      </div>
      {/* col2 */}
      <div className="flex md:justify-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl">Services</h1>
          <h2>Advocacy</h2>
          <h2>Buddy Program</h2>
          <h2>Class Representatives</h2>
          <h2>Health & Counselling</h2>
        </div>
      </div>
      {/* col3 */}
      <div className="flex md:justify-end">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl">Emergency help</h1>
          <h2>Insert Emergency Contact Here</h2>
        </div>
      </div>
      {/* last row */}
      <div className="col-span-3 gap-4 border-t-1 border-white py-8 md:flex md:justify-between">
        {/* logo image */}

        <Image src={ausa} alt="TRK AUSA" className="h-24 w-24 rounded-md" />

        {/* middle column, random information */}
        <div className="mt-4 flex flex-col gap-4 md:m-0">
          <div>
            © Te Rōpū Kahikatea - Auckland University Students’ Association
            2025. All Rights Reserved.
          </div>
          <div className="">
            Visit Us: 4 Alfred Street, Auckland Central, Auckland 1010
          </div>
          <div className="">Phone: 09 309 0789</div>
        </div>
        {/* icon links to socials (instagram, linkedin, facebook) */}
        <div className="mt-4 flex flex-col gap-3 md:m-0">
          <Image
            src={facebook}
            alt="Facebook"
            className="mb-4 h-8 w-8 md:mb-0"
          />

          <Image
            src={instagram}
            alt="Instagram"
            className="mb-4 h-8 w-8 md:mb-0"
          />

          <Image
            src={linkedin}
            alt="LinkedIn"
            className="mb-4 h-8 w-8 md:mb-0"
          />
        </div>
      </div>
    </div>
  )
}
export default Footer
