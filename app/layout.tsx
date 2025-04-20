import Image from "next/image";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="w-full fixed">
          <nav className="flex max-w-7xl mx-auto items-center justify-between p-4 md:pt-4">
            {/* Mobile Logo (hidden on desktop) */}
            <Image
              src="/artboard.png"
              alt="Mobile Logo"
              width={20}
              height={20}
              className="block md:hidden"
            />
            {/* Desktop Logo (hidden on mobile) */}
            <Image
              src="/logo.png"
              alt="Desktop Logo"
              width={100}
              height={100}
              className="hidden md:block"
            />
            <ul className="flex gap-4">
              <li className="text-[#606060] font-semibold text-[14px] md:text-lg">
                3D Models
              </li>
              <li className="text-[#606060] font-semibold text-[14px] md:text-lg">
                About
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
