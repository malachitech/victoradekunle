import React from 'react'
import Navbar from './NavBar/Navbar'
import Footer from './Footer/Footer'

function Layout({children}) {
    return (
        <div>
        
            <Navbar />
        
            <div className=' mt-10 '>
                {children}
            </div>
            
            <Footer />

        </div>
    )
}

export default Layout