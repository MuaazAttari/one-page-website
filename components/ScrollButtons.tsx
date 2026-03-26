'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

const ScrollButtons = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show buttons after scrolling 300px
      setShowButtons(window.scrollY > 300);
      
      // Check if near bottom of page
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;
      setIsAtBottom(scrollHeight - scrollTop - clientHeight < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {showButtons && (
        <div className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-40 flex flex-col gap-2">
          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 bg-card-bg border border-card-border rounded-xl shadow-lg hover:bg-card-bg-hover hover:border-primary/50 transition-all duration-300 group"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ChevronUp 
              size={20} 
              className="text-secondary group-hover:text-primary transition-colors" 
            />
          </motion.button>

          {/* Scroll to bottom button (only show when not at bottom) */}
          {!isAtBottom && (
            <motion.button
              onClick={scrollToBottom}
              className="p-3 bg-card-bg border border-card-border rounded-xl shadow-lg hover:bg-card-bg-hover hover:border-primary/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to bottom"
            >
              <ChevronDown 
                size={20} 
                className="text-secondary group-hover:text-primary transition-colors" 
              />
            </motion.button>
          )}
        </div>
      )}
    </AnimatePresence>
  );
};

export default ScrollButtons;
