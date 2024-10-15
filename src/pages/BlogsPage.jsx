import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import BlogsHero from '../components/BlogsHero/BlogsHero';
import Footer from '../components/Footer/Footer';
import AllPosts from '../components/AllPosts/AllPosts';

const BlogsPage = () => {
  return (
    <div>
      <Navbar/>
      <BlogsHero/>
      <AllPosts/>
      <Footer/>
    </div>
  )
}

export default BlogsPage