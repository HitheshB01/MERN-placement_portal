
import React, { useState } from "react";

function ProfilePage() {
  // State for managing profile data, initially empty to allow users to fill it later
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    degree: "",
    college: "",
    graduationYear: "",
    cgpa: "",
    skills: [],
    projects: [],
    resume: null,
  });

  const [newSkill, setNewSkill] = useState("");
  const [newProject, setNewProject] = useState({ title: "", description: "" });

  // Handling input changes for the form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleFileChange = (event) => {
    setProfile({ ...profile, resume: event.target.files[0] });
  };

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setProfile({ ...profile, skills: [...profile.skills, newSkill] });
      setNewSkill(""); // Reset skill input
    }
  };

  const handleAddProject = () => {
    if (newProject.title.trim() && newProject.description.trim()) {
      setProfile({ ...profile, projects: [...profile.projects, newProject] });
      setNewProject({ title: "", description: "" }); // Reset project input
    }
  };

  return (
    <div className="bg-gradient-to-br from-green-100 to-blue-200 min-h-screen py-12">
      <div className="container mx-auto p-6 bg-white shadow-lg rounded-xl max-w-4xl">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Student Profile</h2>

        {/* Profile Header */}
        <div className="flex items-center mb-10">
          <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden shadow-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="ml-6">
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="text-3xl font-bold text-gray-700 border-b border-gray-300 focus:outline-none focus:border-teal-500"
            />
            <input
              type="text"
              name="email"
              value={profile.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="block text-lg text-gray-500 mt-2 border-b border-gray-300 focus:outline-none focus:border-teal-500"
            />
            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              placeholder="Enter your phone"
              className="block text-lg text-gray-500 mt-2 border-b border-gray-300 focus:outline-none focus:border-teal-500"
            />
          </div>
        </div>

        {/* Basic Info */}
        <div className="bg-gradient-to-br from-teal-500 to-teal-700 text-white p-6 shadow-lg rounded-lg mb-6 hover:shadow-xl transition-all">
          <h3 className="text-2xl font-semibold mb-4">Basic Information</h3>
          <input
            type="text"
            name="address"
            value={profile.address}
            onChange={handleChange}
            placeholder="Enter your address"
            className="block w-full text-gray-200 bg-transparent border-b border-teal-200 mb-3 focus:outline-none"
          />
          <input
            type="text"
            name="degree"
            value={profile.degree}
            onChange={handleChange}
            placeholder="Enter your degree"
            className="block w-full text-gray-200 bg-transparent border-b border-teal-200 mb-3 focus:outline-none"
          />
          <input
            type="text"
            name="college"
            value={profile.college}
            onChange={handleChange}
            placeholder="Enter your college"
            className="block w-full text-gray-200 bg-transparent border-b border-teal-200 mb-3 focus:outline-none"
          />
          <input
            type="text"
            name="graduationYear"
            value={profile.graduationYear}
            onChange={handleChange}
            placeholder="Enter your graduation year"
            className="block w-full text-gray-200 bg-transparent border-b border-teal-200 mb-3 focus:outline-none"
          />
          <input
            type="text"
            name="cgpa"
            value={profile.cgpa}
            onChange={handleChange}
            placeholder="Enter your CGPA"
            className="block w-full text-gray-200 bg-transparent border-b border-teal-200 focus:outline-none"
          />
        </div>

        {/* Skills */}
        <div className="bg-white p-6 shadow-lg rounded-lg mb-6 border border-teal-200 hover:shadow-xl transition-all">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Technical Skills</h3>
          <ul className="list-none flex flex-wrap gap-2">
            {profile.skills.map((skill, index) => (
              <li key={index} className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full shadow-sm">
                {skill}
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Add a skill"
              className="border border-teal-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-teal-500"
            />
            <button
              onClick={handleAddSkill}
              className="mt-2 bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition-all"
            >
              Add Skill
            </button>
          </div>
        </div>

        {/* Projects */}
        <div className="bg-white p-6 shadow-lg rounded-lg mb-6 border border-teal-200 hover:shadow-xl transition-all">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Projects</h3>
          {profile.projects.map((project, index) => (
            <div key={index} className="mb-4">
              <h4 className="text-xl font-semibold text-teal-600">{project.title}</h4>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
          <div className="mt-4">
            <input
              type="text"
              value={newProject.title}
              onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
              placeholder="Project title"
              className="border border-teal-300 px-3 py-2 rounded-md w-full mb-2 focus:outline-none focus:border-teal-500"
            />
            <input
              type="text"
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              placeholder="Project description"
              className="border border-teal-300 px-3 py-2 rounded-md w-full mb-2 focus:outline-none focus:border-teal-500"
            />
            <button
              onClick={handleAddProject}
              className="mt-2 bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition-all"
            >
              Add Project
            </button>
          </div>
        </div>

        {/* Resume Upload */}
        <div className="bg-white p-6 shadow-lg rounded-lg border border-teal-200 hover:shadow-xl transition-all">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Resume</h3>
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full text-gray-600 mb-4"
          />
          {profile.resume && (
            <p className="text-teal-700 mt-4 font-semibold">Uploaded Resume: {profile.resume.name}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
