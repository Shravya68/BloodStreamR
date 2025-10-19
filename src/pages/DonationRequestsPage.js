import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import "../styles/Donor.css"; // Import the correct CSS

function DonationRequestsPage() {
  // Initial data for the requests
  const initialRequests = [
    { id: "req1", requestor: "Patient (#P4582)", location: "City Hospital, District 1", bloodType: "A+", urgency: "Urgent", pledged: false },
    { id: "req2", requestor: "General Hospital", location: "District 2", bloodType: "O-", urgency: "Urgent", pledged: false },
    { id: "req3", requestor: "Patient (#P4490)", location: "St. Jude's, District 1", bloodType: "B+", urgency: "Standard", pledged: false }
  ];

  // Manage the list of requests using React state
  const [requests, setRequests] = useState(initialRequests);

  // Function to handle the "Pledge to Donate" action
  const handlePledge = (requestId) => {
    // Show a confirmation to the user
    alert("Thank you for your pledge! You will receive further details shortly.");

    // Update the state to mark the specific request as pledged
    setRequests(currentRequests =>
      currentRequests.map(req =>
        req.id === requestId ? { ...req, pledged: true } : req
      )
    );
  };

  return (
    <div className="dashboard-container theme-donor">
      <Sidebar userType="donor" activePage="View Requests" />

      <main className="main-content">
        <header className="main-header">
          <h1>Active Blood Requests</h1>
        </header>

        <section className="card" id="request-list-card">
          <h2><i className="fa-solid fa-list-check"></i> Find an Opportunity to Help</h2>
          
          <div className="request-filters">
            <div className="form-group">
              <label htmlFor="filter-state">State</label>
              <select id="filter-state"><option>All States</option></select>
            </div>
            <div className="form-group">
              <label htmlFor="filter-district">District</label>
              <select id="filter-district"><option>All Districts</option></select>
            </div>
            <div className="form-group">
              <label htmlFor="filter-blood-type">Blood Type</label>
              <select id="filter-blood-type"><option>All Types</option></select>
            </div>
          </div>
          
          <table className="requests-table">
            <thead>
              <tr>
                <th>Patient / Hospital</th>
                <th>Location</th>
                <th>Blood Type</th>
                <th>Urgency</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map(request => (
                <tr key={request.id}>
                  <td>{request.requestor}</td>
                  <td>{request.location}</td>
                  <td>{request.bloodType}</td>
                  <td>
                    <span className={`urgency ${request.urgency === 'Standard' ? 'medium' : 'high'}`}>
                      {request.urgency}
                    </span>
                  </td>
                  <td>
                    {request.pledged ? (
                      <button className="btn-primary pledged" disabled>Pledged!</button>
                    ) : (
                      <button className="btn-primary" onClick={() => handlePledge(request.id)}>
                        Pledge to Donate
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default DonationRequestsPage;
