'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Youtube, Play, Sparkles, ArrowRight, Code2, Cpu, Download } from 'lucide-react';
import Button from './Button';
import Link from 'next/link';
import Toast from './Toast';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  const [toast, setToast] = useState<{
    isOpen: boolean;
    message: string;
    type: 'success' | 'error';
  }>({
    isOpen: false,
    message: '',
    type: 'success',
  });

  const handleDownload = () => {
    setToast({
      isOpen: true,
      message: '📄 Resume download started!',
      type: 'success',
    });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, isOpen: false }));
    }, 3000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20"
      aria-label="Hero section"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 animated-grid opacity-40" aria-hidden="true" />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"
        aria-hidden="true"
      />

      {/* Glowing orbs */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px] animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse-glow animation-delay-2000"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-[100px]"
        aria-hidden="true"
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-primary/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.8, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <motion.div
            className="order-2 lg:order-1"
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
          >
            {/* Premium badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-card-bg border border-card-border rounded-full mb-8 backdrop-blur-sm"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, borderColor: 'var(--primary)' }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-secondary">Available for Projects</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-[1.1]"
              variants={fadeInUp}
            >
              <span className="text-primary block">Building</span>
              <span className="relative inline-block">
                <span className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-cyan-400/20 to-accent/20 blur-2xl rounded-full light:from-primary/40 light:via-cyan-400/40 light:to-accent/40" />
                <span className="relative bg-gradient-to-r from-primary via-cyan-400 to-accent bg-clip-text text-transparent text-glow">
                  Digital
                </span>
              </span>
              <br />
              <span className="text-primary">Excellence</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="text-lg md:text-xl text-secondary mb-10 max-w-xl leading-relaxed"
              variants={fadeInUp}
            >
              I specialize in building <span className="text-primary font-medium">modern web applications</span> and{' '}
              <span className="text-primary font-medium">AI-powered solutions</span> using{' '}
              <span className="text-primary">Next.js</span> and{' '}
              <span className="text-accent">Python</span>. Creating real-world projects that solve practical problems.
            </motion.p>

            {/* Tech pills */}
            <motion.div
              className="flex flex-wrap gap-3 mb-10"
              variants={fadeInUp}
            >
              {[
                { name: 'Next.js', icon: '▲' },
                { name: 'Python', icon: '🐍' },
                { name: 'Tailwind', icon: '🌪️' },
                { name: 'AI', icon: '🤖' },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="flex items-center gap-2 px-4 py-2.5 bg-card-bg border border-card-border rounded-xl backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{
                    borderColor: 'var(--primary)',
                    boxShadow: '0 0 20px var(--primary-glow, rgba(0, 240, 255, 0.2))',
                    scale: 1.05,
                  }}
                >
                  <span className="text-lg">{tech.icon}</span>
                  <span className="text-sm font-medium text-secondary">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              variants={fadeInUp}
            >
              <Button variant="primary" size="lg" className="group relative overflow-hidden">
                <Link href="#projects" className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-card-border text-primary hover:bg-card-bg hover:border-primary"
              >
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </motion.div>

            {/* Secondary Actions: Download Resume + YouTube */}
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              {/* Download Resume Button - Premium */}
              <motion.a
                href="/resume.pdf"
                download="Muhammad_Muaaz_Ansari_Resume.pdf"
                onClick={handleDownload}
                className="group relative inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-gradient-to-r from-primary via-cyan-500 to-accent rounded-xl font-semibold text-black shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Download Resume"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent via-cyan-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 -z-10" />
                
                {/* Sparkle effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Icon with animation */}
                <motion.div
                  className="relative"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Download className="w-5 h-5" />
                  {/* Download arrow animation */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <div className="w-0.5 h-2 bg-gradient-to-b from-primary to-transparent rounded-full" />
                  </motion.div>
                </motion.div>
                
                {/* Text */}
                <span className="relative z-10 text-sm">Download Resume</span>
                
                {/* PDF Badge */}
                <div className="relative z-10 px-2 py-1 bg-black/20 backdrop-blur-sm rounded-md text-xs font-bold">
                  PDF
                </div>
              </motion.a>

              {/* Divider */}
              <div className="hidden sm:block w-px h-10 bg-gradient-to-b from-transparent via-card-border to-transparent" />

              {/* YouTube Channel Card */}
              <motion.a
                href="https://www.youtube.com/@MuhammadMuaazAnsari12"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
                whileHover={{ scale: 1.05, x: 3 }}
              >
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

                  {/* Card */}
                  <div className="relative flex items-center gap-3 px-4 py-3 bg-card-bg border border-red-500/30 rounded-xl backdrop-blur-sm group-hover:border-red-500/50 transition-all duration-500">
                    {/* YouTube Icon */}
                    <motion.div
                      className="p-2 bg-red-600 rounded-lg shadow-lg shadow-red-500/40"
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    >
                      <Youtube size={18} className="text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-primary whitespace-nowrap">YouTube</span>
                      <span className="text-xs text-secondary">@MuaazAnsari</span>
                    </div>

                    {/* Play button */}
                    <motion.div
                      className="p-1.5 bg-red-600 rounded-full"
                      whileHover={{ rotate: 12, scale: 1.1 }}
                    >
                      <Play size={14} className="text-white fill-white" />
                    </motion.div>
                  </div>
                </div>
              </motion.a>
            </motion.div>

            {/* Toast notification */}
            <Toast
              isOpen={toast.isOpen}
              message={toast.message}
              type={toast.type}
              onClose={() => setToast((prev) => ({ ...prev, isOpen: false }))}
            />
          </motion.div>

          {/* Right: 3D Avatar */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial="hidden"
            animate="visible"
            variants={fadeInLeft}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Outer glow rings */}
              <div className="absolute inset-0 -inset-4 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-20 blur-2xl animate-spin-slow" style={{ animationDuration: '12s' }} />
              <div className="absolute inset-0 -inset-2 bg-gradient-to-r from-accent via-primary to-accent rounded-full opacity-30 blur-xl animate-spin-slow" style={{ animationDuration: '10s', animationDirection: 'reverse' }} />
              
              {/* Avatar container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Animated border ring */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full animate-spin-slow" style={{ animationDuration: '8s' }} />
                  <div className="absolute inset-[3px] bg-background rounded-full" />
                </div>
                
                {/* Inner avatar */}
                <div className="absolute inset-[6px] rounded-full overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                  <img
                    src="/images/my-pic.png"
                    alt="Profile avatar"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -top-3 -right-3 flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary to-cyan-600 rounded-2xl shadow-2xl shadow-primary/40"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                >
                  <Code2 className="w-4 h-4 text-black" />
                  <span className="text-xs font-bold text-black">Developer</span>
                </motion.div>

                <motion.div
                  className="absolute -bottom-3 -left-3 flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-accent to-purple-600 rounded-2xl shadow-2xl shadow-accent/40"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 1.2 }}
                >
                  <Cpu className="w-4 h-4 text-white" />
                  <span className="text-xs font-bold text-white">AI Builder</span>
                </motion.div>

                {/* Corner sparkles */}
                <motion.div
                  className="absolute -top-2 -left-2 text-2xl"
                  animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ✨
                </motion.div>
                <motion.div
                  className="absolute -bottom-2 -right-2 text-2xl"
                  animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                >
                  🚀
                </motion.div>
              </div>

              {/* Rotating ring elements */}
              <motion.div
                className="absolute -inset-8 border border-dashed border-card-border rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute -inset-12 border border-dotted border-card-border rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <motion.button
          className="flex flex-col items-center text-secondary hover:text-primary transition-colors cursor-pointer group pointer-events-auto"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            const skillsSection = document.getElementById('skills');
            if (skillsSection) {
              skillsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          aria-label="Scroll to skills section"
          type="button"
        >
          <span className="text-xs mb-2 group-hover:text-primary transition-colors">Scroll to explore</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
