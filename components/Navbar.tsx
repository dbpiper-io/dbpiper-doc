import Link from 'next/link'
import { Logo } from './Logo'

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-4">
            <Link href="/blog" className="font-medium hover:underline">
              Blog
            </Link>

            <Link
              href="/waitlist"
              className="bg-[#FF4500] text-white px-6 py-2 font-bold uppercase tracking-wider text-sm hover:bg-black transition-all hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <label
            htmlFor="nav-toggle"
            className="sm:hidden cursor-pointer p-2"
            aria-label="Toggle menu"
          >
            ☰
          </label>
        </div>
      </div>

      {/* Mobile menu */}
      <input
        type="checkbox"
        id="nav-toggle"
        className="peer hidden"
      />

      <div className="sm:hidden max-h-0 overflow-hidden peer-checked:max-h-40 transition-all duration-300 border-t-2 border-black">
        <div className="flex flex-col gap-3 px-4 py-4 bg-white">
          <Link href="/blog">Blog</Link>

          <Link
            href="/waitlist"
            className="bg-[#FF4500] text-white text-center px-4 py-2 font-bold uppercase tracking-wider text-sm hover:bg-black transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};
