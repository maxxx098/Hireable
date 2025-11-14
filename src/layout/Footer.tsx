import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { Inter } from 'next/font/google'

// Initialize the font
const inter = Inter({ subsets: ['latin'] });

const Footer = () => {
  return (
    <footer className='py-20 '>
      <div className="max-w-7xl mx-auto py-8 border-t border-gray-400 text-center">
        <div className='flex items-center justify-between gap-4 '>
          <p className={`text-[16px] font-normal leading-[0.2px] text-gray-600 ${inter.className}`}>
          &copy; {new Date().getFullYear()} Hireable PH.
        </p>
        <ul className='flex items-center justify-evenly gap-6'>
          <li>
            <Facebook color='gray'/>
          </li>
          <li>
            <Instagram color='gray'/>
          </li>
          <li>
            <Linkedin color='gray'/>
          </li>
          <li>
            
          </li>
        </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
