import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles.css";

// Import all page components
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import PatientDashboard from "./pages/PatientDashboard";
import MakeRequestPage from "./pages/MakeRequestPage";
import MyRequestsPage from "./pages/MyRequestsPage";
import MyProfilePage from "./pages/MyProfilePage";
import DonorDashboard from "./pages/DonorDashboardPage";
import DonationRequestsPage from "./pages/DonationRequestsPage";
import DonationHistoryPage from "./pages/DonationHistoryPage";
import DonorProfilePage from "./pages/DonorProfilePage";
import HospitalDashboard from "./pages/HospitalDashboard";
import BloodInventoryPage from "./pages/BloodInventoryPage";
import ManageRequestsPage from "./pages/ManageRequestsPage";
import HospitalProfilePage from "./pages/HospitalProfilePage";
import SignupPage from "./pages/SignupPage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        {/* Static Page Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Patient Routes */}
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/make-request" element={<MakeRequestPage />} />
        <Route path="/my-requests" element={<MyRequestsPage />} />
        <Route path="/my-profile" element={<MyProfilePage />} />

        {/* Donor Routes */}
        <Route path="/donor-dashboard" element={<DonorDashboard />} />
        <Route path="/donation-requests" element={<DonationRequestsPage />} />
        <Route path="/donation-history" element={<DonationHistoryPage />} />
        <Route path="/donor-profile" element={<DonorProfilePage />} />

        {/* Hospital Routes */}
        <Route path="/hospital-dashboard" element={<HospitalDashboard />} />
        <Route path="/blood-inventory" element={<BloodInventoryPage />} />
        <Route path="/manage-requests" element={<ManageRequestsPage />} />
        <Route path="/hospital-profile" element={<HospitalProfilePage />} />
      </Routes>
    </div>
  );
}
