import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";
import BrandLogo from "../components/BrandLogo";
import "./LoginPage.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await api.post("/users/login", { email, password });

      // ✅ ensure backend returns { token: "..." }
      const token = res.data.token;
      if (token) {
        localStorage.setItem("jwtToken", token);

        if (remember) {
          localStorage.setItem("rememberMe", "true");
        } else {
          localStorage.removeItem("rememberMe");
        }

        navigate("/dashboard");
      } else {
        setError("Login failed. No token received.");
      }
    } catch (err) {
      console.error("Login error:", err);
      if (err.response && err.response.status === 403) {
        setError("Unauthorized. Please check your email and password.");
      } else {
        setError("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <BrandLogo />
        <div className="auth-title">Welcome back</div>
        <div className="auth-sub">Sign in to manage your account</div>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label small-link">
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

          <div className="mb-3">
            <label htmlFor="password" className="form-label small-link">
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

          {/* <div className="mb-3 form-check">
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
          </div> */}

          <button type="submit" className="btn-custom w-100">
            Login
          </button>

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