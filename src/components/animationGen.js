'use client';

import { useEffect, useState, useRef } from 'react';

const Logo = () => {
  const [fillColor, setFillColor] = useState('#000000');
  const [uploadedSVG, setUploadedSVG] = useState('');
  const [videoChoice, setVideoChoice] = useState('yellow'); // 'yellow' or 'red'
  const [cycleDuration, setCycleDuration] = useState(5000);
  const [intensity, setIntensity] = useState(20.5);
  const [maxLayers, setMaxLayers] = useState(10);
  const [decayThreshold, setDecayThreshold] = useState(0.2);
  const [showControls, setShowControls] = useState(true);
  const svgContainerRef = useRef(null);

  const handleSVGUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setUploadedSVG(e.target.result);
    };

    if (file) reader.readAsText(file);
  };

  // Animate SVG layers
  useEffect(() => {
    const getRandomOffset = (factor = 1) => (Math.random() * 4 - 2) * factor + '%';

    let timeElapsed = 0;
    const updateInterval = 100;

    const updatePositions = () => {
      const progress = (timeElapsed / cycleDuration) * (Math.PI / 2);
      const sineFactor = Math.pow(Math.sin(Math.PI / 2 - progress), 2);
      const decayFactor = 10 - timeElapsed / cycleDuration;

      const normalized = (timeElapsed % cycleDuration) / cycleDuration;
      let combinedFactor;

      if (normalized < decayThreshold) {
        const decayProgress = normalized / (decayThreshold * 2); 
        const decay = 1 - Math.pow(5, -10 * decayProgress);
        combinedFactor = decay * intensity + 5;
      } else {
        combinedFactor = sineFactor / 2 * (0.5 * decayFactor + 0.5);
      }

      for (let i = 1; i <= maxLayers; i++) {
        const group = document.querySelector(`#Laag_${i}`);
        if (!group) continue;

        const isEven = i % 2 === 0;
        const elements = group.querySelectorAll('polygon, path, polyline');

        elements.forEach((el) => {
          el.style.transform = isEven
            ? `translateX(${getRandomOffset(combinedFactor)})`
            : `translateY(${getRandomOffset(combinedFactor)})`;
        });
      }

      timeElapsed += updateInterval;
      if (timeElapsed >= cycleDuration) timeElapsed = 0;
    };

    const interval = setInterval(updatePositions, updateInterval);
    return () => clearInterval(interval);
  }, [cycleDuration, intensity, maxLayers]);

  // Update fill color
  useEffect(() => {
    for (let i = 1; i <= maxLayers; i++) {
      const group = document.querySelector(`#Laag_${i}`);
      if (group) {
        const elements = group.querySelectorAll('polygon, path, polyline');
        elements.forEach((el) => el.setAttribute('fill', fillColor));
      }
    }
  }, [fillColor, uploadedSVG, maxLayers]);

  return (
    <div className="logo-hero relative min-h-screen bg-gray-100">
      {/* Controls */}
      {showControls && (
        <div className="controls">
          <label className="block mb-2">
            <span className="font-semibold">Upload SVG:</span>
            <input
              type="file"
              accept=".svg"
              onChange={handleSVGUpload}
              className="ml-2"
            />
          </label>

          <label className="block mb-2">
            <span className="font-semibold">Fill Color:</span>
            <input
              type="text"
              value={fillColor}
              onChange={(e) => setFillColor(e.target.value)}
              className="ml-2 p-1 border rounded w-32"
              placeholder="#ff0000"
            />
          </label>

          <div className="mt-3">
            <span className="font-semibold">Background Video:</span>
            <button
              onClick={() => setVideoChoice('yellow')}
              className={`ml-2 px-2 py-1 rounded ${videoChoice === 'yellow' ? 'bg-yellow-500 text-white' : 'bg-yellow-200'}`}
            >
              Yellow
            </button>
            <button
              onClick={() => setVideoChoice('red')}
              className={`ml-2 px-2 py-1 rounded ${videoChoice === 'red' ? 'bg-red-600 text-white' : 'bg-red-200'}`}
            >
              Red
            </button>
          </div>

          <label className="block">
            <span className="font-semibold">Speed (ms):</span>
            <input
              type="number"
              min="500"
              max="10000"
              step="100"
              value={cycleDuration}
              onChange={(e) => setCycleDuration(Number(e.target.value))}
              className="ml-2 p-1 border rounded w-24"
            />
          </label>

          <label className="block">
            <span className="font-semibold">Intensity:</span>
            <input
              type="range"
              min="0"
              max="50"
              value={intensity}
              onChange={(e) => setIntensity(Number(e.target.value))}
              className="ml-2"
            />
            <span className="ml-2">{intensity}</span>
          </label>

          <label className="block mt-3">
            <span className="font-semibold">Decay Threshold:</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={decayThreshold}
              onChange={(e) => setDecayThreshold(parseFloat(e.target.value))}
              className="ml-2"
            />
            <span className="ml-2">{decayThreshold.toFixed(2)}</span>
          </label>


          <label className="block">
            <span className="font-semibold">Max Layers:</span>
            <input
              type="number"
              min="1"
              max="20"
              value={maxLayers}
              onChange={(e) => setMaxLayers(Number(e.target.value))}
              className="ml-2 p-1 border rounded w-16"
            />
          </label>
        </div>
      )}

      {/* SVG Display */}
      <div ref={svgContainerRef} className="svg-container z-0 p-10">
        {uploadedSVG ? (
          <div
            className="uploaded-svg"
            dangerouslySetInnerHTML={{ __html: uploadedSVG }}
          />
        ) : (
          <div className="text-gray-500 text-xl font-semibold">
            Upload your SVG
          </div>
        )}
      </div>

      {/* Background Video */}
      <div className="bg-vid absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <video
          key={videoChoice}
          loop
          muted
          autoPlay
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src={videoChoice === 'red' ? '/bg-r.mp4' : '/bg.mp4'}
            type="video/mp4"
          />
        </video>
      </div>
      <button
          onClick={() => setShowControls((prev) => !prev)}
          className="show-hide"
        >
          {showControls ? 'Hide' : 'Show'}
        </button>
    </div>
  );
};

export default Logo;
