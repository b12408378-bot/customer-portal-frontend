import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import "./PaymentsPage.css";

export default function PaymentPage() {
  const location = useLocation();
  const { planId, price } = location.state || {}; // ✅ get both from PlansPage
  const [amount, setAmount] = useState(price || 0);
  const [paymentMode, setPaymentMode] = useState("UPI");
  const [user, setUser] = useState(null);

  // Fetch user from backend
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
      paymentStatus: true, // by default true after success
      user_id: user.user_id,
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
        alert("Payment successful!");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="payment-page-wrapper">
      <div className="payment-container">
        <div className="payment-card">
          <h2 className="payment-title">Complete Your Payment</h2>
          <form onSubmit={handlePayment}>

            <div className="form-group">
              <label>Amount</label>
              <input
                type="text"
                className="form-control"
                value={amount}
                readOnly
              />
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










// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Footer from "../components/Footer";
// import "./PaymentsPage.css";

// export default function PaymentsPage() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { planId, price } = location.state || {};

//   const [paymentDetails, setPaymentDetails] = useState({
//     user_id: "",
//     amount: price || 0,
//     paymentMode: "",
//     paymentStatus: true,
//   });

//   const [error, setError] = useState("");

//   // ✅ Fetch current logged-in user
//   useEffect(() => {
//     fetch("http://localhost:8080/user-service/users/me")
//       .then((res) => {
//         if (!res.ok) throw new Error("Unable to fetch user");
//         return res.json();
//       })
//       .then((data) => {
//         setPaymentDetails((prev) => ({
//           ...prev,
//           user_id: data.user_id,
//         }));
//       })
//       .catch(() => {
//         setError("Unable to fetch user. Please log in again.");
//       });
//   }, []);

//   const handlePaymentModeChange = (e) => {
//     setPaymentDetails({ ...paymentDetails, paymentMode: e.target.value });
//   };

//   const handlePayment = (e) => {
//     e.preventDefault();

//     fetch("http://localhost:8080/payment-service/payments", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(paymentDetails),
//     })
//       .then((res) => {
//         if (!res.ok) throw new Error("Payment failed");
//         return res.json();
//       })
//       .then(() => {
//         navigate("/success");
//       })
//       .catch(() => {
//         setError("Payment failed. Please try again.");
//       });
//   };

//   return (
//     <div className="payment-page-wrapper">
//       <div className="payment-container">
//         <div className="payment-card">
//           <h2 className="payment-title">Complete Your Payment</h2>

//           {error && <p className="error-message">{error}</p>}

//           <form onSubmit={handlePayment}>
//             <div className="form-group">
//               <label>User ID</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={paymentDetails.user_id}
//                 disabled
//               />
//             </div>

//             <div className="form-group">
//               <label>Amount</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={`₹${paymentDetails.amount}`}
//                 disabled
//               />
//             </div>

//             <div className="form-group">
//               <label>Payment Mode</label>
//               <select
//                 className="form-control"
//                 value={paymentDetails.paymentMode}
//                 onChange={handlePaymentModeChange}
//                 required
//               >
//                 <option value="">--Select--</option>
//                 <option value="CREDIT_CARD">Credit Card</option>
//                 <option value="DEBIT_CARD">Debit Card</option>
//                 <option value="UPI">UPI</option>
//                 <option value="NET_BANKING">Net Banking</option>
//               </select>
//             </div>

//             <button className="btn-pay" type="submit">
//               Pay Now
//             </button>
//           </form>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }











//PARTIALLY WORKED CODE 
// import React, { useState } from 'react';
// import './PaymentsPage.css';
// import Footer from '../components/Footer';
// import { useNavigate, useLocation } from 'react-router-dom';

// export default function PaymentsPage() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // If planId & amount were passed from PlansPage
//   const selectedPlan = location.state?.plan || null;

//   const [paymentDetails, setPaymentDetails] = useState({
//     user_id: 1, // Replace with logged-in user ID if available
//     amount: selectedPlan ? selectedPlan.price : '',
//     paymentMode: 'Credit Card',
//     paymentStatus: true, // dummy success
//   });

//   const [processing, setProcessing] = useState(false);

//   const handlePayment = () => {
//     if (!paymentDetails.amount) {
//       alert('Amount is required!');
//       return;
//     }

//     setProcessing(true);

//     fetch('http://localhost:8080/payment-service/payment/pay', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(paymentDetails),
//     })
//       .then((response) => {
//         if (!response.ok) throw new Error('Payment failed');
//         return response.json();
//       })
//       .then((data) => {
//         alert(`Payment successful! Payment ID: ${data.paymentId}`);
//         navigate('/dashboard'); // redirect after payment
//       })
//       .catch((error) => {
//         alert('Error: ' + error.message);
//       })
//       .finally(() => setProcessing(false));
//   };

//   return (
//     <div className="payment-page-wrapper">
//       <div className="payment-container">
//         <div className="payment-card">
//           <h2 className="payment-title">Payment</h2>
//           <form>
//             <div className="form-group">
//               <label htmlFor="amount">Amount (₹)</label>
//               <input
//                 type="number"
//                 id="amount"
//                 className="form-control"
//                 value={paymentDetails.amount}
//                 onChange={(e) =>
//                   setPaymentDetails({ ...paymentDetails, amount: e.target.value })
//                 }
//                 placeholder="Enter amount"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="paymentMode">Payment Mode</label>
//               <select
//                 id="paymentMode"
//                 className="form-control"
//                 value={paymentDetails.paymentMode}
//                 onChange={(e) =>
//                   setPaymentDetails({ ...paymentDetails, paymentMode: e.target.value })
//                 }
//               >
//                 <option>Credit Card</option>
//                 <option>Debit Card</option>
//                 <option>UPI</option>
//                 <option>Net Banking</option>
//               </select>
//             </div>

//             <button
//               type="button"
//               className="btn-pay"
//               onClick={handlePayment}
//               disabled={processing}
//             >
//               {processing ? 'Processing...' : 'Proceed'}
//             </button>
//           </form>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }














// import React, { useState } from 'react';
// import './PaymentsPage.css';
// import Footer from '../components/Footer';
// import { useNavigate } from 'react-router-dom';

// export default function PaymentsPage() {
//   const [paymentDetails, setPaymentDetails] = useState({ cardNumber: '', expiryDate: '', cvv: '' });
//   const navigate = useNavigate();

//   const handlePayment = async () => {
//     try {
//       const response = await fetch("http://localhost:8080/payment-service/pay", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           user_id: 1,   // TODO: replace with logged-in user id
//           amount: 500, // TODO: replace with dynamic amount
//           paymentMode: "CARD",
//           paymentStatus: true
//         }),
//       });

//       if (response.ok) {
//         alert("Payment processed successfully!");
//         navigate("/dashboard");
//       } else {
//         alert("Payment failed! Please try again.");
//       }
//     } catch (error) {
//       console.error("Error while processing payment:", error);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <div className="payment-page-wrapper">
//       <div className="payment-container">
//         <div className="payment-card">
//           <h2 className="payment-title">Enter Payment Details</h2>
//           <form>
//             <div className="form-group">
//               <label htmlFor="cardNumber">Card Number</label>
//               <input
//                 type="text"
//                 id="cardNumber"
//                 className="form-control"
//                 placeholder="1234 5678 9012 3456"
//                 value={paymentDetails.cardNumber}
//                 onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
//               />
//             </div>
//             <div className="form-row">
//               <div className="form-group half-width">
//                 <label htmlFor="expiryDate">Expiry Date</label>
//                 <input
//                   type="text"
//                   id="expiryDate"
//                   className="form-control"
//                   placeholder="MM/YY"
//                   value={paymentDetails.expiryDate}
//                   onChange={(e) => setPaymentDetails({ ...paymentDetails, expiryDate: e.target.value })}
//                 />
//               </div>
//               <div className="form-group half-width">
//                 <label htmlFor="cvv">CVV</label>
//                 <input
//                   type="text"
//                   id="cvv"
//                   className="form-control"
//                   placeholder="123"
//                   value={paymentDetails.cvv}
//                   onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
//                 />
//               </div>
//             </div>
//             <button type="button" className="btn-pay" onClick={handlePayment}>
//               Proceed
//             </button>
//           </form>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }













// import React, { useState } from 'react';
// import './PaymentsPage.css';
// import Footer from '../components/Footer';
// import { useNavigate } from 'react-router-dom';

// export default function PaymentsPage() {
//   const [paymentDetails, setPaymentDetails] = useState({ cardNumber: '', expiryDate: '', cvv: '' });
//   const navigate = useNavigate();

//   const handlePayment = () => {
//     alert('Payment processed successfully!');
//     navigate('/dashboard'); // redirect after payment
//   };

//   return (
//     <div className="payment-page-wrapper"> {/* NEW WRAPPER */}
//       <div className="payment-container">
//         <div className="payment-card">
//           <h2 className="payment-title">Enter Payment Details</h2>
//           <form>
//             <div className="form-group">
//               <label htmlFor="cardNumber">Card Number</label>
//               <input
//                 type="text"
//                 id="cardNumber"
//                 className="form-control"
//                 placeholder="1234 5678 9012 3456"
//                 value={paymentDetails.cardNumber}
//                 onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
//               />
//             </div>
//             <div className="form-row">
//               <div className="form-group half-width">
//                 <label htmlFor="expiryDate">Expiry Date</label>
//                 <input
//                   type="text"
//                   id="expiryDate"
//                   className="form-control"
//                   placeholder="MM/YY"
//                   value={paymentDetails.expiryDate}
//                   onChange={(e) => setPaymentDetails({ ...paymentDetails, expiryDate: e.target.value })}
//                 />
//               </div>
//               <div className="form-group half-width">
//                 <label htmlFor="cvv">CVV</label>
//                 <input
//                   type="text"
//                   id="cvv"
//                   className="form-control"
//                   placeholder="123"
//                   value={paymentDetails.cvv}
//                   onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
//                 />
//               </div>
//             </div>
//             <button type="button" className="btn-pay" onClick={handlePayment}>
//               Proceed
//             </button>
//           </form>
//         </div>
//       </div>
//       <Footer /> {/* Footer stays at bottom */}
//     </div>
//   );
// }
