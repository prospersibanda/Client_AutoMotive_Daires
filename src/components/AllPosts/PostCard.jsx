import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className='post-card'>
      <img src={post.image} alt={post.title} />
      <div className='post-info'>
        <h3>{post.title}</h3>
        <div className='author-profile'>
          <img src={post.author.profilePicture} alt={post.author.name} />
          <div className='author-info'>
            <h4>{post.author.name}</h4>
            <p>{new Date(post.datePosted).toLocaleDateString()} - {post.readTime}</p>
          </div>
        </div>
        <p className='post-para'>{post.shortDescription}</p>
        <button>Read full article</button>
      </div>
    </div>
  );
}

export default PostCard;
