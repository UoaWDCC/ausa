import type { Metadata } from 'next'
import '../styles/globals.css'
import NavigationBar from './components/navbar/Navbar_final'
import Footer from './components/Footer'

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
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
