import { Button } from "../ui/Button"
import { navLinks } from "../../../utils.js"

export const Header = () => {
  return (
    // TODO: Add responsive design and mobile menu
    <div className="fixed top-0 left-0 w-full z-50 mt-5">
      <div className="h-16 flex items-center justify-between px-7 max-w-7xl mx-auto">
        
        <div className="text-2xl font-bold text-[rgb(75,0,130)]">
          Investa
        </div>

        <div className="flex items-center gap-2 bg-[#A1A1A1]/30 px-1 py-1 rounded-full backdrop-blur-lg">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-[#400070] hover:text-[#f8f8f8]/80 transition-colors duration-300 hover:bg-[#0011ff] rounded-full py-2 px-5 text-[16px] font-semibold"
            >
              {link.name}
            </a>
          ))}
        </div>

        <Button text="Get Started Now" className="bg-[#1628D2] rounded-md" />
      </div>
    </div>
  )
}