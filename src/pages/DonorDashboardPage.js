import React, { useEffect } from "react";
import Sidebar from "../components/SideBar";
import "../styles/Donor.css"; // Import the correct, dedicated CSS

function DonorDashboard() {
  // This hook runs once after the component mounts
  useEffect(() => {
    // --- 1. Check Donation Eligibility ---
    const eligibilityCard = document.getElementById("eligibility-card");
    const dateElement = eligibilityCard.querySelector(".stat-value");
    const titleElement = eligibilityCard.querySelector(".stat-title");

    const eligibleDate = new Date(dateElement.getAttribute("data-date"));
    const today = new Date();

    eligibleDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    if (today >= eligibleDate) {
      titleElement.textContent = "Eligibility Status";
      dateElement.textContent = "You can Donate!";
      eligibilityCard.classList.add("eligible");
    }

    // --- 2. Simulate Profile Completion Check ---
    const isProfileComplete = false; // Change to 'true' to hide the banner
    const profileBanner = document.getElementById("profile-banner");
    if (!isProfileComplete) {
      profileBanner.style.display = "flex";
    }

    // --- 3. Simulate Notifications ---
    const notificationBell = document.getElementById("notification-bell");
    const hasNotifications = true;
    if (hasNotifications) {
      notificationBell.classList.add("has-notifications");
    }
  }, []); // The empty array ensures this runs only once

  return (
    <div className="dashboard-container theme-donor">
      <Sidebar userType="donor" activePage="Dashboard" />

      <main className="main-content">
        <header className="main-header">
          <h1>Welcome, Donor!</h1>
          <div className="header-user-icons">
            <i className="fa-solid fa-bell" id="notification-bell"></i>
            <i className="fa-solid fa-user-circle"></i>
          </div>
        </header>

        <div className="notification-banner" id="profile-banner">
          <p>
            <strong>Your profile is incomplete!</strong> Please add your medical
            details to find relevant donation opportunities.
          </p>
          <a href="/donor-profile" className="btn-primary">
            Complete Profile
          </a>
        </div>

        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon" style={{ color: "#c00" }}>
              <i className="fa-solid fa-droplet"></i>
            </div>
            <div className="stat-info">
              <span className="stat-title">Your Blood Type</span>
              <span className="stat-value">O+ Positive</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ color: "#28a745" }}>
              <i className="fa-solid fa-hand-holding-heart"></i>
            </div>
            <div className="stat-info">
              <span className="stat-title">Total Donations</span>
              <span className="stat-value">5</span>
            </div>
          </div>
          <div className="stat-card" id="eligibility-card">
            <div className="stat-icon" style={{ color: "#007bff" }}>
              <i className="fa-solid fa-calendar-check"></i>
            </div>
            <div className="stat-info">
              <span className="stat-title">Next Eligible Date</span>
              <span className="stat-value" data-date="2025-09-25">
                25 Sep 2025
              </span>
            </div>
          </div>
        </section>

        <div className="content-row">
          <section className="card" id="urgent-requests">
            <h2>
              <i className="fa-solid fa-triangle-exclamation"></i> Urgent
              Requests Nearby
            </h2>
            <div className="request-list">
              <div className="request-item">
                <div className="request-info">
                  <h3>A+ Blood Needed</h3>
                  <p>City Hospital, District 1</p>
                </div>
                <a href="/donation-requests" className="btn-primary">
                  View Details
                </a>
              </div>
              <div className="request-item">
                <div className="request-info">
                  <h3>O- Blood Needed</h3>
                  <p>General Hospital, District 2</p>
                </div>
                <a href="/donation-requests" className="btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </section>

          <section className="card" id="map-card">
            <h2>
              <i className="fa-solid fa-map-location-dot"></i> Nearby Donation
              Centers
            </h2>
            <div className="map-placeholder">
              <img
                src="https://placehold.co/600x400/e2e8f0/4a5568?text=Map+of+Donation+Centers"
                alt="Map Placeholder"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default DonorDashboard;
