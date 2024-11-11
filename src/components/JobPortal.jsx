import React from 'react'
import SideNav from './SideNav'
import { Link } from 'react-router-dom'

const JobPortal = () => {
  return (
    <div>
      <div className="h-screen flex bg-gray-100">

      <aside className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-10">
        <SideNav/>
      </aside>

      {/* Job Details Section */}
      <main className="w-3/5 p-8 ml-[260px]">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Software Engineer
              </h1>
              <p className="text-gray-600">Google | Bangalore East, Karnataka</p>
              <p className="text-gray-600">Posted 1 month ago | Job ID: 637454345</p>
            </div>
            <Link to="/layout/jobs" className="text-teal-600 text-xl">
            <button className="text-white bg-teal-600 px-4 py-2 rounded-md">
              Back
            </button>
            </Link>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex space-x-4 mb-8">
          <button className="bg-green-600 text-white px-4 py-2 rounded-md">
            On Site
          </button>
          <button className="bg-gray-200 px-4 py-2 rounded-md">3-5 Yrs Experience</button>
          <button className="bg-gray-200 px-4 py-2 rounded-md">12 Applicants</button>
        </div>

        {/* Job Description, Responsibilities, Qualifications, and Skills */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="font-semibold text-lg mb-4">Job Description</h2>
            <p className="text-gray-600">
              Uber is seeking a Cloud Analyst to join our dynamic team...
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-4">Responsibilities</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Oversee deployment, maintenance, and operation of cloud infrastructure.</li>
              <li>Ensure high availability and reliability of cloud services.</li>
              {/* Add more responsibilities */}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-4">Qualifications</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Bachelor's degree in Computer Science or related field.</li>
              <li>Proficiency in AWS, Azure, or Google Cloud.</li>
              {/* Add more qualifications */}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-4">Skills</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Experience in Agile software engineering teams.</li>
              <li>Proficient in JavaScript, TypeScript, and cloud security tools.</li>
              {/* Add more skills */}
            </ul>
          </div>
        </div>
      </main>

      {/* Placeholder for right section */}
      
    </div>

    </div>
  )
}

export default JobPortal
