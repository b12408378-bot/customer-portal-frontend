import React from "react";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <BrandLogo name="KioSPA" height={56} withIcon={true} />
      </div>
    </nav>
  );
}
