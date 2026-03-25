import { Section } from "../ui/Section"

export const CTA = () => {
  return (
    <div id="cta" className="bg-linear-to-r from-[#1a1a2e] to-[#4B0082] max-w-6xl mx-auto rounded-lg">
      <Section>
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center pl-15 py-5 gap-10">
          {/* Left Column - Text & Buttons */}
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready To Get Started?
            </h1>
            <p className="text-lg lg:text-xl text-white mb-10">
              Risus Habitamt Leo Egestas Mauris Diam Eget Morbi Tempus Vulputate.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a href="#" className="inline-block">
                <img src="/store.png" alt="Download on the App Store" className="h-15"/>
              </a>
            </div>
          </div>

          {/* Right Column - Phone Mockups */}
          <div className="relative lg:w-1/2 flex justify-center">
            <img src="/mockup1.png" alt="App screen 1" className="w-40 lg:w-300"/>
          </div>
        </div>
      </Section>
    </div>
  )
}