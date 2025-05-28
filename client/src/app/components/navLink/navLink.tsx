import Link from 'next/link'
import React from 'react'

interface NavLinkProps {
  href: string
  text: string
}

export const NavLink: React.FC<NavLinkProps> = ({ href, text }) => {
  return (
    <Link
      className="fixed: group top-4 transition-all duration-300 ease-in-out"
      href={href}
    >
      <span className="bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-2 transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
        {text}
      </span>
    </Link>
  )
}
