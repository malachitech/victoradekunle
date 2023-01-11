import React from 'react'
import './Experience.css'
/* This example requires Tailwind CSS v2.0+ */
const people = [
    {
        role: 'Digital Skill Facilitator and Personal Development Support ',
        location: 'Remote',
        period: 'Apr 2018 - Present ',
    },

    {
        role: 'Data Analyst ',
        location: 'Digital-focus.org · Contract',
        period: 'Jul 2022 - Nov 2022 ',
    },

    {
        role: 'University Of Illorin ',
        location: `
                Doctor Of Philosophy - PhD, Applied Mathematics. \n
                Mathematical Modelling and Epidemiology
            `,
        period: 'Oct 2016 - Dec 2022',
    },

    {
        role: 'University Of Illorin ',
        location: `
                Master's Degree - Applied Mathematics.
            `,
        period: 'Oct 2014 - Oct 2015 ',
    },

    {
        role: 'Massachusetts Institute of Technology',
        location: `
                Professional , Data Science and Machine Learning
            `,
        period: 'Sep 2022-Jan 2023 ',
    },
    
    {
        role: 'Data Analyst',
        location: `
        VividBlock
            `,
        period: 'July 2022 – Dec 2022 ',
    },
    

    {
        role: 'Python for Data Science and Machine Learning Bootcamp ',
        location: `
            Udemy
            `,
        period: 'Issued Aug 2022 · No Expiration Date ',
    },

    {
        role: 'Data Science and Machine Learning - Making Data Driven Decisions',
        location: 'MIT Schwarzman College Of Computing',
        period: 'January 2023',
        
    },
  ]
  
function Experience() {
  return (
    <div className='py-24 mx-auto lg:w-3/5 w-4/5'>
        <div className='text-center py-2 pb-16'>
            <h2 className='uppercase text-4xl lg:text-4xl font-bold '>
                My Experience
            </h2>
        </div>
        <div className=" grid grid-cols-1 items-center gap-4 sm:grid-cols-2 justify-center">
        {people.map((person, i) => (
            <div
            key={i}
            className="experience-card relative border text-white text-center border-gray-300 h-48 px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
            
            <div className="flex-1 min-w-0">
                <div className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-lg font-bold text-gray-100">{person.role}</p>
                    <p className="text-sm text-gray-200">{person.location}</p>
                    <p className="text-sm text-gray-200">{person.period}</p>
                </div>
            </div>
            </div>
        ))}
        </div>
        <a
            href="/awards"
            className="inline-block px-5 py-3 mt-10 border border-transparent text-base font-medium text-white bg-blue-800 hover:bg-blue-600"
        >
            More Awards and Recognitions
        </a>
    </div>
  )
}

export default Experience