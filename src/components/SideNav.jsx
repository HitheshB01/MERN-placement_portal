// import React from 'react';
// import { Link } from 'react-router-dom';

// const SideNav = () => {
//   return (
//     <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
//       <div className="p-6">
//         <h1 className="text-3xl font-bold">Placement Portal</h1>
//       </div>
//       <nav className="mt-10 flex flex-col">
//         <li className="text-xl py-2 px-6 hover:bg-gray-700">dadfwdfw</li>
//         <li className="text-xl py-2 px-6 hover:bg-gray-700">advsvsvsvsd</li>
//         <li className="text-xl py-2 px-6 hover:bg-gray-700">dvsvsfv</li>
//         <li className="text-xl py-2 px-6 hover:bg-gray-700">sfsfbdfb</li>
//         <li className="text-xl py-2 px-6 hover:bg-gray-700">sfbfbdb</li>
//         <Link to="/" className="text-xl py-2 px-6 hover:bg-gray-700">Home</Link>
//         <Link to="/jobs" className="text-xl py-2 px-6 hover:bg-gray-700">Jobs</Link>
//         <Link to="/applied" className="text-xl py-2 px-6 hover:bg-gray-700">Applied</Link>
//         <Link to="/resume" className="text-xl py-2 px-6 hover:bg-gray-700">Resume</Link>
//         <Link to="/profile" className="text-xl py-2 px-6 hover:bg-gray-700">Profile</Link>
//       </nav>
//     </div>
//   );
// }

// export default SideNav;

import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth"; // Firebase auth functions

import {
  FaHome,
  FaBriefcase,
  FaFileAlt,
  FaUserAlt,
  FaClipboardList,
} from "react-icons/fa";
import { RiLogoutBoxFill } from "react-icons/ri";

import logo from "../images/Logo.png";

const SideNav = () => {

  const navigate = useNavigate(); // for navigation after logout
  const auth = getAuth(); // Initialize Firebase auth

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out successfully");
        navigate("/"); // Redirect to the login page or home after logout
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };
  return (
    <div className="h-screen w-64 bg-gradient-to-b from-green-500 to-teal-600 text-white shadow-lg flex flex-col">
      {/* Logo */}
      <div className="p-6 flex items-center justify-center">
        <img
          src={logo} // Add your logo here
          alt="TAGES Logo"
          className="h-40 mx-auto mix-blend-multiply"
        />{" "}
      </div>

      {/* Nav Links */}
      <nav className=" flex flex-col space-y-4">
        <Link
          to="/layout"
          className="flex items-center text-lg py-3 px-6 hover:bg-teal-500 hover:shadow-md rounded-lg transition ease-in-out duration-300"
        >
          <FaHome className="mr-4" />
          Home
        </Link>

        <Link
          to="/layout/jobs"
          className="flex items-center text-lg py-3 px-6 hover:bg-teal-500 hover:shadow-md rounded-lg transition ease-in-out duration-300"
        >
          <FaBriefcase className="mr-4" />
          Jobs
        </Link>

        <Link
          to="/layout/applied"
          className="flex items-center text-lg py-3 px-6 hover:bg-teal-500 hover:shadow-md rounded-lg transition ease-in-out duration-300"
        >
          <FaClipboardList className="mr-4" />
          Applied
        </Link>

        <Link
          to="/layout/resume"
          className="flex items-center text-lg py-3 px-6 hover:bg-teal-500 hover:shadow-md rounded-lg transition ease-in-out duration-300"
        >
          <FaFileAlt className="mr-4" />
          Resume
        </Link>

        <Link
          to="/layout/profile"
          className="flex items-center text-lg py-3 px-6 hover:bg-teal-500 hover:shadow-md rounded-lg transition ease-in-out duration-300"
        >
          <FaUserAlt className="mr-4" />
          Profile
        </Link>
      

      {/* <Link
          to="/"
          className="flex items-center text-lg py-3 px-6 hover:bg-teal-500 hover:shadow-md rounded-lg transition ease-in-out duration-300"
        >
          <RiLogoutBoxFill className="mr-4" />
          LogOut
        </Link> */}
        <button
          onClick={handleLogout}
          className="flex items-center text-lg py-3 px-6 hover:bg-teal-500 hover:shadow-md rounded-lg transition ease-in-out duration-300"
        >
          <RiLogoutBoxFill className="mr-4" />
          LogOut
        </button>
      </nav>

     
    </div>
  );
};

export default SideNav;
