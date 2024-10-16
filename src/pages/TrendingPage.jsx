import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Trending from '../components/Trending/Trending'
import BlogsHero from '../components/BlogsHero/BlogsHero'

const TrendingPage = () => {
  return (
    <div>
        <Navbar/>
        <BlogsHero/>
        <Trending/>
        <Footer/>
    </div>
  )
}

export default TrendingPage