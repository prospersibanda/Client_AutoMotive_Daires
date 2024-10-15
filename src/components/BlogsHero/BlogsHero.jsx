import React from 'react';
import './BlogsHero.css';
import blogs_hero1 from '../../assets/blogs-hero1.jpg';
import blogs_hero2 from '../../assets/blogs-hero2.jpg';
import blogs_hero3 from '../../assets/blogs-hero3.jpg';
import blogs_hero4 from '../../assets/blogs-hero4.jpg';
import { FaPaperPlane } from 'react-icons/fa';

const BlogsHero = () => {
  return (
    <div className='blogs-hero'>
        <div className='blogs-hero-left'>
            <h1>Accelerate Your Passion: Insights, <br /> Innovations, and Inspiration for <br /> Automotive Enthusiasts</h1>
            <button>Subscribe <FaPaperPlane/></button>
        </div>

        <div className="image-stack-container">
            <div className="image-stack">
                <img src={blogs_hero1} alt="Car 1" className="stack-image" />
                <img src={blogs_hero2} alt="Car 2" className="stack-image" />
                <img src={blogs_hero3} alt="Car 3" className="stack-image" />
                <img src={blogs_hero4} alt="Car 4" className="stack-image" />
            </div>
        </div>
    </div>
  )
}

export default BlogsHero