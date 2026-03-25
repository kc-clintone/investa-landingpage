import { users } from "../../../utils"
import { Section } from "../ui/Section"

export const Testimonial = () => {
  return (
    <div className="">
    <Section
      id="Testimonial"
      className="py-5 px-6"
    >
      <div className="text-center max-w-2xl mx-auto justify-center flex flex-col items-center">
        <p className="text-sm tracking-[0.2em] text-indigo-600 uppercase">
          Testimonial
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-[#0b0b2c] mt-3 leading-tight max-w-sm">
          What Our Users Say About Us.
        </h2>
      </div>

      <div className="mt-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        <div className="">
            <img src="/testimonial.png"/>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#0b0b2c] leading-snug">
            The Best Financial Accounting App Ever!
          </h3>

          <p className="text-gray-500 mt-6 leading-relaxed">
            Arcu at dictum sapien, mollis vulputate sit id accumsan. Ultricies in ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit.
          </p>

          <div className="flex items-center gap-3 mt-6">
            <div className="flex -space-x-3">
              {users.map(
                (img, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full overflow-hidden border-2 border-white"
                  >
                    <img src={img.image} alt="" width={32} height={32} />
                  </div>
                )
              )}
            </div>
          </div>

          <p className="mt-4 font-semibold text-[#0b0b2c]">
            John Doe, CEO of Company
          </p>
        </div>
      </div>
    </Section>
    </div>
  )
}