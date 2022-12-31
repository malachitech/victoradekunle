import React from 'react'
import cousera from '../Images/cousera.jpg'
import icms from '../Images/icms.jpg'
import bma from '../Images/bma.jpg'
import man from '../Images/man.png'

import './Membership.css'
import Banner from '../About/Banner/Banner'

function Membership() {
  return (
    <div>
        <Banner  text='Membership And Recognitions' />

        <div className='membership'>
            <div className='membership-card my-10'>
                <div className='membershipCard-img'>
                    <img src={cousera} alt='mit' />
                </div>

                <div className='membership-detail'>
                    <p className='text-bold text-lg my-10 text-center'>Member, MIT Institute for Data Systems, and Society (MIT-IDSS)</p>
                </div>
            </div>

            <div className='membership-icmc my-10'>
                
                <div className='membership-detail'>
                    <p className='text-bold text-lg my-10 text-center'>Member, International Centre for Mathematical Sciences (ICMS)</p>
                </div>

                <div className='membershipCard-img'>
                    <img src={icms} alt='mit' />
                </div>

            </div>

            <div className='membership-card my-10'>
                <div className='membershipCard-img'>
                    <img src={bma} alt='mit' />
                </div>

                <div className='membership-detail'>
                    <p className='text-bold text-lg my-10 text-center'>Member, Black in Mathematics Association (BMA)</p>
                </div>
            </div>

            <div className='membership-card my-10'>
                <div className='membershipCard-img'>
                    <img src={man} alt='mit' />
                </div>

                <div className='membership-detail'>
                    <p className='text-bold text-lg my-10 text-center'>Member, Mathematics Association of Nigeria (MAN)</p>
                </div>
            </div>    
                
        </div>
    </div>
    
  )
}

export default Membership