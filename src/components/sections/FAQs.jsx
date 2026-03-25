import { useState } from "react"
import { Section } from "../ui/Section"
import { faqs } from "../../../utils"
import { MinusCircle, PlusCircleIcon } from "lucide-react"


export const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="bg-white py-5" id="faqs">
    <Section className="flex flex-col items-center gap-12 align-start">
      <div className="w-full flex flex-col max-w-6xl mb-5">
        {/* Top label */}
        <p className="text-sm tracking-widest text-indigo-600 uppercase">
          F.A.Q
        </p>

        {/* Main heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a0b4b] mt-3 text-left max-w-125">
          Frequently Asked questions.
        </h2>
      </div>

      <div className="w-full max-w-6xl flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isActive = index === activeIndex

          return (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className={`cursor-pointer rounded-lg px-6 py-5 transition-all duration-300 ${
                isActive
                  ? "bg-indigo-700 text-white"
                  : "bg-gray-100/30 text-black shadow-md"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-6xl font-bold opacity-70">
                  {index + 1}.
                </span>

                <h3 className="text-2xl font-bold">
                  {faq.question}
                </h3>

                <span className="ml-auto">
                  {isActive ? <MinusCircle/> : <PlusCircleIcon/>}
                </span>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isActive ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-lg opacity-90 ml-16">
                  {faq.answer}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="w-full max-w-6xl items-baseline">
        <button className="bg-indigo-700 text-white px-6 py-3 rounded-md hover:bg-indigo-800 transition">
          See More Questions
        </button>
      </div>
    </Section>
    </div>
  )
}
