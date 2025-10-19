import React, { useState, useMemo } from "react";
import Sidebar from "../components/SideBar"; 
import "../styles/Patient.css"; // Import the reusable Sidebar

// Sample data that would normally come from a server
const allRequests = [
  {
    id: "#R4582",
    date: "2025-10-17",
    hospital: "City Hospital",
    bloodType: "A+",
    units: 2,
    status: "pending",
  },
  {
    id: "#R4501",
    date: "2025-09-12",
    hospital: "General Hospital",
    bloodType: "B-",
    units: 1,
    status: "fulfilled",
  },
  {
    id: "#R4490",
    date: "2025-09-02",
    hospital: "City Hospital",
    bloodType: "A+",
    units: 3,
    status: "cancelled",
  },
  {
    id: "#R4450",
    date: "2025-08-15",
    hospital: "St. Jude's",
    bloodType: "O+",
    units: 2,
    status: "fulfilled",
  },
];

function MyRequestsPage() {
  // State to manage the filter and sort values
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");

  // useMemo will re-calculate the filtered/sorted list only when dependencies change
  const filteredAndSortedRequests = useMemo(() => {
    let result = [...allRequests];

    // 1. Filter by status
    if (filterStatus !== "all") {
      result = result.filter((request) => request.status === filterStatus);
    }

    // 2. Sort by date
    result.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [filterStatus, sortOrder]); // Dependencies: re-run when these change

  // Helper to format the date string
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="dashboard-container">
      <Sidebar userType="patient" activePage="My Requests" />

      <main className="main-content">
        <header className="main-header">
          <h1>My Request History</h1>
          <div className="header-user-icons">
            <i className="fa-solid fa-bell"></i>
            <i className="fa-solid fa-user-circle"></i>
          </div>
        </header>

        <div className="content-row">
          <section className="card" id="request-history">
            <h2>
              <i className="fa-solid fa-file-lines"></i> All Requests
            </h2>

            <div className="request-filters">
              <div className="form-group">
                <label htmlFor="filter-status">Filter by Status</label>
                <select
                  id="filter-status"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="pending">Pending</option>
                  <option value="fulfilled">Fulfilled</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="sort-date">Sort by Date</label>
                <select
                  id="sort-date"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>
            </div>

            <table className="requests-table">
              <thead>
                <tr>
                  <th>Request ID</th>
                  <th>Date</th>
                  <th>Hospital</th>
                  <th>Blood Type</th>
                  <th>Units</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredAndSortedRequests.map((request) => (
                  <tr key={request.id}>
                    <td>{request.id}</td>
                    <td>{formatDate(request.date)}</td>
                    <td>{request.hospital}</td>
                    <td>{request.bloodType}</td>
                    <td>{request.units}</td>
                    <td>
                      <span className={`status ${request.status}`}>
                        {request.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </main>
    </div>
  );
}

export default MyRequestsPage;
