import React from 'react'
import About from './About/About'
import CTA from './CTA/CTA'
import Interests from './Interests/Interests'
import Skills from './Skills/Skills'
import Platforms from './Platforms/Platforms'
import Datascience from './Datascience/Datascience'

function Home() {
  return (
    <div className="bg-white-50">
        <CTA />
        <About />
        <Datascience />
        <Interests />
        <Skills />
        
        <Platforms />
        
    </div>
  )
}

export default Home