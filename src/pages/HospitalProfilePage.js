import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import "../styles/Hospital.css"; // Import the correct CSS

function HospitalProfilePage() {
  // State for the hospital information form
  const [profileInfo, setProfileInfo] = useState({
    name: "City Hospital",
    email: "contact@cityhospital.com",
    contact: "(555) 123-4567",
    license: "LIC-12345XYZ",
  });

  // State for the password change form
  const [passwordInfo, setPasswordInfo] = useState({
    current: "",
    newPass: "",
    confirmPass: "",
  });

  // Handle input changes for the profile form
  const handleProfileChange = (e) => {
    const { id, value } = e.target;
    setProfileInfo((prevState) => ({ ...prevState, [id]: value }));
  };

  // Handle input changes for the password form
  const handlePasswordChange = (e) => {
    const { id, value } = e.target;
    setPasswordInfo((prevState) => ({ ...prevState, [id]: value }));
  };

  // Handle profile form submission
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log("--- Profile Information Updated ---", profileInfo);
    alert("Hospital information has been saved successfully!");
  };

  // Handle password form submission
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordInfo.newPass !== passwordInfo.confirmPass) {
      alert("Error: New passwords do not match. Please try again.");
      return;
    }
    if (passwordInfo.current === passwordInfo.newPass) {
      alert("Error: New password cannot be the same as the current password.");
      return;
    }
    console.log("--- Password Change Attempt ---", {
      current: passwordInfo.current,
      new: passwordInfo.newPass,
    });
    alert("Password has been changed successfully!");
    setPasswordInfo({ current: "", newPass: "", confirmPass: "" }); // Clear fields
  };

  return (
    <div className="dashboard-container theme-hospital">
      <Sidebar userType="hospital" activePage="My Profile" />

      <main className="main-content">
        <header className="main-header">
          <h1>Hospital Profile</h1>
        </header>

        <div className="content-row">
          {/* Hospital Info Card */}
          <section className="card" id="hospital-info">
            <h2>
              <i className="fa-solid fa-user-edit"></i> Hospital Information
            </h2>
            <form onSubmit={handleProfileSubmit} className="form-grid">
              <div className="form-group full-width">
                <label htmlFor="name">Hospital Name</label>
                <input
                  type="text"
                  id="name"
                  value={profileInfo.name}
                  onChange={handleProfileChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={profileInfo.email}
                  onChange={handleProfileChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact">Contact Number</label>
                <input
                  type="tel"
                  id="contact"
                  value={profileInfo.contact}
                  onChange={handleProfileChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="license">License Number</label>
                <input
                  type="text"
                  id="license"
                  value={profileInfo.license}
                  onChange={handleProfileChange}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </section>

          {/* Security Card */}
          <section className="card" id="security-info">
            <h2>
              <i className="fa-solid fa-lock"></i> Change Password
            </h2>
            <form onSubmit={handlePasswordSubmit} className="form-grid">
              <div className="form-group">
                <label htmlFor="current">Current Password</label>
                <input
                  type="password"
                  id="current"
                  placeholder="Enter current password"
                  value={passwordInfo.current}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="newPass">New Password</label>
                <input
                  type="password"
                  id="newPass"
                  placeholder="Enter a new password"
                  value={passwordInfo.newPass}
                  onChange={handlePasswordChange}
                  required
                  minLength="6"
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPass">Confirm New Password</label>
                <input
                  type="password"
                  id="confirmPass"
                  placeholder="Confirm new password"
                  value={passwordInfo.confirmPass}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn-secondary">
                  Update Password
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}

export default HospitalProfilePage;
