import { Button } from "./Button"

export const Header = () => {
  return (
    // TODO: Add responsive design and mobile menu
    <div className="w-full h-16 flex items-center justify-between py-12 px-8">
        <div className="text-2xl font-bold text-[#4B0082]">Investa</div>
        <div className="flex items-center gap-8 bg-[#A1A1A1] px-8 py-4 rounded-full">
            <a href="#" className="text-[#4B0082] hover:text-[#6A5ACD] transition-colors duration-300">Home</a>
            <a href="#" className="text-[#4B0082] hover:text-[#6A5ACD] transition-colors duration-300">About Us</a>
            <a href="#" className="text-[#4B0082] hover:text-[#6A5ACD] transition-colors duration-300">Pricing</a>
            <a href="#" className="text-[#4B0082] hover:text-[#6A5ACD] transition-colors duration-300">Features</a>
        </div>
        <Button text="Get Started Now" />
    </div>
  )
}
