//ProfilePage.js


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from "../components/BrandLogo"; 
import Footer from '../components/Footer';
import './ProfilePage.css';

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the latest registered user from backend
    fetch("http://localhost:8080/user-service/users/latest")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch user profile");
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="profile-page red-black-theme">
        <h2>Loading Profile...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="profile-page red-black-theme">
        <h2>Error: {error}</h2>
      </div>
    );
  }

  return (
    <div className="profile-page red-black-theme">
       <BrandLogo />
       {/* Inline Dashboard Navbar */}
        <div className="dashboard-actions mb-4 mt-3 text-center">
          <Link to="/dashboard" className="btn btn-outline-danger dashboard-btn mx-2">Dashboard</Link>
          <Link to="/plans" className="btn btn-outline-danger dashboard-btn mx-2">Browse Plans</Link>
          <Link to="/data-usage" className="btn btn-outline-danger dashboard-btn mx-2">Data Usage</Link>
          <Link to="/ticket" className="btn btn-outline-danger dashboard-btn mx-2">Raise Ticket</Link>
          <Link to="/profile" className="btn btn-outline-danger dashboard-btn mx-2">Profile</Link>
        </div>
        {/* --- End of Inline Navbar --- */}
      <div className="profile-container mt-5">
        <div className="profile-header">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="Profile Icon"
            className="profile-image"
          />
          <h2 className="profile-title">My Profile</h2>
        </div>

        {user && (
          <div className="profile-info">
            <p className="profile-welcome">
              Welcome back, <strong>{user.username}</strong>!
            </p>
            <ul className="profile-details">
              <li><strong>User ID:</strong> {user.user_id}</li>
              <li><strong>Username:</strong> {user.username}</li>
              <li><strong>Email:</strong> {user.email}</li>
              <li><strong>Phone:</strong> {user.phone_number}</li>
              <li><strong>Plan Type:</strong> {user.planType}</li>
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}