// src/pages/LoginPage.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BrandLogo from "../components/BrandLogo";
import "./LoginPage.css"; // Keep this for styles

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      alert("Please enter valid credentials");
    }
  };

    return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <BrandLogo />

        <div className="auth-title">Welcome back</div>
        <div className="auth-sub">Sign in to manage your account</div>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label
              htmlFor="email"
              className="form-label small-link"
              style={{ fontWeight: 300 }}
            >
              Email ID
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label
              htmlFor="password"
              className="form-label small-link"
              style={{ fontWeight: 300 }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Remember Me */}
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="remember"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="remember">
              Remember me
            </label>
          </div>

          {/* Login Button */}
          <button type="submit" className="btn-custom w-100">
            Login
          </button>


          {/* Links */}
          <div className="mt-3 d-flex justify-content-between">
            <Link to="/forgot-id" className="small-link">
              Forgot ID?
            </Link>
            <Link to="/forgot-password" className="small-link">
              Forgot Password?
            </Link>
          </div>

          <div className="mt-3 text-center">
            <Link to="/signup" className="small-link">
              Don’t have an account? Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
