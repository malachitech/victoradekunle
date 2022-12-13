import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import AboutScreen from './components/Screens/AboutScreen'
import HomeScreen from './components/Screens/HomeScreen'
import PortfolioScreen from './components/Screens/PortfolioScreen'


function Router() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Layout><HomeScreen /></Layout>} />
            <Route path='/about' element={<Layout><AboutScreen /></Layout>} />
            <Route path='/portfolio' element={<Layout><PortfolioScreen /></Layout>} />
            
        </Routes>
    </div>
  )
}

export default Router