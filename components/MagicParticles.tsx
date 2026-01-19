
import React from 'react';

const MagicParticles: React.FC<{ count?: number }> = ({ count = 50 }) => {
  const stars = Array.from({ length: count }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 3 + 1}px`,
    duration: `${Math.random() * 4 + 2}s`,
    delay: `${Math.random() * 5}s`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            '--duration': star.duration,
            animationDelay: star.delay,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default MagicParticles;
