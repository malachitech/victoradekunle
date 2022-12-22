import React from 'react'
import { Link } from 'react-router-dom'
import measles from '../../Images/measles.jpg'
import parameter from '../../Images/parameter.jpg'
import sensitivity from '../../Images/sensitivity.jpg'
import variation from '../../Images/variation.jpg'
import './Research.css'
/* This example requires Tailwind CSS v2.0+ */
const research = [
    {
        title: 'Mathematical Model for the Control of measles ',
        img:  measles,
        link: 'https://www.academia.edu/attachments/95506649/download_file?s=portfolio'
    },

    {
        title: 'Sensitivity Analysis of the parameters of a Cholera Model ',
        img:  parameter,
        link: 'https://www.academia.edu/attachments/95506562/download_file?s=portfolio'

    },
    {
        title: 'Solution of Cholera Disease Model by Parameter Expansion Method ',
        img:  sensitivity,
        link: 'https://www.academia.edu/attachments/95506399/download_file?s=portfolio'

    },

    {
        title: 'Variational Iteration Method for Solving an Infectious Disease Model ',
        img: variation,
        link: 'https://www.academia.edu/attachments/95506208/download_file?s=portfolio'

    },

    

  ]
  
function Research() {
  return (
    <div className='py-24 mx-auto lg:w-3/5 w-4/5'>
        <div className='text-center py-2 pb-16'>
            <h2 className='uppercase text-4xl lg:text-4xl font-bold '>
                Research
            </h2>
        </div>
        <div className=" research-group grid grid-cols-1 gap-4 sm:grid-cols-2">
        {research.map((paper, i) => (
            <div href={paper.link}
            key={i}
            className="relative border text-center border-gray-100 h-full  bg-white shadow-lg flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
            
            <div className="flex-1 min-w-0">
                <div className="focus:outline-none">
                    <img 
                        src={paper.img}
                        alt={paper.title}
                        
                    />
                    <div className='text-center py-10 px-10'>
                        {/* <span className="absolute inset-0 " aria-hidden="true" /> */}
                        <p className="text-2xl font-bold text-gray-900 pb-10 ">{paper.title}</p>
                        <a href={paper.link} className='text-rose-600 text-bold hover:text-rose-900'>Click To Download</a>
                    </div>
                    
                    
                </div>
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

export default Research