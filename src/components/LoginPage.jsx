// import React, { useState } from 'react';
// import img from '../images/login_img.png'
// import logo from '../images/Logo.png'
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../components/firebase';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation




// function LoginPage() {
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const navigate = useNavigate(); // Initialize navigate

// const handleSubmit = async(e) => {
//   e.preventDefault();
//   try
//   { await signInWithEmailAndPassword(auth, email, password);
//     console.log('Logged in');
//     // window.location.href = '/layout'; // This forces a full reload and navigates to the root path

//    navigate('/layout'); // Navigate to the layout page after successful login


//   }
//   catch(error) {
//     console.log(error.message);
//   }
// }

//   return (
//     <div className="flex h-screen">
//       {/* Left Side */}
//       <div className="flex-1 bg-gradient-to-b from-green-400 to-blue-500 flex flex-col justify-center items-center">
//         {/* 3D Illustration */}
//         <div>
//           <img
//             src={img}// You need to place the 3D image here
//             alt="Working illustration"
//             className="h-64 mix-blend-multiply	"
//           />
//           {/* <Working/> */}
//         </div>
//         <div className="text-white text-center mt-6">
//           <h1 className="text-2xl font-semibold">Ready to find your perfect career match?</h1>
//           <p className="text-lg">Login and discover!</p>
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className="flex-1 bg-white flex flex-col justify-center items-center">
//         <div className="w-3/4 max-w-md">
//           {/* Logo */}
//           <div className="text-center mb-10">
//             <img
//               src={logo} // Add your logo here
//               alt="TAGES Logo"
//               className=" h-40"
//             />
//           </div>

//           {/* Login Form */}
//           <h2 className="text-2xl font-bold ml-4 mb-6">LOGIN</h2>
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             {/* Mobile Number Input */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Gmail</label>
//               <input
//                 type="gmail"
//                 placeholder="user@gmail.com"
//                 className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             {/* Password Input */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Password</label>
//               <div className="relative">
//                 <input
//                   type="password"
//                   placeholder="••••••••"
//                   className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 {/* Password Eye Icon */}
//                 <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
//                   👁️
//                 </span>
//               </div>
//             </div>

//             {/* Keep Me Logged In */}
//             <div className="flex items-center justify-between">
//               <label className="flex items-center">
//                 <input type="checkbox" className="form-checkbox text-indigo-600" />
//                 <span className="ml-2 text-gray-600">Keep me logged in</span>
//               </label>
//               <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
//             </div>

//             {/* Login Button */}
//             <button
//               type="submit"
//               className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
//             >
//               Login
//             </button>
//           </form>


//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import img from '../images/login_img.png';
// import logo from '../images/Logo.png';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../components/firebase';

// function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login success
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       console.log('Logged in');
//       setIsLoggedIn(true); // Set logged-in state to true upon success
//       setError('');
//     } catch (error) {
//       console.error(error.message);
//       setIsLoggedIn(false); // Reset login state on error
//       setError('Invalid email or password'); // Display error message
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Left Side */}
//       <div className="flex-1 bg-gradient-to-b from-green-400 to-blue-500 flex flex-col justify-center items-center">
//         <div>
//           <img
//             src={img}
//             alt="Working illustration"
//             className="h-64 mix-blend-multiply"
//           />
//         </div>
//         <div className="text-white text-center mt-6">
//           <h1 className="text-2xl font-semibold">
//             Ready to find your perfect career match?
//           </h1>
//           <p className="text-lg">Login and discover!</p>
//         </div>
//       </div>

//       {/* Right Side */}
//       <div className="flex-1 bg-white flex flex-col justify-center items-center">
//         <div className="w-3/4 max-w-md">
//           <div className="text-center mb-10">
//             <img
//               src={logo}
//               alt="TAGES Logo"
//               className="h-40"
//             />
//           </div>

//           <h2 className="text-2xl font-bold ml-4 mb-6">LOGIN</h2>
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Gmail</label>
//               <input
//                 type="gmail"
//                 placeholder="user@gmail.com"
//                 className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Password</label>
//               <div className="relative">
//                 <input
//                   type="password"
//                   placeholder="••••••••"
//                   className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
//                   👁️
//                 </span>
//               </div>
//             </div>

//             <div className="flex items-center justify-between">
//               <label className="flex items-center">
//                 <input type="checkbox" className="form-checkbox text-indigo-600" />
//                 <span className="ml-2 text-gray-600">Keep me logged in</span>
//               </label>
//               <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
//             </div>

//             {/* Conditionally render the <Link> tag only when login is successful */}
//             {isLoggedIn ? (
//               <Link to="/layout" className="w-full">
//                 <button
//                   type="button"
//                   className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
//                 >
//                   Login
//                 </button>
//               </Link>
//             ) : (
//               <button
//                 type="submit"
//                 className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
//               > 
//                 Login
//               </button>
//             )}
//           </form>

//           {error && <p className="text-red-500 mt-4">{error}</p>}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;
  

import React, { useState } from 'react';
import img from '../images/login_img.png';
import logo from '../images/Logo.png';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../components/firebase';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    if (!email.trim()) {
      newErrors.email = 'Email is required.';
    } 

    // Password validation
    if (!password.trim()) {
      newErrors.password = 'Password is required.';
    } 
    // else if (password.length < 6) {
    //   newErrors.password = 'Password must be at least 6 characters long.';
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('Logged in');
        navigate('/layout');
      } catch (error) {
        console.log(error.message);
        setErrors({ auth: 'Failed to login. Please check your credentials.' });
      }
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-gradient-to-b from-green-400 to-blue-500 flex flex-col justify-center items-center">
        <div>
          <img src={img} alt="Working illustration" className="h-64 mix-blend-multiply" />
        </div>
        <div className="text-white text-center mt-6">
          <h1 className="text-2xl font-semibold">Ready to find your perfect career match?</h1>
          <p className="text-lg">Login and discover!</p>
        </div>
      </div>

      <div className="flex-1 bg-white flex flex-col justify-center items-center">
        <div className="w-3/4 max-w-md">
          <div className="text-center mb-10">
            <img src={logo} alt="TAGES Logo" className="h-40" />
          </div>

          <h2 className="text-2xl font-bold ml-4 mb-6">LOGIN</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="user@gmail.com"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">👁️</span>
              </div>
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-indigo-600" />
                <span className="ml-2 text-gray-600">Keep me logged in</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
            </div>

            {errors.auth && <p className="text-red-500 text-sm">{errors.auth}</p>}

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
