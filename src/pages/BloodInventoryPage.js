import React, { useState } from "react";
import Sidebar from "../components/SideBar";

// Initial data for the inventory. In a real app, this would come from an API.
const initialInventory = [
  { type: "A+", units: 75, status: "Good" },
  { type: "O+", units: 90, status: "Good" },
  { type: "B+", units: 30, status: "Okay" },
  { type: "AB+", units: 25, status: "Okay" },
  { type: "A-", units: 22, status: "Low" },
  { type: "O-", units: 12, status: "Low" },
  { type: "B-", units: 20, status: "Okay" },
  { type: "AB-", units: 5, status: "Critical" },
];

// A helper function to determine the status based on unit count
const getStatus = (units) => {
  if (units > 50) return "Good";
  if (units > 20) return "Okay";
  if (units > 10) return "Low";
  return "Critical";
};

function BloodInventoryPage() {
  // State for the inventory list
  const [inventory, setInventory] = useState(initialInventory);

  // State for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [updatedUnits, setUpdatedUnits] = useState(0);

  // --- Modal Handlers ---
  const handleOpenModal = (item) => {
    setEditingItem(item);
    setUpdatedUnits(item.units);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleUpdateSubmit = (event) => {
    event.preventDefault();
    // Update the main inventory list
    setInventory(
      inventory.map((item) =>
        item.type === editingItem.type
          ? { ...item, units: updatedUnits, status: getStatus(updatedUnits) }
          : item
      )
    );
    alert(`Stock for ${editingItem.type} updated successfully!`);
    handleCloseModal();
  };

  // --- Add Stock Form Handler ---
  const handleAddStock = (event) => {
    event.preventDefault();
    const form = event.target;
    const bloodType = form.querySelector("select").value;
    const units = form.querySelector("input[type='number']").value;

    if (!bloodType || !units) {
      alert("Please fill out all fields.");
      return;
    }

    alert(
      `Simulating Add Stock: ${units} units of ${bloodType}. In a real app, this would update the table.`
    );
    form.reset();
  };

  return (
    <div className="dashboard-container theme-hospital">
      <Sidebar userType="hospital" activePage="Blood Inventory" />

      <main className="main-content">
        <header className="main-header">
          <h1>Blood Inventory Management</h1>
        </header>

        <div className="content-row">
          <section className="card" id="add-stock-card">
            <h2>
              <i className="fa-solid fa-plus-circle"></i> Add New Blood Stock
            </h2>
            <form className="form-grid" onSubmit={handleAddStock}>
              <div className="form-group">
                <label>Blood Type</label>
                <select required>
                  <option value="" disabled selected>
                    Select Type
                  </option>
                  <option value="A+">A+</option>
                  <option value="O+">O+</option>
                  <option value="B+">B+</option>
                  <option value="AB+">AB+</option>
                  <option value="A-">A-</option>
                  <option value="O-">O-</option>
                  <option value="B-">B-</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
              <div className="form-group">
                <label>Units Added</label>
                <input type="number" min="1" placeholder="e.g., 5" required />
              </div>
              <div className="form-group">
                <label>Date Received</label>
                <input type="date" required />
              </div>
              <div className="form-group">
                <button type="submit" className="btn-primary">
                  Add Stock
                </button>
              </div>
            </form>
          </section>

          <section className="card" id="inventory-table-card">
            <h2>
              <i className="fa-solid fa-table-list"></i> Current Inventory
            </h2>
            <table className="inventory-table">
              <thead>
                <tr>
                  <th>Blood Type</th>
                  <th>Units in Stock</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item) => (
                  <tr key={item.type}>
                    <td>{item.type}</td>
                    <td>{item.units}</td>
                    <td>
                      <span className={`status ${item.status.toLowerCase()}`}>
                        {item.status}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn-secondary btn-update"
                        onClick={() => handleOpenModal(item)}
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </main>

      {/* --- Update Stock Modal (Rendered Conditionally) --- */}
      {isModalOpen && (
        <div
          id="update-modal"
          className="modal-overlay"
          style={{ display: "flex" }}
        >
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>
              &times;
            </span>
            <h2 id="modal-title">Update Stock for {editingItem?.type}</h2>
            <form id="update-stock-form" onSubmit={handleUpdateSubmit}>
              <div className="form-group">
                <label htmlFor="update-units">New Unit Count</label>
                <input
                  type="number"
                  id="update-units"
                  min="0"
                  value={updatedUnits}
                  onChange={(e) =>
                    setUpdatedUnits(parseInt(e.target.value, 10))
                  }
                  required
                />
              </div>
              <button type="submit" className="btn-primary">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default BloodInventoryPage;
