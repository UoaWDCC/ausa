import Navbar from '../components/navbar/NavBar'
import ContactForm from '../components/contact-form/ContactForm'

const Contact = () => {
  return (
    <div className="font-RG">
      <Navbar /> {/* this is here temporarily */}
      <div className="bg-white font-RK xl:p-10">
        <div className="flex flex-col items-center min-h-screen bg-[#ffffff]">
          <div className="flex flex-col mt-8 w-[90%] md:w-[95%] md:justify-center items-center xl:flex-row lg:max-w-[1500px] bg-[#D9D9D9] p-8 xl:p-15 rounded-[55px] gap-10">
            <div className="flex flex-col items-center xl:items-start gap-5 xl:gap-25 text-center xl:text-left">
              <div>
                {/* only show this text on wide-screen displays */}
                <p className="hidden xl:block text-xl mb-2 text-black">
                  Submit an enquiry we’re here to help
                </p>

                {/* only show this text on wide-screen displays */}
                <h1 className="hidden xl:block text-3xl xl:text-5xl font-bold text-black">
                  Let’s Talk
                </h1>

                <h2 className="text-3xl xl:text-5xl font-extrabold text-black mt-2 mb-4">
                  We’re Here to Support You!
                </h2>
                <p className="text-md xl:text-xl text-black">
                  AUSA Independent Student Advice offers free, confidential, and professional
                  support, advice, and information to all current students at the University of
                  Auckland.
                </p>
              </div>
              <div className="flex flex-row xl:flex-col text-lg xl:text-xl text-black gap-4">
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
