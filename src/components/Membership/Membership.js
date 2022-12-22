import React from 'react'
import cousera from '../Images/cousera.jpg'
import greatLearning from '../Images/great-learning.png'
import udemy from '../Images/diff-transform.jpg'

import './Membership.css'
import Banner from '../About/Banner/Banner'

function Membership() {
  return (
    <div>
        <Banner  text='Membership' />

        <div className='membership'>
            <div className='membership-card my-10'>
                <div className='membershipCard-img'>
                    <img src={cousera} alt='mit' />
                </div>

                <div className='membership-detail'>
                    <p className='text-bold text-lg my-10 text-center'>MIT Institute for Data Systems, and Society (MIT-IDSS)</p>
                </div>
            </div>

            <div className='membership-card my-10'>
                
                <div className='membership-detail'>
                    <p className='text-bold text-lg my-10 text-center'>MIT Institute for Data Systems, and Society (MIT-IDSS)</p>
                </div>

                <div className='membershipCard-img'>
                    <img src={greatLearning} alt='mit' />
                </div>

            </div>

            <div className='membership-card my-10'>
                <div className='membershipCard-img'>
                    <img src={udemy} alt='mit' />
                </div>

                <div className='membership-detail'>
                    <p className='text-bold text-lg my-10 text-center'>MIT Institute for Data Systems, and Society (MIT-IDSS)</p>
                </div>
            </div>
                
                
        </div>
    </div>
    
  )
}

export default Membership