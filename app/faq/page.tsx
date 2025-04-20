import Navbar from '../components/navbar/NavBar'

const FAQ = () => {
  return (
    <div className="font-RG bg-white min-h-screen">
      <Navbar />
      <div className="w-full bg-gray-300 py-28 flex justify-center">
        <h1 className="text-6xl text-black">FAQs</h1>
      </div>
      <div className="py-10 flex justify-center">
        <p className="text-3xl font-RK text-black">
          Anything you want to know from us?
        </p>
      </div>
    </div>
  )
}
export default FAQ
