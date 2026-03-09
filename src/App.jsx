import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Hero } from './components/Hero'
import { Problem } from './components/Problem'
import { Solution } from './components/Solution'
import { HowItWorks } from './components/HowItWorks'
import { Trust } from './components/Trust'
import { CTA } from './components/CTA'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
    {/* Hero */}
    <Hero />
    {/* Problem */}
    <Problem />
    {/* Solution */}
    <Solution />
    {/* How it works */}
    <HowItWorks />
    {/* Trust */}
    <Trust />
    {/* CTA */}
    <CTA />
    </Layout>
  )
}

export default App
