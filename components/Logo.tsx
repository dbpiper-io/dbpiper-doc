import { Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center justify-center select-none cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center">
          <Image
            width={25}
            height={25}
            src="/logo.svg"
            className="w-16 h-16 filter drop-shadow-primary"
            alt="DBPiper Logo"
          />
        </div>
        <span className="font-heading font-black text-xl uppercase tracking-tight">dbpiper</span>
        {/* Badge for no-code audience */}
        <div className="hidden sm:flex items-center gap-1 px-3 py-1 bg-linear-to-r from-[#FF4500] to-orange-500 text-white text-xs font-bold uppercase">
          <Sparkles className="w-3 h-3" />
          No-Code
        </div>
      </div>
    </Link>
  )
}
