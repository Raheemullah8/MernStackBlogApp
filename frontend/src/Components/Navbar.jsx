import { useState } from 'react';
import { Link } from 'react-router-dom';



function Navbar() {
  const [islogin, setlogin] = useState(false);

  return (
    <nav className="navbar d-flex justify-content-between align-items-center p-3 flex-wrap">
      {/* Left Side: Logo + (Avatar in Mobile View) */}
      <div className="d-flex align-items-center">
        <Link to={'/'}>
          <h1 className="mx-3 text-white fs-2 fw-bold mb-0">CodeByRaheem</h1>
        </Link>

        {/* Avatar for Mobile View (left side) */}
        {islogin && (
          <div className="dropdown d-md-none ms-3">
            <button
              className="btn p-0 border-0 bg-transparent"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div
                className="rounded-circle overflow-hidden bg-info"
                style={{ width: '40px', height: '40px', cursor: 'pointer' }}
              >
                <img
                  src="https://img.freepik.com/free-photo/portrait-confused-male-designer-architect-feels-stressed-being-nervous-keeps-hand-head-stares-blueprint-exhausted-man-creates-construction-project-alone-has-some-troubles_1258-80492.jpg?t=st=1743268888~exp=1743272488~hmac=5e713816e4af65f72b6fdb1ea2f5f87121f42a0cfd7d238387999feae5d6c2b0&w=996"
                  style={{ objectFit: 'cover' }}
                  className="img-fluid h-100 w-100"
                  alt=""
                />
              </div>
            </button>

            <ul className="dropdown-menu dropdown-menu-start dropdown-menu-dark">
              <li>
                <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/profile/2222">Profile</Link>
              </li>
              <li>
                <button className="dropdown-item" style={{ cursor: 'pointer' }}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Right Side: Sign In or Avatar (desktop only) */}
      <div className="me-3 d-none d-md-block">
        {!islogin ? (
          <Link to={'/login'}>
            <button className="btn_signin mx-3">sign in</button>
          </Link>
        ) : (
          <div className="dropdown">
            <button
              className="btn p-0 border-0 bg-transparent"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div
                className="rounded-circle overflow-hidden bg-info"
                style={{ width: '40px', height: '40px', cursor: 'pointer' }}
              >
                <img
                  src="https://img.freepik.com/free-photo/portrait-confused-male-designer-architect-feels-stressed-being-nervous-keeps-hand-head-stares-blueprint-exhausted-man-creates-construction-project-alone-has-some-troubles_1258-80492.jpg?t=st=1743268888~exp=1743272488~hmac=5e713816e4af65f72b6fdb1ea2f5f87121f42a0cfd7d238387999feae5d6c2b0&w=996"
                  style={{ objectFit: 'cover' }}
                  className="img-fluid h-100 w-100"
                  alt=""
                />
              </div>
            </button>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
              <li>
                <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/profile/2222">Profile</Link>
              </li>
              <li>
                <button className="dropdown-item" style={{ cursor: 'pointer' }}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
      
    </nav>
  );
}

export default Navbar;
