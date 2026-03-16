import { Button } from "../ui/Button";

export const Hero = () => {
  return (
    <div className="mx-auto h-screen flex items-center justify-center bg-[#EEEDFF] container gap-16 w-full -mt-16">
      <div className="max-w-2xl ">
        <h1 className="text-7xl font-bold text-[#140122] mb-6">
          Invest Smarter, Not Harder
        </h1>
        <p className="text-xl text-[#60089b] mb-8">
          Discover the power of AI-driven investment insights with Investa. Make
          informed decisions and grow your wealth effortlessly.
        </p>
        <Button text="Subscibe To Our Newsletter" className="bg-[#1628D2] rounded-md" />
      </div>
      <div>
        <img src="/hero.png" alt="" className="w-[512px] ml-20"/>
      </div>
    </div>
  );
};
