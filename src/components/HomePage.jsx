import React from 'react';
import c1 from '../images/c1.png';
import c2 from '../images/c2.png';
import c3 from '../images/c3.png';
import c4 from '../images/c4.png';
import c5 from '../images/c5.png';
import c6 from '../images/c6.png';
import c7 from '../images/c7.png';
import c8 from '../images/c8.png';
import c9 from '../images/c9.png';
import c10 from '../images/c10.png';
import c11 from '../images/c11.png';
import c12 from '../images/c12.png';
import clg1 from '../images/clg1.jpeg';
import clg2 from '../images/clg2.jpeg';
import clg3 from '../images/clg3.jpeg';
import clg4 from '../images/clg4.jpeg';
import clg5 from '../images/clg5.jpeg';
import clg6 from '../images/clg6.jpeg';
import clg7 from '../images/clg7.jpeg';
import clg8 from '../images/clg8.jpeg';






const images = [

    clg2,
    clg3,
    clg1,
    clg7,
    clg5,
    clg4,
    clg5,
    clg6,
    clg8,
  ];

  const companies = [
    { name: 'Wipro', logo: c1 }, 
    { name: 'Philips', logo: c2 },
    { name: 'Mindtree', logo: c3 },,
    { name: 'IBM', logo: c4 },
    { name: 'Infosys', logo: c5 },
    { name: 'EMC', logo: c6 },
    { name: 'TCS', logo: c7 },
    { name: 'Cognizant', logo: c8 },
    { name: 'Cognizant', logo: c9 },
    { name: 'Wipro', logo: c10 }, 
    { name: 'Philips', logo: c11 },
    { name: 'Mindtree', logo: c12 },
    // { name: 'IBM', logo: 'https://via.placeholder.com/150' },
    // { name: 'Infosys', logo: 'https://via.placeholder.com/150' },
    // { name: 'EMC', logo: 'https://via.placeholder.com/150' },
    // { name: 'IBM', logo: 'https://via.placeholder.com/150' },
    // { name: 'Infosys', logo: 'https://via.placeholder.com/150' },
    // { name: 'EMC', logo: 'https://via.placeholder.com/150' },
    // Add more company logos here
  ];

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      {/* Half-Screen Header Section */}
      <header className="bg-gradient-to-r from-teal-500 to-green-600 text-white h-[50vh] flex flex-col justify-center items-center text-center px-4">
        <div>
          <h1 className="text-5xl font-extrabold mb-4">Welcome to BMSIT Placement Portal</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Empowering students for a brighter future through innovative education and career opportunities.
          </p>
        </div>
      </header>

      {/* Image Grid */}
      <h2 className="text-3xl text-center font-bold mb-2 mt-16">OUR CAMPUS</h2>

      <section className="py-12">
      <div className="container mx-auto grid grid-cols-12 grid-rows-6 gap-2 h-[100vh]">
        {/* Grid layout based on the provided image */}
        <div className="col-span-3 row-span-3">
          <img
            src={images[0]}
            alt="Image 1"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="col-span-3 row-span-2">
          <img
            src={images[1]}
            alt="Image 2"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="col-span-6 row-span-3">
          <img
            src={images[2]}
            alt="Image 3"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="col-span-3 row-span-4">
          <img
            src={images[3]}
            alt="Image 4"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="col-span-3 row-span-1">
          <img
            src={images[4]}
            alt="Image 5"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="col-span-2 row-span-2">
          <img
            src={images[5]}
            alt="Image 6"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="col-span-3 row-span-2">
          <img
            src={images[6]}
            alt="Image 7"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="col-span-3 row-span-2">
          <img
            src={images[7]}
            alt="Image 8"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="col-span-2 row-span-1">
          <img
            src={images[8]}
            alt="Image 9"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>

      {/* About Section */}
      <section className="container mx-auto py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">About BMSIT</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto">
            BMS Institute of Technology and Management (BMSIT&M) is one of the top engineering colleges in India,
            known for its academic excellence and state-of-the-art infrastructure. Our mission is to provide a
            nurturing environment where students can excel in their studies and develop the skills necessary for
            a successful career.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Vision</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto">
            To be a center of excellence in education and research, producing globally competent engineers who
            contribute to society through innovation, leadership, and service.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <ul className="text-gray-700 max-w-3xl mx-auto space-y-4 list-disc list-inside">
            <li>To provide quality education and training in the field of engineering and technology.</li>
            <li>To foster innovation, research, and development to address societal challenges.</li>
            <li>To cultivate leadership qualities and encourage entrepreneurial initiatives among students.</li>
            <li>To promote ethical and professional responsibility in all our endeavors.</li>
          </ul>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Recruiters</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {companies.map((company, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md flex items-center justify-center">
              <img src={company.logo} alt={company.name} className="max-h-16 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Footer */}
      <footer className="bg-teal-600 text-white p-4 text-center">
        <p>&copy; 2024 BMS Institute of Technology and Management - All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default HomePage;
