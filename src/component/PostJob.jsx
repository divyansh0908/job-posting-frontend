import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { postJob } from '../api/postjob';

function JobForm() {
    const { user, setUser, userType, setUserType  } = useAuth();

    console.log(user);
    console.log(userType);

    const navigate = useNavigate();

  const [title, setTitle] = useState('Business Development Executive');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
useEffect(() => {
    if (!user) {
        navigate("/login");
    }else if(user.role !== "employer"){
        alert("You are not authorized to access this page");
        navigate("/login");
    }
}, []);
  const jobTitles = [
    'Business Development Executive',
    'Customer Support Voice',
    'Customer Support Non-Voice',
    'Inside Sales',
    'Field Sales',
    'Content Writing',
    'Digital Marketing',
    'Community Management'
  ];

  async function handleSubmit(event) {
    event.preventDefault();
    const job = {
        title,
        description,
        location,
        phone,
        email: user.email
    }
    const token = userType;
    const {data, err} =await postJob(job, token);
    if(err){
        alert("Error in posting job");
    }else{
        alert("Job posted successfully");
        navigate("/joblist");
    }



    // Send job post request to backend API
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded w-1/2 mx-auto pt-6 pb-8 mb-4">
      <div className="mb-4 flex flex-row">
        <label className="block text-gray-700 font-bold my-auto w-1/5" htmlFor="title">
          Job Title
        </label>
        <div className="relative w-1/4">
          <select
            className="block appearance-none  bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            value={title}
            onChange={event => setTitle(event.target.value)}
          >
            {jobTitles.map(jobTitle => (
              <option key={jobTitle} value={jobTitle}>
                {jobTitle}
              </option>
            ))}
          </select>
            
        </div>
      </div>
      <div className="mb-4 flex flex-row">
        <label className="block text-gray-700 font-bold mb-2 w-1/5" htmlFor="description">
          Description
        </label>
        <textarea
          className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          placeholder="Job Description"
          value={description}
          onChange={event => setDescription(event.target.value)}
        ></textarea>
      </div>
        <div className="mb-4 flex flex-row">
        <label className="block text-gray-700 font-bold my-auto w-1/5" htmlFor="location">
            Location
        </label>
        <input
            className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            placeholder="Location"
            value={location}
            onChange={event => setLocation(event.target.value)}
        />
        </div>
        <div className="mb-4 flex flex-row">
        <label className="block text-gray-700 font-bold my-auto w-1/5" htmlFor="phone">
            Phone
        </label>
        <input
            className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={event => setPhone(event.target.value)}
        />
        </div>
        
      <div className="flex items-center justify-between mx-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Post Job
        </button>
      </div>
    </form>
  );
}

export default JobForm;