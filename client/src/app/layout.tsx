import type { Metadata } from 'next'
import '@/styles/globals.css'
import { AuthProvider } from '@/auth/AuthContext'
import ClientLayout from '@/app/ClientLayout'
import Footer from '@/components/footer/Footer'

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
      <body className="">
        <AuthProvider>
          <ClientLayout>{children}</ClientLayout>
        </AuthProvider>
        <footer className="relative z-20 mt-auto">
          <Footer />
        </footer>
      </body>
    </html>
  )
}
