import React from "react"
import { Link } from "react-router-dom"
import victor from '../../Images/victor.png'
/* This example requires Tailwind CSS v2.0+ */
const posts = [
    {
      title: 'Hotel Booking Cancellation Prediction',
      to: 'https://www.linkedin.com/in/victor-adekunle/',
      category: { name: 'Analysis', to: 'https://www.linkedin.com/in/victor-adekunle/' },
      description:
        "Analyzed the dataset of a hotel to find the factor with the strongest influence on booking cancellations. "
         + "Built a Random Forest model that can predict which booking would be canceled in advance with 91% precision and 80% recall."
        + " Helped in formulating profitable policies for cancellations and refunds while minimizing losses due to cancellation or poor services"
      ,  

      imageUrl:
        'https://miro.medium.com/max/798/1*-Ejvinw5XTxSQ5E3e9WtoQ.png',

      author: {
        name: 'Victor Adekunle',
        to: '/',
        imageUrl:
          victor,
      },
    },
    {
      title: 'Employee Attrition Prediction',
      to: 'https://www.linkedin.com/in/victor-adekunle/',
      category: { name: 'SVM', to: 'https://www.linkedin.com/in/victor-adekunle/' },
      description:
      `
      
        Analyzed the data of a Health Consultancy company to identify patterns in characteristics of employees who leave the organization and the key factors involved. \n \n
        The Support Vector Machine (SVM) algorithm was used to build a model to identify employees at risk of attrition. This is for the HR department to discover and incentivize the right employee on time, especially the unsatisfied top-performers 
 
      
      `,  
    
      imageUrl:
        'https://camo.githubusercontent.com/88e93df6215428e128037ea025fec321af48a5a8cb5016310a7f78701fe33bb3/68747470733a2f2f7777772e7465616d6c792e636f6d2f626c6f672f77702d636f6e74656e742f75706c6f6164732f323032322f30362f54797065732d6f662d456d706c6f7965652d417474726974696f6e2d373638783335342e706e67',

      author: {
        name: 'Victor Adekunle',
        to: '/',
        imageUrl:
        victor,
      },
    },
    {
      title: 'Improve your customer experience',
      to: 'https://www.linkedin.com/in/victor-adekunle/',
      category: { name: 'Case Study', to: 'https://www.linkedin.com/in/victor-adekunle/' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',

      
      imageUrl:
        'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',

      author: {
        name: 'Victor Adekunle',
        to: '/',
        imageUrl:
        victor,
      },
    },
  ]
  
function Work() {
    return (
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
        <div className='text-center pt-2 pb-16'>
            <h2 className='uppercase text-4xl lg:text-4xl font-bold '>
                My Latest Projects
            </h2>
            <p className='p-6 text-blue-800'>
                Take a look at my recent work.
            </p>
        </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {posts.map((post) => (
              <div key={post.title} className="flex flex-col shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={post.category.to} target='_blank' rel="noreferrer" className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.to} target='_blank' rel="noreferrer" className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.description}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={post.author.to} target='_blank' rel="noreferrer">
                        <span className="sr-only">{post.author.name}</span>
                        <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-bold text-gray-900">
                        <Link to={post.author.to} className="hover:underline">
                          {post.author.name}
                        </Link>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
        
                        <span >Data Analyst</span>
                        
                      </div>
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