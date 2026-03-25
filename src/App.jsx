import { Hero } from './components/sections/Hero'
import { Features } from './components/sections/Features'
import { WhyUs } from './components/sections/WhyUs'
import { CTA } from './components/sections/CTA'
import { Layout } from './components/layout/Layout'
import { FAQs } from './components/sections/FAQs'
import { Testimonial } from './components/sections/Testimonial'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <div className='flex flex-col min-h-screen bg-[#EEEDFF] overflow-x-hidden'>
    <Layout>
    {/* Hero */}
    <Hero />
    {/* Features */}
    <Features />
    {/* WhyUs */}
    <WhyUs />
    {/* FAQs */}
    <FAQs />
    {/* Testimonials */}
    <Testimonial />
    {/* CTA */}
    <CTA />
    {/* Contact */}
    <Contact/>
    </Layout>
    </div>
  )
}

export default App
