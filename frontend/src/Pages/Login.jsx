import React from 'react';
import { FaSignInAlt, FaEnvelope, FaLock } from 'react-icons/fa';

function Login() {
  return (
    <div className="container py-5 mt-5 text-white">
      <div className="login-card p-4 bg-dark rounded shadow-lg mx-auto" style={{ maxWidth: '500px' }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold">
            <FaSignInAlt className="me-2 text-primary" />
            Login to Your Account
          </h2>
        </div>

        <form>
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

          {/* Login Button */}
          <button type="submit" className="btn btn-primary w-100 fw-bold">
            <FaSignInAlt className="me-2" />
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
