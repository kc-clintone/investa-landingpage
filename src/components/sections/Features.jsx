import { features } from "../../../utils"
import { Section } from "../ui/Section"

export const Features = () => {
  return (
    <div
      id="features"
      className="mx-auto flex flex-col items-center justify-center bg-white py-10"
    >
      {/* Top label */}
      <p className="text-sm tracking-widest text-indigo-600 uppercase">
        Features
      </p>

      {/* Main heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-[#1a0b4b] mt-3 text-center">
        Investa, Smart Money.
      </h2>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 justify-items-center max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <div key={index} className="flex flex-col gap-4 max-w-sm">
                <div className="flex items-center gap-4">
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-indigo-100 text-indigo-600">
                  <Icon size={20} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#1a0b4b]">
                  {feature.title}
                </h3>
                </div>

                {/* Description */}
                <p className="text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="w-full max-w-6xl mx-auto">
          <button className="mt-6 bg-indigo-700 text-white px-6 py-3 rounded-md hover:bg-indigo-800 transition">
            Download The App
          </button>
        </div>
      </Section>
    </div>
  )
}