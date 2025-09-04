//App.js

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import PlansPage from './pages/PlansPage';
import PaymentsPage from "./pages/PaymentsPage";
import TicketPage from './pages/TicketPage';
import ProfilePage from './pages/ProfilePage';
import DataUsagePage from "./pages/DataUsagePage";
import PaymentSuccess from "./pages/PaymentSuccess";
//import DetailsPage from './pages/DetailsPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="/ticket" element={<TicketPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/data-usage" element={<DataUsagePage />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        {/* <Route path="/details/:topic" element={<DetailsPage />} /> */}
      </Routes>
    </Router>
  );
}