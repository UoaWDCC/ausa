import PortalItem1 from '@/components/portal/portal-item/portal-item'
import { TiledAusaBackground } from '@/components/ausa/TiledAusaBackground'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'

const Portal = () => {
  return (
    <div className="relative z-10 py-20 text-white ">
      <div className="relative z-10 mx-auto max-w-4xl sm:px-4 ">
        <div className="relative  overflow-hidden rounded-md border border-white/20 bg-black/40 p-8 sm:p-10 shadow-2xl backdrop-blur-sm">
          <TiledAusaBackground />

          <div className="relative z-10 mb-6 flex justify-center">
            <Image
              src="/static/icons/logo.svg"
              alt="AUSA Logo"
              width={300}
              height={100}
              className="h-20 w-auto drop-shadow-lg sm:h-24"
            />
          </div>

          <div className="relative z-10 mb-6">
            <Separator className="bg-white/30" />
          </div>

          <h1 className="relative z-10 mb-8 text-center text-3xl font-bold drop-shadow-md">
            Welcome To AUSA Portal
          </h1>

          <div className="relative z-10 mb-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <PortalItem1 title="Home" content="Go to Home Page" link="/" />
            <PortalItem1
              title="Support"
              content="Contact Support"
              link="/support"
            />
            <PortalItem1 title="Quiz" content="Take online quiz" link="/quiz" />
          </div>

          <div className="relative z-10 flex justify-center gap-4">
            <Button variant="default" size="lg">
              SIGN UP
            </Button>
            <Button variant="secondary" size="lg">
              LOGIN
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portal
