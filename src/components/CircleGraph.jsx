import React from "react";

const CircleGraph = ({ percent = 97, size = 128, stroke = 12 }) => {
  // number 0–100
  const p = Math.max(
    0,
    Math.min(100, parseFloat(String(percent).replace("%", "")) || 0)
  );

  const radius = size / 2 - stroke / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - p / 100);

  const cx = size / 2;
  const cy = size / 2;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
      >
        {/* Track */}
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          stroke="#111"
          strokeWidth={stroke}
          fill="none"
        />
        {/* Progress */}
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          stroke="url(#grad-uxui)"
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        />
        <defs>
          <linearGradient id="grad-uxui" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FA709A" />
            <stop offset="100%" stopColor="#FEE140" />
          </linearGradient>
        </defs>
      </svg>

      {/* Text */}
      <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
        {p}%
      </span>
    </div>
  );
};

export default CircleGraph;
