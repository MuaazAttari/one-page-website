'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/lib/theme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative p-3 rounded-xl bg-card-bg border border-card-border w-[50px] h-[50px]" />
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-3 rounded-xl bg-card-bg border border-card-border hover:border-primary/50 hover:bg-card-bg-hover transition-all duration-300 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Icon container */}
      <div className="relative w-5 h-5">
        {/* Sun icon - shown in light mode */}
        <motion.div
          className="absolute inset-0"
          initial={false}
          animate={{
            rotate: theme === 'light' ? 0 : 90,
            opacity: theme === 'light' ? 1 : 0,
            scale: theme === 'light' ? 1 : 0.5,
          }}
          transition={{ duration: 0.3 }}
        >
          <Sun size={20} className="text-yellow-400 group-hover:text-yellow-300" />
        </motion.div>

        {/* Moon icon - shown in dark mode */}
        <motion.div
          className="absolute inset-0"
          initial={false}
          animate={{
            rotate: theme === 'dark' ? 0 : -90,
            opacity: theme === 'dark' ? 1 : 0,
            scale: theme === 'dark' ? 1 : 0.5,
          }}
          transition={{ duration: 0.3 }}
        >
          <Moon size={20} className="text-indigo-400 group-hover:text-indigo-300" />
        </motion.div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-indigo-400/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  );
};

export default ThemeToggle;
