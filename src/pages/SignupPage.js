// src/pages/SignupPage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email || !form.password || !form.confirm) {
      setError("Please fill all fields.");
      return;
    }
    if (form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }
    // pretend to send to server
    setSubmitted(true);
  };
    
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <img src="/brand-logo.png" alt="brand" className="brand-logo" onError={(e)=>{e.target.style.display='none'}} />
        <div className="auth-title">Create an account</div>
        <div className="auth-sub">Sign up and manage your services</div>

        {submitted ? (
          <>
            <div className="alert alert-success">Signup successful! Welcome, {form.name}.</div>
            <div className="d-grid">
              <Link to="/" className="btn btn-ghost">Go to Login</Link>
            </div>
          </>
        ) : (
          <form onSubmit={onSubmit} noValidate>
            {error && <div className="alert alert-danger">{error}</div>}

            <div className="mb-3">
              <label htmlFor="name" className="form-label small-link">Full name</label>
              <input id="name" name="name" className="form-control" placeholder="Your full name" value={form.name} onChange={onChange} required />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label small-link">Email ID</label>
              <input id="email" name="email" type="email" className="form-control" placeholder="you@example.com" value={form.email} onChange={onChange} required />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label small-link">Password</label>
              <input id="password" name="password" type="password" className="form-control" placeholder="Create a strong password" value={form.password} onChange={onChange} required />
            </div>

            <div className="mb-3">
              <label htmlFor="confirm" className="form-label small-link">Confirm password</label>
              <input id="confirm" name="confirm" type="password" className="form-control" placeholder="Confirm password" value={form.confirm} onChange={onChange} required />
            </div>

            <div className="d-grid">
              <button type="submit" className="auth-btn mb-2">Sign up</button>
              <Link to="/" className="btn btn-ghost">Have an account? Log in</Link>
            </div>

          </form>
        )}
      </div>
    </div>
  );
}
