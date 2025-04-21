import React, { useState } from 'react';
import { useEffect } from 'react';
import { get } from '../servieces/Endpoint';
import { BaseUrl } from '../servieces/Endpoint';
import { useNavigate } from 'react-router-dom';

function RecentPost() {
  const [posts,setPosts] = useState([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(null)
  

  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = async () => {
  try {
    setLoading(true)
    const res = await get('/post/getpost');
    console.log(res.data.getPost);
    setPosts(res.data.getPost);
    setLoading(false)
  } catch (error) {
    console.error(error).message;
    setError(error.message)
    setLoading(false)
  }
   
  }
  const navgate = useNavigate('')


  return (
    <>
      {/* Hero Section */}
      <div className="hero-section-blog">
        <div className="hero-overlay-blog">
          <div className="hero-content-blog text-center">
            <h1 className="hero-title-blog">Welcome to My Blog</h1>
            <p className="hero-subtitle-blog text-warning">
              Discover stories, ideas, and experiences from around the world.
            </p>
          </div>
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="container py-5">
        <div className="row text-center mb-4">
          <div className="col">
            <h2 className="text-white fs-1 fw-bolder">Recent Posts</h2>
            <p className="text-warning pt-2">Explore my latest articles and insights.</p>
          </div>
        </div>

        <div className="row">
          {loading && <div className="text-center fs-bold text-white">Loading...</div>}

          {error && <div className="text-danger text-center">{error}</div>}

          {!loading && !error && posts.length === 0 && (
            <div className="text-center text-white fs-bold">No posts available.</div>
          )}
          
          {!loading && !error && posts.length > 0 && posts.map((post) => (
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={post._id}>
              <div className="card h-100 shadow-lg border-0">
                <img
                  src={`${BaseUrl}/images/${post?.thumbnail}`}
                  alt={post.title}
                  className="card-img-top"
                  style={{ height: '220px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{post?.title}</h5>
                  <p className="card-text flex-grow-1">{post?.description}</p>
                  <button className="btn btn-primary btn-sm mt-auto w-100" onClick={()=>{navgate('post/1')}}>Read Article</button>
                </div>
              </div>
            </div>
          ))}
        
        </div>
      </div>
    </>
  );
}

export default RecentPost;
