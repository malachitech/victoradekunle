import React from 'react'
import About from './About/About'
import Work from './Work/Work'
import CTA from './CTA/CTA'
import Interests from './Interests/Interests'
import Skills from './Skills/Skills'
import Platforms from './Platforms/Platforms'

function Home() {
  return (
    <div className="bg-white-50">
        <CTA />
        <About />
        <Interests />
        <Skills />
        <Work />
        <Platforms />
    </div>
  )
}

export default Home