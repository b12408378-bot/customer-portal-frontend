import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './InnerNavbar.css';

export default function InnerNavbar() {
  const [activeOuter, setActiveOuter] = useState('Home'); // Default active = Home
  const [activeInner, setActiveInner] = useState('Discover'); // Default inner = Discover

  const outerMenus = [
    { 
      name: 'Home', 
      inner: ['Discover', 'Browse Plans', 'Pay Bills (Mobile, TV)', 'Recharge (Mobile, TV)'] 
    },
    { 
      name: 'Business', 
      inner: ['Discover', 'Services', 'Resources'] 
    },
    { 
      name: 'Support', 
      inner: ['Discover', 'Request/Complaints', 'FAQs'] 
    },
    { name: 'Contact Us', inner: [] }
  ];

  const handleOuterClick = (menuName) => {
    setActiveOuter(prev => (prev === menuName ? '' : menuName));
    setActiveInner(''); // Reset inner
  };

  return (
    <div>
      {/* Outer Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">Telecom Portal</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              {outerMenus.map(menu => (
                <li className="nav-item" key={menu.name}>
                  <button 
                    className={`nav-link btn btn-link text-white ${activeOuter === menu.name ? 'active' : ''}`}
                    onClick={() => handleOuterClick(menu.name)}
                  >
                    {menu.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Inner Navbar */}
      {activeOuter && outerMenus.find(m => m.name === activeOuter).inner.length > 0 && (
        <nav className="navbar navbar-expand-lg navbar-light bg-info shadow-sm">
          <div className="container">
            <ul className="navbar-nav">
              {outerMenus.find(m => m.name === activeOuter).inner.map((item, idx) => (
                <li className="nav-item" key={idx}>
                  <button 
                    className={`nav-link btn btn-link text-white ${activeInner === item ? 'active' : ''}`}
                    onClick={() => setActiveInner(item)}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
}
