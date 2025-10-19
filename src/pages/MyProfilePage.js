import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import "../styles/Patient.css"; // Import the reusable Sidebar

function MyProfilePage() {
  // State for the personal information form
  const [profile, setProfile] = useState({
    fullName: "Demo Patient",
    contact: "+91 1234567890",
    age: 34,
    medicalCondition: "Thalassemia",
  });

  // State for the password change form
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Handle changes in the profile form inputs
  const handleProfileChange = (e) => {
    const { id, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [id]: value }));
  };

  // Handle changes in the password form inputs
  const handlePasswordChange = (e) => {
    const { id, value } = e.target;
    setPasswords((prevPasswords) => ({ ...prevPasswords, [id]: value }));
  };

  // Handle submission of the profile form
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log("--- Profile Update ---", profile);
    alert("Personal information saved successfully!");
  };

  // Handle submission of the password change form
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("New passwords do not match. Please try again.");
      return;
    }
    console.log("--- Password Change Attempt ---", {
      currentPassword: passwords.currentPassword,
      newPassword: passwords.newPassword,
    });
    alert("Password changed successfully!");
    // Clear password fields for security
    setPasswords({ currentPassword: "", newPassword: "", confirmPassword: "" });
  };

  return (
    <div className="dashboard-container">
      <Sidebar userType="patient" activePage="My Profile" />

      <main className="main-content">
        <header className="main-header">
          <h1>My Profile</h1>
          <div className="header-user-icons">
            <i className="fa-solid fa-bell"></i>
            <i className="fa-solid fa-user-circle"></i>
          </div>
        </header>

        <div className="content-row">
          <section className="card" id="personal-info">
            <h2>
              <i className="fa-solid fa-user-edit"></i> Personal Information
            </h2>
            <form id="profile-form" onSubmit={handleProfileSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    value={profile.fullName}
                    onChange={handleProfileChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value="patient@demo.com"
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact">Contact Number</label>
                  <input
                    type="tel"
                    id="contact"
                    value={profile.contact}
                    onChange={handleProfileChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input
                    type="number"
                    id="age"
                    value={profile.age}
                    onChange={handleProfileChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="blood-type">Blood Type</label>
                  <input
                    type="text"
                    id="blood-type"
                    value="A+ Positive"
                    readOnly
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="medicalCondition">Medical Condition</label>
                  <input
                    type="text"
                    id="medicalCondition"
                    value={profile.medicalCondition}
                    onChange={handleProfileChange}
                  />
                </div>
              </div>
              <button type="submit" className="btn-search">
                Save Changes
              </button>
            </form>
          </section>

          <section className="card" id="security-info">
            <h2>
              <i className="fa-solid fa-lock"></i> Security & Password
            </h2>
            <form id="password-form" onSubmit={handlePasswordSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="currentPassword">Current Password</label>
                  <input
                    type="password"
                    id="currentPassword"
                    placeholder="Enter your current password"
                    value={passwords.currentPassword}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <div className="form-group"></div>
                <div className="form-group">
                  <label htmlFor="newPassword">New Password</label>
                  <input
                    type="password"
                    id="newPassword"
                    placeholder="Enter a new password"
                    value={passwords.newPassword}
                    onChange={handlePasswordChange}
                    required
                    minLength="6"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm New Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm new password"
                    value={passwords.confirmPassword}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn-submit-request">
                Change Password
              </button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}

export default MyProfilePage;
