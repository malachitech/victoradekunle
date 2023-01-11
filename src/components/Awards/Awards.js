import React from 'react'
import Banner from '../About/Banner/Banner'
import cousera from '../Images/cousera.jpg'
import greatLearning from '../Images/great-learning.png'
import python from '../Images/python.png'
import udemy from '../Images/diff-transform.jpg'
// import kmeans from '../Images/k-means.jpg'

import './Awards.css'
/* This example requires Tailwind CSS v2.0+ */
const awards = [
    {
        title: 'Google Data Analytics Professional Certificate ',
        location: 'Cousera',
        date: 'July 2022',
        img:  cousera,
        link: "https://www.credly.com/badges/89a55ca6-9b1f-4361-b907-e2d9b264bfe4?source=linked_in_profile"
        
    },

    {
        title: 'Python for Data Science and Machine Learning',
        location: 'Udemy',
        date: 'August 2022',
        img:  udemy,
        link: "https://www.udemy.com/certificate/UC-6d9e6d5f-8451-4199-bfc4-230aa9468eb0/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email"
        
    },
    {
        title: 'Machine Learning with Python',
        location: 'LinkedIn',
        date: 'November 2022',
        img:  python,
        link: "https://www.linkedin.com/learning/certificates/f05d8da778f3098f6dfd53a5b8e9a35fb1ad7441dc90a8e3507dd8ad27206310"
    },

    {
        title: 'Shinkansen (Japanese Bullet Train)',
        location: 'GreatLearning Hackathon',
        date: 'December 2022',
        img: greatLearning,
        link: "https://www.linkedin.com/in/victor-adekunle/"
    },

    {
        title: 'Machine Learning with Python: k-Means Clustering',
        location: `
                LinkedIn
                `,
        date: 'November 2022',
        img: 'https://files.realpython.com/media/K-Means-Clustering-in-Python_Watermarked.70101a29a2a2.jpg',
        link: "https://www.linkedin.com/learning/certificates/5ded63e3a64fcf08a02038f476461f82644d18f9846486436b75bb8f484643e0"

    },
    
    {
        title: 'Predictive Analysis',
        location: 'Great Learning',
        date: 'December 2022',
        img: greatLearning,
        link: "https://drive.google.com/file/d/1grxcj_vp-1XPpC9MC0shcBWi4JCpretD/view?usp=share_link"
        
    },

    {
        title: 'Azure Course',
        location: 'Great Learning',
        date: 'December 2022',
        img: greatLearning,
        link: "https://drive.google.com/file/d/1vuAbRLurnu0i26d9FSz2NgzhZRcvKIYD/view?usp=share_link"
        
    },

    
    {
        title: 'Data Science and Machine Learning - Making Data Driven Decisions',
        location: 'MIT Schwarzman College Of Computing',
        date: 'January 2023',
        img: "https://1000logos.net/wp-content/uploads/2022/08/MIT-Logo.png",
        link: "https://drive.google.com/file/d/1D8BvaHP_QBPlNGt7xg07wh9mi36MFhkK/view?usp=share_link"
        
    },


  ]
  
function Awards() {
  return (

    <div>
        <Banner text='Awards And Certifications' />


        <div className='py-24 mx-auto lg:w-3/5 w-4/5'>
     
            <div className='text-center py-2 pb-16'>
                <h2 className='uppercase text-4xl lg:text-4xl font-bold '>
                    Awards And Certifications
                </h2>
            </div>
        <div className="awards-group grid grid-cols-1 gap-4 sm:grid-cols-2">
        {awards.map((paper, i) => (
            <a href={paper.link}
            key={i}
            target="_blank"
            rel='noreferrer'
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
            
            </a>
        ))}
        </div>
        
    </div>
    </div>
    
  )
}

export default Awards