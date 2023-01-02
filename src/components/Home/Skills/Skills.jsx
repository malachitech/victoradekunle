
import React from "react"
import { VscOrganization } from "react-icons/vsc";
import { GiArtificialIntelligence, GiTeacher } from "react-icons/gi";  
// import {  GiTeacher } from "react-icons/gi";  
import { MdAssessment} from 'react-icons/md'
import { HiCodeBracket } from "react-icons/hi2";
// import { SiAzuredataexplorer } from "react-icons/si";
import { FcDataConfiguration } from "react-icons/fc";

function Skills() {

 
            const dataScience =
            [
                {
                    title: 'Regressions and Prediction,',
                    icon: GiTeacher
        
                },
                {
                    title: 'Classiﬁcation and Hypothesis Testing',
                    icon: GiTeacher
        
                },
                {
                    title: 'Random Forest,',
                    icon: GiTeacher
        
                },
                {
                    title: 'Decision Tree,',
                    icon: GiTeacher
        
                },
                {
                    title: 'Hyperparameter Tuning,',
                    icon: GiTeacher
        
                },
                {
                    title: 'K-means Clustering,',
                    icon: GiTeacher
        
                },
                {
                    title: 'Principal Component Analysis (PCA) and algorithms,',
                    icon: GiTeacher
        
                },
                {
                    title: 'Feature Engineering,',
                    icon: GiTeacher
        
                },
                {
                    title: 'Deep Learning,',
                    icon: GiTeacher
        
                },
                {
                    title: 'SVM,',
                    icon: GiTeacher
        
                },
                {
                    title: 'KNN,',
                    icon: GiTeacher
        
                },
                {
                    title: 'Recommendation System,',
                    icon: GiTeacher
        
                },
                {
                    title: 'Natural Language Processing (NLP),',
                    icon: GiTeacher
        
                },
                {
                    title: 'Predictive Analytics,',
                    icon: GiTeacher
        
                },
                {
                    title: 'Networks,',
                    icon: GiTeacher
        
                },
                {
                    title: 'Graphical Systems,',
                    icon: GiTeacher
        
                },
            ]

            const dataVisuals =
            [
                { 
                    title: 'Tableau,',
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
                    title: 'Google Collab,',
                    icon: GiTeacher
        
                },
                {
                    title: 'Flask,',
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

    return (
      <div className="flex flex-col justify-center bg-slate-50 py-24 lg:py-32 rounded-lg  overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0">
        
        <div className='text-center pt-2 pb-16'>
            <h2 className='uppercase text-4xl lg:text-4xl font-bold '>
                Skills Expertise
            </h2>
            <p className='p-6 text-blue-800'>
                <span></span>
                
            </p>
        </div>
        
        {/* technical skilss  */}
        <div className='bg-slate-200 pb-20 mb-20 flex flex-col justify-center'>
            <h2 className='text-black  text-3xl text-center py-20 '>
                Technical skills
            </h2>
            <div className="lg:grid  mx-auto grid-cols-3 grid-rows-3 gap-4 ">
            

            
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
                                <p className="text-xl font-bold  text-center">Data Science and Machine Learning Models and Algorithms</p>

                                {dataScience && dataScience.map(detail =>( 
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
                    className="datascience h-4/5 w-45 bg-white relative border lg:m-4 mt-4 lg:mt-0 border-gray-300 px-6 py-5 shadow-lg  hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                
                    <div className="flex-1 min-w-0 ">
                        <div className="focus:outline-none ">
                            {/* <span className="absolute inset-0" aria-hidden="true" /> */}
                            <div className="text-5xl font-bold flex flex-col justify-center items-center text-center py-4">
                                <MdAssessment />
                            </div>

                            <div className="py-8">
                                <p className="text-xl font-bold  text-center">Mathematics and Statistic</p>
                                
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
                                <p className="text-xl font-bold  text-center">Exploratory Data Analysis (EDA)</p>

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
                                <p className="text-xl font-bold  text-center">Data Visualization Tools</p>

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
                                <p className="text-xl font-bold  text-center">Programming and Database</p>

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
         <div className='pb-20 '>
            <h2 className='text-3xl text-center mx-auto mb-20'>
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
                            <p className="text-lg font-bold  text-left ">{skills.skill}</p>
                            <p className="text-sm text-left text-blue-800">{skills.details}</p>
                            
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

  export default Skills