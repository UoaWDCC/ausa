import { Button } from './components/button/Button'

const Home = () => {
  return (
    <div className="overflow-hidden bg-white">
      {/* Info Expanding Section */}
      <div className="flex h-[58vh] flex-row bg-[#FAF7F2]">
        {/* Left side text and button */}
        <div className="flex flex-col justify-center px-16">
          <h1 className="mb-8 text-7xl font-semibold text-black">
            Your Support Starts Here
          </h1>
          <p className="mb-6 text-2xl text-black">
            Insert description text about something
          </p>
          <div>
            <Button
              variant="outline"
              className="rounded-partial bg-[#FEDEA5] px-6 py-6 text-black hover:bg-[#FED280] hover:text-black"
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
