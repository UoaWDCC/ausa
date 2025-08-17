import Image from 'next/image'
import Link from 'next/link'
import { TiledAusaBackground } from '@/components/ausa/TiledAusaBackground'
import PortalItem1 from '@/components/portal/portal-item/portal-item'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const Portal = () => {
  return (
    <div className="relative z-10 py-20 text-white ">
      <div className="relative z-10 mx-auto max-w-4xl sm:px-4 ">
        <div className="relative  overflow-hidden rounded-md border border-white/20 bg-black/40 p-8 sm:p-10 shadow-2xl backdrop-blur-sm">
          <TiledAusaBackground />

          <div className="relative z-10 mb-6 flex justify-center">
            <Image
              alt="AUSA Logo"
              className="h-20 w-auto drop-shadow-lg sm:h-24"
              height={100}
              src="/static/icons/logo.svg"
              width={300}
            />
          </div>

          <div className="relative z-10 mb-6">
            <Separator className="bg-white/30" />
          </div>

          <h1 className="relative z-10 mb-8 text-center text-3xl font-bold drop-shadow-md">
            Welcome To AUSA Portal
          </h1>

          <div className="relative z-10 mb-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <PortalItem1 content="Go to Home Page" link="/" title="Home" />
            <PortalItem1
              content="Contact Support"
              link="/faq/university-support"
              title="FAQ"
            />
            <PortalItem1
              content="Take online quiz"
              link="/contact"
              title="Contact"
            />
          </div>

          <div className="relative z-10 flex justify-center gap-4">
            <Link href="/signup">
              <Button className="cursor-pointer" size="lg" variant="default">
                SIGN UP
              </Button>
            </Link>
            <Link href="/login">
              <Button className="cursor-pointer" size="lg" variant="secondary">
                LOGIN
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portal
