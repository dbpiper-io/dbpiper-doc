import Link from 'next/link'
import { Logo } from './Logo'

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <div className="flex items-center gap-4">
            <Link href='/blog'>
              Blog
            </Link>

            <Link
              href="/waitlist"
              className="bg-[#FF4500] text-white px-6 py-2 font-bold uppercase tracking-wider text-sm hover:bg-black transition-all hover:scale-105">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
