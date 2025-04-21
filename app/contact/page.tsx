import Navbar from '../components/navbar/NavBar'
import ContactForm from '../components/contact-form/ContactForm'

const Contact = () => {
  return (
    <div className="font-RG">
      <Navbar /> {/* this is here temporarily */}
      <div className="bg-white font-RK">
        <div className="bg-[#D9D9D9]">
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  )
}
export default Contact
