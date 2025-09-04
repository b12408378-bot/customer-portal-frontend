//DataUsagePage.js

// src/pages/DataUsagePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import BrandLogo from "../components/BrandLogo";
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import './DataUsagePage.css';
import Footer from '../components/Footer';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export default function DataUsagePage() {
  const [planType, setPlanType] = useState("data");
  const [dataUsage, setDataUsage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchDataUsage = async () => {
    setLoading(true);
    setErrorMsg(null);
    setDataUsage(null);
    try {
      const response = await axios.post(
        "http://localhost:8080/data-usage-service/api/data-usage",
        { planType },
        { headers: { "Content-Type": "application/json" } }
      );
      setDataUsage(response.data);
    } catch (error) {
      console.error("Error fetching data usage:", error);
      if (error.response?.data?.message) {
        setErrorMsg(error.response.data.message);
      } else {
        setErrorMsg("Failed to fetch data usage.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataUsage(); // Fetch usage on component mount
  }, [planType]); // refetch if planType changes

  const chartData = dataUsage && {
    labels: dataUsage.dailyUsageGB.map((_, index) => `Day ${index + 1}`),
    datasets: [
      {
        label: "Daily Data Usage (GB)",
        data: dataUsage.dailyUsageGB,
        borderColor: "#ff3b3b",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(255, 59, 59, 0.4)");
          gradient.addColorStop(1, "rgba(255, 59, 59, 0)");
          return gradient;
        },
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#ff3b3b",
        pointHoverBackgroundColor: "#ff3b3b",
        pointHoverBorderColor: "#fff",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: { backgroundColor: "#000", bodyColor: "#fff" },
    },
    scales: {
      x: { grid: { display: false }, ticks: { color: "#000" } },
      y: { grid: { color: "rgba(0,0,0,0.1)" }, ticks: { color: "#000" } },
    },
  };

  return (
    <div className="datausage-page">
      <BrandLogo />

      {/* Inline Dashboard Navbar */}
      <div className="dashboard-actions mb-4 mt-3 text-center">
        <Link to="/dashboard" className="btn btn-outline-danger dashboard-btn mx-2">Dashboard</Link>
        <Link to="/plans" className="btn btn-outline-danger dashboard-btn mx-2">Browse Plans</Link>
        <Link to="/data-usage" className="btn btn-outline-danger dashboard-btn mx-2">Data Usage</Link>
        <Link to="/ticket" className="btn btn-outline-danger dashboard-btn mx-2">Raise Ticket</Link>
        <Link to="/profile" className="btn btn-outline-danger dashboard-btn mx-2">Profile</Link>
      </div>

      <h2 className="title text-center">Data Usage Chart</h2>

      <div className="datausage-container p-4">
        <div className="text-center mb-3">
          <label className="me-2"><strong>Select Plan Type:</strong></label>
          <select
            value={planType}
            onChange={(e) => setPlanType(e.target.value)}
            className="form-select d-inline-block w-auto"
          >
            <option value="data">Data</option>
            <option value="combo">Combo</option>
            <option value="voice">Voice</option>
          </select>
          <button className="btn custom-btn ms-3 px-4" onClick={fetchDataUsage} disabled={loading}>
            {loading ? "Loading..." : "Fetch Usage"}
          </button>
        </div>

        {errorMsg && (
          <div className="text-center text-danger mb-3">{errorMsg}</div>
        )}

        {dataUsage && (
          <>
            <div className="usage-summary text-center mb-4">
              <p>
                Plan: <strong>{dataUsage.planType}</strong> — Monthly Limit:{" "}
                <strong>{dataUsage.monthlyLimitGB} GB</strong>
              </p>
              <p>
                Used: <strong>{dataUsage.usedGB} GB</strong> — Remaining:{" "}
                <strong>{dataUsage.monthlyLimitGB - dataUsage.usedGB} GB</strong> — Usage:{" "}
                <strong>{dataUsage.percentageUsed}%</strong>
              </p>
            </div>

            <div className="chart-card p-3">
              <Line data={chartData} options={options} />
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}