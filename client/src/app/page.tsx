import { Button } from './components/button/Button'

const Home = () => {
  return (
    <div className = "flex flex-col items-center">
      <div className="m-4 flex gap-2">
        <Button>Button</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>

      <div className ="bg-gradient-to-b from-gray-300 to-blue-200 text-black rounded flex flex-col items-center
              m-4 sm:m-6 md:m-10 lg:m-20
              p-4 sm:p-6 md:p-8 lg:p-10
              w-[450px] sm:w-[600px] md:w-[800px] lg:w-[1200px]">
        <div>Here comes the texts.</div>
        <div><Button>Quiz</Button></div>
        {/* Vincent */}
      </div>
    </div>
  )
}
export default Home
