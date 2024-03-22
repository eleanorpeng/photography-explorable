import React, { useState, useEffect, useRef } from "react";

function ImageISOAdjuster({ src }) {
  const [iso, setIso] = useState(1600); // Start with a default ISO of 100
  const canvasRef = useRef(null);

  function adjustImageWithISO(image, desiredWidth) {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    // Calculate the new height to maintain the aspect ratio
    const aspectRatio = image.height / image.width;
    const newHeight = desiredWidth * aspectRatio;

    // Resize the canvas to the new dimensions
    ctx.canvas.width = desiredWidth;
    ctx.canvas.height = newHeight;

    // Draw the image onto the canvas at the new size
    ctx.drawImage(image, 0, 0, desiredWidth, newHeight);

    // Proceed to apply ISO adjustments (brightness and noise)
    const brightness = 1 + (iso - 1500) / 1600; // Adjust this for a more subtle effect
    const imageData = ctx.getImageData(0, 0, desiredWidth, newHeight);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      // Subtle Brightness adjustment
      data[i] = Math.min(255, data[i] * brightness);
      data[i + 1] = Math.min(255, data[i + 1] * brightness);
      data[i + 2] = Math.min(255, data[i + 2] * brightness);

      // Add more subtle noise
      const noise = (0.5 - Math.random()) * 25; // Reduced noise intensity
      data[i] = Math.min(255, Math.max(0, data[i] + noise));
      data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
      data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
    }

    ctx.putImageData(imageData, 0, 0);
  }

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => adjustImageWithISO(image, 500);
  }, [src, iso]);

  const addGrain = (canvas, iso) => {
    const ctx = canvas.getContext("2d");
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const grainAmount = iso / 10; // Simplified grain calculation

    for (let i = 0; i < data.length; i += 4) {
      const grain = (0.5 - Math.random()) * grainAmount;
      data[i] += grain; // Red
      data[i + 1] += grain; // Green
      data[i + 2] += grain; // Blue
    }

    ctx.putImageData(imageData, 0, 0);
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
      <canvas ref={canvasRef}></canvas>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <label htmlFor="iso">ISO: </label>
        <input
          type="range"
          id="iso"
          min="100"
          max="6400"
          step="100"
          value={iso}
          onChange={(e) => setIso(Number(e.target.value))}
        />
        {iso}
      </div>
    </div>
  );
}

export default ImageISOAdjuster;
