import { Button } from "../ui/Button"
import { Section } from "../ui/Section"

export const Footer = () => {
  return (
    <footer className="w-full text-white">
      <div className="bg-[#0B0E4F] py-5">
      <Section className="">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 max-w-6xl mx-auto">

          {/* Left Column - Logo + Newsletter */}
          <div className="md:w-1/3">
            <h1 className="text-3xl font-bold mb-2">Investa</h1>
            <p className="text-sm mb-4">Stay Up To Date With Our Newsletter</p>
            <form className="flex w-full max-w-sm rounded-full overflow-hidden border border-white bg-white p-1">
              <input
                type="email"
                placeholder="email@example.com"
                className="flex-1 px-5 py-5 text-gray-700 focus:outline-none bg-transparent"
              />
              <Button
                type="submit"
                className="bg-[#0B0E4F] text-white rounded-full px-4 font-semibold"
                text="Subscribe"
              />
            </form>
          </div>

          {/* Middle Columns - Links */}
          <div className="flex flex-col sm:flex-row md:w-2/3 justify-between gap-8 max-w-lg">
            {/* Links */}
            <div>
              <h2 className="font-black mb-3">Links</h2>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="hover:text-gray-300">Home</a></li>
                <li><a href="#" className="hover:text-gray-300">About Us</a></li>
                <li><a href="#" className="hover:text-gray-300">Bookings</a></li>
                <li><a href="#" className="hover:text-gray-300">Blog</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="font-black mb-3">Legal</h2>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="hover:text-gray-300">Terms Of Use</a></li>
                <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-300">Cookie Policy</a></li>
              </ul>
            </div>

            {/* Product */}
            <div>
              <h2 className="font-black mb-3">Product</h2>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="hover:text-gray-300">Take Tour</a></li>
                <li><a href="#" className="hover:text-gray-300">Live Chat</a></li>
                <li><a href="#" className="hover:text-gray-300">Reviews</a></li>
              </ul>
            </div>
          </div>
        </div>

      </Section>
      </div>

        {/* Bottom - Copyright */}
        <div className="my-5 text-center text-sm text-gray-400">
          Copyright 2026 Investa.Com All Rights Reserved
        </div>
    </footer>
  )
}