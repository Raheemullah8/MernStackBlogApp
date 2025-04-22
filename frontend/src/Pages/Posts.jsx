import React, { useEffect, useState } from 'react';
import { get } from '../servieces/Endpoint';
import { useParams } from 'react-router-dom';
import { BaseUrl } from '../servieces/Endpoint';

function Post() {
  const { id } = useParams(); // URL se post ka ID nikaal rahe hain
  const [post, setPost] = useState(null); // Post ka data store karne ke liye
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error handle karne ke liye

  useEffect(() => {
    getSinglePost(); // useEffect ke andar function call
  }, []);
  const getSinglePost = async () => {
    try {
      setLoading(true); // Loading start
      const res = await get(`/public/singlepost/${id}`); // API call
      setPost(res.data.post); // Jo post aayi usay state mein set karo
      console.log(res.data.post); 
      setLoading(false); // Loading khatam
    } catch (error) {
      console.error(error.message); // Agar error aaye to console mein dikhao
      setError(error); // Error ko state mein rakho
      setLoading(false); // Loading khatam
    }
  };
  return (
    <div className="container py-5 post-container">
      {/* Post Detail */}
      {loading && <div className="text-center fs-bold text-white">Loading...</div>}
      {error && <div className="text-danger text-center">{error.message}</div>}

      {!loading && !error && post && (
        <div className="post-detail text-white mb-5">
          <h2 className="fw-bold">{post?.title}</h2>
          <img
            src={`${BaseUrl}/images/${post?.thumbnail}`}
            alt={post?.title}
            className="post-image rounded mb-4 w-100"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
          <p className="fs-5">{post?.description}</p>
          <hr className="divider bg-white" />
        </div>
      )}

      {/* Comment Input UI (disabled for now) */}
      <div className="comment-section text-center">
  <h4 className="text-white mb-4">💬 Leave a Comment</h4>

  {/* Comment Input Form (Disabled) */}
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

  {/* ✅ Dummy Comments UI Below Form */}
  <div className="comment-list text-start">
    {post?.comments?.map((comment) => (
      <div
        key={comment._id}
        className="d-flex align-items-start mb-4 comment-card bg-dark p-3 rounded"
        style={{ maxWidth: '600px', margin: '0 auto' }}
      >
        <img
          src={`${BaseUrl}/images/${comment.UserId?.profile}`}
          alt="User Avatar"
          className="rounded-circle me-3"
          style={{ width: '40px', height: '40px', objectFit: 'cover' }}
        />
        <div>
          <strong className="text-white"> {comment.UserId.fullname}</strong>
          <p className="text-white mb-0">
             {comment.comments}.  😎
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}

export default Post;
