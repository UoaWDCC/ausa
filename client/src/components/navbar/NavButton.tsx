import Link from 'next/link'

const NavButton = ({ title, link }: { title: string; link: string }) => {
  return (
    // test NavButton component
    <Link
      className="flex min-h-[40px] w-[300px] flex-col items-center justify-center rounded-md border-2 border-gray-700 text-center text-gray-600 duration-300 hover:bg-gray-400 hover:text-gray-200"
      href={link}
    >
      <h1 className="text-2xl font-bold">{title}</h1>
    </Link>
  )
}

export default NavButton
