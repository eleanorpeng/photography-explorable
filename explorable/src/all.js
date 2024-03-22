import React, { useState, useEffect, useRef } from "react";

function ImageProcessor({ src }) {
  const canvasRef = useRef(null);
  const [iso, setIso] = useState(100);
  const [shutterSpeed, setShutterSpeed] = useState(1 / 60);
  const [aperture, setAperture] = useState(2.8);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      adjustImage(image);
    };
  }, [src, iso, shutterSpeed, aperture]);

  const adjustImage = (image) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0);

    adjustBrightnessAndNoise(ctx, iso);
    applyShutterSpeedEffect(canvas, shutterSpeed);
    adjustApertureEffect(canvas, aperture);
  };

  const adjustBrightnessAndNoise = (ctx, iso) => {
    const brightness = iso / 100;
    const imageData = ctx.getImageData(
      0,
      0,
      ctx.canvas.width,
      ctx.canvas.height
    );
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      // Brightness adjustment
      data[i] = data[i] * brightness;
      data[i + 1] = data[i + 1] * brightness;
      data[i + 2] = data[i + 2] * brightness;

      // Add noise
      const noise = (0.5 - Math.random()) * 50;
      data[i] += noise;
      data[i + 1] += noise;
      data[i + 2] += noise;
    }

    ctx.putImageData(imageData, 0, 0);
  };

  const applyShutterSpeedEffect = (canvas, shutterSpeed) => {
    // Simplistic simulation of motion blur as increased blur effect
    const ctx = canvas.getContext("2d");
    const blurAmount = (1 / shutterSpeed) * 0.5; // Simplified for demonstration
    ctx.filter = `blur(${blurAmount}px)`;
    ctx.drawImage(canvas, 0, 0);
    ctx.filter = "none"; // Reset filter
  };

  const adjustApertureEffect = (canvas, aperture) => {
    // Simplistic depth of field effect
    const ctx = canvas.getContext("2d");
    const blurAmount = Math.max(0, 2.8 - aperture) * 2; // Simplified for demonstration
    ctx.filter = `blur(${blurAmount}px)`;
    ctx.drawImage(canvas, 0, 0);
    ctx.filter = "none"; // Reset filter
  };

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
      <div>
        ISO:{" "}
        <input
          type="number"
          value={iso}
          onChange={(e) => setIso(e.target.value)}
        />
        Shutter Speed:{" "}
        <input
          type="number"
          value={shutterSpeed}
          onChange={(e) => setShutterSpeed(e.target.value)}
        />
        Aperture:{" "}
        <input
          type="number"
          value={aperture}
          onChange={(e) => setAperture(e.target.value)}
          step="0.1"
        />
      </div>
    </div>
  );
}

export default ImageProcessor;
