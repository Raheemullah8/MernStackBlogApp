import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Posts from "./Pages/Posts"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Profile from "./Pages/Profile"
import UserLayout from "./Layouts/UserLayout"

import AdminLayout from "./Layouts/AdminLayout"
import Dashboard from "./Pages/Admin/Dashboard"
import User from "./Pages/Admin/Users"
import AllPost from "./Pages/Admin/AllPost"
import AddPost from "./Pages/Admin/Addpost"




function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout/>}>
       
        <Route index element={<Home/>} />
        <Route path="profile/:id" element={<Profile/>} />
        <Route path="post/:id" element={<Posts/>} />
        </Route>

        <Route path="/dashboard" element={<AdminLayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="addpost" element={<AddPost/>}/>
          <Route path="allusers" element={<User/>}/>
          <Route path="allpost" element={<AllPost/>}/>
        </Route>
       
        
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
