import Link from 'next/link'
const Portal = () => {
  return (
    <div>
      Portal
      <Link href="/quiz">
        <button>quiz</button>
      </Link>
      <button>faq</button>
    </div>
  )
}

export default Portal
