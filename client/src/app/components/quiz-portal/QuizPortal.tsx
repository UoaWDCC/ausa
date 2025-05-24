import { Button } from '../button/Button'

const QuizPortal = () => {
  return (
    <div className="m-4 flex w-[450px] flex-col items-center rounded bg-gradient-to-b from-gray-300 via-gray-300 to-blue-200 p-4 text-black sm:m-6 sm:w-[600px] sm:p-6 md:m-10 md:w-[800px] md:p-8 lg:m-20 lg:w-[1200px] lg:p-10">
      <h2 className="sm:text-md mb-2 md:text-lg lg:text-xl">
        By answering a few questions
      </h2>
      <h1 className="mb-4 sm:text-xl md:text-2xl lg:text-3xl">
        We Can Lead You to the Right Resources
      </h1>
      <p className="lg:text-md mb-6 sm:text-xs md:text-sm">
        Information text / stats etc.
      </p>
      <div>
        <Button variant="quiz" className="text-xs">
          Start Wellbeing Quiz
        </Button>
      </div>
    </div>
  )
}
export default QuizPortal
