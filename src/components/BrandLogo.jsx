import React from "react";

/**
 * Brand wordmark as pure SVG (no image).
 * - `name`: the brand text
 * - `height`: visual height in px
 * - `withIcon`: show a minimal circular icon to the left
 */
export default function BrandLogo({ name = "Kiospa", height = 56, withIcon = true }) {
  return (
    <svg
      viewBox="0 0 360 80"
      height={height}
      role="img"
      aria-label={`${name} logo`}
      className="brand-wordmark"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{name}</title>

      {/* Minimal icon (circle + dot) */}
      {withIcon && (
        <g transform="translate(0,10)" fill="none" stroke="currentColor" strokeWidth="6">
          <circle cx="30" cy="30" r="24" />
          <circle cx="30" cy="30" r="6" fill="currentColor" stroke="none" />
        </g>
      )}

      {/* Brand text */}
      <text
        x={withIcon ? 70 : 0}
        y="52"
        fontFamily="'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif"
        fontWeight="700"
        fontSize="40"
        fill="currentColor"
        letterSpacing=".5"
      >
        {name}
      </text>
    </svg>
  );
}
