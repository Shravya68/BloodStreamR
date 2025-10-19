import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // 1. Import hooks
import "../styles/login.css";

function LoginPage() {
  // 2. Use state to keep track of the active tab
  const [activeTab, setActiveTab] = useState("Patient");
  const navigate = useNavigate(); // 3. Initialize the navigate function

  // Function to handle button clicks
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  // 4. Function to handle the form submission
  const handleLogin = (event) => {
    event.preventDefault(); // Prevents the page from reloading

    // In a real app, you would verify credentials here.
    alert(`${activeTab} login successful! Redirecting to dashboard...`);

    // 5. Check the active tab and redirect to the correct dashboard
    if (activeTab === "Patient") {
      navigate("/patient-dashboard");
    } else if (activeTab === "Donor") {
      navigate("/donor-dashboard");
    } else if (activeTab === "Hospital") {
      navigate("/hospital-dashboard");
    }
  };

  return (
    <div className="auth-container">
      <div className="wrapper">
        <div className="left">
          <h1>
            Every <span>drop</span> counts
          </h1>
          <p>Join BloodStream and be part of the life-saving network</p>
        </div>

        <div className="right">
          <div className="form-box">
            <nav className="navbar">
              {/* Add onClick handlers and dynamic classNames */}
              <button
                className={`nav-btn ${activeTab === "Patient" ? "active" : ""}`}
                onClick={() => handleTabClick("Patient")}
              >
                Patient
              </button>
              <button
                className={`nav-btn ${activeTab === "Donor" ? "active" : ""}`}
                onClick={() => handleTabClick("Donor")}
              >
                Donor
              </button>
              <button
                className={`nav-btn ${
                  activeTab === "Hospital" ? "active" : ""
                }`}
                onClick={() => handleTabClick("Hospital")}
              >
                Hospital
              </button>
            </nav>

            {/* The title now updates based on the activeTab state */}
            <h2 className="title">{activeTab} Login</h2>

            {/* 6. Add the onSubmit handler to the form */}
            <form id="login-form" onSubmit={handleLogin}>
              <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="input-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" className="btn login-btn">
                Login
              </button>
            </form>

            <div className="signup-box">
              <p>New here?</p>
              {/* Use React Router's <Link> for navigation */}
              <Link to="/signup">
                <button type="button" className="btn signup-btn">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
