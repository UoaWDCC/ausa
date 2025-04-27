import Image from 'next/image'
import image from './assets/icons/logo.svg'

type CardProps ={
  src: string;
  alt: string
}

const Card = ({src, alt}: CardProps) => {
  return (
    <div className="border-2 border-gray-500 rounded-md w-[100%] p-[0.5rem]">
      <Image src={src} alt={alt}/>
    </div>
  )
}

const Home = () => {
  return (
    <div className="w-[500px] sm:w-[650px] md:w-[800px] lg:w-[1100px] xl:w-[1300px] mx-auto px-4 font-sans flex flex-col justify-center items-center">
      <div className="w-full mx-auto border border-gray-800 flex flex-col items-center justify-center m-4 p-4 gap-4">
        {/* Rectangles */}
        <div className="border border-gray-800 w-full p-2">
          section 1
        </div>

        {/* Squares */}
        {/* <div className="border border-gray-600 rounded-md w-[200px] h-[200px] mt-4 hover:bg-black hover:-translate-y-4 hover:translate-x-4 duration-300"></div> */}
        {/* <div className="grid lg:grid-cols-4 gap-4 grid-cols-2 md:grid-cols-3 place-items: center"> */}
        <div className="group flex overflow-hidden gap-[0.5rem] w-full mx-auto">
          <div className="transition-transform flex flex-none w-full gap-2 animate-infinite-scrolling">
            <Card src={image} alt="ausa"/>
            <Card src={image} alt="ausa"/>
            <Card src={image} alt="ausa"/>
            <Card src={image} alt="ausa"/>
          </div>
          <div className="transition-transform flex flex-none w-full gap-2 animate-infinite-scrolling">
            <Card src={image} alt="ausa"/>
            <Card src={image} alt="ausa"/>
            <Card src={image} alt="ausa"/>
            <Card src={image} alt="ausa"/>
          </div>
        </div>

        <div className="group flex overflow-hidden gap-[0.5rem] w-full mx-auto">
          <div className="transition-transform flex flex-none w-full gap-2 animate-infinite-scrolling2">
            <Card src={image} alt="ausa"/>
            <Card src={image} alt="ausa"/>
            <Card src={image} alt="ausa"/>
            <Card src={image} alt="ausa"/>
          </div>
          <div className="transition-transform flex flex-none w-full gap-2 animate-infinite-scrolling2">
            <Card src={image} alt="ausa"/>
            <Card src={image} alt="ausa"/>
            <Card src={image} alt="ausa"/>
            <Card src={image} alt="ausa"/>
          </div>
        </div>

        {/* Texts */}
        <div className="border border-black-800 w-full p-4">
          hi
        </div>
      </div>
    </div>
  )
}
export default Home
