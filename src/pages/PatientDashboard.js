import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/SideBar";
import "../styles/Patient.css"; // Make sure this CSS file exists and is correct

function PatientDashboard() {
  const navigate = useNavigate();

  // This is a placeholder function for the search form
  const handleSearch = (event) => {
    event.preventDefault();
    alert("Searching for hospitals...");
    // In a real app, you would handle search logic here
  };

  return (
    <div className="dashboard-container theme-patient">
      <Sidebar userType="patient" activePage="Dashboard" />

      <main className="main-content">
        <header className="main-header">
          <h1>Patient Dashboard</h1>
          <div className="header-user-icons">
            <i className="fa-solid fa-bell"></i>
            <i className="fa-solid fa-user-circle"></i>
          </div>
        </header>

        {/* --- ICONS ADDED BACK TO STAT CARDS --- */}
        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon" style={{ color: "#c00" }}>
              <i className="fa-solid fa-user-injured"></i>
            </div>
            <div className="stat-info">
              <span className="stat-title">Your Blood Type</span>
              <span className="stat-value">A+ Positive</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ color: "#007bff" }}>
              <i className="fa-solid fa-file-medical"></i>
            </div>
            <div className="stat-info">
              <span className="stat-title">Open Requests</span>
              <span className="stat-value">1</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon" style={{ color: "#28a745" }}>
              <i className="fa-solid fa-hospital"></i>
            </div>
            <div className="stat-info">
              <span className="stat-title">Hospitals Nearby</span>
              <span className="stat-value">8</span>
            </div>
          </div>
        </section>

        <div className="content-row">
          {/* --- FULL CONTENT AND ICONS ADDED BACK --- */}
          <section className="card" id="find-hospitals">
            <h2>
              <i className="fa-solid fa-search"></i> Find Blood (Direct Request)
            </h2>
            <form className="find-blood-form" onSubmit={handleSearch}>
              <div className="form-group">
                <label htmlFor="state">State</label>
                <select id="state">
                  <option value="" disabled selected>
                    Select State
                  </option>
                  <option value="state1">State 1</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="district">District</label>
                <select id="district">
                  <option value="" disabled selected>
                    Select District
                  </option>
                  <option value="dist1">District 1</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="blood-type">Blood Type</label>
                <select id="blood-type">
                  <option value="" disabled selected>
                    Select Blood Type
                  </option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
              <button type="submit" className="btn-search">
                Search Hospitals
              </button>
            </form>
          </section>

          <section className="card" id="recent-requests">
            <h2>
              <i className="fa-solid fa-history"></i> Recent Requests
            </h2>
            <table className="requests-table">
              <thead>
                <tr>
                  <th>Request ID</th>
                  <th>Blood Type</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#R4582</td>
                  <td>A+</td>
                  <td>17 Oct 2025</td>
                  <td>
                    <span className="status pending">Pending</span>
                  </td>
                </tr>
                <tr>
                  <td>#R4501</td>
                  <td>B-</td>
                  <td>12 Sep 2025</td>
                  <td>
                    <span className="status fulfilled">Fulfilled</span>
                  </td>
                </tr>
                <tr>
                  <td>#R4490</td>
                  <td>A+</td>
                  <td>02 Sep 2025</td>
                  <td>
                    <span className="status cancelled">Cancelled</span>
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

export default PatientDashboard;
