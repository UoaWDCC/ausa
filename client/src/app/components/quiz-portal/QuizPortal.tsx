import Link from 'next/link'
import { Button } from '../button/Button'

const QuizPortal = () => {
  return (
    <div className="container mx-auto max-w-7xl px-8 sm:px-10 md:px-14 lg:px-20">
      <div className="my-8 flex flex-col items-center rounded-md bg-gradient-to-b from-amber-50 via-teal-50 to-cyan-200 p-6 shadow-md text-shadow-sm sm:my-14 sm:py-8 md:my-18 md:py-10 lg:my-24 lg:py-12">
        <h2 className="text-md mb-2 max-w-prose text-center sm:text-lg md:text-xl lg:text-2xl">
          By answering a few questions
        </h2>
        <h1 className="mb-4 max-w-prose text-center text-lg sm:text-xl md:text-2xl lg:text-3xl">
          We Can Lead You to the Right Resources
        </h1>
        <p className="md:text-md mb-6 max-w-prose text-center text-xs sm:text-sm lg:text-lg">
          Information text / stats etc.
        </p>
        <div>
          <Button variant="quiz">
            <Link href="/quiz">Start Wellbeing Quiz</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default QuizPortal
