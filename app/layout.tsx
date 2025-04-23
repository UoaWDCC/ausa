import type { Metadata } from 'next'
import '../styles/globals.css'
import NavbarRe from './components/navbar/Navbar_Re'

export const metadata: Metadata = {
  title: 'AUSA',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <NavbarRe />
        {children}
      </body>
    </html>
  )
}
