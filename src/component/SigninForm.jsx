import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { login } from '../api/login';


function SignupForm() {
  const { user, setUser, userType, setUserType  } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const {data,err} = await login(email, password);
    if (err) {
      console.log(err);
      alert(err);
    } else {
      console.log(data);
      setUser(data.user);
      setUserType(data.access_token);
      if (data.user.role === 'employer') {
        navigate('/jobpost');
      } else {
      navigate('/joblist');
      }
      
    }
      
    // Send login request to backend API
  }
  // if user is logged in, redirect to /jobpost if role is employer or /joblist if role is job seeker
  useEffect(() => {
    if (user) {
      if (userType === 'employer') {
        navigate('/jobpost');
      } else {
        navigate('/joblist');
      }
    }
  }, [user]);



  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <div className="flex  items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>

          <p onClick={()=>{
            navigate('/signup')
          }}> Register</p>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
