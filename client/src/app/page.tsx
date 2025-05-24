import Image from 'next/image'
import { Button } from './components/button/Button'
import Icon1 from './assets/icons/_.svg'

const Home = () => {
  return (
    <div className="overflow-hidden bg-white">
      {/* Info Expanding Section */}
      <div className="flex h-[58vh] flex-row bg-[#FAF7F2]">
        {/* Left side text and button */}
        <div className="flex flex-col justify-center px-16">
          <h1 className="font-geist mb-8 text-6xl font-semibold text-black">
            Your Support
          </h1>{' '}
          <div className="ml-8 flex items-center justify-center gap-4 font-semibold">
            <div className="-translate-y-4">
              <Image src={Icon1} width={80} height={80} alt="Purple Icon" />
            </div>
            <h1 className="font-geist mb-8 text-6xl text-black">Starts Here</h1>
          </div>
          <p className="mb-6 text-2xl text-black">
            Insert description text about something
          </p>
          <div>
            <Button
              variant="outline"
              className="rounded-partial border-none bg-[#FEDEA5] px-6 py-6 text-black shadow-md hover:bg-[#FED280] hover:text-black"
            >
              Start Wellbeing Quiz
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
