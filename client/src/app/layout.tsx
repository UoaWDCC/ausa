import type { Metadata } from 'next'
import '@/styles/globals.css'
import ClientLayout from '@/app/ClientLayout'
import { AuthProvider } from '@/auth/AuthContext'
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
    <div className="">
      <html lang="en">
        <AuthProvider>
          <ClientLayout>{children}</ClientLayout>
        </AuthProvider>
      </html>
      <footer className="relative z-20 mt-auto">
        <Footer />
      </footer>
    </div>
  )
}
