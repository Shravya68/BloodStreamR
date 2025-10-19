import React from "react";
import { Link, useLocation } from "react-router-dom"; // 1. Import Link and useLocation

function Sidebar({ userType }) {
  const location = useLocation(); // 2. Hook to get the current URL path

  // Define the links for each user type with correct paths
  const patientLinks = [
    { name: "Dashboard", icon: "fa-house", path: "/patient-dashboard" },
    { name: "Make a Request", icon: "fa-droplet", path: "/make-request" },
    { name: "My Requests", icon: "fa-file-lines", path: "/my-requests" },
    { name: "My Profile", icon: "fa-user", path: "/my-profile" },
  ];

  const donorLinks = [
    { name: "Dashboard", icon: "fa-house", path: "/donor-dashboard" },
    {
      name: "View Requests",
      icon: "fa-magnifying-glass",
      path: "/donation-requests",
    },
    {
      name: "Donation History",
      icon: "fa-clock-rotate-left",
      path: "/donation-history",
    },
    { name: "My Profile", icon: "fa-user", path: "/donor-profile" },
  ];

  const hospitalLinks = [
    {
      name: "Dashboard",
      icon: "fa-house-medical",
      path: "/hospital-dashboard",
    },
    {
      name: "Blood Inventory",
      icon: "fa-box-archive",
      path: "/blood-inventory",
    },
    {
      name: "Manage Requests",
      icon: "fa-file-circle-check",
      path: "/manage-requests",
    },
    { name: "My Profile", icon: "fa-hospital-user", path: "/hospital-profile" },
  ];

  let navLinks;
  if (userType === "patient") navLinks = patientLinks;
  else if (userType === "donor") navLinks = donorLinks;
  else if (userType === "hospital") navLinks = hospitalLinks;
  else navLinks = [];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2 className="logo">🩸 BloodStream</h2>
      </div>
      <nav className="sidebar-nav">
        {navLinks.map((link) => (
          // 3. Use Link component instead of <a> tag
          <Link
            key={link.name}
            to={link.path}
            // 4. Check if the current URL matches the link's path
            className={`nav-item ${
              location.pathname === link.path ? "active" : ""
            }`}
          >
            <i className={`fa-solid ${link.icon}`}></i>
            <span>{link.name}</span>
          </Link>
        ))}
        <Link to="/" className="nav-item nav-logout">
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          <span>Logout</span>
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
