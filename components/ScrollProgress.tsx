'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  // Smooth the progress value with spring animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[60]"
      style={{
        scaleX,
        transformOrigin: '0%',
      }}
    >
      {/* Gradient progress bar */}
      <div className="h-full bg-gradient-to-r from-primary via-cyan-500 to-accent" />
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-500 to-accent blur-md opacity-50" />
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
          repeatDelay: 3,
        }}
      />
    </motion.div>
  );
};

export default ScrollProgress;
