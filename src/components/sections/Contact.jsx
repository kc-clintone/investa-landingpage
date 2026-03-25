import { Facebook, Linkedin, Mail, Phone, Twitter } from "lucide-react"
import { Section } from "../ui/Section"

export const Contact = () => {
  return (
    <div className="bg-white mb-0" id="contact">
    <Section className="py-20 my-0">
      <div className="container mx-auto flex flex-col lg:flex-row gap-10 max-w-6xl">
        {/* Left Column - Contact Info */}
        <div className="lg:w-1/2">
          <p className="text-sm tracking-widest text-indigo-600 uppercase mb-5">Get in Touch With Us</p>
          <h2 className="text-5xl font-black mb-8 max-w-80">Reach Out To Us Today.</h2>

          <div className="space-y-6 text-gray-500 ml-10">
            {/* Email */}
            <div className="flex flex-col">
              <p className="font-extrabold font-lg text-[#0B156C] mb-2">Email address:</p>
              <div className="flex items-center gap-3 ml-2 text-[#0B156C]">
                <Mail/>
                <span>Help@Investa.Co.Ke</span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <p className="font-extrabold font-lg text-[#0B156C] mb-2">Phone:</p>
              <div className="flex items-center gap-3 ml-2 text-[#0B156C]">
                <Phone/>
                <span>+254100000000</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col">
              <p className="font-extrabold font-lg text-[#0B156C] mb-2">Social media:</p>
              <div className="flex items-center gap-3 ml-2 text-[#0B156C]">
                <Facebook/>
                <Linkedin/>
                <Twitter/>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="lg:w-1/2 max-w-lg">
          <form className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="w-1/2 flex flex-col mb-5">
              <label className="text-bold text-lg text-[#0B156C]">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-md bg-gray-200 placeholder-gray-500 focus:outline-none mt-2"
                />
              </div>
              <div className="w-1/2 flex flex-col mb-5">
              <label className="text-bold text-lg text-[#0B156C]">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-md bg-gray-200 placeholder-gray-500 focus:outline-none mt-2"
                />
              </div>
            </div>

            <div className="flex flex-col mb-5">
              <label className="text-bold text-lg text-[#0B156C]">Message</label>
              <textarea
                placeholder="Write Something...."
                className="w-full px-4 py-3 rounded-md bg-gray-200 placeholder-gray-500 focus:outline-none h-32 resize-none mt-2"
              ></textarea>

            </div>

            <button
              type="submit"
              className="bg-blue-700 text-white font-semibold py-4 rounded-md hover:bg-blue-800 transition"
            >
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </Section>
    </div>
  )
}