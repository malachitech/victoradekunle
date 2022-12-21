import React from 'react'
import Skills from '../Home/Skills/Skills'
import Banner from './Banner/Banner'
import Description from './Description/Description'
import Experience from './Experience/Experience'
import Research from './Research/Research'

function About() {
  return (
    <div>
        <Banner 
            text='About Me'
        />
        <Description />
        <Research />
        <Experience />
        <Skills />
    </div>
  )
}

export default About