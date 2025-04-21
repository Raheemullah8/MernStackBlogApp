import React from 'react';

function Post() {
  const post = {
    title: 'My First Blog',
    desc: 'This is my first blog where I share my thoughts on writing and creativity.',
    image: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=800&q=80',
  };

  const dummyComments = [
    {
      id: 1,
      username: 'John Doe',
      userAvatar: 'https://i.pravatar.cc/40?img=3',
      text: 'Awesome blog post!',
    },
    {
      id: 2,
      username: 'Jane Smith',
      userAvatar: 'https://i.pravatar.cc/40?img=5',
      text: 'Really enjoyed reading this. Keep it up!',
    },
  ];

  return (
    <div className="container py-5 post-container">
      {/* Post Detail */}
      <div className="post-detail text-white mb-5">
        <h2 className="fw-bold">{post.title}</h2>
        <img
          src={post.image}
          alt={post.title}
          className="post-image rounded mb-4 w-100"
          style={{ maxHeight: '400px', objectFit: 'cover' }}
        />
        <p className="fs-5">{post.desc}</p>
        <hr className="divider bg-white" />
      </div>

      {/* Comment Input UI */}
      <div className="comment-section text-center">
        <h4 className="text-white mb-4">💬 Leave a Comment</h4>
        <form className="mb-5 w-100 d-flex flex-column align-items-center">
          <div className="w-100" style={{ maxWidth: '600px' }}>
            <textarea
              className="form-control mb-3 rounded-3 px-3 py-2 shadow-sm border-0"
              rows="4"
              placeholder="Write your comment here..."
              style={{
                resize: 'none',
                fontSize: '16px',
                backgroundColor: '#f0f0f0',
              }}
              disabled
            ></textarea>
            <button
              className="btn btn-primary w-100 shadow-sm"
              type="button"
              disabled
              style={{ padding: '10px', fontWeight: '500' }}
            >
              🚀 Post Comment
            </button>
          </div>
        </form>

        {/* Dummy Comment List */}
        <div className="comment-list text-start">
          {dummyComments.map((comment) => (
            <div
              key={comment.id}
              className="d-flex align-items-start mb-3 comment-card"
              style={{ maxWidth: '600px', margin: '0 auto' }}
            >
              <img
                src={comment.userAvatar}
                alt={comment.username}
                className="rounded-circle me-3"
                style={{ width: '40px', height: '40px' }}
              />
              <div>
                <strong className="text-white">{comment.username}</strong>
                <p className="text-white mb-0">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Post;
