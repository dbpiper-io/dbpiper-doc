import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center justify-center gap-3 mb-5 select-none cursor-pointer">
      <Image
        width={25}
        height={25}
        src="/logo.svg"
        className="w-12 h-12 filter drop-shadow-primary"
        alt="DBPiper Logo"
      />
      <span className="text-2xl font-bold text-primary bg-clip-text animate-pulse">
        DBPiper
      </span>
    </Link>)
}
