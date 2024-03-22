import React, { useState } from "react";

function ImageApertureAdjuster({ src }) {
  const [aperture, setAperture] = useState(5); // Start with a default aperture of f/1.4

  // Calculate blur value based on aperture
  // This is a simplified model: lower aperture values result in higher blur.
  // The relationship between aperture and blur in real photography is more complex.
  const calculateBlurValue = (aperture) => {
    return Math.max(0, 10 - aperture * 2);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
      }}
    >
      <div style={{ filter: `blur(${calculateBlurValue(aperture)}px)` }}>
        <img
          src={src}
          alt="Simulated Aperture Effect"
          style={{ width: 600, height: "auto" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <label htmlFor="aperture">Aperture: </label>
        <input
          type="range"
          id="aperture"
          min="1.4"
          max="16"
          step="1"
          value={aperture}
          onChange={(e) => setAperture(Number(e.target.value))}
        />
        f/{aperture}
      </div>
    </div>
  );
}

export default ImageApertureAdjuster;
