
import React from "react"
import { VscOrganization } from "react-icons/vsc";
import { GiArtificialIntelligence, GiTeacher } from "react-icons/gi";  
// import {  GiTeacher } from "react-icons/gi";  
import { MdAssessment, MdOutlineMobiledataOff, MdOutlineEngineering, MdBatchPrediction} from 'react-icons/md'
import { HiCodeBracket } from "react-icons/hi2";
import { IoBarChartSharp } from "react-icons/io5";
import { SiHypothesis, SiTableau, SiMicrosoftpowerpoint, SiConcourse, SiMicrosoftazure, SiNumpy,  SiPandas, SiScikitlearn, SiPython, SiFlask } from "react-icons/si";
import { FcMakeDecision, FcDataEncryption, FcLineChart, FcCollaboration } from "react-icons/fc";
import { ImTree, ImStatsDots } from "react-icons/im";
import { BiAnalyse } from "react-icons/bi";
import { AiFillFund, AiOutlineDotChart } from "react-icons/ai";
import {GrMapLocation, GrRobot, GrMysql} from "react-icons/gr";
import {BiSelectMultiple} from "react-icons/bi";
import {TbNetwork} from "react-icons/tb";
import {FaAws} from "react-icons/fa";
import {SlSocialGithub} from "react-icons/sl";

// import { SiAzuredataexplorer } from "react-icons/si";
import { FcDataConfiguration } from "react-icons/fc";
import './Skills.css'

function Skills() {

 
            const dataScience =
            [
                {
                    title: 'Regressions and Prediction',
                    icon: IoBarChartSharp
        
                },
                {
                    title: 'Classiﬁcation and Hypothesis Testing',
                    icon: SiHypothesis
        
                },
                {
                    title: 'Random Forest',
                    icon: FcMakeDecision
        
                },
                {
                    title: 'Decision Tree',
                    icon: ImTree
        
                },
                {
                    title: 'Hyperparameter Tuning',
                    icon: FcDataEncryption
        
                },
                {
                    title: 'K-means Clustering',
                    icon: MdOutlineMobiledataOff
        
                },
                {
                    title: 'Principal Component Analysis (PCA) and algorithms',
                    icon: BiAnalyse
        
                },
                {
                    title: 'Feature Engineering',
                    icon: MdOutlineEngineering
        
                },
                {
                    title: 'Deep Learning',
                    icon: AiFillFund
        
                },
                {
                    title: 'SVM',
                    icon: AiOutlineDotChart
        
                },
                {
                    title: 'KNN',
                    icon: GrMapLocation
        
                },
                {
                    title: 'Recommendation System',
                    icon: BiSelectMultiple
        
                },
                {
                    title: 'Natural Language Processing (NLP)',
                    icon: GrRobot
        
                },
                {
                    title: 'Predictive Analytics',
                    icon: MdBatchPrediction
        
                },
                {
                    title: 'Networks',
                    icon: TbNetwork
        
                },
                {
                    title: 'Graphical Systems',
                    icon: FcLineChart
        
                },
            ]

            const dataVisuals =
            [
                { 
                    title: 'Tableau',
                    icon: SiTableau
        
                },
                {
                    title: 'Power BI',
                    icon: SiMicrosoftpowerpoint
        
                },
                {
                    title: 'Matplotlib',
                    icon: SiConcourse
        
                },
                {
                    title: 'Seaborn',
                    icon: ImStatsDots
        
                },
                {
                    title: 'Microsoft Azure',
                    icon: SiMicrosoftazure
        
                },
                {
                    title: 'AWS',
                    icon: FaAws
        
                },


            ]

            const exploratory =
            [
                { 
                    title: 'NumPy',
                    icon: SiNumpy
        
                },
                {
                    title: 'Pandas',
                    icon: SiPandas
        
                },
                {
                    title: 'Scikit-learn',
                    icon: SiScikitlearn
        
                },
            ]

            const programming =
            [
                { 
                    title: 'SQL (Structured Query Language)',
                    icon: GrMysql
        
                },
                {
                    title: 'Python (Jupyter Notebook, Spyder)',
                    icon: SiPython
        
                },
                {
                    title: 'Google Collab',
                    icon: FcCollaboration
        
                },
                {
                    title: 'Flask',
                    icon: SiFlask
        
                },
                {
                    title: 'GitHub',
                    icon: SlSocialGithub
        
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
        <div className='techskills pb-20'>
            <h2 className='text-white  text-3xl text-center py-20 '>
                Technical skills
            </h2>
            <div className="lg:grid  mx-auto grid-cols-3 grid-rows-3 gap-4 w-4/5">
            
            <div
                    className="lg:hidden datascience h-4/5 w-45 bg-white relative border lg:m-4 mt-4 lg:mt-0 border-gray-300 px-6 py-5 shadow-lg  hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
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

  export default Skills