import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../components/HeroSection/HeroSection'
import LatestBlogs from '../components/LatestBlogs/LatestBlogs'
import NewTechnology from '../components/NewTechnology/NewTechnology'
import AllCategory from '../components/AllCategory/AllCategory'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <LatestBlogs/>
        <NewTechnology/>
        <AllCategory/>
    </div>
  )
}

export default HomePage