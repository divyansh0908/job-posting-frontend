import React from 'react';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

function JobCard({ title, description, phone, location }) {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div className="mb-4">
        <p className="text-gray-700">{description}</p>
      </div>
      <div className="flex items-center mb-4">
        <FaPhone className="text-gray-700 mr-2" />
        <p className="text-gray-700">{phone}</p>
      </div>
      <div className="flex items-center mb-4">
        <FaMapMarkerAlt className="text-gray-700 mr-2" />
        <p className="text-gray-700">{location}</p>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default JobCard;