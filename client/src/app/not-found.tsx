import Link from "next/link";
import Image from "next/image";

const notFound = () => {
  return (

    <div className = "mt-[70px] text-white min-h-[calc(100vh-70px)] w-full flex flex-col items-center justify-center">
      <div className="text-4xl mb-5">OOPS!</div>
      <div className="text-9xl font-light mb-10">404</div>
      <div className="text-2xl mb-3">The link may be broken or the page may have been removed</div>
      <div className = "grid grid-cols-1 md:grid-cols-3 gap-5 text-[#4CB7E6] text-xl">
        <Link className="hover:underline" href="/">
          ← Go to Home
        </Link>
        <Link className="hover:underline" href="/contact">
          ← Contact Us
        </Link>
        <Link className="hover:underline" href="/faq">
          ← FAQs
        </Link>
      </div>
    </div>

  )
}

export default notFound;
