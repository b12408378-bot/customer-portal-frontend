//Updated DataUsagePage.js with backend integration:


// src/pages/DataUsagePage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
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

  const chartData = dataUsage && {
    labels: dataUsage.dailyUsageGB.map((_, index) => `Day ${index + 1}`),
    datasets: [
      {
        label: "Daily Data Usage (GB)",
        data: dataUsage.dailyUsageGB,
        borderColor: "#4a6cb3",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(74, 108, 179, 0.4)");
          gradient.addColorStop(1, "rgba(74, 108, 179, 0)");
          return gradient;
        },
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#4a6cb3",
        pointHoverBackgroundColor: "#4a6cb3",
        pointHoverBorderColor: "#fff",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: { backgroundColor: "#333", bodyColor: "#fff" },
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: "rgba(0,0,0,0.1)" } },
    },
  };

  return (
    <div className="datausage-page">
      {/* Updated Inline Dashboard Navbar */}
      <div className="dashboard-actions mb-4 mt-3 text-center">
        <Link to="/dashboard" className="btn btn-outline-dark dashboard-btn mx-2">Dashboard</Link>
        <Link to="/plans" className="btn btn-outline-primary dashboard-btn mx-2">Browse Plans</Link>
        <Link to="/datausage" className="btn btn-outline-secondary dashboard-btn mx-2">Data Usage</Link>
        <Link to="/ticket" className="btn btn-outline-warning dashboard-btn mx-2">Raise Ticket</Link>
        <Link to="/profile" className="btn btn-outline-info dashboard-btn mx-2">Profile</Link>
      </div>

      <h2 className="title text-center" style={{ color: "#3c3f91" }}>Data Usage Chart</h2>

      <div className="datausage-container p-4" style={{
        background: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        maxWidth: "850px",
        margin: "0 auto"
      }}>
        <div className="text-center mb-3">
          <label className="me-2"><strong>Select Plan Type:</strong></label>
          <select
            value={planType}
            onChange={(e) => setPlanType(e.target.value)}
            className="form-select d-inline-block w-auto"
            style={{ backgroundColor: "#f5f5fc", border: "1px solid #ccc" }}
          >
            <option value="data">Data</option>
            <option value="combo">Combo</option>
            <option value="voice">Voice</option>
          </select>
          <button
            className="btn btn-primary ms-3 px-4"
            onClick={fetchDataUsage}
            disabled={loading}
            style={{ fontSize: "0.95rem" }}
          >
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

            <div className="chart-card p-3" style={{
              background: "#fdfdfd",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
            }}>
              <Line data={chartData} options={options} />
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}



















// // src/pages/DataUsagePage.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Line } from 'react-chartjs-2';
// import axios from 'axios';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler
// } from 'chart.js';
// import './DataUsagePage.css';
// import Footer from '../components/Footer';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

// export default function DataUsagePage() {
//   const [planType, setPlanType] = useState("data"); // default selection
//   const [dataUsage, setDataUsage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState(null);

//   const fetchDataUsage = async () => {
//     setLoading(true);
//     setErrorMsg(null);
//     setDataUsage(null);
//     try {
//       const response = await axios.post(
//         "http://localhost:8080/data-usage-service/api/data-usage",
//         { planType },
//         { headers: { "Content-Type": "application/json" } }
//       );
//       setDataUsage(response.data);
//     } catch (error) {
//       console.error("Error fetching data usage:", error);
//       if (error.response?.data?.message) {
//         setErrorMsg(error.response.data.message);
//       } else {
//         setErrorMsg("Failed to fetch data usage.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Chart data (only when we have usage)
//   const chartData = dataUsage && {
//     labels: dataUsage.dailyUsageGB.map((_, index) => `Day ${index + 1}`),
//     datasets: [
//       {
//         label: "Daily Data Usage (GB)",
//         data: dataUsage.dailyUsageGB,
//         borderColor: "#685a9e",
//         backgroundColor: (context) => {
//           const ctx = context.chart.ctx;
//           const gradient = ctx.createLinearGradient(0, 0, 0, 300);
//           gradient.addColorStop(0, "rgba(104, 90, 158, 0.4)");
//           gradient.addColorStop(1, "rgba(104, 90, 158, 0)");
//           return gradient;
//         },
//         tension: 0.4,
//         fill: true,
//         pointBackgroundColor: "#fff",
//         pointBorderColor: "#685a9e",
//         pointHoverBackgroundColor: "#685a9e",
//         pointHoverBorderColor: "#fff",
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: { display: true },
//       tooltip: { backgroundColor: "#333", bodyColor: "#fff" },
//     },
//     scales: {
//       x: { grid: { display: false } },
//       y: { grid: { color: "rgba(0,0,0,0.1)" } },
//     },
//   };

//   return (
//     <div className="datausage-page">
//       {/* Inline Dashboard Navbar */}
//       <div className="dashboard-actions mb-4 mt-3 text-center">
//         <Link to="/plans" className="btn btn-primary dashboard-btn mx-2">
//           Browse Plans
//         </Link>
//         <Link to="/datausage" className="btn btn-secondary dashboard-btn mx-2">
//           Data Usage
//         </Link>
//         <Link to="/ticket" className="btn btn-warning dashboard-btn mx-2">
//           Raise Ticket
//         </Link>
//         <Link to="/profile" className="btn btn-info dashboard-btn mx-2">
//           Profile
//         </Link>
//       </div>

//       <h2 className="title text-center">Data Usage</h2>

//       {/* Plan type selection */}
//       <div className="text-center mb-3">
//         <label className="me-2"><strong>Select Plan Type:</strong></label>
//         <select
//           value={planType}
//           onChange={(e) => setPlanType(e.target.value)}
//           className="form-select d-inline-block w-auto"
//         >
//           <option value="data">Data</option>
//           <option value="combo">Combo</option>
//           <option value="voice">Voice</option>
//         </select>
//         <button
//           className="btn btn-success ms-3"
//           onClick={fetchDataUsage}
//           disabled={loading}
//         >
//           {loading ? "Loading..." : "Fetch Usage"}
//         </button>
//       </div>

//       {/* Errors */}
//       {errorMsg && (
//         <div className="text-center text-danger mb-3">{errorMsg}</div>
//       )}

//       {/* Show results */}
//       {dataUsage && (
//         <>
//           <p className="text-center">
//             Plan: <strong>{dataUsage.planType}</strong> — Monthly Limit:{" "}
//             <strong>{dataUsage.monthlyLimitGB} GB</strong>
//           </p>
//           <p className="text-center">
//             Used: <strong>{dataUsage.usedGB} GB</strong> — Remaining:{" "}
//             <strong>{dataUsage.monthlyLimitGB - dataUsage.usedGB} GB</strong> —
//             Usage: <strong>{dataUsage.percentageUsed}%</strong>
//           </p>

//           <div className="chart-container mt-4">
//             <Line data={chartData} options={options} />
//           </div>
//         </>
//       )}

//       <Footer />
//     </div>
//   );
// }
















// // src/pages/DataUsagePage.js
// import React, { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
// import './DataUsagePage.css';
// import Footer from '../components/Footer';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);
    
// export default function DataUsagePage() {
//   const [viewMode, setViewMode] = useState('daily'); // daily or hourly
//   const [dataUsage, setDataUsage] = useState({});

//   useEffect(() => {
//     if (viewMode === 'daily') {
//       setDataUsage({
//         labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//         datasets: [{
//           label: 'Daily Data Usage (GB)',
//           data: [2, 3.5, 4.2, 5.8, 6.1, 4.7, 5.5],
//           borderColor: '#685a9e',
//           backgroundColor: (context) => {
//             const ctx = context.chart.ctx;
//             const gradient = ctx.createLinearGradient(0, 0, 0, 300);
//             gradient.addColorStop(0, 'rgba(104, 90, 158, 0.4)');
//             gradient.addColorStop(1, 'rgba(104, 90, 158, 0)');
//             return gradient;
//           },
//           tension: 0.4,
//           fill: true,
//           pointBackgroundColor: '#fff',
//           pointBorderColor: '#685a9e',
//           pointHoverBackgroundColor: '#685a9e',
//           pointHoverBorderColor: '#fff',
//         }],
//       });
//     } else {
//       setDataUsage({
//         labels: ['12AM', '3AM', '6AM', '9AM', '12PM', '3PM', '6PM', '9PM'],
//         datasets: [{
//           label: 'Hourly Data Usage (MB)',
//           data: [120, 90, 150, 300, 500, 450, 700, 400],
//           borderColor: '#4a90e2',
//           backgroundColor: (context) => {
//             const ctx = context.chart.ctx;
//             const gradient = ctx.createLinearGradient(0, 0, 0, 300);
//             gradient.addColorStop(0, 'rgba(74, 144, 226, 0.4)');
//             gradient.addColorStop(1, 'rgba(74, 144, 226, 0)');
//             return gradient;
//           },
//           tension: 0.4,
//           fill: true,
//           pointBackgroundColor: '#fff',
//           pointBorderColor: '#4a90e2',
//           pointHoverBackgroundColor: '#4a90e2',
//           pointHoverBorderColor: '#fff',
//         }],
//       });
//     }
//   }, [viewMode]);

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: true,
//         labels: { color: '#333', font: { size: 14, weight: '500' } }
//       },
//       tooltip: {
//         backgroundColor: '#333',
//         titleFont: { size: 14 },
//         bodyFont: { size: 13 },
//         bodyColor: '#fff'
//       }
//     },
//     scales: {
//       x: { ticks: { color: '#555', font: { size: 12 } }, grid: { display: false } },
//       y: { ticks: { color: '#555', font: { size: 12 } }, grid: { color: 'rgba(0,0,0,0.1)' } }
//     }
//   };

//   return (
//     <div className="data-usage-page">
//       <h2 className="title">Data Usage</h2>

//       <div className="toggle-buttons">
//         <button
//           className={`toggle-btn ${viewMode === 'daily' ? 'active' : ''}`}
//           onClick={() => setViewMode('daily')}
//         >
//           Daily
//         </button>
//         <button
//           className={`toggle-btn ${viewMode === 'hourly' ? 'active' : ''}`}
//           onClick={() => setViewMode('hourly')}
//         >
//           Hourly
//         </button>
//       </div>

//       <div className="chart-container">
//         <Line data={dataUsage} options={options} />
//       </div>
//       <Footer />
//     </div>
//   );
// }
