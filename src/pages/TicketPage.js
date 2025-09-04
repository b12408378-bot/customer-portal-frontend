//TicketPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BrandLogo from "../components/BrandLogo";
import './TicketPage.css';
import Footer from '../components/Footer';

export default function TicketPage() {
  const [ticketDetails, setTicketDetails] = useState({ title: '', description: '', status: 'OPEN' });
  const [tickets, setTickets] = useState([]);

  // Fetch tickets from backend on page load
  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await axios.get('http://localhost:8080/complaint-service/api/complaints');
      setTickets(response.data);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  const handleSubmit = async () => {
    if (!ticketDetails.title || !ticketDetails.description) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      await axios.post('http://localhost:8080/complaint-service/api/complaints', ticketDetails);
      alert('Ticket submitted successfully!');
      setTicketDetails({ title: '', description: '', status: 'OPEN' });
      fetchTickets(); // Refresh ticket list
    } catch (error) {
      console.error('Error submitting ticket:', error);
      alert('Failed to submit ticket.');
    }
  };

  return (
    <div className="ticket-page">
      <BrandLogo />
      
      {/* Inline Dashboard Navbar */}
      <div className="dashboard-actions mb-4 mt-3 text-center">
        <Link to="/dashboard" className="btn btn-outline-danger dashboard-btn mx-2">Dashboard</Link>
        <Link to="/plans" className="btn btn-outline-danger dashboard-btn mx-2">Browse Plans</Link>
        <Link to="/data-usage" className="btn btn-outline-danger dashboard-btn mx-2">Data Usage</Link>
        <Link to="/ticket" className="btn btn-outline-danger dashboard-btn mx-2">Raise Ticket</Link>
        <Link to="/profile" className="btn btn-outline-danger dashboard-btn mx-2">Profile</Link>
      </div>

      <div className="form-card">
        <h2>Raise a Complaint / Ticket</h2>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={ticketDetails.title}
              onChange={(e) => setTicketDetails({ ...ticketDetails, title: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              rows="4"
              value={ticketDetails.description}
              onChange={(e) => setTicketDetails({ ...ticketDetails, description: e.target.value })}
            />
          </div>
          <button type="button" onClick={handleSubmit}>
            Submit Ticket
          </button>
        </form>
      </div>

      <div className="tickets-list">
        {tickets.length > 0 && (
          <ul>
            {tickets.map((ticket) => (
              <li key={ticket.id}>
                <strong>{ticket.title}</strong> - {ticket.description} ({ticket.status})
              </li>
            ))}
          </ul>
        )}
      </div>

      <Footer />
    </div>
  );
}