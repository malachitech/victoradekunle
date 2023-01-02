import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import AboutScreen from './components/Screens/AboutScreen'
import AwardsScreen from './components/Screens/AwardsScreen'
import HomeScreen from './components/Screens/HomeScreen'
import MembershipScreen from './components/Screens/MembershipScreen'
import PortfolioScreen from './components/Screens/PortfolioScreen'
import ResearchWorkScreen from './components/Screens/ResearchWorkScreen'


function Router() {
  
  return (
    <div>
        <Routes>
            <Route path='/' element={<Layout><HomeScreen /></Layout>} />
            <Route path='/about' element={<Layout><AboutScreen /></Layout>} />
            <Route path='/portfolio' element={<Layout><PortfolioScreen /></Layout>} />
            <Route path='/research' element={<Layout><ResearchWorkScreen /></Layout>} />
            <Route path='/awards' element={<Layout><AwardsScreen /></Layout>} />
            <Route path='/membership' element={<Layout><MembershipScreen /></Layout>} />
            
        </Routes>
    </div>
  )
}

export default Router