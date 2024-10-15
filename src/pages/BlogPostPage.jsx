import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import AllCategory from '../components/AllCategory/AllCategory';
import BlogPost from '../components/BlogPost/BlogPost';

const BlogPostPage = () => {
  return (
    <div>
        <Navbar/>
        <BlogPost/>
        <AllCategory/>
        <Footer/>
    </div>
  )
}

export default BlogPostPage