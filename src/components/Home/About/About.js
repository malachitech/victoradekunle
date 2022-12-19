import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='p-2 py-24 lg:py-32 lg:p-12 border-b-2 border-b-slate-100'>
        
        <h2 className='uppercase text-4xl lg:text-4xl font-bold'>
            PERSONAL DETAILS
        </h2>

        <div className='border-transparent border-l-blue-400 border-2 p-8 mt-14 lg:mt-4'>
                <p>
                    A certified Data Scientist with a core background in mathematics with 7 years
                    of experience formulating and analyzing deterministic models, self-motivated 
                    and passionate about drawing insights from data to provide data-driven solutions 
                    to business problems.
                </p>
                
                <p className='mt-8'>
                    Exploring machine learning algorithms to build models and analyze chunks of data from
                    different projects and case studies.
                </p>
            
        </div>

        <div>
            <Link
                to="/about"
                className="inline-block px-5 py-3 mt-10 border border-transparent text-base font-medium text-white bg-blue-800 hover:bg-blue-800"
            >
                More...
            </Link>
        </div>
    </div>
  )
}

export default About