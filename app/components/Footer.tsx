'use client'

const Footer = () => {
  return (
    <footer className="bg-neutral-300 text-black p-6">
      <div className="font-RK max-w-7xl mx-auto min-h-48">
        <div className="text-xl font-semibold">
          Auckland University Student Association {new Date().getFullYear()} <br />© Te Rōpū
          Kahikatea.
        </div>
      </div>
    </footer>
  )
}

export default Footer
