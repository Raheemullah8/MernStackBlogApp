import React from 'react';
import { FaUserEdit, FaFileUpload, FaLock, FaUser } from 'react-icons/fa';

function Profile() {
  return (
    <div className="container py-5 text-white">
      <div className="profile-card p-4 bg-dark rounded shadow-lg mx-auto" style={{ maxWidth: '600px' }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold">
            <FaUserEdit className="me-2 text-primary" />
            Update Profile
          </h2>
        </div>

        <form>
          {/* Profile Image Upload */}
          <div className="mb-3">
            <label className="form-label fw-bold">
              <FaFileUpload className="me-2 text-info" />
              Choose Profile Image
            </label>
            <input type="file" className="form-control" />
          </div>

          {/* Name */}
          <div className="mb-3">
            <label className="form-label fw-bold">
              <FaUser className="me-2 text-success" />
              Name
            </label>
            <input type="text" className="form-control" placeholder="Enter your name" />
          </div>

          {/* Old Password */}
          <div className="mb-3">
            <label className="form-label fw-bold">
              <FaLock className="me-2 text-warning" />
              Old Password
            </label>
            <input type="password" className="form-control" placeholder="Old Password" />
          </div>

          {/* New Password */}
          <div className="mb-4">
            <label className="form-label fw-bold">
              <FaLock className="me-2 text-danger" />
              New Password
            </label>
            <input type="password" className="form-control" placeholder="New Password" />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100 fw-bold">
            <FaUserEdit className="me-2" />
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
