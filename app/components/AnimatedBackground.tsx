'use client';
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full" style={{ zIndex: -1 }}>
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
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1019%26quot%3b)' fill='none'%3e%3cpath d='M131.5082528083284 110.85995688063079L50.45335463396805-63.39621831283309-48.29456775116742 72.51863674215807z' fill='rgba(255%2c 255%2c 255%2c 0.68)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M90.96328205215178 142.5371597595668L114.56653411784534-48.19300985980527-41.200353449374916 14.74089783406798z' fill='rgba(255%2c 255%2c 255%2c 0.68)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M-33.25511055654997 28.711974225877896L100.11606267111787 167.08553117584762 149.23450906453763 6.426332174057677z' fill='rgba(255%2c 255%2c 255%2c 0.68)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1475.6901337888157 14.795531132195087L1395.1240761508868-63.00620635921259 1318.70449873274 96.74374884338471z' fill='rgba(255%2c 255%2c 255%2c 0.68)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1474.153077120313 31.84355579043141L1287.7210940941807-14.827921752658149 1331.2026936714042 147.44761706390534z' fill='rgba(255%2c 255%2c 255%2c 0.68)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1358.3194157232042 153.18742964031554L1469.4845847070324 139.53806317893907 1393.4279505230534-20.38500706611481z' fill='rgba(255%2c 255%2c 255%2c 0.68)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M87.93206107392538 375.9274982761978L-56.07204544402947 462.45389486108695 174.4584576588145 519.9316047941527z' fill='rgba(255%2c 255%2c 255%2c 0.68)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M140.58872679008732 543.4443710957986L27.77338966372872 387.8557763332738-43.22647830870875 540.115484555431z' fill='rgba(255%2c 255%2c 255%2c 0.68)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M139.53173961129215 559.9226015703863L162.81784898288117 450.37007028820005-13.154002626192693 470.21717187190967z' fill='rgba(255%2c 255%2c 255%2c 0.68)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1252.0871409097108 499.3935014547106L1366.6628654002104 622.2609233267312 1374.9545627817315 384.8177769642109z' fill='rgba(255%2c 255%2c 255%2c 0.68)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1326.6280858425903 586.5430333511177L1435.7575330985367 611.7375514376306 1418.984586600333 435.4461215104546z' fill='rgba(255%2c 255%2c 255%2c 0.68)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1469.9137863222277 540.4682386589989L1351.7372096012166 388.91162275057314 1286.0943800150185 543.5564381305832z' fill='rgba(255%2c 255%2c 255%2c 0.68)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1019'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
