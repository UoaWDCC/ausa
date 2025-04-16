import Link, { type LinkProps } from 'next/link'

interface NavButtonProps extends LinkProps {
  label: string
}

const NavButton = ({ href, label, ...props }: NavButtonProps) => {
  return (
    // test NavButton component
    <Link
      {...props}
      className="border-gray-700 flex-col border-2 text-center text-gray-600 rounded-md hover:bg-gray-400 hover:text-gray-200 duration-300 w-[300px] min-h-[40px] flex items-center justify-center"
      href={href}
    >
      <h1 className="text-2xl font-bold">{label}</h1>
    </Link>
  )
}

export default NavButton
