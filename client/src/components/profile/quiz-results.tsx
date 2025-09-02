import { ChartColumnIncreasing, LibraryBig } from 'lucide-react'
import Link from 'next/link'

const ProfileQuizResults = () => {
  return (
    <div>
      <div className="space-y-6">
        {/* Quiz Results */}
        <div className="shadow-sm border rounded-2xl bg-white/80 p-6">
          <div className="flex items-center gap-3 mb-4">
            <ChartColumnIncreasing className="text-green-500 w-6 h-6" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Quiz Results
            </h2>
          </div>
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

        {/* Recommended Resources */}
        <div className="shadow-sm border rounded-2xl bg-white/80 p-6">
          <div className="flex items-center gap-3 mb-4">
            <LibraryBig className="text-green-500 w-6 h-6" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Recommended Resources
            </h2>
          </div>
          <p className="text-gray-600">
            Your specific quiz resources will be displayed here when your
            results are available.
          </p>
        </div>
      </div>
    </div>
  )
}
export default ProfileQuizResults
