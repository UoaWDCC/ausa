const Footer = () => {
    return (
        <div className="absolute bottom-0 p-10 bg-[#393980] w-full md:grid md:grid-cols-3 text-white flex flex-col gap-8">
            {/* col1 */}
            <div className=" md:justify-start flex ">

                <div className="flex-col flex gap-4">
                    <h1 className="text-2xl ">
                        About us
                    </h1>
                    <h2>
                        Student Council
                    </h2>
                    <h2>
                        AUSA website
                    </h2>
                </div>

            </div>
            {/* col2 */}
            <div className=" md:justify-center flex">
                <div className="flex-col flex gap-4  ">
                    <h1 className="text-2xl ">
                        Services
                    </h1>
                    <h2>
                        Advocacy
                    </h2>
                    <h2>
                        Buddy Program
                    </h2>
                    <h2>
                        Class Representatives
                    </h2>
                    <h2>
                        Health & Counselling
                    </h2>
                </div>
            </div>
            {/* col3 */}
            <div className=" md:justify-end flex">
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
            <div className="border-white border-t-1 flex col-span-3 p-12">
                {/* logo image */}
                <div className=" md:justify-end flex gap-10">
                    <div className="border-2 border-white p-2">
                        enter some logo
                        or image here
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
                        <div className="flex flex-col border-2 border-white p-4">

                        </div>
                        <div className="border-2 border-white p-4">

                        </div>
                        <div className="border-2 border-white p-4">

                        </div>
                    </div>

                </div>

            </div>

        </div >
    )

}
export default Footer