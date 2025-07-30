'use client'

import { useEffect, useState } from 'react';

const Logo3 = ({ logo }) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const getRandomOffset = (factor = 1) => (Math.random() * 4 - 2) * factor + '%';

    const groups = [];

    for (let i = 1; i <= 12; i++) {
      const group = document.querySelector(`#Laag_${i}`);
      if (group) {
        groups.push({
          id: i,
          group,
          polygons: group.querySelectorAll('polygon'),
          paths: group.querySelectorAll('path'),
          polylines: group.querySelectorAll('polyline')
        });
      }
    }

    let timeElapsed = 0;
    const cycleDuration = 5000;
    const updateInterval = 100;

    const updatePositions = () => {
      const progress = (timeElapsed / cycleDuration) * Math.PI;
      let baseFactor = Math.sin(progress);
      const factorBoost = isHovered ? 25 : 1;
      const combinedFactor = baseFactor * factorBoost;

      groups.forEach(({ id, polygons, paths, polylines }) => {
        const isEven = id % 2 === 0;

        polygons.forEach(polygon => {
          polygon.style.transform = isEven
            ? `translateX(${getRandomOffset(combinedFactor)})`
            : `translateY(${getRandomOffset(combinedFactor)})`;
        });

        polylines.forEach(polyline => {
          polyline.style.transform = isEven
            ? `translateX(${getRandomOffset(combinedFactor)})`
            : `translateY(${getRandomOffset(combinedFactor)})`;
        });

        paths.forEach(path => {
          path.style.transform = isEven
            ? `translateX(${getRandomOffset(combinedFactor)})`
            : `translateY(${getRandomOffset(combinedFactor)})`;
        });
      });

      timeElapsed += updateInterval;
      if (timeElapsed >= cycleDuration) {
        timeElapsed = 0;
      }
    };

    updatePositions();
    const interval = setInterval(updatePositions, updateInterval);

    return () => clearInterval(interval);
  }, [isHovered]); // 👈 this makes the effect reactive to hover

  return (
    <div
      className="logo-hero page-title"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div dangerouslySetInnerHTML={{ __html: logo }} />
    </div>
  );
};

export default Logo3;
