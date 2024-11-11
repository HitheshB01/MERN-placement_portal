// import React from 'react';
// import { IoMdBookmark } from "react-icons/io";
// import { Link } from 'react-router-dom';
// import { MdDescription } from "react-icons/md";


// const jobs = [
//   { title: "Application Developer : Cloud FullStack", company: "IBM", location: "Bengaluru East, Karnataka, India (On-Site)", applicants: "20 Applicants" },
//   { title: "Associate Architect : Senior", company: "Google", location: "Bengaluru East, Karnataka, India (On-Site)", applicants: "20 Applicants" },
//   { title: "Project Manager", company: "Netflix", location: "Bengaluru East, Karnataka, India (On-Site)", applicants: "20 Applicants" },
//   { title: "Cloud Analyst", company: "Uber", location: "Bengaluru East, Karnataka, India (On-Site)", applicants: "20 Applicants" },
//   // Add more job entries here
// ];

// function JobsPage() {
//   return (
//     <div className="bg-white rounded-md shadow-md max-w-4xl mx-auto mt-10">
//       <h2 className="text-3xl font-bold mb-6 text-center">Available Jobs</h2>

//       {/* Job Listings */}
//       <ul className="space-y-4 p-4">
//         {jobs.map((job, index) => (
//           <li key={index} className="flex justify-between items-center">
//             <div className='p-1 shadow-xl'>
//               <h3 className="text-lg font-semibold">{job.title}</h3>
//               <p className="text-gray-500">{job.company}</p>
//               <p className="text-gray-500">{job.location}</p>
//               <p className="text-sm text-gray-400">{job.applicants}</p>
//             </div>

//             {/* Apply Button and Bookmark */}
//             <div className="flex items-center space-x-4">
//               <button className="bg-teal-600 text-white py-2 px-6 rounded-md">Apply</button>
//               <Link to="/jobportal"><button className="bg-teal-600 text-white py-2 px-6 rounded-md"><MdDescription />
//               </button></Link>

//               {/* <Link to="/jobdescription">more info</Link> */}
//               <button className="text-teal-600 text-xl">
//               <IoMdBookmark /> {/* Replace with icon library or SVG */}
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>

//       {/* Pagination */}
//       {/* <div className="flex justify-center items-center mt-8 space-x-2 text-gray-600">
//         <button className="px-3 py-1 border border-gray-300 rounded-md">First</button>
//         <button className="px-3 py-1 border border-gray-300 rounded-md">1</button>
//         <button className="px-3 py-1 border border-gray-300 rounded-md">2</button>
//         <button className="px-3 py-1 border border-gray-300 rounded-md">3</button>
//         <button className="px-3 py-1 border border-gray-300 rounded-md">4</button>
//         <button className="px-3 py-1 border border-gray-300 rounded-md">5</button>
//         <button className="px-3 py-1 border border-gray-300 rounded-md">Last</button>
//       </div> */}
//     </div>
//   );
// }

// export default JobsPage;



import React, { useEffect, useState } from 'react';
import { IoMdBookmark } from "react-icons/io";
import { Link } from 'react-router-dom';
import { MdDescription } from "react-icons/md";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../components/firebase'; // Assume your Firestore instance is exported from firebase.js

function JobsPage() {
  const [jobs, setJobs] = useState([]); // State to store jobs data
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobCollection = collection(db, 'jobs'); // Access the 'jobs' collection
        const jobSnapshot = await getDocs(jobCollection);
        const jobList = jobSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Fetch job data
        setJobs(jobList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <p>Loading jobs...</p>; // Loading indicator while data is fetched
  }

  return (
    <div className="bg-white rounded-md shadow-md max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Available Jobs</h2>

      {/* Job Listings */}
      <ul className="space-y-4 p-4">
        {jobs.map((job, index) => (
          <li key={index} className="flex justify-between items-center">
            <div className='p-1 shadow-xl'>
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <p className="text-gray-500">{job.company}</p>
              <p className="text-gray-500">{job.location}</p>
              <p className="text-sm text-gray-400">{job.applicants} Applicants</p>
            </div>

            {/* Apply Button and Bookmark */}
            <div className="flex items-center space-x-4">
              <button className="bg-teal-600 text-white py-2 px-6 rounded-md">Apply</button>
              <Link to="/jobportal">
                <button className="bg-teal-600 text-white py-2 px-6 rounded-md">
                  <MdDescription />
                </button>
              </Link>
              <button className="text-teal-600 text-xl">
                <IoMdBookmark />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobsPage;

