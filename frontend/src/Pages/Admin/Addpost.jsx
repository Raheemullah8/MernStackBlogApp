import React from 'react';

function AddPost() {
  return (
    <div className="container py-5">
      <h2 className="text-white mb-4 text-center">Add a New Post</h2>
      <form className="bg-dark p-4 rounded text-white shadow">
        {/* Title */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Post Title</label>
          <input
            type="text"
            id="title"
            className="form-control"
            placeholder="Enter title"
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Post Description</label>
          <textarea
            id="description"
            className="form-control"
            rows="4"
            placeholder="Enter description"
          ></textarea>
        </div>

        {/* File Upload */}
        <div className="mb-3">
          <label htmlFor="file" className="form-label">Upload File</label>
          <input
            type="file"
            id="file"
            className="form-control"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100">
          Add Post
        </button>
      </form>
    </div>
  );
}

export default AddPost;
