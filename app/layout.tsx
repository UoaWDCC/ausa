import type { Metadata } from 'next'
import '../styles/globals.css'
import Navbar from './components/navbar/NavBar'
// import Footer from './components/footer/Footer'

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
        <Navbar />
        {/*<Footer />*/}
        {children}
      </body>
    </html>
  )
}
