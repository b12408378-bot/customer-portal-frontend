// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import PlansPage from './pages/PlansPage';
import PaymentsPage from "./pages/PaymentsPage";
import TicketPage from './pages/TicketPage';
import ProfilePage from './pages/ProfilePage';
import DataUsagePage from "./pages/DataUsagePage";

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
      </Routes>
    </Router>
  );
}



// // src/App.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoginPage from "./components/LoginPage"; 
// import SignupPage from "./components/SignupPage";
// import Dashboard from "./pages/Dashboard";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />   {/* Default landing page */}
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";
// import Navbar from "./components/Navbar"; // import your navbar
// import './index.css';


// function App() {
//   return (
//     <Router>
//       <Navbar /> {/* Navbar always visible */}
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// // src/App.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoginPage from "./components/LoginPage";
// import SignupPage from "./components/SignupPage";
// import Dashboard from "./components/Dashboard";
// import Navbar from "./components/Navbar";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route
//           path="/dashboard"
//           element={
//             <>
//               <Navbar />  {/* Navbar only on dashboard */}
//               <Dashboard />
//             </>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
