import React from 'react'
import Banner from '../About/Banner/Banner'
// import measles from '../Images/measles.jpg'
// import parameter from '../Images/parameter.jpg'
// import sensitivity from '../Images/sensitivity.jpg'
// import difftransform from '../Images/diff-transform.jpg'
// import fractional from '../Images/fractional.jpg'
// import orthogonal from '../Images/orthogonal.png'
// import treatment from '../Images/treatment.jpg'
// import variation from '../Images/variation.jpg'

import './ResearchWork.css'
/* This example requires Tailwind CSS v2.0+ */
const research = [
    {
        title: 'Mathematical Model for the Control of measles ',
        img:  'https://d.newsweek.com/en/full/1554654/per-math-01-177498105-banner.webp?w=1280&f=5d66cc76953808f92bdff6caa5fc6c47',
        link: 'https://www.academia.edu/attachments/95506649/download_file?s=portfolio'
    },

    {
        title: 'Sensitivity Analysis of the parameters of a Cholera Model ',
        img:  'https://cf-images.us-east-1.prod.boltdns.net/v1/static/627943784001/ef3a0a4f-1788-4585-bbc7-dafc8dfd3e3a/4db78cb2-97da-49dd-8e1f-b1bcbb098cdc/1280x720/match/image.jpg',
        link: 'https://www.academia.edu/attachments/95506562/download_file?s=portfolio'

    },
    {
        title: 'Solution of Cholera Disease Model by Parameter Expansion Method ',
        img:  'https://www.pasteur.fr/sites/default/files/styles/teaser_-_fiche_maladie/public/cholerainwater.jpeg?itok=mDM7sb1Q',
        link: 'https://www.academia.edu/attachments/95506399/download_file?s=portfolio'

    },

    {
        title: 'Variational Iteration Method for Solving an Infectious Disease Model ',
        img: 'https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs00521-021-06354-3/MediaObjects/521_2021_6354_Fig1_HTML.png',
        link: 'https://www.academia.edu/attachments/95506208/download_file?s=portfolio'

    },
    {
        title: 'Solution of an SIR Infectious Disease Model by Differential Transform Method ',
        img:  'https://www.mdpi.com/mathematics/mathematics-08-00558/article_deploy/html/images/mathematics-08-00558-g013.png',
        link: 'https://www.academia.edu/attachments/95506171/download_file?s=portfolio'
    },

    {
        title: 'Application of Least Squares Method for Solving Volterra Fractional Integro-Differential Equations Based on Constructed Orthogonal Polynomials ',
        img:  'https://ars.els-cdn.com/content/image/1-s2.0-S0960077922007615-gr1.jpg',
        link: 'https://www.academia.edu/attachments/95506148/download_file?s=portfolio'

    },
    {
        title: 'Transmission Dynamics of a SIR Infectious Disease Model using Multi-Step Homotopy Analysis Method ',
        img:  'https://www.risk.net/sites/default/files/styles/1905x657sc/public/2019-12/Equation-calculation.jpg?itok=bqs-ZGYT',
        link: 'https://www.academia.edu/attachments/95506051/download_file?s=portfolio'

    },

    {
        title: 'Least-squares Bernstein Method for Solving Fractional Integrodifferential Equations',
        img: 'https://www.mdpi.com/axioms/axioms-10-00006/article_deploy/html/images/axioms-10-00006-g001.png',
        link: 'https://www.academia.edu/attachments/95506015/download_file?s=portfolio'

    },
    {
        title: 'Mathematical Model for the Control of Typhoid Fever with Effects of Early Treatment',
        img:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSApoLVqQx2_3Tdx3W_7iof3GSNbBfDTu6RrA&usqp=CAU',
        link: 'https://www.academia.edu/attachments/95505876/download_file?s=portfolio'
    },

    {
        title: 'A Mathematical Modelling of Lymphatic Filariasis and Malaria Co-infection',
        img:  'https://cdn.ima.org.uk/wp/wp-content/uploads/2019/10/Wuchereria-bancrofti.jpg',
        link: 'https://www.academia.edu/attachments/95505725/download_file?s=portfolio'

    },
    {
        title: 'A Saturated Treatment Model for the Transmission Dynamics of Rabies',
        img:   'https://www.thelancet.com/cms/attachment/904bf899-6226-4bf8-aa07-b79c4f87c40f/gr1_lrg.jpg',
        link: 'https://www.academia.edu/attachments/95505643/download_file?s=portfolio'

    },

    {
        title: 'SOLUTION OF A DETERMINISTIC MATHEMATICAL MODEL OF TYPHOID FEVER BY VARIATIONAL ITERATION METHOD',
        img: 'https://ars.els-cdn.com/content/image/3-s2.0-B978012804002700005X-f05-01-9780128040027.jpg',
        link: 'https://www.academia.edu/attachments/95505265/download_file?s=portfolio'

    },

    

  ]
  
function Research() {
  return (

    <div>
        <Banner text='Research Work' />


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
        
    </div>
    </div>
    
  )
}

export default Research