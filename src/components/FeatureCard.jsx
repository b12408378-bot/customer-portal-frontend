// src/components/FeatureCard.jsx
import React from "react";

export default function FeatureCard({ title, description, icon: Icon }) {
  return (
    <div className="feature-card p-4 rounded-2xl shadow-md bg-white hover:shadow-lg transition">
      {Icon && <Icon className="w-8 h-8 mb-2 text-gray-700" />}
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
