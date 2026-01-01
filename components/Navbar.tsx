import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Logo } from './Logo'

export const Navbar = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />
          <div className="flex items-center gap-6">
            <Link
              href="/blog"
              className="hidden sm:block text-slate-700 hover:text-indigo-600 font-medium transition-colors"
            >
              Blog
            </Link>
            <Button asChild size="lg" className="px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
              <Link
                href="/waitlist"
              >
                Join the Waitlist
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
