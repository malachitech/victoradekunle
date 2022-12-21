import React from 'react'
import { Link } from 'react-router-dom'
/* This example requires Tailwind CSS v2.0+ */
const research = [
    {
        title: 'Mathematical Model for the Control of measles ',
        
    },

    {
        title: 'Sensitivity Analysis of the parameters of a Cholera Model ',
        
    },
    {
        title: 'Solution of Cholera Disease Model by Parameter Expansion Method ',
        
    },

    {
        title: 'Variational Iteration Method for Solving an Infectious Disease Model ',
        
    },

    

  ]
  
function Experience() {
  return (
    <div className='py-24 mx-auto lg:w-3/5 w-4/5'>
        <div className='text-center py-2 pb-16'>
            <h2 className='uppercase text-4xl lg:text-4xl font-bold '>
                Research
            </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {research.map((paper, i) => (
            <div
            key={i}
            className="relative border text-center border-gray-300 h-48  bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
            
            <div className="flex-1 min-w-0">
                <a href="/" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-2xl font-bold text-gray-900">{paper.title}</p>
                    
                </a>
            </div>
            </div>
        ))}
        </div>
        <Link
            to="/portfolio"
            className="inline-block px-5 py-3 mt-10 border border-transparent text-base font-medium text-white bg-blue-800 hover:bg-blue-800"
        >
            More Research Work
        </Link>
    </div>
  )
}

export default Experience