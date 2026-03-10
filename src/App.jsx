import { Hero } from './components/Hero'
import { Problem } from './components/Problem'
import { Solution } from './components/Solution'
import { HowItWorks } from './components/HowItWorks'
import { CTA } from './components/CTA'
import { Layout } from './components/Layout'
import { FAQs } from './components/FAQs'

function App() {
  return (
    <div className='flex flex-col min-h-screen bg-[#EEEDFF]'>
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
