import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";
import "./LoginPage.css";

export default function SignupPage() {
  const [form, setForm] = useState({ email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.email || !form.password || !form.confirm) {
      setError("Please fill all fields.");
      return;
    }
    if (form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await api.post("/users/register", {
        email: form.email,
        password: form.password,
      });

      setSuccess("Account created successfully! Redirecting...");
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      console.error("Signup error:", err);
      if (err.response && err.response.status === 400) {
        setError("Email already registered.");
      } else {
        setError("Signup failed. Please try again.");
      }
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="auth-title">Create an account</div>
        <div className="auth-sub">Sign up and manage your services</div>

        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={onSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="email" className="form-label small-link">
              Email ID
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              placeholder="you@example.com"
              value={form.email}
              onChange={onChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label small-link">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="form-control"
              placeholder="Create a strong password"
              value={form.password}
              onChange={onChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirm" className="form-label small-link">
              Confirm password
            </label>
            <input
              id="confirm"
              name="confirm"
              type="password"
              className="form-control"
              placeholder="Confirm password"
              value={form.confirm}
              onChange={onChange}
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="auth-btn mb-2">
              Sign up
            </button>
            <Link to="/" className="btn btn-ghost">
              Have an account? Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}