import { reasons } from "../../../utils";
import { Section } from "../ui/Section";

export const WhyUs = () => {
  return (
    <div className="py-20">
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl justify-center mx-auto">
          
          {/* LEFT SIDE */}
          <div className="-mt-65">
            {/* Label */}
            <p className="text-sm tracking-widest text-indigo-600 uppercase">
              Advantages
            </p>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-3">
              Why Choose Us?
            </h2>

            {/* Features */}
            <div className="mt-20 space-y-10 ml-10">
              {reasons.map((item, index) => {
                const Icon = item.icon

                return (
                  <div key={index} className="flex flex-col gap-4">

                    <div className="flex items-center gap-4">                    
                      {/* Icon */}
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600 text-white shrink-0">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-xl font-black text-[#1a0b4b]">
                        {item.title}
                      </h3>
                    </div>


                    {/* Text */}
                    <div>
                      <p className="text-gray-500 mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* RIGHT SIDE (Image) */}
          <div className="relative flex justify-center">
            <img
              src="/solutions.png"
              alt="App preview"
              className="max-w-xs md:max-w-sm drop-shadow-2xl"
            />

            {/* floating effect */}
            <div className="absolute -z-10 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-40"></div>
          </div>

        </div>
      </Section>
    </div>
  )
}