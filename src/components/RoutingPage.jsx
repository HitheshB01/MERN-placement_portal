import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JobsPage from "./JobsPage";
import AppliedPage from "./AppliedPage";
import ResumePage from "./ResumePage";
import ProfilePage from "./ProfilePage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import LoginPage from "./LoginPage";  
import JobPortal from "./JobPortal";

// Configure routes with SideNav as the parent (Layout)



const RoutingPage = () => {
  const router = createBrowserRouter([
    {
      path: "/", // This is the login route
      element: <LoginPage />,
    },
    {
      path: "/layout", // Protected Layout route
      element: <Layout />, // Layout will be rendered if authenticated
      children: [
        { path: "", element: <HomePage /> }, // Home page at /layout
        { path: "jobs", element: <JobsPage /> }, // Jobs page at /layout/jobs
        { path: "applied", element: <AppliedPage /> }, // Applied jobs page at /layout/applied
        { path: "resume", element: <ResumePage /> }, // Resume page at /layout/resume
        { path: "profile", element: <ProfilePage /> }, // Profile page at /layout/profile
      ],
    },
    {
      path: "/jobportal",
      element: <JobPortal />,
    },
  ]);
  
  
  
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default RoutingPage;
