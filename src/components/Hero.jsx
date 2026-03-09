import { Button } from "./Button"

export const Hero = () => {
  return (
    <div className="mx-auto h-screen flex items-center justify-center bg-[#EEEDFF] w-2/3 container">
      <div>
        <h1 className="text-5xl font-bold text-[#4B0082] mb-6">Invest Smarter, Not Harder</h1>
        <p className="text-xl text-[#4B0082] mb-8">Discover the power of AI-driven investment insights with Investa. Make informed decisions and grow your wealth effortlessly.</p>
        <Button text="Suscibe To Our Newsletter" />
      </div>
      <div>
        <img src="/hero.png" alt="" />
      </div>
    </div>
  )
}
