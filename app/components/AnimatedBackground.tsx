'use client';
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full" style={{ zIndex: 0 }}>
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1440 560"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8ED1FC" />
            <stop offset="100%" stopColor="#0693E3" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#gradient)" />
        <path d="M0,560L48,548C96,536,192,512,288,497.8C384,485,480,479,576,492.8C672,507,768,541,864,549.5C960,560,1056,541,1152,516.5C1248,492,1344,460,1392,445.5L1440,431L1440,560L1392,560C1344,560,1248,560,1152,560C1056,560,960,560,864,560C768,560,672,560,576,560C480,560,384,560,288,560C192,560,96,560,48,560L0,560Z" fill="rgba(255, 255, 255, 0.7)">
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,560L48,548C96,536,192,512,288,497.8C384,485,480,479,576,492.8C672,507,768,541,864,549.5C960,560,1056,541,1152,516.5C1248,492,1344,460,1392,445.5L1440,431L1440,560L1392,560C1344,560,1248,560,1152,560C1056,560,960,560,864,560C768,560,672,560,576,560C480,560,384,560,288,560C192,560,96,560,48,560L0,560Z;
              M0,560L48,530C96,500,192,440,288,424C384,408,480,436,576,445C672,454,768,444,864,454C960,464,1056,494,1152,495C1248,496,1344,468,1392,454L1440,440L1440,560L1392,560C1344,560,1248,560,1152,560C1056,560,960,560,864,560C768,560,672,560,576,560C480,560,384,560,288,560C192,560,96,560,48,560L0,560Z;
              M0,560L48,548C96,536,192,512,288,497.8C384,485,480,479,576,492.8C672,507,768,541,864,549.5C960,560,1056,541,1152,516.5C1248,492,1344,460,1392,445.5L1440,431L1440,560L1392,560C1344,560,1248,560,1152,560C1056,560,960,560,864,560C768,560,672,560,576,560C480,560,384,560,288,560C192,560,96,560,48,560L0,560Z"
          />
        </path>
      </svg>
      <div
        className="absolute inset-0 w-full h-full opacity-50"
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
