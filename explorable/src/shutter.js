import React, { useState } from "react";
import "./Shutter.css";
export default function Shutter() {
  const [shutterSpeed, setShutterSpeed] = useState(1 / 4000);
  const calculateBlurIntensity = (speed) => {
    if (speed < 1) return 0; // No blur for fast speeds
    return Math.min(20, speed * 2); // Max blur capped at 20, example conversion
  };
  const blurIntensity = calculateBlurIntensity(shutterSpeed);

  return (
    <>
      <div className="slider-container">
        <div
          className="image-container"
          style={{ filter: `blur(${blurIntensity}px)` }}
        >
          <img src="ferriswheel.jpeg" alt="Simulated" style={{ width: 600 }} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <label>Shutter Speed: </label>
          <input
            type="range"
            min={1 / 4000}
            max={2}
            step={0.1}
            value={shutterSpeed}
            onChange={(e) => setShutterSpeed(parseFloat(e.target.value))}
          />
          {shutterSpeed}s
        </div>
      </div>
    </>
  );
}
