import { Hero } from './components/sections/Hero'
import { Problem } from './components/sections/Problem'
import { Solution } from './components/sections/Solution'
import { HowItWorks } from './components/sections/HowItWorks'
import { CTA } from './components/sections/CTA'
import { Layout } from './components/layout/Layout'
import { FAQs } from './components/sections/FAQs'

function App() {
  return (
    <div className='flex flex-col min-h-screen w-screen bg-[#EEEDFF] overflow-x-hidden'>
    <Layout>
    {/* Hero */}
    <Hero />
    {/* Problem */}
    <Problem />
    {/* Solution */}
    <Solution />
    {/* How it works */}
    <HowItWorks />
    {/* FAQs */}
    <FAQs />
    {/* CTA */}
    <CTA />
    </Layout>
    </div>
  )
}

export default App
