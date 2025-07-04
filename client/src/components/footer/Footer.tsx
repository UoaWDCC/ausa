import Image from 'next/image'
import Link from 'next/link'
import ausa from '../../app/assets/icons/ausa.svg'
import facebook from '../../app/assets/icons/facebook.svg'
import gps from '../../app/assets/icons/gps.svg'
import instagram from '../../app/assets/icons/instagram.svg'
import linkedin from '../../app/assets/icons/linkedin.svg'
import phone from '../../app/assets/icons/phone.svg'

const Footer = () => {
  return (
    <div>
      {/* Links */}
      <div className="bottom-0 left-0 z-50 w-full transition-all duration-500 ease-out p-6 text-white bg-slate-900/95 backdrop-blur-md flex flex-col md:grid md:grid-cols-[1fr_0.35fr_0.35fr_0.35fr] md:gap-x-6">
        {/* Logo */}
        <div className="flex flex-col ">
          <div className="flex flex-col gap-4 p-2">
            {/* <div className="relative flex-shrink-0 md:mt-0 md:block md:h-25 md:w-25">
            <Image src={ausa} alt="TRK AUSA" className="rounded-md" fill/>
          </div> */}
            <div className="flex flex-row gap-2">
              <Image src={gps} alt="Facebook" className="h-[20px] w-[20px]" />4
              Alfred Street, Auckland Central, Auckland 1010
            </div>
            <div className="flex flex-row gap-2">
              <Image src={phone} alt="Facebook" className="h-[20px] w-[20px]" />
              09 309 0789
            </div>
            {/* Social Media */}
            <div className="flex flex-row items-center gap-4 mt-2">
              {/* Facebook */}
              <div className="flex flex-row mb-4 h-[20px] w-[20px] flex-shrink-0 md:mb-0">
                <Link href="#" className="">
                  <Image src={facebook} alt="Facebook" className="" />
                </Link>
              </div>
              {/* Instagram */}
              <div className="flex flex-row mb-4 h-[20px] w-[20px] flex-shrink-0 md:mb-0">
                <Link href="#" className="">
                  <Image
                    src={instagram}
                    alt="Instagram"
                    className="mb-4 h-[20px] w-[20px] md:mb-0"
                  />
                </Link>
              </div>
              {/* LinkedIn */}
              <div className="flex flex-row mb-4 h-[20px] w-[20px] flex-shrink-0 md:mb-0">
                <Link href="#" className="">
                  <Image
                    src={linkedin}
                    alt="LinkedIn"
                    className="mb-4 h-[20px] w-[20px] md:mb-0"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="">
            Visit Us: 4 Alfred Street, Auckland Central, Auckland 1010
          </div>
          <div className="">Phone: 09 309 0789</div>
        </div>

        {/* logo image */}
        {/* icon links to socials (instagram, linkedin, facebook) */}
        <div className="col-span-2 mt-4 flex max-h-[160px] flex-shrink-0 justify-start gap-3 md:col-span-1 md:m-0 md:grid md:justify-end">
          <div className="mb-4 h-[20px] w-[20px] flex-shrink-0 md:mb-0">
            <Link href="#" className="">
              <Image src={facebook} alt="Facebook" className="" />
            </Link>
          </div>

          <div className="mb-4 h-[20px] w-[20px] flex-shrink-0 md:mb-0">
            <Link href="#" className="">
              <Image
                src={instagram}
                alt="Instagram"
                className="mb-4 h-[20px] w-[20px] md:mb-0"
              />
            </Link>
          </div>

          <div className="mb-4 h-[20px] w-[20px] flex-shrink-0 md:mb-0">
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
