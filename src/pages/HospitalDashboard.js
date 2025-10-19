import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 1. Import the navigate hook
import Sidebar from "../components/SideBar";
import "../styles/Hospital.css"; // 2. Import the correct CSS

function HospitalDashboard() {
  const navigate = useNavigate(); // 3. Initialize the navigate function

  // Simulate checking for notifications when the component loads
  useEffect(() => {
    const notificationBell = document.getElementById("notification-bell");
    // In a real app, this value would come from a server
    const hasNotifications = true;
    if (notificationBell && hasNotifications) {
      notificationBell.classList.add("has-notifications");
    }
  }, []);

  return (
    // Add the theme class to apply the correct styles
    <div className="dashboard-container theme-hospital">
      <Sidebar userType="hospital" activePage="Dashboard" />

      <main className="main-content">
        <header className="main-header">
          <h1>City Hospital Dashboard</h1>
          <div className="header-user-icons">
            <i className="fa-solid fa-bell" id="notification-bell"></i>
            <i className="fa-solid fa-user-circle"></i>
          </div>
        </header>

        <section className="stats-grid">
          {/* 4. Use onClick to navigate */}
          <div
            className="stat-card clickable"
            onClick={() => navigate("/blood-inventory")}
          >
            <div className="stat-icon" style={{ color: "#c00" }}>
              <i className="fa-solid fa-cubes"></i>
            </div>
            <div className="stat-info">
              <span className="stat-title">Blood Units in Stock</span>
              <span className="stat-value">256</span>
            </div>
          </div>
          <div
            className="stat-card clickable"
            onClick={() => navigate("/manage-requests")}
          >
            <div className="stat-icon" style={{ color: "#ffc107" }}>
              <i className="fa-solid fa-inbox"></i>
            </div>
            <div className="stat-info">
              <span className="stat-title">Pending Requests</span>
              <span className="stat-value">12</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ color: "#28a745" }}>
              <i className="fa-solid fa-users"></i>
            </div>
            <div className="stat-info">
              <span className="stat-title">Available Donors</span>
              <span className="stat-value">45</span>
            </div>
          </div>
        </section>

        <div className="content-row">
          <section className="card" id="stock-overview">
            <h2>
              <i className="fa-solid fa-chart-pie"></i> Blood Stock Overview
            </h2>
            <div className="stock-list">
              <div className="stock-item">
                <span className="blood-group">A+</span>
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: "75%" }}></div>
                </div>
                <span className="unit-count">75 Units</span>
              </div>
              <div className="stock-item">
                <span className="blood-group">O+</span>
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: "90%" }}></div>
                </div>
                <span className="unit-count">90 Units</span>
              </div>
              <div className="stock-item">
                <span className="blood-group">B-</span>
                <div className="progress-bar-container">
                  <div
                    className="progress-bar low"
                    style={{ width: "20%" }}
                  ></div>
                </div>
                <span className="unit-count">20 Units</span>
              </div>
            </div>
          </section>

          <section className="card" id="urgent-requests">
            <h2>
              <i className="fa-solid fa-triangle-exclamation"></i> Recent Urgent
              Requests
            </h2>
            <table className="requests-table">
              <thead>
                <tr>
                  <th>Request ID</th>
                  <th>Blood Type</th>
                  <th>Urgency</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#R4582</td>
                  <td>A+</td>
                  <td>
                    <span className="urgency high">Emergency</span>
                  </td>
                  <td>
                    <button
                      onClick={() => navigate("/manage-requests")}
                      className="btn-primary"
                    >
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>#R4580</td>
                  <td>B-</td>
                  <td>
                    <span className="urgency high">Urgent</span>
                  </td>
                  <td>
                    <button
                      onClick={() => navigate("/manage-requests")}
                      className="btn-primary"
                    >
                      View
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </main>
    </div>
  );
}

export default HospitalDashboard;
