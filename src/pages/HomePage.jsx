import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../components/HeroSection/HeroSection'
import LatestBlogs from '../components/LatestBlogs/LatestBlogs'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <LatestBlogs/>
    </div>
  )
}

export default HomePage