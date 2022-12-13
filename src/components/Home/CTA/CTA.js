import { Link } from "react-router-dom";

/* This example requires Tailwind CSS v2.0+ */
export default function CTA() {
  return (
    <div className="bg-indigo-50">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
        

        <div>
          <div className="tracking-tight text-gray-900">
            <h2 className="block text-l md:text-xl">I am</h2>
            <h1 className="block font-bold mt-4 text-4xl text-blue-800 md:text-4xl">Victor Adekunle</h1>
            <p className="block text-xl mt-8  md:text-2xl">Data Analyst &#124; Data Scientist &#124; Doctoral Researcher (Mathematical Epidemiology) &#124; Blockchain Technology</p>
            
          </div>

          <Link
            to="/portfolio"
            className="inline-block px-5 py-3 mt-10 border border-transparent text-base font-medium text-white bg-blue-800 hover:bg-blue-800"
          >
            My Portfolio
          </Link>
        </div>
        
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex shadow">

          <img  
            src="https://harrisonjansma.com/img/harrison.png"
            alt="victor"
          />
           
          </div>
        </div>
      </div>
    </div>
  )
}
