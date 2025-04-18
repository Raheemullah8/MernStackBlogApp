
import { useState } from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
 const [islogin,setlogin] = useState(true)
  
    return (
        <nav className='navbar d-flex justify-content-between align-item-center p-3'>
        
         <Link to={'/'}> <h1 className='mx-5 text-white fs-2 fw-bold'>CodeByRaheem</h1></Link>
            {!islogin ? <Link to={'/login'}> <button className='btn_signin mx-3'>sign in</button></Link>:   <div className="dropdown me-5">
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
            <Link className="dropdown-item" to="/dashbord">Dashboard</Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/profile/2222">Profile</Link>
          </li>
          <li>
            <button className="dropdown-item" style={{ cursor: 'pointer' }}>Logout</button>
          </li>
        </ul>
      </div>}
         
        </nav>
    )
}

export default Navbar