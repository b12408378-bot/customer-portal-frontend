//PlansPage.js

import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import './PlansPage.css';

export default function PlansPage() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/plan-service/planservice/plan')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch plans');
        }
        return response.json();
      })
      .then((data) => {
        setPlans(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // <-- useEffect properly closed

  if (loading) {
    return <div className="plans-container"><h2>Loading Plans...</h2></div>;
  }

  if (error) {
    return <div className="plans-container"><h2>Error: {error}</h2></div>;
  }

  return (
    <div className="plans-container">
      {/* <Navbar />  */}
      {/* Inline Navbar Added */}
      <div className="dashboard-actions mb-4 mt-3 text-center">
        <Link to="/dashboard" className="btn btn-dark dashboard-btn mx-2">Dashboard</Link>
        <Link to="/plans" className="btn btn-danger dashboard-btn mx-2">Browse Plans</Link>
        <Link to="/data-usage" className="btn btn-light dashboard-btn mx-2">Data Usage</Link>
        <Link to="/ticket" className="btn btn-danger dashboard-btn mx-2">Raise Ticket</Link>
        <Link to="/profile" className="btn btn-light dashboard-btn mx-2">Profile</Link>
      </div>

      <h2 className="plans-heading">Available Plans</h2>
      <div className="plans-grid">
        {plans.map((plan) => (
          <div className="plan-card" key={plan.planId}>
            <div className="plan-body">
              <h5 className="plan-title">{plan.planName}</h5>
              <p className="plan-description">
                Type: {plan.planType}<br />
                Validity: {plan.validity} days
              </p>
              <p className="plan-price">₹{plan.price}</p>
              <button
  className="btn-recharge"
  onClick={() =>
    navigate('/payments', { state: { planId: plan.planId, price: plan.price } })
  }
>
  Recharge Now
</button>

            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}