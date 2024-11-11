import React from 'react';

const jobs = [
  { title: "Application Developer : Cloud FullStack", company: "IBM", location: "Bengaluru East, Karnataka, India (On-Site)", applicants: "20 Applicants" },
  { title: "Associate Architect : Senior", company: "Google", location: "Bengaluru East, Karnataka, India (On-Site)", applicants: "20 Applicants" },
  { title: "Project Manager", company: "Netflix", location: "Bengaluru East, Karnataka, India (On-Site)", applicants: "20 Applicants" },
  { title: "Cloud Analyst", company: "Uber", location: "Bengaluru East, Karnataka, India (On-Site)", applicants: "20 Applicants" },
  { title: "Cloud Analyst", company: "Uber", location: "Bengaluru East, Karnataka, India (On-Site)", applicants: "20 Applicants" },
  // Add more job entries here
];

function AvailableJobs() {
  return (
    <div className="bg-white p-6 rounded-md shadow-md max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Available Jobs</h2>

      {/* Job Listings */}
      <ul className="space-y-4">
        {jobs.map((job, index) => (
          <li key={index} className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <p className="text-gray-500">{job.company}</p>
              <p className="text-gray-500">{job.location}</p>
              <p className="text-sm text-gray-400">{job.applicants}</p>
            </div>

            {/* Apply Button and Bookmark */}
            <div className="flex items-center space-x-4">
              <button className="bg-teal-600 text-white py-2 px-6 rounded-md">Apply</button>
              <button className="text-teal-600 text-xl">
                <i className="far fa-bookmark"></i> {/* Replace with icon library or SVG */}
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

export default AvailableJobs;
