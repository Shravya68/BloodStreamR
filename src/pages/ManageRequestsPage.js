import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import "../styles/Hospital.css"; // Import the correct CSS

function ManageRequestsPage() {
  // Manage the list of requests using React state
  const [requests, setRequests] = useState([
    {
      id: "#R4582",
      requestedBy: "Patient #P4582",
      bloodType: "A+",
      urgency: "Emergency",
    },
    {
      id: "#R4580",
      requestedBy: "Patient #P4580",
      bloodType: "B-",
      urgency: "Urgent",
    },
    {
      id: "#R4575",
      requestedBy: "General Hospital",
      bloodType: "O-",
      urgency: "Standard",
    },
  ]);

  // Function to handle the approve/decline action
  const handleRequestAction = (requestId, action) => {
    // Give feedback to the user
    alert(`Request ${requestId} has been ${action}.`);

    // Log the action for demonstration
    console.log(`Action: ${action} for Request ID: ${requestId}`);

    // Update the state to remove the handled request
    // This will automatically re-render the table without the removed row
    setRequests((currentRequests) =>
      currentRequests.filter((request) => request.id !== requestId)
    );
  };

  return (
    <div className="dashboard-container theme-hospital">
      <Sidebar userType="hospital" activePage="Manage Requests" />

      <main className="main-content">
        <header className="main-header">
          <h1>Manage Blood Requests</h1>
        </header>
        <section className="card" id="requests-list">
          <h2>
            <i className="fa-solid fa-inbox"></i> Incoming Requests
          </h2>
          <table className="requests-table">
            <thead>
              <tr>
                <th>Request ID</th>
                <th>Requested By</th>
                <th>Blood Type</th>
                <th>Urgency</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Loop through the requests in state and create a table row for each */}
              {requests.map((request) => (
                <tr key={request.id}>
                  <td>{request.id}</td>
                  <td>{request.requestedBy}</td>
                  <td>{request.bloodType}</td>
                  <td>
                    <span
                      className={`urgency ${
                        request.urgency === "Standard" ? "medium" : "high"
                      }`}
                    >
                      {request.urgency}
                    </span>
                  </td>
                  <td className="action-buttons">
                    <button
                      className="btn-approve"
                      onClick={() =>
                        handleRequestAction(request.id, "Approved")
                      }
                    >
                      Approve
                    </button>
                    <button
                      className="btn-decline"
                      onClick={() =>
                        handleRequestAction(request.id, "Declined")
                      }
                    >
                      Decline
                    </button>
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

export default ManageRequestsPage;
