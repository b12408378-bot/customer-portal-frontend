import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // ✅ Added Link for navbar
import Footer from '../components/Footer';
import './PlansPage.css';

export default function PlansPage() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch plans from Spring Boot backend
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
  }, []);

  if (loading) {
    return <div className="plans-container"><h2>Loading Plans...</h2></div>;
  }

  if (error) {
    return <div className="plans-container"><h2>Error: {error}</h2></div>;
  }

  return (
    <div className="plans-container">
      {/* ✅ Inline Navbar Added */}
      <div className="dashboard-actions mb-4 mt-3 text-center">
        <Link to="/plans" className="btn btn-primary dashboard-btn mx-2">Browse Plans</Link>
        <Link to="/datausage" className="btn btn-secondary dashboard-btn mx-2">Data Usage</Link>
        <Link to="/ticket" className="btn btn-warning dashboard-btn mx-2">Raise Ticket</Link>
        <Link to="/profile" className="btn btn-info dashboard-btn mx-2">Profile</Link>
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
                onClick={() => navigate('/payments', { state: { planId: plan.planId, price: plan.price } })}
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














//            WORKING
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Footer from '../components/Footer';
// import './PlansPage.css';

// export default function PlansPage() {
//   const [plans, setPlans] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch plans from Spring Boot backend
//     fetch('http://localhost:8080/plan-service/planservice/plan')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch plans');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setPlans(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div className="plans-container"><h2>Loading Plans...</h2></div>;
//   }

//   if (error) {
//     return <div className="plans-container"><h2>Error: {error}</h2></div>;
//   }

//   return (
//     <div className="plans-container">
//       <h2 className="plans-heading">Available Plans</h2>
//       <div className="plans-grid">
//         {plans.map((plan) => (
//           <div className="plan-card" key={plan.planId}>
//             <div className="plan-body">
//               <h5 className="plan-title">{plan.planName}</h5>
//               <p className="plan-description">
//                 Type: {plan.planType}<br />
//                 Validity: {plan.validity} days
//               </p>
//               <p className="plan-price">₹{plan.price}</p>
//               <button
//                 className="btn-recharge"
//                 onClick={() => navigate('/payments', { state: { planId: plan.planId, price: plan.price } })}
//               >
//                 Recharge Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </div>
//   );
// }











// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Footer from '../components/Footer';
// import './PlansPage.css';

// export default function PlansPage() {
//   const [plans, setPlans] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch plans from Spring Boot backend
//     fetch('http://localhost:8080/plan-service/planservice/plan') // update endpoint if different
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch plans');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setPlans(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div className="plans-container"><h2>Loading Plans...</h2></div>;
//   }

//   if (error) {
//     return <div className="plans-container"><h2>Error: {error}</h2></div>;
//   }

//   return (
//     <div className="plans-container">
//       <h2 className="plans-heading">Available Plans</h2>
//       <div className="plans-grid">
//         {plans.map((plan) => (
//           <div className="plan-card" key={plan.planId}>
//             <div className="plan-body">
//               <h5 className="plan-title">{plan.planName}</h5>
//               <p className="plan-description">
//                 Type: {plan.planType}<br />
//                 Validity: {plan.validity} days
//               </p>
//               <p className="plan-price">₹{plan.price}</p>
//               <button
//                 className="btn-recharge"
//                 onClick={() => navigate('/payments', { state: { planId: plan.planId } })}
//               >
//                 Recharge Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </div>
//   );
// }













// // src/pages/PlansPage.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Footer from '../components/Footer';
// import './PlansPage.css';

// const plansData = [
//   { name: 'Data Plan', description: '1GB/day for 30 days', price: 20, duration: 'Monthly' },
//   { name: 'Voice Plan', description: 'Unlimited calls for 30 days', price: 15, duration: 'Monthly' },
//   { name: 'Combo Plan', description: '2GB/day & Unlimited Calls', price: 30, duration: 'Monthly' },
//   { name: 'Quarterly Plan', description: '3GB/day & Unlimited Calls', price: 80, duration: 'Quarterly' },
//   { name: 'Half-Yearly Plan', description: '4GB/day & Unlimited Calls', price: 150, duration: 'Half-Yearly' },
//   { name: 'Annual Plan', description: '5GB/day & Unlimited Calls', price: 280, duration: 'Annually' },
// ];

// export default function PlansPage() {
//   const navigate = useNavigate();

//   return (
//     <div className="plans-container">
//       <h2 className="plans-heading">Available Plans</h2>
//       <div className="plans-grid">
//         {plansData.map((plan, index) => (
//           <div className="plan-card" key={index}>
//             <div className="plan-body">
//               <h5 className="plan-title">{plan.name}</h5>
//               <p className="plan-description">{plan.description}</p>
//               <p className="plan-price">₹{plan.price * 82}</p> {/* USD to INR conversion approx */}
//               <button
//                 className="btn-recharge"
//                 onClick={() => navigate('/payments')} // Navigate to PaymentsPage
//               >
//                 Recharge Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </div>
//   );
// }
