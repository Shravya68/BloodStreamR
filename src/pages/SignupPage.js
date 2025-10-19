import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css"; // We can reuse the login styles

function SignupPage() {
  const [activeTab, setActiveTab] = useState("Patient");
  const navigate = useNavigate();

  // --- State for all form inputs ---
  // This is the "React way" to handle forms (controlled components)
  const [patientData, setPatientData] = useState({
    name: "",
    age: "",
    contact: "",
    email: "",
    password: "",
    confirmPassword: "",
    medical: "",
  });
  const [donorData, setDonorData] = useState({
    name: "",
    age: "",
    contact: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [hospitalData, setHospitalData] = useState({
    name: "",
    license: "",
    contact: "",
    email: "",
    password: "",
    confirmPassword: "",
    state: "",
    district: "",
  });

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  // --- Form Submission Handlers ---
  const handlePatientSubmit = (event) => {
    event.preventDefault();
    if (patientData.password !== patientData.confirmPassword) {
      alert("Patient passwords do not match!");
      return;
    }
    console.log("Registering Patient:", patientData);
    alert(`Thank you for registering, ${patientData.name}!`);
    navigate("/login");
  };

  const handleDonorSubmit = (event) => {
    event.preventDefault();
    if (donorData.password !== donorData.confirmPassword) {
      alert("Donor passwords do not match!");
      return;
    }
    console.log("Registering Donor:", donorData);
    alert(`Thank you for registering, ${donorData.name}!`);
    navigate("/login");
  };

  const handleHospitalSubmit = (event) => {
    event.preventDefault();
    if (hospitalData.password !== hospitalData.confirmPassword) {
      alert("Hospital passwords do not match!");
      return;
    }
    console.log("Registering Hospital:", hospitalData);
    alert(`Thank you for registering, ${hospitalData.name}!`);
    navigate("/login");
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

            {/* --- Render the correct form based on the active tab --- */}

            {activeTab === "Patient" && (
              <form onSubmit={handlePatientSubmit}>
                <h2 className="title">Patient Registration</h2>
                <div className="input-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    required
                    onChange={(e) =>
                      setPatientData({ ...patientData, name: e.target.value })
                    }
                  />
                </div>
                <div className="input-group">
                  <label>Age</label>
                  <input
                    type="number"
                    placeholder="Enter your age"
                    required
                    onChange={(e) =>
                      setPatientData({ ...patientData, age: e.target.value })
                    }
                  />
                </div>
                <div className="input-group">
                  <label>Contact</label>
                  <input
                    type="tel"
                    placeholder="Contact Number"
                    required
                    onChange={(e) =>
                      setPatientData({
                        ...patientData,
                        contact: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input-group">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    onChange={(e) =>
                      setPatientData({ ...patientData, email: e.target.value })
                    }
                  />
                </div>
                <div className="input-group">
                  <label>Set Password</label>
                  <input
                    type="password"
                    placeholder="Create a password"
                    required
                    minLength="6"
                    onChange={(e) =>
                      setPatientData({
                        ...patientData,
                        password: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    required
                    onChange={(e) =>
                      setPatientData({
                        ...patientData,
                        confirmPassword: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input-group">
                  <label>Medical Condition (if any)</label>
                  <input
                    type="text"
                    placeholder="e.g., Anemia"
                    onChange={(e) =>
                      setPatientData({
                        ...patientData,
                        medical: e.target.value,
                      })
                    }
                  />
                </div>
                <button type="submit" className="btn signup-btn">
                  Register
                </button>
              </form>
            )}

            {activeTab === "Donor" && (
              <form onSubmit={handleDonorSubmit}>
                <h2 className="title">Donor Registration</h2>
                <div className="input-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    required
                    onChange={(e) =>
                      setDonorData({ ...donorData, name: e.target.value })
                    }
                  />
                </div>
                <div className="input-group">
                  <label>Age</label>
                  <input
                    type="number"
                    placeholder="Enter your age"
                    required
                    onChange={(e) =>
                      setDonorData({ ...donorData, age: e.target.value })
                    }
                  />
                </div>
                <div className="input-group">
                  <label>Contact</label>
                  <input
                    type="tel"
                    placeholder="Contact Number"
                    required
                    onChange={(e) =>
                      setDonorData({ ...donorData, contact: e.target.value })
                    }
                  />
                </div>
                <div className="input-group">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    onChange={(e) =>
                      setDonorData({ ...donorData, email: e.target.value })
                    }
                  />
                </div>
                <div className="input-group">
                  <label>Set Password</label>
                  <input
                    type="password"
                    placeholder="Create a password"
                    required
                    minLength="6"
                    onChange={(e) =>
                      setDonorData({ ...donorData, password: e.target.value })
                    }
                  />
                </div>
                <div className="input-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    required
                    onChange={(e) =>
                      setDonorData({
                        ...donorData,
                        confirmPassword: e.target.value,
                      })
                    }
                  />
                </div>
                <button type="submit" className="btn signup-btn">
                  Register
                </button>
              </form>
            )}

            {activeTab === "Hospital" && (
              <form onSubmit={handleHospitalSubmit}>
                <h2 className="title">Hospital Registration</h2>
                <div className="input-group">
                  <label>Hospital Name</label>
                  <input
                    type="text"
                    placeholder="Hospital/Clinic Name"
                    required
                    onChange={(e) =>
                      setHospitalData({ ...hospitalData, name: e.target.value })
                    }
                  />
                </div>
                <div className="input-group">
                  <label>License Number</label>
                  <input
                    type="text"
                    placeholder="Enter License Number"
                    required
                    onChange={(e) =>
                      setHospitalData({
                        ...hospitalData,
                        license: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input-group">
                  <label>Contact</label>
                  <input
                    type="tel"
                    placeholder="Contact Number"
                    required
                    onChange={(e) =>
                      setHospitalData({
                        ...hospitalData,
                        contact: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input-group">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    onChange={(e) =>
                      setHospitalData({
                        ...hospitalData,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input-group">
                  <label>Set Password</label>
                  <input
                    type="password"
                    placeholder="Create a password"
                    required
                    minLength="6"
                    onChange={(e) =>
                      setHospitalData({
                        ...hospitalData,
                        password: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    required
                    onChange={(e) =>
                      setHospitalData({
                        ...hospitalData,
                        confirmPassword: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input-group">
                  <label>State</label>
                  <select
                    required
                    onChange={(e) =>
                      setHospitalData({
                        ...hospitalData,
                        state: e.target.value,
                      })
                    }
                  >
                    <option value="" disabled selected>
                      Select State
                    </option>
                    <option value="State 1">State 1</option>
                    <option value="State 2">State 2</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>District</label>
                  <select
                    required
                    onChange={(e) =>
                      setHospitalData({
                        ...hospitalData,
                        district: e.target.value,
                      })
                    }
                  >
                    <option value="" disabled selected>
                      Select District
                    </option>
                    <option value="District 1">District 1</option>
                    <option value="District 2">District 2</option>
                  </select>
                </div>
                <button type="submit" className="btn signup-btn">
                  Register
                </button>
              </form>
            )}

            <div className="login-box">
              <p>Already have an account?</p>
              <Link to="/login">
                <button type="button" className="btn login-btn">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
