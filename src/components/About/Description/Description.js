import React from 'react'
import { Link } from 'react-router-dom'
import victorImg from "../../Images/victor.png"
// import fractional from '../../Images/fractional.jpg'
// import orthogonal from '../../Images/orthogonal.png'
// import treatment from '../../Images/treatment.jpg'
// import variation from '../../Images/variation.jpg'
import './Description.css'

const dataScience = [
    {
        name: 'Hotel Booking Cancellation Prediction', 
        company: 'Inn Hotels Groups',
        date: 'Nov 2022',
        goal: 'To analyze the dataset of a hotel to find the factor with the strongest influence on bookingcancellations',
        solution: 'Built a Random Forest model that can predict which booking would be canceled in advancewith 91% precision and 80% recall',
        result: 'Helped in formulating profitable policies for cancellations and refunds while minimizing lossesdue to cancellation or poor services',
        img: 'https://miro.medium.com/max/798/1*-Ejvinw5XTxSQ5E3e9WtoQ.png'
    },
     
    {
        name: 'Credit Card Customer Analysis', 
        company: 'AllLife Bank',
        date: 'Nov 2022',
        goal: 'To identify different segments of the existing customer based on their spending patterns as wellas past interaction with the bank',
        solution: 'Different clustering algorithms like K-means, K-medoids, and Gaussian Mixture were employedto build clusters of different categories of customers',
        result: 'Cluster profiles of the constructed clusters reveals customers’ latent features and relativity with credit churning tendencies',
        img: 'https://www.hdatasystems.com/assets/case-study/credit-card-behavior-analysis/credi-card-an.png'
    },

    {
        name: 'Employee Attrition Prediction', 
        company: 'McCurry Health Consultancy',
        date: 'Sept 2022',
        goal: 'To examine the data of a Health Consultancy company to identify patterns in characteristics ofemployees who leave the organization and the key factors involved',
        solution: 'The Support Vector Machine (SVM) algorithm was used to build a model to identify employeesat risk of attrition.',
        result: 'A model with a high degree of accuracy was built to identify employees likely to attrite. This isfor the HR department to discover and incentivize the right employee on time, especially the unsatisfiedtop-performers',
        img: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
    },

    {
        name: 'Pima Indians Diabetes Analysis', 
        company: '',
        date: 'Sept 2022',
        goal: 'To investigate aspects of Diabetes in the ladies of the Pima tribe of America as they are prone todiabetes early.',
        solution: 'Created a heatmap with Seaborn to visualize the relationship between variables in the dataset',
        result: 'Discovered that higher-than-normal level of glucose in the blood has a strong tendency to lead toDiabetes. Meanwhile, pregnancy has a fair correlation with age',
        img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--KLoGk_J3--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ipmatztd1b66qiz5jstr.jpg'
    },

]



function Description() {
  return (
    <div className="bg-indigo-50 flex flex-col justify-center  items-center ">
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
            
            <div className="mt-8 flex lg:mt-0 justify-center">
                <div className="inline-flex ">

                <img  
                    src={victorImg}
                    alt="victor"
                />
                
                </div>
            </div>


            <div className=" lg:ml-8">
                <div className="tracking-tight text-gray-900">
                    <h1 className="block font-bold mt-4 text-2xl text-blue-800 md:text-4xl">Contemplative coder and mathematician. Inspired by tough problems.</h1>
                    <p className="block text-l mt-4  md:text-2xl">Data Scientist &#124; Doctoral Researcher (Mathematical Epidemiology) &#124; Blockchain Technology</p>
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
                    className="inline-block px-5 py-3 mt-10 border border-transparent text-base font-medium text-white bg-blue-800 hover:bg-blue-600"
                >
                    My Portfolio
                </Link>
            </div>
            
            
        </div>

        {/* datascience  */}
        <div className='lg:w-3/5 w-4/5 py-20'>
            <h2 className='text-3xl text-center mx-auto mb-10 uppercase text-4xl lg:text-4xl font-bold '>
                Data Science Projects and Case Studies
            </h2>
            <div className="dataScience grid grid-cols-1 gap-4 sm:grid-cols-2">
            
            {dataScience && dataScience.map((single) => (
                <div
                    key={single.name}
                    className="relative border text-center border-gray-100 h-full bg-white shadow-lg flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                
                <div className="flex-1 min-w-0">
                    <div className="focus:outline-none">
                        <img 
                            src={single.img}
                            alt={single.name}
                            
                        />
                        
                        <div className='text-center pt-10 px-10 text-black'>
                            <span className="absolute inset-0" aria-hidden="true" />
                            <p className="text-lg font-bold text-center">{single.name} <span className='text-lg text-red-400'>&#124; {single.company}</span> </p>
                            <p className="text-sm  text-center">{single.date}</p>
                            <br />
                            <p className="text-sm "><span className='font-bold'>Goal: </span>{single.goal}</p>
                            <br />
                            <p className="text-sm "><span className='font-bold'>Solution: </span>{single.solution}</p>
                            <br />
                            <p className="text-sm text-white"><span className='font-bold'>Result: </span> {single.result}</p>
                        </div>
                    </div>
                </div>
                </div>
            ))}

            
            </div>
            <Link
                to="/portfolio"
                className="inline-block px-5 py-3 mt-10 border border-transparent text-base font-medium text-white bg-blue-800 hover:bg-blue-600"
            >
                More Datascience Projects
            </Link>
        </div>


    </div>
  )
}

export default Description