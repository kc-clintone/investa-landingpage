import { Button } from "../ui/Button"
import { navLinks } from "../../../utils.js"

export const Header = () => {
  return (
    // TODO: Add responsive design and mobile menu
    <div className="w-full h-16 flex items-center justify-between py-12 px-8 container mx-auto">
        <div className="text-2xl font-bold text-[rgb(75,0,130)]">Investa</div>
        <div className="flex items-center gap-2 bg-[#A1A1A1] px-1 py-1 rounded-full">
            {
              navLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-[#0b0311] hover:text-[#f8f8f8]/80 transition-colors duration-300 hover:bg-[#0011ff] rounded-full py-4 px-8">{link.name}</a>
              ))
            }
        </div>
        <Button text="Get Started Now" className="bg-[#4b0082] rounded-lg"/>
    </div>
  )
}
