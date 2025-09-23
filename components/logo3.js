'use client'
import { useEffect, useRef, useState } from 'react';

const Logo3 = ({ logo, navigation }) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const getRandomOffset = (factor = 1) => (Math.random() * 3 - 2) * factor + '%';

    const groups = [];

    for (let i = 1; i <= 300; i++) {
      const group = containerRef.current?.querySelector(`#Laag_${i}`);
      if (group) {
        groups.push({
          id: i,
          group,
          polygons: group.querySelectorAll('polygon'),
          paths: group.querySelectorAll('path'),
          polylines: group.querySelectorAll('polyline'),
        });
      }
    }

    let timeElapsed = 0;
    const cycleDuration = 5000;
    const updateInterval = 100;

    const updatePositions = () => {
      const progress = (timeElapsed / cycleDuration) * Math.PI;
      const baseFactor = Math.sin(progress);
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
  }, [isHovered]);

  return (
    <div
      className="logo-hero page-title"
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div dangerouslySetInnerHTML={{ __html: logo.title_svg }} />
      {navigation.results[0].lang == 'en-us' ?
        <div className="ticket">
          <a target="_blank" href={navigation.results[0].data.ticket_link.url}>
            <img src="/ticket-en.svg"/>
          </a>
        </div>
      :
        <div className="ticket">
          <a target="_blank" href={navigation.results[0].data.ticket_link.url}>
            <img src="/ticket.svg"/>
          </a>
        </div>
      }  
    </div>
  );
};

export default Logo3;
