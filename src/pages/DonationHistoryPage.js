import React, { useState, useMemo } from "react";
import Sidebar from "../components/SideBar";
import "../styles/Donor.css"; // Import the correct CSS

function DonationHistoryPage() {
  // Initial donation data managed by state
  const [donations, setDonations] = useState([
    { id: "#D105", date: "2025-08-15", center: "City Hospital Blood Bank", status: "Confirmed" },
    { id: "#D104", date: "2025-05-20", center: "Red Cross Mobile Drive", status: "Confirmed" },
    { id: "#D102", date: "2025-02-01", center: "General Hospital", status: "Confirmed" }
  ]);

  // State to manage sorting configuration
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'descending' });

  // useMemo will re-sort the data only when donations or sortConfig changes
  const sortedDonations = useMemo(() => {
    let sortableItems = [...donations];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [donations, sortConfig]);

  // Function to request a sort
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  
  // Function to get the CSS class for the sort arrow
  const getSortDirectionClass = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? (sortConfig.direction === 'ascending' ? 'sort-asc' : 'sort-desc') : undefined;
  };


  return (
    <div className="dashboard-container theme-donor">
      <Sidebar userType="donor" activePage="Donation History" />

      <main className="main-content">
        <header className="main-header">
          <h1>My Donation History</h1>
        </header>

        <section className="card" id="history-card">
          <h2><i className="fa-solid fa-book-medical"></i> Your Past Donations</h2>
          <table className="requests-table sortable">
            <thead>
              <tr>
                <th onClick={() => requestSort('id')} className={getSortDirectionClass('id')}>Donation ID</th>
                <th onClick={() => requestSort('date')} className={getSortDirectionClass('date')}>Date</th>
                <th onClick={() => requestSort('center')} className={getSortDirectionClass('center')}>Donation Center</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {sortedDonations.map(donation => (
                <tr key={donation.id}>
                  <td>{donation.id}</td>
                  {/* Format the date for display */}
                  <td>{new Date(donation.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
                  <td>{donation.center}</td>
                  <td><span className="status confirmed">{donation.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default DonationHistoryPage;
