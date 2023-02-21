import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";





function NavBar() {
    const { user, setUser, userType, setUserType } = useAuth();
    const navigate = useNavigate();
  
  


  return (
    <header className="text-gray-600 body-font bg-red-300">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      
    
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      {user ?<button onClick={
        () => {
            setUser(null);
            setUserType(null);
            navigate('/login');
            }
      } className="mr-5 text-white font-semibold bg-red-600 px-4 py-2 rounded-md">Logout</button>:
      <Link to="/login" className="mr-5 text-white font-semibold bg-red-600 px-4 py-2 rounded-md">Login</Link>}

      {/* if user is employer then show the button of post job */}
        {user && user.role === 'employer' && <Link to="/jobpost" className="mr-5 hover:text-gray-900">Post Job</Link>}
        {user  && <Link to="/joblist" className="mr-5 hover:text-gray-900">Job List</Link>}
        

    </nav>
   
  </div>
</header>
  );
}

export default NavBar;
