'use client';
import React from 'react';

const Svg: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="400"
      height="400"
      viewBox="0 0 400 400"
    >
      <style jsx>{`
        .bounce {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>

      <g>
        {/* Rotation animation for the entire group */}
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 200 200"
          to="360 200 200"
          dur="20s"
          repeatCount="indefinite"
        />

        {/* Animated circle */}
        <circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        >
          <animate
            attributeName="r"
            values="150;155;150"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>

        {/* First animated path (top arc) */}
        <path
          d="M100 100 Q150 50 200 100 T300 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        >
          <animate
            attributeName="d"
            values="M100 100 Q150 50 200 100 T300 100;
                    M100 110 Q150 60 200 110 T300 110;
                    M100 100 Q150 50 200 100 T300 100"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>

        {/* Second animated path (bottom arc) */}
        <path
          d="M100 300 Q150 250 200 300 T300 300"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        >
          <animate
            attributeName="d"
            values="M100 300 Q150 250 200 300 T300 300;
                    M100 290 Q150 240 200 290 T300 290;
                    M100 300 Q150 250 200 300 T300 300"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>

        {/* Vertical line with animation */}
        <line
          x1="200"
          y1="100"
          x2="200"
          y2="300"
          stroke="currentColor"
          strokeWidth="4"
        >
          <animate
            attributeName="y2"
            values="300;290;300"
            dur="4s"
            repeatCount="indefinite"
          />
        </line>

        {/* Horizontal line with animation */}
        <line
          x1="100"
          y1="200"
          x2="300"
          y2="200"
          stroke="currentColor"
          strokeWidth="4"
        >
          <animate
            attributeName="x2"
            values="300;290;300"
            dur="4s"
            repeatCount="indefinite"
          />
        </line>

        {/* Central bouncing circle */}
        <circle
          cx="200"
          cy="200"
          r="15"
          fill="currentColor"
          className="bounce"
        >
          <animate
            attributeName="r"
            values="15;20;15"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Inner rotating group of triangles */}
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 200 200"
            to="-360 200 200"
            dur="10s"
            repeatCount="indefinite"
          />

          {/* Top triangle with opacity animation */}
          <path
            d="M200 80 L220 120 L180 120 Z"
            fill="currentColor"
            className="bounce"
          >
            <animate
              attributeName="opacity"
              values="1;0.5;1"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>

          {/* Bottom triangle with opacity animation */}
          <path
            d="M200 320 L220 280 L180 280 Z"
            fill="currentColor"
            className="bounce"
          >
            <animate
              attributeName="opacity"
              values="1;0.5;1"
              dur="3s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  );
};

export default Svg;
