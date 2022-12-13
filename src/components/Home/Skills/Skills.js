
import React from "react"

  
  
//   function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
//   }
  
function Skills() {
    return (
      <div className="p-2 py-24 lg:py-32 lg:p-12 rounded-lg  overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0">
        
        <div className='text-center pt-2 pb-16'>
            <h2 className='uppercase text-4xl lg:text-4xl font-bold '>
                Skills Expertise
            </h2>
            <p className='p-6 text-blue-800'>
                <span className='mr-8'>1 - Basic</span>
                <span className='mr-8'>2 - Novice </span>
                <span className='mr-8'>3 - Intermediate</span>
                <span className='mr-8'>4 - Advanced</span>
                <span className='mr-8'>5 - Expert</span> 
            </p>
        </div>
        
        <div className="overflow-hidden shadow  divide-gray-200 sm:divide-y-0 sm:grid lg:grid-cols-3 sm:gap-px">
        
            <div
                className='relative group bg-white p-6 cursor-pointer'
                // className={classNames(
                //   actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                //   actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                //   actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                //   actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
                //   'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
                // )}
            >
            
                <div>
                    
                    <div className="mt-2 text-sm text-gray-500">
                        
                        <div className='h-4 my-12 text-lg lg:text-xl'>
                            <p>
                                Recommender Systems - 5
                            </p>
                            <div className='h-full w-full bg-slate-400'>

                            </div>
                        </div>
                        <div className='h-4 my-12 text-lg lg:text-xl'>
                            <p>
                                Microsoft power BI - 4
                            </p>
                            <div className='h-full w-4/5 bg-slate-400'>

                            </div>
                        </div>
                        <div className='h-4 my-12 text-lg lg:text-xl'>
                            <p>
                                Predictive Modelling - 3
                            </p>
                            <div className='h-full w-3/5 bg-slate-400'>

                            </div>
                        </div>

                        <div className='h-4 my-12 text-lg lg:text-xl'>
                            <p>
                                Machine Learning - 3
                            </p>
                            <div className='h-full w-3/5 bg-slate-400'>

                            </div>
                        </div>

                        <div className='h-4 my-12 text-lg lg:text-xl'>
                            <p>
                                Natural Language Processingn (NLP) - 3
                            </p>
                            <div className='h-full w-3/5 bg-slate-400'>

                            </div>
                        </div>

                    </div>
                </div>
                <span
                    className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                    aria-hidden="true"
                    >
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                    </svg>
                </span>
            </div>

            <div
                className='relative group bg-white p-6 cursor-pointer'
                // className={classNames(
                //   actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                //   actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                //   actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                //   actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
                //   'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
                // )}
            >
            
                <div>
                    
                <div className="mt-2 text-sm text-gray-500">
                    
                    <div className='h-4 my-12 text-lg lg:text-xl'>
                        <p>
                            Pandas &#40;Software&#41; - 5
                        </p>
                        <div className='h-full bg-slate-400'>

                        </div>
                    </div>
                    <div className='h-4 my-12 text-lg lg:text-xl'>
                        <p>
                            Keras - 4
                        </p>
                        <div className='h-full w-4/5 bg-slate-400'>

                        </div>
                    </div>
                    <div className='h-4 my-12 text-lg lg:text-xl'>
                        <p>
                            Deep Learning - 5
                        </p>
                        <div className='h-full w-5/5 bg-slate-400'>

                        </div>
                    </div>

                    <div className='h-4 my-12 text-lg lg:text-xl'>
                            <p>
                                K-Nearest Neighbors (kNN) - 4
                            </p>
                            <div className='h-full w-4/5 bg-slate-400'>

                            </div>
                    </div>

                    <div className='h-4 my-12 text-lg lg:text-xl'>
                            <p>
                               Python (Programming Language) - 4
                            </p>
                            <div className='h-full w-4/5 bg-slate-400'>

                            </div>
                        </div>
                </div>
                </div>
                <span
                className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
                >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
                </span>
            </div>

            <div
                className='relative group bg-white p-6 cursor-pointer'
                // className={classNames(
                //   actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                //   actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                //   actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                //   actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
                //   'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
                // )}
            >
            
                <div>
                    
                <div className="mt-2 text-sm text-gray-500">
                    
                    <div className='h-4 my-12 text-lg lg:text-xl'>
                        <p>
                            BlockChain Analysis - 5
                        </p>
                        <div className='h-full bg-slate-400'>

                        </div>
                    </div>
                    <div className='h-4 my-12 text-lg lg:text-xl'>
                        <p>
                            Logistic Regression - 4
                        </p>
                        <div className='h-full bg-slate-400'>

                        </div>
                    </div>
                    <div className='h-4 my-12 text-lg lg:text-xl'>
                        <p>
                            Statistical data Analysis - 3
                        </p>
                        <div className='h-full w-3/5 bg-slate-400'>

                        </div>
                    </div>

                    <div className='h-4 my-12 text-lg lg:text-xl'>
                            <p>
                                Amazon Web Services - 4
                            </p>
                            <div className='h-full w-4/5 bg-slate-400'>

                            </div>
                    </div>

                    <div className='h-4 my-12 text-lg lg:text-xl'>
                            <p>
                                Statistics - 4
                            </p>
                            <div className='h-full w-4/5 bg-slate-400'>

                            </div>
                        </div>
                </div>
                </div>
                <span
                className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
                >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
                </span>
            </div>
        
        </div>
        
      </div>
    )
  }

  export default Skills