import Link from 'next/link'

const ProfileQuizResults = () => {
  return (
    <div>
      <div className="py-5">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Quiz Results
        </h2>
        <p className="text-gray-600">
          No quiz results available at the moment.
          <Link
            className="text-blue-500 underline hover:text-blue-700"
            href="/quiz"
          >
            Take the quiz here!
          </Link>
        </p>
      </div>
      <div className="py-5">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Quiz Resources
        </h2>
        <p className="text-gray-600">
          Your specific quiz resources will be displayed here when your results
          are available.
        </p>
      </div>
    </div>
  )
}
export default ProfileQuizResults
