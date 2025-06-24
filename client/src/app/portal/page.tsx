import Link from 'next/link'
const Portal = () => {
  return (
    <div className="mt-[70px] flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Portal</h1>
      <div className="flex gap-16">
        {' '}
        <Link href="/quiz">
          <button className="cursor-pointer rounded-md border bg-gray-200 px-8 py-4 text-2xl hover:bg-white">
            quiz
          </button>
        </Link>
        <Link href="/faq">
          <button className="cursor-pointer rounded-md border bg-gray-200 px-8 py-4 text-2xl hover:bg-white">
            faq
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Portal
