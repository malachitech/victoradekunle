import React from 'react'
import { Link } from 'react-router-dom'

function Description() {
  return (
    <div className="bg-indigo-50">
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
            
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex shadow">

                <img  
                    src="https://harrisonjansma.com/img/harrison.png"
                    alt="victor"
                />
                
                </div>
            </div>


            <div className=" lg:ml-8">
                <div className="tracking-tight text-gray-900">
                    <h1 className="block font-bold mt-4 text-2xl text-blue-800 md:text-4xl">Contemplative coder and analyst. Inspired by tough problems.</h1>
                    <p className="block text-l mt-4  md:text-2xl">Data Analyst &#124; Data Scientist &#124; Doctoral Researcher (Mathematical Epidemiology) &#124; Blockchain Technology</p>
                    <div className='mt-4'>
                        <p>
                            A certified Data Scientist with a core background in mathematics with 7 years
                            of experience formulating and analyzing deterministic models, self-motivated 
                            and passionate about drawing insights from data to provide data-driven solutions 
                            to business problems. Exploring machine learning algorithms to build models and analyze 
                            chunks of data from different projects and case studies.
                            
                        </p>

                        <p>
                            Also, collaborated with several researchers in developing models to examine transmission 
                            dynamics of infectious diseases and providing optimized mathematical approaches to curb them.
                        </p>
{/*                         
                        <ul>
                            <h3>Hotel Booking Cancellation Prediction</h3>
                            <li>Analyzed the dataset of a hotel to find the factor with the strongest influence on booking cancellations</li>
                            <li>Built a Random Forest model that can predict which booking would be canceled in advance with 91% precision and 80% recall </li>
                            <li>Helped in formulating profitable policies for cancellations and refunds while minimizing losses due to cancellation or poor services</li> 
                        </ul>
                        <ul>
                            <h3>Employee Attrition Prediction</h3>
                            <li>Analyzed the data of a Health Consultancy company to identify patterns in characteristics of employees who leave the organization and the key factors involved</li>
                            <li>The Support Vector Machine (SVM) algorithm was used to build a model to identify employees at risk of attrition. This is for the HR department to discover and incentivize the right employee on time, especially the unsatisfied top-performers </li>
                        </ul>
                        <ul>
                            <h3>Credit Card Customer Analysis</h3>
                            <li>Identiﬁed different segments of the existing customer based on their spending patterns as well as past interaction with the bank using the k-means clustering algorithm</li>
                            <li>Built a Random Forest model that can predict which booking would be canceled in advance with 91% precision and 80% recall </li>
                            <li>Helped in formulating profitable policies for cancellations and refunds while minimizing losses due to cancellation or poor services</li> 
                        </ul>
                       
                         */}
                    </div>
                </div>

                <Link
                    to="/portfolio"
                    className="inline-block px-5 py-3 mt-10 border border-transparent text-base font-medium text-white bg-blue-800 hover:bg-blue-800"
                >
                    My Portfolio
                </Link>
            </div>
            
            
        </div>
    </div>
  )
}

export default Description