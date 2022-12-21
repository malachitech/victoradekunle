import React from 'react'
import Banner from '../About/Banner/Banner'
import { Link } from 'react-router-dom'
import cousera from '../Images/cousera.jpg'
import greatLearning from '../Images/great-learning.png'
import python from '../Images/python.png'
import udemy from '../Images/diff-transform.jpg'

import './Awards.css'
/* This example requires Tailwind CSS v2.0+ */
const awards = [
    {
        title: 'Google Data Analytics Professional Certificate ',
        location: 'Cousera',
        date: 'July 2022',
        img:  cousera,
        
    },

    {
        title: 'Python for Data Science and Machine Learning',
        location: 'Udemy',
        date: 'August 2022',
        img:  udemy,
        
    },
    {
        title: 'Machine Learning with Python',
        location: 'LinkedIn',
        date: 'November 2022',
        img:  python,
        
    },

    {
        title: 'Shinkansen (Japanese Bullet Train',
        location: 'GreatLearning Hackathon',
        date: 'December 2022',
        img: greatLearning,
        
    },

  ]
  
function Awards() {
  return (

    <div>
        <Banner text='Awards And Recognitions' />


        <div className='py-24 mx-auto lg:w-3/5 w-4/5'>
     
            <div className='text-center py-2 pb-16'>
                <h2 className='uppercase text-4xl lg:text-4xl font-bold '>
                    Awards
                </h2>
            </div>
        <div className="awards-group grid grid-cols-1 gap-4 sm:grid-cols-2">
        {awards.map((paper, i) => (
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
                        <p className="text-lg text-blue-800 text-gray-900 pb-5 ">{paper.location} &#124; {paper.date}</p>
                    </div>
                    
                    
                </div>
            </div>
            
            </div>
        ))}
        </div>
        
    </div>
    </div>
    
  )
}

export default Awards