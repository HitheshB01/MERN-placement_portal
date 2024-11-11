import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePages = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-4xl font-bold">Profile Page</h1>
      <p>Here you can view your profile details.</p>
      <button
        className="mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-500 transition"
        onClick={() => navigate('/edit-profile')}
      >
        Edit Profile
      </button>
    </div>
  );
};

export default ProfilePages;
