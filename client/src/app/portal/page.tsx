import Link from 'next/link'
const Portal = () => {
  return (
    <div className="flex flex-col items-center">
      Portal
      <Link href="/quiz">
        <button>quiz</button>
      </Link>
      <Link href="/faq">
        <button>faq</button>
      </Link>
    </div>
  )
}

export default Portal
