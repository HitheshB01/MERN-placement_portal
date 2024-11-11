import React from 'react';
import { IoMdBookmark } from "react-icons/io";


const jobs = [
  { title: "Software Engineering", company: "Google", location: "Bengaluru East, Karnataka, India (On-Site)", applicants: "20 Applicants" },
  { title: "Frontend Developer", company: "IBM", location: "Bengaluru East, Karnataka, India (On-Site)", applicants: "20 Applicants" },
  { title: "Project Manager", company: "Netflix", location: "Bengaluru East, Karnataka, India (On-Site)", applicants: "20 Applicants" },
  { title: "Cloud Analyst", company: "Uber", location: "Bengaluru East, Karnataka, India (On-Site)", applicants: "20 Applicants" },
  // Add more job entries here
];

function AppliedPage() {
  return (
    <div className="bg-white rounded-md shadow-md max-w-4xl mx-auto mt-10">
      <h2 className=" font-bold text-3xl mb-6 pl-4 text-center">Applied Jobs</h2>

      {/* Job Listings */}
      <ul className="space-y-4 p-4">
        {jobs.map((job, index) => (
          <li key={index} className="flex justify-between items-center">
            <div className='p-1 shadow-xl'>
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <p className="text-gray-500">{job.company}</p>
              <p className="text-gray-500">{job.location}</p>
              <p className="text-sm text-gray-400">{job.applicants}</p>
            </div>

            {/* Apply Button and Bookmark */}
            <div className="flex items-center space-x-4">
              <button className="bg-teal-600 text-white py-2 px-6 rounded-md">Applied</button>
              <button className="text-teal-600 text-xl">
              <IoMdBookmark />
              {/* Replace with icon library or SVG */}
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 space-x-2 text-gray-600">
        <button className="px-3 py-1 border border-gray-300 rounded-md">First</button>
        <button className="px-3 py-1 border border-gray-300 rounded-md">1</button>
        <button className="px-3 py-1 border border-gray-300 rounded-md">2</button>
        <button className="px-3 py-1 border border-gray-300 rounded-md">3</button>
        <button className="px-3 py-1 border border-gray-300 rounded-md">4</button>
        <button className="px-3 py-1 border border-gray-300 rounded-md">5</button>
        <button className="px-3 py-1 border border-gray-300 rounded-md">Last</button>
      </div>
    </div>
  );
}

export default AppliedPage;
