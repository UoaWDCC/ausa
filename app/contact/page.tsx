import Navbar from '../components/navbar/NavBar'
import ContactForm from '../components/contact-form/ContactForm'

const Contact = () => {
  return (
    <div className="font-RG">
      <Navbar /> {/* this is here temporarily */}
      <div className="bg-white font-RK flex flex-col items-center justify-center">
        <div className="bg-[#D9D9D9]">
          <div className="flex flex-col items-center justify-center min-h-screen bg-[#ffffff]">
            <div className="flex flex-col mt-8 w-[340px] md:w-[800px] justify-center items-center lg:w-[1500px] bg-[#D9D9D9] py-12 rounded-xl p-8 gap-10">
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-xl mb-2">Submit an enquiry we’re here to help</p>
                  <h1 className="text-5xl font-bold">Let’s Talk</h1>
                  <h2 className="text-5xl font-extrabold text-black mt-2 mb-4">
                    We’re Here to Support You!
                  </h2>
                  <p className="text-xl text-black">
                    AUSA Independent Student Advice offers free, confidential, and professional
                    support, advice, and information to all current students at the University of
                    Auckland.
                  </p>
                </div>
                <div className="flex flex-col gap-4 mt-8">
                  <span className="text-2xl">phone</span>
                  <span className="text-2xl">insta</span>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact
