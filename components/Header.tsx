'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Terminal', href: '#terminal' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent hydration mismatch by waiting for client-side mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-background/80 backdrop-blur-xl border-b border-card-border'
          : 'py-5 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      suppressHydrationWarning
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="text-xl font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Muaaz
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm text-secondary hover:text-primary rounded-lg hover:bg-card-bg transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              className="md:hidden p-2 text-secondary hover:text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay with backdrop blur */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
              style={{ backdropFilter: 'blur(12px)' }}
            />

            {/* Slide-in menu panel */}
            <motion.div
              className="fixed top-0 right-0 w-[85%] sm:w-[320px] h-full z-50 p-6 safe-area-inset-right shadow-2xl border-l"
              style={{
                background: 'var(--card-bg)',
                backdropFilter: 'blur(24px)',
                borderColor: 'var(--card-border)',
              }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b" style={{ borderColor: 'var(--card-border)' }}>
                <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Menu</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 -mr-2 hover:bg-card-bg/50 rounded-lg transition-all duration-300 touch-manipulation"
                  aria-label="Close menu"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <X size={28} />
                </button>
              </div>

              <nav className="flex flex-col gap-1 flex-1 overflow-y-auto">
                {navLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="group px-4 py-4 text-base font-medium rounded-lg transition-all duration-300 flex items-center gap-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ 
                      color: 'var(--text-primary)',
                      backgroundColor: 'transparent',
                    }}
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Theme toggle at bottom */}
              <div 
                className="absolute bottom-0 left-0 right-0 p-6 pt-4 border-t"
                style={{ 
                  borderColor: 'var(--card-border)',
                  background: 'var(--card-bg)',
                  backdropFilter: 'blur(4px)',
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Theme</span>
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
