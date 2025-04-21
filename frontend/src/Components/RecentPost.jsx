import React from 'react';
import { useNavigate } from 'react-router-dom';


function RecentPost() {
  const posts = [
    {
      id: 1,
      title: 'My First Blog',
      desc: 'This is my first blog where I share my thoughts on writing and creativity.',
      image: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Traveling the World',
      desc: 'Exploring the hidden gems and unforgettable moments from my travel diaries.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Learning Web Development',
      desc: 'A beginner’s guide to HTML, CSS, JavaScript and the world of web.',
      image: 'https://images.unsplash.com/photo-1581090700227-1e8d7f1b2825?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      title: 'The Power of Minimalism',
      desc: 'How minimalism changed my life and brought more focus and freedom.',
      image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const navigate = useNavigate();
  const handleEvents = ()=>{
   navigate('/post/1')
  }

  return (
    <div className='container py-5'>
      <div className='mb-5 text-center'>
        <h2 className='fw-bold fs-1 text-white'>Recent Posts</h2>
      </div>
      <div className='row'>
        {posts.map((post) => (
          <div className='col-md-6 col-lg-4 mb-4' key={post.id}>
            <div className='blog-card shadow rounded overflow-hidden '> 
              <img src={post.image} alt={post.title} className='blog-image' />
              <div className='blog-content'>
                <h5 className='blog-title'>{post.title}</h5>
                <p className='blog-description'>{post.desc}</p>
                <button className='read-btn' onClick={handleEvents}>Read-Article </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentPost;
