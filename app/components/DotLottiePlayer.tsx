// components/DotLottiePlayer.tsx
import React from 'react';

const DotLottiePlayer: React.FC = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <dotlottie-player
            src="https://lottie.host/ea55694c-3cb6-4eb7-a6f3-20b39546c02f/6jz56DfMQp.json"
            background="transparent"
            speed="1"
            style="width: 400px; height: 400px; z-index: 9999;"
            loop
            autoplay
          ></dotlottie-player>
        `,
      }}
    />
  );
};

export default DotLottiePlayer;
