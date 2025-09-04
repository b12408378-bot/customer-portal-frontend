// //PaymentsPage.js

// import React, { useEffect, useState } from "react";
// import { useLocation, Link } from "react-router-dom";
// import Footer from "../components/Footer";
// import BrandLogo from "../components/BrandLogo";
// import "./PaymentsPage.css";

// export default function PaymentPage() {
//   const location = useLocation();
//   const { planId, price } = location.state || {};
//   const [amount, setAmount] = useState(price || 0);
//   const [paymentMode, setPaymentMode] = useState("UPI");
//   const [mobileNumber, setMobileNumber] = useState("");
//   const [user, setUser] = useState(null);

//   // Fetch logged-in user from backend
//   useEffect(() => {
//     fetch("http://localhost:8080/user-service/users/me", { credentials: "include" })
//       .then((res) => {
//         if (!res.ok) throw new Error("Not logged in");
//         return res.json();
//       })
//       .then((data) => setUser(data))
//       .catch((err) => console.error("Error fetching user:", err));
//   }, []);

//   const handlePayment = (e) => {
//     e.preventDefault();

//     if (!user) {
//       alert("User not found. Please log in again.");
//       return;
//     }

//     const paymentRequest = {
//       amount: amount,
//       paymentMode: paymentMode,
//       paymentStatus: true,
//       user_id: user.user_id,
//       mobileNumber: mobileNumber,
//     };

//     fetch("http://localhost:8080/payment-service/payment/pay", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(paymentRequest),
//     })
//       .then((res) => {
//         if (!res.ok) throw new Error("Payment failed");
//         return res.json();
//       })
//       .then(() => {
//         alert("Payment successful!");
//       })
//       .catch((err) => alert(err.message));
//   };

//   return (
//     <div className="payment-page-wrapper" style={{ backgroundColor: "#000", color: "#fff" }}>
//       <div className="payment-header text-center my-3">
//         <BrandLogo height={60} />
//       </div>

//       {/* Inline Dashboard Navbar */}
//       <div className="dashboard-actions mb-4 mt-3 text-center">
//         <Link to="/dashboard" className="btn btn-outline-danger dashboard-btn mx-2">Dashboard</Link>
//         <Link to="/plans" className="btn btn-outline-danger dashboard-btn mx-2">Browse Plans</Link>
//         <Link to="/data-usage" className="btn btn-outline-danger dashboard-btn mx-2">Data Usage</Link>
//         <Link to="/ticket" className="btn btn-outline-danger dashboard-btn mx-2">Raise Ticket</Link>
//         <Link to="/profile" className="btn btn-outline-danger dashboard-btn mx-2">Profile</Link>
//       </div>

//       <div className="payment-container" style={{ backgroundColor: "#fff", color: "#000" }}>
//         <div className="payment-card">
//           <h2 className="payment-title" style={{ color: "#b30000" }}>Complete Your Payment</h2>
//           <form onSubmit={handlePayment}>
//             <div className="form-group">
//               <label>Mobile Number</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={mobileNumber}
//                 onChange={(e) => {
//                   const value = e.target.value;
//                   if (/^\d*$/.test(value)) setMobileNumber(value); // Only digits
//                 }}
//                 placeholder="Enter Mobile Number"
//               />
//             </div>

//             <div className="form-group">
//               <label>Amount</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={amount}
//                 readOnly
//               />
//             </div>

//             <div className="form-group">
//               <label>Payment Mode</label>
//               <select
//                 className="form-control"
//                 value={paymentMode}
//                 onChange={(e) => setPaymentMode(e.target.value)}
//               >
//                 <option value="UPI">UPI</option>
//                 <option value="DEBIT_CARD">Debit Card</option>
//                 <option value="CREDIT_CARD">Credit Card</option>
//                 <option value="NET_BANKING">Net Banking</option>
//               </select>
//             </div>

//             <button type="submit" className="btn-pay" style={{ backgroundColor: "#b30000", color: "#fff" }}>
//               Pay Now
//             </button>
//           </form>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }











// src/pages/PaymentsPage.js
import React, { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import BrandLogo from "../components/BrandLogo";
import "./PaymentsPage.css";

export default function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { planId, price } = location.state || {};
  const [amount, setAmount] = useState(price || 0);
  const [paymentMode, setPaymentMode] = useState("UPI");
  const [mobileNumber, setMobileNumber] = useState("");
  const [user, setUser] = useState(null);

  // Fetch logged-in user
  useEffect(() => {
    fetch("http://localhost:8080/user-service/users/me", { credentials: "include" })
      .then((res) => {
        if (!res.ok) throw new Error("Not logged in");
        return res.json();
      })
      .then((data) => setUser(data))
      .catch((err) => console.error("Error fetching user:", err));
  }, []);

  const handlePayment = (e) => {
    e.preventDefault();

    if (!user) {
      alert("User not found. Please log in again.");
      return;
    }

    const paymentRequest = {
      amount: amount,
      paymentMode: paymentMode,
      paymentStatus: true,
      user_id: user.user_id,
      mobileNumber: mobileNumber,
    };

    fetch("http://localhost:8080/payment-service/payment/pay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(paymentRequest),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Payment failed");
        return res.json();
      })
      .then(() => {
        navigate("/payment-success"); // navigate to success page
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="payment-page-wrapper">
      {/* Logo */}
      <div className="payment-header text-center my-3">
        <BrandLogo height={60} />
      </div>

      {/* Inline Navbar */}
      <div className="dashboard-actions mb-4 mt-3 text-center">
        <Link to="/dashboard" className="btn dashboard-btn mx-2">Dashboard</Link>
        <Link to="/plans" className="btn dashboard-btn mx-2">Browse Plans</Link>
        <Link to="/data-usage" className="btn dashboard-btn mx-2">Data Usage</Link>
        <Link to="/ticket" className="btn dashboard-btn mx-2">Raise Ticket</Link>
        <Link to="/profile" className="btn dashboard-btn mx-2">Profile</Link>
      </div>

      <div className="payment-container">
        <div className="payment-card">
          <h2 className="payment-title">Complete Your Payment</h2>
          <form onSubmit={handlePayment}>
            {/* Mobile */}
            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="text"
                className="form-control"
                value={mobileNumber}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) setMobileNumber(value);
                }}
                placeholder="Enter Mobile Number"
              />
            </div>

            {/* Amount */}
            <div className="form-group">
              <label>Amount</label>
              <input type="text" className="form-control" value={amount} readOnly />
            </div>

            {/* Payment Mode */}
            <div className="form-group">
              <label>Payment Mode</label>
              <select
                className="form-control"
                value={paymentMode}
                onChange={(e) => setPaymentMode(e.target.value)}
              >
                <option value="UPI">UPI</option>
                <option value="DEBIT_CARD">Debit Card</option>
                <option value="CREDIT_CARD">Credit Card</option>
                <option value="NET_BANKING">Net Banking</option>
              </select>
            </div>

            <button type="submit" className="btn-pay">
              Pay Now
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
