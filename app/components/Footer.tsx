'use client'

const Footer = () => {
  return (
    <footer className="bg-neutral-300 text-black p-6">
      <div className="font-RK max-w-7xl mx-auto min-h-48 flex flex-col gap-6">
        <div className="text-lg font-semibold">
          Auckland University Student Association {new Date().getFullYear()} <br />© Te Rōpū
          Kahikatea.
        </div>

        <div>
          <p className="font-semibold mb-1">Visit Us:</p>
          <p>4 Alfred Street, Auckland Central, Auckland 1010</p>
          <p className="font-semibold mt-4 mb-1">Phone:</p>
          <p>09 309 0789</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
