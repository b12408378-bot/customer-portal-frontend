// src/pages/PaymentSuccess.js
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import BrandLogo from "../components/BrandLogo";
import "./PaymentsPage.css"; // reuse the same red theme styles

export default function PaymentSuccess() {
  return (
    <div className="payment-page-wrapper">
      {/* Logo */}
      <div className="payment-header text-center my-3">
        <BrandLogo height={60} />
      </div>

      {/* Inline Navbar */}
      <div className="dashboard-actions mb-4 mt-3 text-center">
        <Link to="/dashboard" className="btn dashboard-btn mx-2">
          Dashboard
        </Link>
        <Link to="/plans" className="btn dashboard-btn mx-2">
          Browse Plans
        </Link>
        <Link to="/data-usage" className="btn dashboard-btn mx-2">
          Data Usage
        </Link>
        <Link to="/ticket" className="btn dashboard-btn mx-2">
          Raise Ticket
        </Link>
        <Link to="/profile" className="btn dashboard-btn mx-2">
          Profile
        </Link>
      </div>

      {/* Success Card */}
      <div className="payment-container">
        <div className="payment-card text-center">
          <h2 className="payment-title">Payment Successful!</h2>
          <p style={{ fontSize: "1.1rem", marginBottom: "25px" }}>
            Thank you for your payment. Your plan will be activated shortly.
          </p>

          <Link
            to="/dashboard"
            className="btn-pay"
            style={{ display: "inline-block", width: "auto", padding: "10px 20px" }}
          >
            Go to Dashboard
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
