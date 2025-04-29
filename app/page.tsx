import Image from 'next/image'
import image from './assets/icons/logo.svg'

type CardProps = {
  src: string;
  alt: string
}

const Card = ({ src, alt }: CardProps) => {
  return (
    <div className="border-2 border-gray-500 rounded-md w-[100%] p-[0.5rem]">
      <Image src={src} alt={alt} />
    </div>
  )
}

const RectangleCard = () => {
  return (
    <div className="border-2 border-gray-500 rounded-md w-[300px] h-[500px] p-[0.5rem] m-3" />
  )
}

const Home = () => {
  return (
    <div className="w-[500px] sm:w-[650px] md:w-[800px] lg:w-[1100px] xl:w-[1300px] mx-auto px-4 font-sans flex flex-col justify-center items-center">
      <div className="w-full mx-auto border border-gray-800 flex flex-col items-center justify-center m-4 p-4 gap-4">
        {/* Rectangles */}
        <div className="border border-gray-800 w-full p-2 flex justify-between m-5">
          <RectangleCard />
          <RectangleCard />
          <RectangleCard />
          <RectangleCard />
        </div>

        {/* Squares */}
        {/* <div className="border border-gray-600 rounded-md w-[200px] h-[200px] mt-4 hover:bg-black hover:-translate-y-4 hover:translate-x-4 duration-300"></div> */}
        {/* <div className="grid lg:grid-cols-4 gap-4 grid-cols-2 md:grid-cols-3 place-items: center"> */}
        <div className="group flex overflow-hidden gap-[0.5rem] w-full mx-auto">
          <div className="transition-transform flex flex-none w-full gap-2 animate-infinite-scrolling">
            <Card src={image} alt="ausa" />
            <Card src={image} alt="ausa" />
            <Card src={image} alt="ausa" />
            <Card src={image} alt="ausa" />
          </div>
          <div className="transition-transform flex flex-none w-full gap-2 animate-infinite-scrolling">
            <Card src={image} alt="ausa" />
            <Card src={image} alt="ausa" />
            <Card src={image} alt="ausa" />
            <Card src={image} alt="ausa" />
          </div>
        </div>

        <div className="group flex overflow-hidden gap-[0.5rem] w-full mx-auto">
          <div className="transition-transform flex flex-none w-full gap-2 animate-infinite-scrolling2">
            <Card src={image} alt="ausa" />
            <Card src={image} alt="ausa" />
            <Card src={image} alt="ausa" />
            <Card src={image} alt="ausa" />
          </div>
          <div className="transition-transform flex flex-none w-full gap-2 animate-infinite-scrolling2">
            <Card src={image} alt="ausa" />
            <Card src={image} alt="ausa" />
            <Card src={image} alt="ausa" />
            <Card src={image} alt="ausa" />
          </div>
        </div>

        {/* Texts */}
        <div className="border border-black-800 w-full p-4 flex m-2 p-20">
          <div className="border border-black-800 w-[700px] h-[500px] justify-center text-xl text-center align-middle m-2 py-60">
            YOUR AUSA
          </div>
          <div className="border border-black-800 w-[100%] h-[500px] justify-center break-keep m-2 p-20">
            Te Rōpū Kahikatea - Auckland University Students’ Association was formed in 1891.

            Since then, AUSA has been committed to representing and advocating for students at the University of Auckland, as well as running awesome events, and providing a range of support services. AUSA is run by students for students.We’re here to help you to get on with why you’re really at University, and are committed to providing you with the best student experience. AUSA is a voluntary association. It is completely free to join. AUSA services and events are available to all students at the University of Auckland regardless of their membership status with AUSA.
            We are run by a student executive of elected representatives. You can find us at AUSA House, 4 Alfred Street (opposite the main library). All our staff and student executive are based in this building.

            AUSA does three key things: Student Support, Student Voice, and Student Experience.
          </div>


        </div>
      </div>
    </div>
  )
}
export default Home
