import type { Metadata } from 'next'
import '@/styles/globals.css'
import Footer from './components/footer/Footer'
import NavigationBar from './components/navbar/Navbar_final'
import Image from 'next/image'

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
      <body className="relative flex min-h-screen flex-col">
        <NavigationBar />
        <div className="pointer-events-none fixed inset-0 -z-10 brightness-35">
          <Image
            src={'/static/backgrounds/uoa-background.jpg'}
            alt="Univeristy of Auckland"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        <main className="relative z-10 w-full max-w-full flex-1 overflow-x-hidden">
          <div className="container mx-auto px-4 pb-16 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
        <footer className="relative z-20 mt-auto bg-white">
          <Footer />
        </footer>
      </body>
    </html>
  )
}
