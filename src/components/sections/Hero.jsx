import { Section } from "../ui/Section";
import { Button } from "../ui/Button";

export const Hero = () => {
  return (
    <Section fullHeight className="flex justify-center gap-16">
      <div className="max-w-2xl">
        <h1 className="text-7xl font-bold text-[#140122] mb-6">
          Invest Smarter, Not Harder
        </h1>

        <p className="text-xl text-[#60089b] mb-8">
          Discover the power of AI-driven investment insights with Investa. Make
          informed decisions and grow your wealth effortlessly.
        </p>

        <Button text="Subscribe To Our Newsletter" />
      </div>

      <img src="/hero.png" alt="hero" className="w-[512px]" />
    </Section>
  );
};