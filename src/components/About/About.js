import React from 'react'
import Skills from '../Home/Skills/Skills'
import Banner from './Banner/Banner'
import Description from './Description/Description'
import Experience from './Experience/Experience'
import Music from './Music/Music'
import Research from './Research/Research'

function About() {
  return (
    <div>
        <Banner 
            text='Victor Aduragbemi Adekunle'
        />
        <Description />
        <Research />
        <Experience />
        <Skills />
        <Music />
    </div>
  )
}

export default About