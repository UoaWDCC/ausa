import type { Metadata } from 'next'
import '@/styles/globals.css'
import ClientLayout from '@/app/ClientLayout'
import Footer from '@/components/footer/Footer'

export const metadata: Metadata = {
  title: 'AUSA',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative flex min-h-screen flex-col">
        <ClientLayout>{children}</ClientLayout>
        <footer className="relative z-20 mt-auto">
          <Footer />
        </footer>
      </body>
    </html>
  )
}
