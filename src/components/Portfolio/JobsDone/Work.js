import React from 'react'
/* This example requires Tailwind CSS v2.0+ */
const people = [
    {
        work: 'Hotel Booking Cancellation Prediction ',
        details: 'Analyzed the dataset of a hotel to find the factor with the strongest influence on booking cancellations.',
        
    },
    {
        work: 'Employee Attrition Prediction ',
        details: 'Analyzed the data of a Health Consultancy company to identify patterns in characteristics of employees who leave the organization and the key factors involved.',
        
    },
    {
        work: 'Improve your customer experience',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
        
    },
    {
        work: 'Digital Skill Facilitator and Personal Development Support ',
        details: 'Remote',
        period: 'Apr 2018 - Present ',
    },

    {
        work: 'Data Analyst ',
        details: 'Digital-focus.org · Contract',
        period: 'Jul 2022 - Nov 2022 ',
    },

    {
        work: 'University Of Illorin ',
        details: `
                Doctor Of Philosophy - PhD, Applied Mathematics. \n
                Mathematical Modelling and Epidemiology
            `,
        period: 'Oct 2016 - Dec 2022',
    },

    {
        work: 'University Of Illorin ',
        details: `
                Master's Degree - Applied Mathematics.
            `,
        period: 'Oct 2014 - Oct 2015 ',
    },

    {
        work: 'Massachusetts Institute of Technology',
        details: `
                Professional , Data Science and Machine Learning
            `,
        period: 'Sep 2022-Sep 2022 ',
    },

    {
        work: 'Machine Learning with Python: k-Means Clustering',
        details: `
            LinkedIn
            `,
        period: 'Issued Dec 2022 · No Expiration Date',
    },

    {
        work: 'Machine Learning with Python',
        details: `
            LinkedIn
            `,
        period: 'Issued Nov 2022 · No Expiration Date ',
    },

  ]
  
function Work() {
  return (
    <div className='py-20 mx-auto lg:w-3/5 w-4/5'>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {people.map((person, i) => (
            <div
            key={i}
            className="relative border text-center border-gray-300 h-48  bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
            
            <div className="flex-1 min-w-0">
                <a href="/" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-bold text-gray-900">{person.work}</p>
                    <p className="text-sm text-gray-500">{person.details}</p>
                    <p className="text-sm text-gray-500">{person.period}</p>
                </a>
            </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Work