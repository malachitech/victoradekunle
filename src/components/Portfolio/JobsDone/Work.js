import React from 'react'

import Research from '../../About/Research/Research'
import { VscOrganization } from "react-icons/vsc";
import { GiArtificialIntelligence, GiTeacher } from "react-icons/gi";  
import { MdAssessment} from 'react-icons/md'
import { HiCodeBracket } from "react-icons/hi2";
// import { SiAzuredataexplorer } from "react-icons/si";
import { FcDataConfiguration } from "react-icons/fc";
import './Work.css'
/* This example requires Tailwind CSS v2.0+ */
const datascience = [
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



const dataScience =
[
    {
        title: 'Regressions and Prediction',
        icon: GiTeacher

    },
    {
        title: 'Classiﬁcation and Hypothesis Testing',
        icon: GiTeacher

    },
    {
        title: 'Random Forest',
        icon: GiTeacher

    },
    {
        title: 'Decision Tree',
        icon: GiTeacher

    },
    {
        title: 'Hyperparameter Tuning',
        icon: GiTeacher

    },
    {
        title: 'K-means Clustering',
        icon: GiTeacher

    },
    {
        title: 'Principal Component Analysis (PCA) and algorithms',
        icon: GiTeacher

    },
    {
        title: 'Feature Engineering',
        icon: GiTeacher

    },
    {
        title: 'Deep Learning',
        icon: GiTeacher

    },
    {
        title: 'SVM',
        icon: GiTeacher

    },
    {
        title: 'KNN',
        icon: GiTeacher

    },
    {
        title: 'Recommendation System',
        icon: GiTeacher

    },
    {
        title: 'Natural Language Processing (NLP)',
        icon: GiTeacher

    },
    {
        title: 'Predictive Analytics',
        icon: GiTeacher

    },
    {
        title: 'Networks',
        icon: GiTeacher

    },
    {
        title: 'Graphical Systems',
        icon: GiTeacher

    },
]

const dataVisuals =
[
    { 
        title: 'Tableau',
        icon: GiTeacher

    },
    {
        title: 'Power BI',
        icon: GiTeacher

    },
    {
        title: 'Matplotlib',
        icon: GiTeacher

    },
    {
        title: 'Seaborn',
        icon: GiTeacher

    },
    {
        title: 'Microsoft Azure',
        icon: GiTeacher

    },
    {
        title: 'AWS',
        icon: GiTeacher

    },


]

const exploratory =
[
    { 
        title: 'NumPy',
        icon: GiTeacher

    },
    {
        title: 'Pandas',
        icon: GiTeacher

    },
    {
        title: 'Scikit-learn',
        icon: GiTeacher

    },
]

const programming =
[
    { 
        title: 'SQL (Structured Query Language)',
        icon: GiTeacher

    },
    {
        title: 'Python (Jupyter Notebook, Spyder)',
        icon: GiTeacher

    },
    {
        title: 'Google Collab',
        icon: GiTeacher

    },
    {
        title: 'Flask',
        icon: GiTeacher

    },
    {
        title: 'GitHub',
        icon: GiTeacher

    },
]



const softSkills = [
{
skill: 'Leadership, People Skills, Organization, Coordination, and Collaboration', 
details: 
    "Coordinates an online community of over 2000 people to build a growth culture and discipline indifferent fields of the digital world. \n Harmonized three different music groups spanning two regions for 9 years to achieve various levels of expertise."

,
icon: VscOrganization
},

{
skill: 'Teaching, Problem-Solving, Storytelling, and Communication', 
details: 'Possess unique ways of demystifying complex topics in Mathematics, Business, Music, and Tech',
icon: GiTeacher
},
]

function Work() {
  return (
    <div className='flex flex-col justify-center py-20 items-center '>
        
{/* datascience  */}
        <div className='lg:w-3/5 w-4/5 '>
            <h2 className='text-3xl text-center mx-auto mb-10'>
                Data Science Projects and Case Studies
            </h2>
            <div className="dataScience grid grid-cols-1 gap-4 sm:grid-cols-2">
            
            {datascience && datascience.map((single) => (
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
            <a
                href="https://github.com/Javascreen1?tab=repositories"
                rel='noreferrer' target='_blank'
                className="inline-block px-5 py-3 mt-10 border border-transparent text-base font-medium text-white bg-blue-800 hover:bg-blue-600"
            >
                More Datascience Projects
            </a>
        </div>
        
        {/* research workk */}

        <Research />

        
        {/* technical skilss  */}
        <div className='techskills pb-20 w-full'>
            <h2 className='text-white text-3xl text-center py-20 '>
                Technical skills
            </h2>
            <div className="lg:grid  mx-auto grid-cols-3 grid-rows-3 gap-4 w-4/5">
            
            <div
                    className="lg:hidden h-4/5 w-45 bg-white relative border lg:m-4 mt-4 lg:mt-0 border-gray-300 px-6 py-5 shadow-lg  hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                
                    <div className="flex-1 min-w-0 ">
                        <div className="focus:outline-none ">
                            {/* <span className="absolute inset-0" aria-hidden="true" /> */}
                            <div className="text-5xl font-bold flex flex-col justify-center items-center text-center py-4">
                                <MdAssessment />
                            </div>

                            <div className="py-8">
                                <p className="text-xl font-bold  text-center text-slate-600">Mathematics and Statistic</p>
                                
                            </div>
                            
                        </div>
                    </div>

                
                </div>
            
            <div
                    className="datascience col-span-2 row-span-2 w-45 bg-white relative border lg:m-4 mt-4 lg:mt-0 border-gray-300 px-6 py-5 shadow-lg  hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                
                    <div className="flex-1 min-w-0 ">
                        <div className="focus:outline-none ">
                            {/* <span className="absolute inset-0" aria-hidden="true" /> */}
                            <div className="text-5xl font-bold flex flex-col justify-center items-center text-center py-4">
                                <GiArtificialIntelligence />
                            </div>

                            <div className="py-8">
                                <p className="text-xl font-bold  text-center text-slate-600">Data Science and Machine Learning Models and Algorithms</p>

                                {dataScience && dataScience.map(detail =>( 
                                    <div className="text-lg flex flex-wrap justify-center flex-col">
                                        <p className="flex items-center space-x-2 my-2">
                                            <span><detail.icon /></span> 
                                            <span>{detail.title}</span>
                                        </p>
                                    </div>
                                ))}
                                
                            </div>
                            
                        </div>
                    </div>

                
                </div>

                
                <div
                    className="hidden lg:block datascience h-4/5 w-45 bg-white relative border lg:m-4 mt-4 lg:mt-0 border-gray-300 px-6 py-5 shadow-lg  hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                
                    <div className="flex-1 min-w-0 ">
                        <div className="focus:outline-none ">
                            {/* <span className="absolute inset-0" aria-hidden="true" /> */}
                            <div className="text-5xl font-bold flex flex-col justify-center items-center text-center py-4">
                                <MdAssessment />
                            </div>

                            <div className="py-8">
                                <p className="text-xl font-bold  text-center text-slate-600">Mathematics and Statistic</p>
                                
                            </div>
                            
                        </div>
                    </div>

                
                </div>

            
                <div
                    className="w-45 bg-white relative border lg:m-4 mt-4 lg:mt-0 border-gray-300 px-6 py-5 shadow-lg  hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                
                    <div className="flex-1 min-w-0 ">
                        <div className="focus:outline-none ">
                            {/* <span className="absolute inset-0" aria-hidden="true" /> */}
                            <div className="text-5xl font-bold flex flex-col justify-center items-center text-center py-4">
                                <FcDataConfiguration />
                            </div>

                            <div className="py-8">
                                <p className="text-xl font-bold  text-center text-slate-600">Exploratory Data Analysis (EDA)</p>

                                {exploratory && exploratory.map(detail =>( 
                                    <div className="text-lg flex flex-wrap justify-center flex-col">
                                        <p className="flex items-center space-x-2">
                                            <span><detail.icon /></span> 
                                            <span>{detail.title}</span>
                                        </p>
                                    </div>
                                ))}
                                
                            </div>
                            
                        </div>
                    </div>

                
                </div>

                
                <div
                    className="datascience w-45 bg-white relative border lg:m-4 mt-4 lg:mt-0 border-gray-300 px-6 py-5 shadow-lg  hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                
                    <div className="flex-1 min-w-0 ">
                        <div className="focus:outline-none ">
                            {/* <span className="absolute inset-0" aria-hidden="true" /> */}
                            <div className="text-5xl font-bold flex flex-col justify-center items-center text-center py-4">
                                <GiArtificialIntelligence />
                            </div>

                            <div className="py-8">
                                <p className="text-xl font-bold  text-center text-slate-600">Data Visualization Tools</p>

                                {dataVisuals && dataVisuals.map(detail =>( 
                                    <div className="text-lg flex flex-wrap justify-center flex-col">
                                        <p className="flex items-center space-x-2">
                                            <span><detail.icon /></span> 
                                            <span>{detail.title}</span>
                                        </p>
                                    </div>
                                ))}
                                
                            </div>
                            
                        </div>
                    </div>

                
                </div>


                <div
                    className="col-span-2 w-45 bg-white relative border lg:m-4 mt-4 lg:mt-0 border-gray-300 px-6 py-5 shadow-lg  hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                
                    <div className="flex-1 min-w-0 ">
                        <div className="focus:outline-none ">
                            {/* <span className="absolute inset-0" aria-hidden="true" /> */}
                            <div className="text-5xl font-bold flex flex-col justify-center items-center text-center py-4">
                                <HiCodeBracket />
                            </div>

                            <div className="py-8">
                                <p className="text-xl font-bold  text-center text-slate-600">Programming and Database</p>

                                {programming && programming.map(detail =>( 
                                    <div className="text-lg flex flex-wrap justify-center flex-col">
                                        <p className="flex items-center space-x-2">
                                            <span><detail.icon /></span> 
                                            <span>{detail.title}</span>
                                        </p>
                                    </div>
                                ))}
                                
                            </div>
                            
                        </div>
                    </div>

                
                </div>
                
            </div>
        </div>

         {/* soft skilss  */}
         <div className='softskills pb-20 '>
            <h2 className='text-white text-3xl text-center mx-auto m-20'>
                Soft skills
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2  mx-auto lg:w-3/5 w-4/5">
            
            {softSkills && softSkills.map((skills) => (
                <div
                    key={skills.skill}
                    className="datascience bg-white relative border border-gray-300 px-6 py-5 shadow-lg flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                
                <div className="flex-1 min-w-0">
                    <div className="focus:outline-none">
                        {/* <span className="absolute inset-0" aria-hidden="true" /> */}
                        <div className="text-5xl font-bold flex flex-col justify-center items-center text-center py-16">
                            <skills.icon />
                        </div>

                        <div className="py-8">
                            <p className="text-xl font-bold  text-left text-slate-600">{skills.skill}</p>
                            <p className="text-lg text-left ">{skills.details}</p>
                            
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

export default Work