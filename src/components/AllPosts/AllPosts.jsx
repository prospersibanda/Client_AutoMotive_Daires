import React from 'react';
import './AllPosts.css'
import PostCard from './PostCard';

const AllPosts = () => {
  return (
    <div className='all-posts'>
        <h2>All posts</h2>
        <div>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </div>
    </div>
  )
}

export default AllPosts