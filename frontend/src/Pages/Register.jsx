import React from 'react';
import { FaUserPlus, FaEnvelope, FaLock, FaUser, FaFileUpload } from 'react-icons/fa';

function Register() {
  return (
    <div className="container py-5 text-white">
      <div className="register-card p-4 bg-dark rounded shadow-lg mx-auto" style={{ maxWidth: '600px' }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold">
            <FaUserPlus className="me-2 text-success" />
            Create an Account
          </h2>
        </div>

        <form>
          {/* Profile Image */}
          <div className="mb-3">
            <label className="form-label fw-bold">
              <FaFileUpload className="me-2 text-info" />
              Upload Profile Picture
            </label>
            <input type="file" className="form-control" />
          </div>

          {/* Full Name */}
          <div className="mb-3">
            <label className="form-label fw-bold">
              <FaUser className="me-2 text-primary" />
              Full Name
            </label>
            <input type="text" className="form-control" placeholder="Enter your full name" />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-bold">
              <FaEnvelope className="me-2 text-warning" />
              Email
            </label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="form-label fw-bold">
              <FaLock className="me-2 text-danger" />
              Password
            </label>
            <input type="password" className="form-control" placeholder="Enter your password" />
          </div>

          {/* Register Button */}
          <button type="submit" className="btn btn-success w-100 fw-bold">
            <FaUserPlus className="me-2" />
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
