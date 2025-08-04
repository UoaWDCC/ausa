import type { Metadata } from 'next'
import '@/styles/globals.css'
import Image from 'next/image'
import NavigationBar from '@/components/navbar/Navbar'

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
            alt="Univeristy of Auckland"
            className="object-cover object-center"
            fill
            priority
            sizes="100vw"
            src={'/static/backgrounds/uoa-background.jpg'}
          />
        </div>
        <main className="relative z-10 w-full max-w-full flex-1 overflow-x-hidden">
          <div className="container mx-auto">
            {children}
          </div>
        </main>
        {/* <footer className="relative z-20 mt-auto bg-white">
          <Footer />
        </footer> */}
      </body>
    </html>
  )
}
