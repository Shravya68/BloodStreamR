import React from "react";
import Sidebar from "../components/SideBar";
import "../styles/Patient.css";  // Import the reusable Sidebar

function MakeRequestPage() {
  // In a real React app, you would use state to handle form inputs
  // For now, we'll just handle the submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    alert("Your general request has been submitted successfully!");
    // In a real app, you would then redirect or clear the form
    console.log("Form submitted!");
  };

  return (
    <div className="dashboard-container">
      {/* We reuse the Sidebar component here */}
      <Sidebar userType="patient" activePage="Make a Request" />

      <main className="main-content">
        <header className="main-header">
          <h1>Make a Request</h1>
          <div className="header-user-icons">
            <i className="fa-solid fa-bell"></i>
            <i className="fa-solid fa-user-circle"></i>
          </div>
        </header>

        <div className="content-row">
          <section className="card" id="request-form-card">
            <h2>
              <i className="fa-solid fa-droplet"></i> New Blood Request
            </h2>

            <p className="form-description">
              This form creates a <strong>general request</strong> that is visible
              to all donors and hospitals in the network. To request from a
              specific hospital, use the "Find Blood" search on your dashboard.
            </p>

            <form id="request-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="blood-type">Blood Type</label>
                  <select id="blood-type" required>
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
                <div className="form-group">
                  <label htmlFor="units">Units Required</label>
                  <input
                    type="number"
                    id="units"
                    placeholder="e.g., 2"
                    min="1"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="urgency">Urgency</label>
                  <select id="urgency" required>
                    <option value="standard">Standard (3-5 days)</option>
                    <option value="urgent">Urgent (Within 24 hours)</option>
                    <option value="emergency">Emergency (Immediately)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-person">Contact Number</label>
                  <input
                    type="tel"
                    id="contact-person"
                    placeholder="Your contact number"
                  />
                </div>
                <div className="form-group full-width">
                  <label htmlFor="hospital-name">
                    Hospital Name & Address (Your Location)
                  </label>
                  <input
                    type="text"
                    id="hospital-name"
                    placeholder="e.g., City Hospital, 123 Main St"
                    required
                  />
                </div>
                <div className="form-group full-width">
                  <label htmlFor="notes">
                    Reason / Additional Notes (Optional)
                  </label>
                  <textarea
                    id="notes"
                    placeholder="Any additional details..."
                  ></textarea>
                </div>
              </div>
              <button type="submit" className="btn-submit-request">
                Submit General Request
              </button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}

export default MakeRequestPage;
