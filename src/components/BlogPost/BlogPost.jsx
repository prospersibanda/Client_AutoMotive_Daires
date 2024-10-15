import React from 'react'
import { useState } from 'react';
import './BlogPost.css';
import blog_img from '../../assets/latest_blog.jpg';
import author_img from '../../assets/author1.jpg';
import { FaBookmark, FaHeart, FaRegBookmark, FaRegComment, FaRegHeart, FaShare, FaShareAlt } from 'react-icons/fa';

const BlogPost = () => {
    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    const handleLike = () =>{
        setLiked(!liked)
    }
  return (
    <div className='blog-post'>
         <img src={blog_img} alt="" />
         <div className='post-engagement'>
            {liked ? <FaHeart onClick={handleLike}/> : <FaRegHeart onClick={handleLike} />}
            <FaRegComment/>
            <FaShareAlt/>
            {bookmarked ? <FaBookmark/> : <FaRegBookmark/>}
         </div>
         <h1>Classic Revival: Revisiting Iconic Cars Through Modern Reviews</h1>
         <div className='author-info'>
            <img src={author_img} alt="" />
            <h4>Prosper Sibanda</h4>
            <p>Oct 10, 2024 - 3MinRead</p>
         </div>
         <div className='read-section'>
           <div>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, necessitatibus minima!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus autem quae, nobis delectus suscipit iste dignissimos itaque vel omnis ex magnam maxime consequuntur reiciendis quaerat possimus nesciunt veniam incidunt placeat nam cum id deserunt inventore vitae! Labore, aut odio? Ex dolore minus explicabo quis eaque molestiae harum. Assumenda ipsum delectus debitis reprehenderit eius facere sunt asperiores vel aut. Repudiandae sapiente quasi odit eos et alias reprehenderit, labore nobis non blanditiis distinctio atque ab tenetur obcaecati in sit optio doloribus quam asperiores soluta! Soluta harum quos delectus tempore inventore numquam facilis totam esse, optio quis ducimus, amet voluptate similique asperiores ullam.</p>
           </div>
           <div>
                <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, molestias quasi!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus autem quae, nobis delectus suscipit iste dignissimos itaque vel omnis ex magnam maxime consequuntur reiciendis quaerat possimus nesciunt veniam incidunt placeat nam cum id deserunt inventore vitae! Labore, aut odio? Ex dolore minus explicabo quis eaque molestiae harum. Assumenda ipsum delectus debitis reprehenderit eius facere sunt asperiores vel aut. Repudiandae sapiente quasi odit eos et alias reprehenderit, labore nobis non blanditiis distinctio atque ab tenetur obcaecati in sit optio doloribus quam asperiores soluta! Soluta harum quos delectus tempore inventore numquam facilis totam esse, optio quis ducimus, amet voluptate similique asperiores ullam.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, labore dicta beatae nisi eaque minus facere! Sunt reprehenderit aliquam asperiores culpa repellendus esse, a earum fugiat molestiae totam neque voluptas labore veritatis velit minima excepturi sed cumque maiores mollitia similique ratione et assumenda porro. Ratione ea debitis magni necessitatibus officia.</p>
           </div>
           <ul>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet.</li>
           </ul>
         </div>
    </div>
  )
}

export default BlogPost