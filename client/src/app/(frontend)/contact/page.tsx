import ContactForm from '@/components/contact-form/ContactForm'
const Contact = () => {
  return (
    <div className="font-RG">
      <div className="font-RK bg-white">
        <div className="flex flex-col items-center overflow-hidden bg-[#ffffff]">
          <div className="mt-2 flex w-[90%] flex-col items-center gap-10 rounded-[55px] bg-[#D9D9D9] p-8 md:w-[95%] md:justify-center lg:max-w-[1500px] xl:max-w-[1800px] xl:flex-row xl:p-10">
            <div className="flex flex-col items-center gap-5 text-center xl:items-start xl:gap-25 xl:text-left">
              <div>
                {/* only show this text on wide-screen displays */}
                <p className="mb-2 hidden text-xl text-black xl:block">
                  Submit an enquiry we’re here to help
                </p>

                {/* only show this text on wide-screen displays */}
                <h1 className="hidden text-3xl font-bold text-black xl:block xl:text-5xl">
                  Let’s Talk
                </h1>

                <h2 className="mt-2 mb-4 text-3xl font-extrabold text-black xl:text-5xl">
                  We’re Here to Support You!
                </h2>
                <p className="text-md text-black xl:text-xl">
                  AUSA Independent Student Advice offers free, confidential, and
                  professional support, advice, and information to all current
                  students at the University of Auckland.
                </p>
              </div>
              <div className="flex flex-row gap-4 text-lg text-black xl:flex-col xl:text-xl">
                <span className="text-md">phone</span>
                <span className="text-md">insta</span>
              </div>
            </div>
            <div className="">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact
