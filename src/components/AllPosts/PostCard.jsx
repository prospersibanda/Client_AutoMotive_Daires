import React from 'react';
import post_img from '../../assets/latest_blog.jpg';
import author from '../../assets/author1.jpg';

const PostCard = () => {
  return (
    <div className='post-card'>
        <img src={post_img} alt="" />
        <div className='post-info'>
            <h3>A Review Of Cars With Advanced Infotainment Systems</h3>
            <div className='author-profile'>
                <img src={author} alt="" />
                <div className='author-info'>
                    <h4>Prosper Sibanda</h4>
                    <p>Oct 10, 2024 - 3MinRead</p>
                </div>
            </div>
            <p className='post-para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium mollitia error cum, expedita optio veritatis totam? Ipsum natus soluta veritatis, magnam recusandae et consectetur omnis. Id, odio? Voluptate dolores aliquam ex minus tempore, nisi cum totam iste obcaecati odit, quidem repellendus dolor, nulla dolorum quo porro cumque! Tenetur, aut earum?</p>
            <button>Read full article</button>
        </div>
    </div>
  )
}

export default PostCard