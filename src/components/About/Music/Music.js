import React from 'react'
import music from '../../Images/music.jpeg'
function Music() {
  return (
    <div>
        <div className='text-center py-2 pb-16'>
            <h2 className='uppercase text-4xl lg:text-4xl font-bold '>
                Music
            </h2>
        </div>

        
        <div className='membership'>
            <div className='membership-card my-10'>
                <div className='membershipCard-img'>
                    <img src={music} alt='mit' />
                </div>

                <div className='membership-detail'>
                    <p className='text-bold text-sm my-10 text-center'>
                    
                    I used to teach the Guitar. I played also in the church band, at concerts or live shows.
                    I assisted a leader to coordinate the choir. And i was priviledged to also coordinate the choir. 
                    I played at the Loud concert in Sheffield this year
                    </p>
                </div>
            </div>

            
                
        </div>
        
    </div>
  )
}

export default Music