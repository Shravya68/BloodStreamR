import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import "../styles/Donor.css"; // Import the correct CSS

function DonorProfilePage() {
  // State for the medical information form
  const [medicalInfo, setMedicalInfo] = useState({
    bloodType: "O+",
    lastDonation: "2025-08-15",
    medicalConditions: ""
  });

  // State for the password change form
  const [passwordInfo, setPasswordInfo] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  // Handle changes in the medical info form
  const handleMedicalChange = (e) => {
    const { id, value } = e.target;
    setMedicalInfo(prevState => ({ ...prevState, [id]: value }));
  };

  // Handle changes in the password form
  const handlePasswordChange = (e) => {
    const { id, value } = e.target;
    setPasswordInfo(prevState => ({ ...prevState, [id]: value }));
  };

  // Handle submission of the medical form
  const handleMedicalSubmit = (e) => {
    e.preventDefault();
    console.log("--- Medical Info Update ---", medicalInfo);
    alert("Medical information updated successfully!");
  };

  // Handle submission of the password change form
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (passwordInfo.newPassword !== passwordInfo.confirmPassword) {
      alert("New passwords do not match. Please try again.");
      return;
    }
    if (passwordInfo.newPassword.length < 6) {
        alert("New password must be at least 6 characters long.");
        return;
    }

    console.log("--- Password Change Attempt ---", {
      currentPassword: passwordInfo.currentPassword,
      newPassword: passwordInfo.newPassword
    });

    alert("Password changed successfully!");
    // Clear password fields for security
    setPasswordInfo({ currentPassword: "", newPassword: "", confirmPassword: "" });
  };

  return (
    <div className="dashboard-container theme-donor">
      <Sidebar userType="donor" activePage="My Profile" />

      <main className="main-content">
        <header className="main-header">
          <h1>My Profile</h1>
        </header>

        <div className="content-row">
          {/* Medical Info Card */}
          <section className="card" id="medical-info">
            <h2><i className="fa-solid fa-notes-medical"></i> Medical & Donation Details</h2>
            <form id="medical-form" onSubmit={handleMedicalSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="bloodType">Blood Type</label>
                  <select id="bloodType" value={medicalInfo.bloodType} onChange={handleMedicalChange} required>
                    <option>O+</option>
                    {/* Add other blood types as needed */}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="lastDonation">Last Donation Date</label>
                  <input type="date" id="lastDonation" value={medicalInfo.lastDonation} onChange={handleMedicalChange} />
                </div>
                <div className="form-group full-width">
                  <label htmlFor="medicalConditions">Medical Conditions (if any)</label>
                  <input type="text" id="medicalConditions" value={medicalInfo.medicalConditions} onChange={handleMedicalChange} placeholder="e.g., None" />
                </div>
              </div>
              <button type="submit" className="btn-primary">Update Medical Info</button>
            </form>
          </section>

          {/* Security Card */}
          <section className="card" id="security-info">
            <h2><i className="fa-solid fa-lock"></i> Security & Password</h2>
            <form id="password-form" onSubmit={handlePasswordSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="currentPassword">Current Password</label>
                  <input type="password" id="currentPassword" value={passwordInfo.currentPassword} onChange={handlePasswordChange} placeholder="Enter current password" required />
                </div>
                <div className="form-group">
                  {/* Empty div for alignment */}
                </div>
                <div className="form-group">
                  <label htmlFor="newPassword">New Password</label>
                  <input type="password" id="newPassword" value={passwordInfo.newPassword} onChange={handlePasswordChange} placeholder="Enter a new password" required />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm New Password</label>
                  <input type="password" id="confirmPassword" value={passwordInfo.confirmPassword} onChange={handlePasswordChange} placeholder="Confirm new password" required />
                </div>
              </div>
              <button type="submit" className="btn-secondary">Change Password</button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}

export default DonorProfilePage;
