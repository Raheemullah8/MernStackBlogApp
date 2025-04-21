import React from 'react';

function AllPost() {
  // Mock post data
  const posts = [
    {
      id: 1,
      title: 'My First Blog',
      desc: 'This is my first blog where I share my thoughts on writing and creativity. It’s an exciting journey!',
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
      desc: 'A beginner’s guide to HTML, CSS, JavaScript, and the world of web development. Join me in this adventure!',
      image: 'https://images.unsplash.com/photo-1581090700227-1e8d7f1b2825?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center text-white mb-4">All Posts</h2>

      {/* Post Cards Grid */}
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-4 mb-4" key={post.id}>
            <div className="card bg-dark text-white d-flex flex-column">
              <img
                src={post.image}
                alt={post.title}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text flex-grow-1">{post.desc}</p>
                {/* Button Section */}
                <div className="d-flex justify-content-between mt-2">
                  <button className="btn btn-warning btn-sm">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllPost;
