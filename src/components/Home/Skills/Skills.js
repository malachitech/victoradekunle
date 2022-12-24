
import React from "react"
import { VscOrganization } from "react-icons/vsc";
import { GiArtificialIntelligence, GiTeacher } from "react-icons/gi";  
import { MdAssessment} from 'react-icons/md'
import { HiCodeBracket } from "react-icons/hi2";
import { SiAzuredataexplorer } from "react-icons/si";
import { FcDataConfiguration } from "react-icons/fc";
const techSkills = [
    {
        skill: 'Mathematics and Statistics', 
        details: 'Tableau, Power ',
        icon: MdAssessment,
    },

    {
        skill: 'Data Visualization Tools', 
        details: 'Tableau, Power BI, Matplotlib, Seaborn, Microsoft Azure, AWS',
        icon: FcDataConfiguration,
    },

    {
        skill: 'Exploratory Data Analysis (EDA)', 
        details: 'NumPy, Pandas, Scikit-learn',
        icon: SiAzuredataexplorer,
    },

    {
        skill: 'Programming and Database', 
        details: 'SQL (Structured Query Language), Python (Jupyter Notebook, Spyder), Google Collab, Flask, GitHub',
        icon: HiCodeBracket,
    },

    {
        skill: 'Data Science and Machine Learning Models and Algorithms', 
        details: 'Regressions and Prediction, Classiﬁcation and Hypothesis Testing, Random Forest, Decision Tree, Hyperparameter Tuning, K-means Clustering, Principal Component Analysis (PCA), and algorithms, Feature Engineering, Deep Learning, SVM, KNN, Recommendation System, Natural Language Processing (NLP), Predictive Analytics, Networks, and Graphical Systems',
        icon: GiArtificialIntelligence
    },
     
    

]

const softSkills = [
    {
        skill: 'Leadership, People Skills, Organization, Coordination, and Collaboration', 
        details: 'Harmonized three different music groups spanning two regions for 9 years to achieve various levelsof expertise. \n \n Coordinated an online community of over +2000 people to build a growth culture and discipline indifferent fields of the digital world ',
        icon: VscOrganization
    },

    {
        skill: 'Teaching, Problem-Solving, Storytelling, and Communication', 
        details: 'Possess unique ways of demystifying complex topics in Mathematics, Business, Music, and Tech',
        icon: GiTeacher
    },
]
  

function Skills() {
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
        <div className='bg-slate-200 pb-20 mb-20'>
            <h2 className='text-black  text-3xl text-center py-20 '>
                Technical skills
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:w-3/5 w-4/5 mx-auto">
            
            {techSkills && techSkills.map((skills) => (
                <div
                    key={skills.skill}
                    className="datascience bg-white relative border border-gray-300 px-6 py-5 shadow-lg  flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                
                <div className="flex-1 min-w-0 ">
                    <div className="focus:outline-none ">
                        {/* <span className="absolute inset-0" aria-hidden="true" /> */}
                        <div className="text-5xl font-bold flex flex-col justify-center items-center text-center py-16">
                            <skills.icon />
                        </div>

                        <div className="py-8">
                            <p className="text-xl font-bold  text-center">{skills.skill}</p>
                            <p className="text-lg text-center text-blue-800">{skills.details}</p>
                        </div>
                        
                    </div>
                </div>
                </div>
            ))}
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
                            <p className="text-lg font-bold  text-center">{skills.skill}</p>
                            <p className="text-sm text-center text-blue-800">{skills.details}</p>
                            
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