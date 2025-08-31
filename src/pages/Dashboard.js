// src/pages/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../components/Slider';
import Footer from '../components/Footer';

import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-container mt-5">
        <h2 
          className="dashboard-title text-atom" 
          style={{ display: "block" }}
        >
          Welcome to Explore!
        </h2>
        
        <div className="dashboard-actions mb-4">
          <Link to="/plans" className="btn btn-primary dashboard-btn">Browse Plans</Link>
          <Link to="/data-usage" className="btn btn-secondary dashboard-btn">Data Usage</Link>
          <Link to="/ticket" className="btn btn-warning dashboard-btn">Raise Ticket</Link>
          <Link to="/profile" className="btn btn-info dashboard-btn">Profile</Link> {/* Added Profile menu */}
        </div>

        {/* Business Benefits Slider */}
        <div className="dashboard-slider mt-4">
          <Slider />
        </div>

        {/* Telecom Services Showcase */}
        <div className="dashboard-showcase mt-5">
          <center><h4 className="section-title">Our Telecom Highlights</h4></center>
          <div className="row">
            <div className="col-md-4 showcase-card text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3094/3094855.png"
                alt="5G Network"
                className="img-fluid showcase-icon"
              />
              <h5 className="showcase-title">5G Connectivity</h5>
              <p className="showcase-text">Experience ultra-fast speeds with our 5G services.</p>
            </div>
            <div className="col-md-4 showcase-card text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
                alt="Fiber Plans"
                className="img-fluid showcase-icon"
              />
              <h5 className="showcase-title">Fiber Broadband</h5>
              <p className="showcase-text">High-speed internet for homes and businesses.</p>
            </div>
            <div className="col-md-4 showcase-card text-center">
              <video
                autoPlay
                loop
                muted
                className="showcase-video"
              >
                <source
                  src="https://assets.mixkit.co/videos/preview/mixkit-animated-global-network-communication-181-large.mp4"
                  type="video/mp4"
                />
              </video>
              <h5 className="showcase-title">Global Network</h5>
              <p className="showcase-text">Seamless connectivity across the world.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}


















// // src/pages/Dashboard.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import Slider from '../components/Slider';
// import Footer from '../components/Footer';
// import './Dashboard.css';

// export default function Dashboard() {
//   return (
//     <div className="dashboard-page">
//       <div className="dashboard-container mt-5">
//         <h2 
//           className="dashboard-title text-atom" 
//           style={{ display: "block" }}
//         >
//           Welcome to Explore!
//         </h2>
        
//         <div className="dashboard-actions mb-4">
//           <Link to="/plans" className="btn btn-primary dashboard-btn">Browse Plans</Link>
//           <Link to="/payments" className="btn btn-secondary dashboard-btn">Payments</Link>
//           <Link to="/ticket" className="btn btn-warning dashboard-btn">Raise Ticket</Link>
//           <Link to="/profile" className="btn btn-info dashboard-btn">Profile</Link> {/* Added Profile menu */}
//         </div>

//         {/* Business Benefits Slider */}
//         <div className="dashboard-slider mt-4">
//           <Slider />
//         </div>

//         {/* Telecom Services Showcase */}
//         <div className="dashboard-showcase mt-5">
//           <center><h4 className="section-title">Our Telecom Highlights</h4></center>
//           <div className="row">
//             <div className="col-md-4 showcase-card text-center">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/3094/3094855.png"
//                 alt="5G Network"
//                 className="img-fluid showcase-icon"
//               />
//               <h5 className="showcase-title">5G Connectivity</h5>
//               <p className="showcase-text">Experience ultra-fast speeds with our 5G services.</p>
//             </div>
//             <div className="col-md-4 showcase-card text-center">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
//                 alt="Fiber Plans"
//                 className="img-fluid showcase-icon"
//               />
//               <h5 className="showcase-title">Fiber Broadband</h5>
//               <p className="showcase-text">High-speed internet for homes and businesses.</p>
//             </div>
//             <div className="col-md-4 showcase-card text-center">
//               <video
//                 autoPlay
//                 loop
//                 muted
//                 className="showcase-video"
//               >
//                 <source
//                   src="https://assets.mixkit.co/videos/preview/mixkit-animated-global-network-communication-181-large.mp4"
//                   type="video/mp4"
//                 />
//               </video>
//               <h5 className="showcase-title">Global Network</h5>
//               <p className="showcase-text">Seamless connectivity across the world.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }
