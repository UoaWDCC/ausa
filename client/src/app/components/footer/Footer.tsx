import Image from 'next/image'
import ausa from '../../assets/icons/ausa.svg'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import Link from 'next/link'
const Footer = () => {
    return (
        <div className="p-10 bg-[#393980] w-full text-white flex flex-col gap-8 md:grid md:grid-cols-3 absolute bottom-0">
            {/* col1 */}
            <div className=" md:justify-center flex ">

                <div className="flex-col flex gap-4">
                    <h1 className="text-2xl ">
                        About us
                    </h1>
                    <Link href="#" className="">
                        <span className="border-transparent border-white hover:border-b-1">
                            Student Council
                        </span>
                    </Link>
                    <Link href="#" className="">
                        <span className="border-transparent border-white hover:border-b-1">
                            AUSA website
                        </span>
                    </Link>
                </div>

            </div>
            {/* col2 */}
            <div className=" md:justify-center flex">
                <div className="flex-col flex gap-4  ">
                    <h1 className="text-2xl ">
                        Services
                    </h1>
                    <Link href="#" className="">
                        <span className="border-transparent border-white hover:border-b-1">
                            Advocacy
                        </span>
                    </Link>
                    <Link href="#" className="">
                        <span className="border-transparent border-white hover:border-b-1">
                            Buddy Program
                        </span>
                    </Link>
                    <Link href="#" className="">
                        <span className="border-transparent border-white hover:border-b-1">
                            Class Representatives
                        </span>
                    </Link>
                    <Link href="#" className="">
                        <span className="border-transparent border-white hover:border-b-1">
                            Health & Counselling
                        </span>
                    </Link>
                </div>
            </div>
            {/* col3 */}
            <div className=" md:justify-center flex">
                <div className="flex-col flex gap-4">
                    <h1 className="text-2xl ">
                        Emergency help
                    </h1>
                    <h2>
                        Insert Emergency Contact Here
                    </h2>
                </div>
            </div>
            {/* last row */}
            <div className="border-white border-t-1 flex flex-col col-span-3 p-12">
                {/* logo image */}
                <div className="  gap-10 md:flex lg:gap-30 justify-center">
                    <div className="">
                        <Image src={ausa} alt="TK AUSA" className="h-28 w-28 mb-4 md:mb-0" />
                    </div>
                    {/* middle column, random information */}
                    <div className="flex flex-col gap-4">
                        <div>
                            © Te Rōpū Kahikatea - Auckland University Students’ Association 2025. All Rights Reserved.
                        </div>
                        <div className="">
                            Visit Us: 4 Alfred Street, Auckland Central, Auckland 1010
                        </div>
                        <div className="">
                            Phone: 09 309 0789
                        </div>
                    </div>
                    {/* icon links to socials (instagram, linkedin, facebook) */}
                    <div className="flex flex-col gap-3">
                        <div className="">
                            <Image src={facebook} alt="Facebook" className="h-8 w-8 mb-4 md:mb-0" />
                        </div>

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
        </div>
    )


}
export default Footer
