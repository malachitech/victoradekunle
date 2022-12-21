import React from 'react'
import './Work.css'
/* This example requires Tailwind CSS v2.0+ */
const dataScience = [
    {
        name: 'Hotel Booking Cancellation Prediction', 
        company: 'Inn Hotels Groups',
        date: 'Nov 2022',
        goal: 'To analyze the dataset of a hotel to find the factor with the strongest influence on bookingcancellations',
        solution: 'Built a Random Forest model that can predict which booking would be canceled in advancewith 91% precision and 80% recall',
        result: 'Helped in formulating profitable policies for cancellations and refunds while minimizing lossesdue to cancellation or poor services',
    },
     
    {
        name: 'Credit Card Customer Analysis', 
        company: 'AllLife Bank',
        date: 'Nov 2022',
        goal: 'To identify different segments of the existing customer based on their spending patterns as wellas past interaction with the bank',
        solution: 'Different clustering algorithms like K-means, K-medoids, and Gaussian Mixture were employedto build clusters of different categories of customers',
        result: 'Cluster profiles of the constructed clusters reveals customers’ latent features and relativity with credit churning tendencies',
    },

    {
        name: 'Employee Attrition Prediction', 
        company: 'McCurry Health Consultancy',
        date: 'Sept 2022',
        goal: 'To examine the data of a Health Consultancy company to identify patterns in characteristics ofemployees who leave the organization and the key factors involved',
        solution: 'The Support Vector Machine (SVM) algorithm was used to build a model to identify employeesat risk of attrition.',
        result: 'A model with a high degree of accuracy was built to identify employees likely to attrite. This isfor the HR department to discover and incentivize the right employee on time, especially the unsatisfiedtop-performers',
    },

    {
        name: 'Pima Indians Diabetes Analysis', 
        company: '',
        date: 'Sept 2022',
        goal: 'To investigate aspects of Diabetes in the ladies of the Pima tribe of America as they are prone todiabetes early.',
        solution: 'Created a heatmap with Seaborn to visualize the relationship between variables in the dataset',
        result: 'Discovered that higher-than-normal level of glucose in the blood has a strong tendency to lead toDiabetes. Meanwhile, pregnancy has a fair correlation with age',
    },

]

const techSkills = [
    {
        skill: 'Mathematics and Statistics', 
        details: 'Tableau, Power '
    },

    {
        skill: 'Data Visualization Tools', 
        details: 'Tableau, Power BI, Matplotlib, Seaborn, Microsoft Azure, AWS'
    },

    {
        skill: 'Exploratory Data Analysis (EDA)', 
        details: 'NumPy, Pandas, Scikit-learn'
    },

    {
        skill: 'Programming and Database', 
        details: 'SQL (Structured Query Language), Python (Jupyter Notebook, Spyder), Google Collab, Flask, GitHub'
    },

    {
        skill: 'Data Science and Machine Learning Models and Algorithms', 
        details: 'Regressions and Prediction, Classiﬁcation and Hypothesis Testing, Random Forest, Decision Tree, Hyperparameter Tuning, K-means Clustering, Principal Component Analysis (PCA), and algorithms, Feature Engineering, Deep Learning, SVM, KNN, Recommendation System, Natural Language Processing (NLP), Predictive Analytics, Networks, and Graphical Systems'
    },
     
    

]

const softSkills = [
    {
        skill: 'Leadership, People Skills, Organization, Coordination, and Collaboration', 
        details: 'Harmonized three different music groups spanning two regions for 9 years to achieve various levelsof expertise. \n \n Coordinated an online community of over +2000 people to build a growth culture and discipline indifferent fields of the digital world '
    },

    {
        skill: 'Teaching, Problem-Solving, Storytelling, and Communication', 
        details: 'Possess unique ways of demystifying complex topics in Mathematics, Business, Music, and Tech'
    },
]
  
function Work() {
  return (
    <div className='py-20 mx-auto lg:w-3/5 w-4/5'>
        
{/* datascience  */}
        <div>
            <h2 className='text-3xl text-center mx-auto mb-10'>
                Data Science Projects and Case Studies
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            
            {dataScience && dataScience.map((single) => (
                <div
                    key={single.name}
                    className="datascience relative border border-gray-300 px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                
                <div className="flex-1 min-w-0">
                    <div className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        <p className="text-lg font-bold text-white text-center">{single.name} <span className='text-lg text-red-400'>&#124; {single.company}</span> </p>
                        <p className="text-sm text-white text-center">{single.date}</p>
                        <br />
                        <p className="text-sm text-white"><span className='font-bold'>Goal: </span>{single.goal}</p>
                        <br />
                        <p className="text-sm text-white"><span className='font-bold'>Solution: </span>{single.solution}</p>
                        <br />
                        <p className="text-sm text-white"><span className='font-bold'>Result: </span> {single.result}</p>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>


        {/* technical skilss  */}
        <div>
            <h2 className='text-3xl text-center mx-auto my-20 mb-10'>
                Technical skills
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            
            {techSkills && techSkills.map((skills) => (
                <div
                    key={skills.skill}
                    className="datascience relative border border-gray-300 px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                
                <div className="flex-1 min-w-0">
                    <div className="focus:outline-none">
                        {/* <span className="absolute inset-0" aria-hidden="true" /> */}
                        <p className="text-lg font-bold text-white  text-center">{skills.skill}</p>
                        <p className="text-sm text-white text-center">{skills.details}</p>
                        
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>

         {/* technical skilss  */}
         <div>
            <h2 className='text-3xl text-center mx-auto my-20 mb-10'>
                Soft skills
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            
            {softSkills && softSkills.map((skills) => (
                <div
                    key={skills.skill}
                    className="datascience relative border border-gray-300 px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                
                <div className="flex-1 min-w-0">
                    <div className="focus:outline-none">
                        {/* <span className="absolute inset-0" aria-hidden="true" /> */}
                        <p className="text-lg font-bold text-white  text-center">{skills.skill}</p>
                        <p className="text-sm text-white text-center">{skills.details}</p>
                        
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