import { TiledAusaBackground } from '@/components/ausa/TiledAusaBackground'

const Login = () => {
  return (
    <div className="relative z-10 overflow-hidden py-40 text-center text-white">
      <div className="relative z-10 mx-auto max-w-md sm:px-4">
        <div className="overflow-hidden rounded-md border border-white/20 bg-black/40 py-10 px-6 sm:px-8 shadow-2xl backdrop-blur-sm">
          <TiledAusaBackground />
          <h1 className="mb-6 text-3xl font-semibold">Dashboard</h1>
        </div>
      </div>
    </div>
  )
}

export default Login
