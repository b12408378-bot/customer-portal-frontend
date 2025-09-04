//Dashboard.js

// src/pages/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import './Dashboard.css';

import bgImg from '../assets/images/LoginBG.jpg';

export default function Dashboard() {
  return (
    <div
  className="bgImg"
  style={{
    backgroundImage: `url(${bgImg})`,
  }}
>

      {/* <Navbar /> */}

      {/* Navigation Buttons */}
      <div className="dashboard-actions mb-4 d-flex justify-content-center gap-3 mt-4">
        <Link to="/plans" className="btn dashboard-btn">Browse Plans</Link>
        <Link to="/data-usage" className="btn dashboard-btn">Data Usage</Link>
        <Link to="/ticket" className="btn dashboard-btn">Raise Ticket</Link>
        <Link to="/profile" className="btn dashboard-btn">Profile</Link>
      </div>

      {/* Business Benefits Slider */}
      <div className="dashboard-slider mt-4">
        <Slider />
      </div>

      {/* Telecom Services Showcase */}
      <div className="dashboard-showcase mt-5">
        <center>
          <h4 className="section-title">Our Telecom Highlights</h4>
        </center>

        <div className="row justify-content-center mt-4">

          {/* Card 1 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="https://etimg.etb2bimg.com/photo/92005566.cms"
                className="card-img-top"
                alt="5G Network"
              />
              <div className="card-body">
                <h5 className="card-title">5G Connectivity</h5>
                <p className="card-text">
                  Experience ultra-fast speeds with our 5G services.
                </p>
                {/* <Link to="/details/5g" className="btn">Learn More</Link> */}
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="https://www.sonic.com/sites/default/files/styles/blog_post_hero_2560_1440/public/2023-09/fiber-internet.jpeg?h=a92f03cd&itok=Glo1ajc4"
                className="card-img-top"
                alt="Fiber Plans"
              />
              <div className="card-body">
                <h5 className="card-title">Fiber Broadband</h5>
                <p className="card-text">
                  High-speed internet for homes and businesses.
                </p>
                {/* <Link to="/details/fiber" className="btn">Learn More</Link> */}
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="https://static.vecteezy.com/system/resources/previews/002/923/747/original/global-network-connection-world-map-point-and-line-composition-concept-of-global-business-illustration-free-vector.jpg"
                className="card-img-top"
                alt="Global Network"
              />
              <div className="card-body">
                <h5 className="card-title">Global Network</h5>
                <p className="card-text">
                  Seamless connectivity across the world.
                </p>
                {/* <Link to="/details/global-network" className="btn">Learn More</Link> */}
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}