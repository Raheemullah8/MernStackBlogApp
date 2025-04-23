import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignInAlt, FaEnvelope, FaLock } from 'react-icons/fa';
import { post } from '../servieces/Endpoint';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { SetUser } from '../redux/AuthSlice';


function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const navigate = useNavigate(); // Navigate karne ke liye
  // Form jab submit ho, to yeh chalega
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Backend ko email aur password bhejna
      const res = await post('/user/login', { email, password });
      setEmail('');
      setPassword('');
      toast.success('Login Successful!');
      dispatch(SetUser( res.data.findUser)) 
       navigate('/');
  
      

    } catch (error) {
      console.log('Login Error:', error);
    }
  };

  return (
    <div className="container py-5 mt-5 text-white">
      <div className="login-card p-4 bg-dark rounded shadow-lg mx-auto" style={{ maxWidth: '500px' }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold">
            <FaSignInAlt className="me-2 text-primary" />
            Login to Your Account
          </h2>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-3">
            <label className="form-label fw-bold">
              <FaEnvelope className="me-2 text-warning" />
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="form-label fw-bold">
              <FaLock className="me-2 text-danger" />
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              className="form-control"
              placeholder="Enter your password"
              required
            />
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
