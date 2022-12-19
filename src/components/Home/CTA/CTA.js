import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from './CTA.module.css'

/* This example requires Tailwind CSS v2.0+ */
 function CTA() {

  const state = ['Victor Adekunle', 'Data And Research Expert']
    // const [state, setState] = useState(['URAPtj Token', 'Buy URAPtj Token'])
    // const [qualities, setQualities] = useState(['Be a part of something great', 'Be a part of change', 'Be a part of growth', 'Be a part of the cause', 'Changing the world for good', 'Be a part of uraptj token'])
    const [text, setText] =  useState({count: 0, qualitiesCount: 0})

    // setTimeout()
    setTimeout(()=>{
        slider()
    }, 4000)
    const slider = () => {
        setText({
            count: text.count === state.length-1 ? 0 :text.count +1,
        })
    }

  return (
    <div className={styles.cta}>
      <div className="max-w-7xl mx-auto py-10 lg:pt-6 lg:pb-0 lg:flex lg:items-center lg:justify-between">
        

        <div className="px-4 sm:px-6 lg:px-8">
          <div className="tracking-tight text-white">
            <h2 className="block text-l md:text-xl">I am</h2>
            {state.map((item, index) => (
                <div key={index} className={text.count === index ? 'slide active' : 'slide'}>
                {text.count === index && <h1 className="block font-bold mt-4 text-4xl text-blue-100 md:text-5xl">{item}</h1>}
                </div>
            ))}
            
            <p className="block text-xl mt-8  md:text-2xl">Data Analyst &#124; Data Scientist &#124; Doctoral Researcher (Mathematical Epidemiology) &#124; Blockchain Technology</p>
            
          </div>

          <Link
            to="/portfolio"
            className="inline-block px-5 py-3 mt-10 border border-transparent text-base font-medium text-white bg-blue-800 hover:bg-blue-800"
          >
            My Portfolio
          </Link>
        </div>
        
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 lg:h-screen lg:w-2/5 justify-center">
          <div className="inline-flex shadow ">

          <img  
            src="https://harrisonjansma.com/img/harrison.png"
            alt="victor"
            className="h-full"
          />
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA
