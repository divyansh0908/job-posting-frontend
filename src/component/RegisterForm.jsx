import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api/register';

function SignupForm() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(''); 
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [accountType, setAccountType] = useState('');

  async function handleSubmit(event) {
    console.log('submitting');
    event.preventDefault();
    const user = {
        name: name,
        email: email,
        password: password,
        username: username,
        role: accountType
    }
    const {data,err} = await register(user);
    if (err) {
        console.log(err);
        alert(err);
    } else {
        console.log(data);
        alert('Account created successfully! Please login to continue.');
        navigate('/login');

    }


    // Send signup request to backend API
  }

    useEffect(() => {   
        if ((password === confirmPassword) && (password !== '') && (confirmPassword !== '') && (password.length >= 8) && (confirmPassword.length >= 8) && (password.length <= 20) && (confirmPassword.length <= 20)   ) {
            setPasswordMatch(true);
        } else {
            setPasswordMatch(false);
        }
    }, [password, confirmPassword]);




  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4 flex flex-row">
      <label className="block text-gray-700 font-bold my-auto mx-4 w-1/5" htmlFor="name">
            Name
        </label>
        <input
            className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={event => setName(event.target.value)}
        />
        </div>
        <div className="mb-4 flex flex-row">
        <label className="block text-gray-700 font-bold my-auto mx-4 w-1/5" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </div>
      <div className="mb-4 flex flex-row">
      <label className="block text-gray-700 font-bold my-auto mx-4 w-1/5" htmlFor="username">
            Username
        </label>
        <input
            className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={event => setUsername(event.target.value)}
        />
        </div>


      <div className="mb-4 flex flex-row">
      <label className="block text-gray-700 font-bold my-auto mx-4 w-1/5" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </div>
      <div className="mb-4 flex flex-row">
      <label className="block text-gray-700 font-bold my-auto mx-4 w-1/5" htmlFor="confirmPassword">
          Confirm Password
        </label>
        <input
          className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={event => setConfirmPassword(event.target.value)}
        />
      </div>
      {/* Radio Button For selecting whether employer or employee */}
      <div className="mb-6 flex flex-row">
        <span className="text-gray-700 font-bold mb-2 block px-3 mx-4 my-auto w-1/5">Select Account Type</span>
        <div className="flex flex-row my-auto w-1/4">
        <label className=" ">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-gray-600"
            name="userType"
            value="employee"
            checked={accountType === 'employee'}
            onChange={event => setAccountType(event.target.value)}
          />
          <span className="ml-4 my-auto text-gray-700">Employee</span>
        </label>
        <label className="">
          <input
            type="radio"
            className="form-radio ml-4 h-5 w-5 text-gray-600"
            name="userType"
            value="employer"
            checked={accountType === 'employer'}
            onChange={event => setAccountType(event.target.value)}
          />
          <span className="ml-4 text-gray-700">Employer</span>
        </label>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${passwordMatch ? '' : 'opacity-50 cursor-not-allowed'}}`}
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
