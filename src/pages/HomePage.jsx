import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../components/HeroSection/HeroSection'
import LatestBlogs from '../components/LatestBlogs/LatestBlogs'
import AllCategory from '../components/AllCategory/AllCategory'
import Footer from '../components/Footer/Footer'
import PostsHome from '../components/NewTechnology/PostsHome'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <LatestBlogs/>
        <PostsHome/>
        <AllCategory/>
        <Footer/>
    </div>
  )
}

export default HomePage