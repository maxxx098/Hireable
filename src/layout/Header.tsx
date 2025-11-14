import Image from "next/image"
import Logo from "@/assets/Logo.png"
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const Header = () => {
  return (
  <header>
    <div className="flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex items-center ">
        <Image src={Logo} alt="Hirable Logo" className="h-9 w-full" />
      </div>
      <button
       style={{ background: "var(--Button-Primary-Default, rgba(0,167,248,1))" }}
       className={` text-white font-medium px-6 py-2.5 rounded-lg transition-colors ${inter.className}`}>
        Join the waitlist
      </button>
    </div>
  </header>
  )
}

export default Header