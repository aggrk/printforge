import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 bg-white z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 md:px-0 flex items-center justify-between h-16 md:h-20">
        {/* Logo - Mobile */}
        <Link href="/" className="md:hidden">
          <Image
            src="/artboard.png"
            alt="Mobile Logo"
            width={24}
            height={24}
            className="w-6 h-6 object-contain"
          />
        </Link>

        {/* Logo - Desktop */}
        <Link href="/" className="hidden md:block">
          <Image
            src="/logo.png"
            alt="Desktop Logo"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-6 md:gap-8">
          <li>
            <Link
              href="/3d-models"
              className="text-[#606060] hover:text-[#1E1E1E] font-medium text-sm md:text-base transition-colors duration-200"
            >
              3D Models
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-[#606060] hover:text-[#1E1E1E] font-medium text-sm md:text-base transition-colors duration-200"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
