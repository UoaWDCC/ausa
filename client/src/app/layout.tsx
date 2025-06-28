import type { Metadata } from 'next'
import '@/styles/globals.css'
import NavigationBar from './components/navbar/Navbar_final'
import Footer from './components/footer/Footer'

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
        <div
          className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://upload.wikimedia.org/wikipedia/commons/8/8a/Polynesian_Cultural_Center_-_Canoe_Pageant_%288328364423%29.jpg')",
          }}
        />
        {children}
        <Footer />
      </body>
    </html>
  )
}
