import Link from 'next/link'
const Portal = () => {
  return (
    <div className="font-geist mt-[70px] flex h-screen flex-col items-center justify-center gap-4 bg-[#393980]">
      <div className="flex flex-col items-center gap-4 rounded-md border-4 border-gray-500 bg-white p-8">
        <h1 className="border text-xl font-bold">portal component</h1>
        <div className="flex gap-4">
          {' '}
          <Link href="/quiz">
            <button className="cursor-pointer border bg-gray-400 px-8 py-4 text-2xl hover:bg-white">
              quiz
            </button>
          </Link>
          <Link href="/faq">
            <button className="cursor-pointer border bg-gray-400 px-8 py-4 text-2xl hover:bg-white">
              faq
            </button>
          </Link>
        </div>
        <div className="flex gap-4">
          <button className="rounded-sm border p-2">sign up</button>
          <button className="rounded-sm border p-2">log in</button>
        </div>
      </div>
    </div>
  )
}

export default Portal
