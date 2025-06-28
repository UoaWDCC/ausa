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
          className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat brightness-50"
          style={{
            backgroundImage:
              "url('https://upload.wikimedia.org/wikipedia/commons/8/8a/Polynesian_Cultural_Center_-_Canoe_Pageant_%288328364423%29.jpg')",
          }}
        />
        <div className="fixed right-4 bottom-4 z-10">
          <img
            src="https://img.freepik.com/free-psd/halfopened-coconut-shell-showcasing-its-creamy-white-interior-small-bite-taken-out-it-its-delectable-treat-image-portrays-freshness-tropical-vibes_191095-78031.jpg?semt=ais_items_boosted&w=740"
            alt="Bottom right image"
            className="h-16 w-16 rounded object-cover"
          />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  )
}
