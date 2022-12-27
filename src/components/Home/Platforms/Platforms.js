import React from "react"
/* This example requires Tailwind CSS v2.0+ */
const posts = [
    {
      title: 'My base-of-operation for all things code.',
      href: 'https://github.com/Javascreen1?tab=repositories',
      category: { name: 'Github', href: 'https://github.com/Javascreen1?tab=repositories' },
      
      imageUrl:
        'https://logodownload.org/wp-content/uploads/2019/08/github-logo.png',
      
      
    },
    {
      title: 'Where i connect with people.',
      href: 'https://www.linkedin.com/in/victor-adekunle/',
      category: { name: 'LinkedIn', href: 'https://www.linkedin.com/in/victor-adekunle/' },
      
      imageUrl:
        'https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png',
    },

    {
      title: 'Open repository of academic articles',
      href: 'https://victoraduragbemiadekunle.academia.edu/',
      category: { name: 'Academia', href: 'https://victoraduragbemiadekunle.academia.edu/' },
      
      imageUrl:
        'https://victoraduragbemiadekunle.academia.edu/images/portfolio_preview/cover_photos/humanities.jpg',
    },
    
  ]
  
function Platforms() {
    return (
      <div className=" relative bg-indigo-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
        <div className='text-center pt-2 pb-16'>
            <h2 className='uppercase text-4xl lg:text-4xl font-bold '>
                Other Platforms
            </h2>
        </div>
        <div className="card-zoom mt-12 max-w-lg mx-auto grid gap-2 lg:grid-cols-3 lg:max-w-none justify-center">
        {posts.map((post) => (
            <div key={post.title} className="lg:w-4/5 flex flex-col shadow-lg lg:mx-auto overflow-hidden ">
            <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover card-zoom-image" src={post.imageUrl} alt="" />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                    <a href={post.category.href} target='_blank' rel="noreferrer" className="hover:underline">
                    {post.category.name}
                    </a>
                </p>
                <a href={post.href} target='_blank' rel="noreferrer" className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                </a>
                </div>
                
            </div>
            </div>
        ))}
        </div>
        </div>
      </div>
    )
  }

export default Platforms