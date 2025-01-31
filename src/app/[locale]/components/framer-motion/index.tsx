'use client';

import {useEffect, useState} from 'react';
import {motion} from 'framer-motion';

interface FireworkProps {
  x: number;
  y: number;
}

const Firework = ({x, y}: FireworkProps) => {
  const particles = Array.from({length: 10});

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      {particles.map((_, i) => {
        const angle = (i / particles.length) * Math.PI * 2;
        const radius = 100;

        return (
          <motion.div
            key={i}
            initial={{opacity: 1, x, y}}
            animate={{
              x: x + Math.cos(angle) * radius,
              y: y + Math.sin(angle) * radius,
              opacity: 0,
            }}
            transition={{duration: 1, ease: [0.42, 0, 1.0, 1.0]}}
            className="absolute w-2 h-2 bg-red-500 rounded-full"
          />
        );
      })}
    </div>
  );
};

const Fireworks = () => {
  const [fireworks, setFireworks] = useState<FireworkProps[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFireworks(prev => [
        ...prev,
        {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        },
      ]);

      setTimeout(() => {
        setFireworks(prev => prev.slice(1));
      }, 10000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full">
      {fireworks.map((fw, i) => (
        <Firework key={i} x={fw.x} y={fw.y} />
      ))}
    </div>
  );
};

export default Fireworks;
