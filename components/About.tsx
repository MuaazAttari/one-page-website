'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-background overflow-hidden"
      aria-label="About section"
    >
      {/* Background effects */}
      <div className="absolute inset-0 animated-grid opacity-30" aria-hidden="true" />

      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Top Section: Heading + Image Side by Side */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          {/* Left: Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <motion.span
              className="inline-block px-4 py-2 bg-card-bg border border-card-border rounded-full text-sm text-accent mb-6"
              whileHover={{ scale: 1.05 }}
            >
              👋 About Me
            </motion.span>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <span className="text-primary">Hello, I'm </span>
              <span className="bg-gradient-to-r from-primary via-cyan-400 to-accent bg-clip-text text-transparent">
                Muhammad Muaaz
              </span>
            </motion.h2>
          </motion.div>

          {/* Right: Enhanced Image with all decorations */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl blur-2xl opacity-30" />

              {/* Image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary rounded-3xl opacity-50" />

                {/* Inner content */}
                <div className="absolute inset-1 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/my-pic2.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -top-6 -left-6 bg-gradient-to-r from-primary to-cyan-600 text-black px-5 py-3 rounded-2xl shadow-lg font-semibold text-sm"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  🚀 AI Enthusiast
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -right-6 bg-gradient-to-r from-accent to-purple-600 text-white px-5 py-3 rounded-2xl shadow-lg font-semibold text-sm"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >
                  💡 Problem Solver
                </motion.div>

                {/* Additional floating badges */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2.5 rounded-xl shadow-lg font-semibold text-xs"
                  animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                >
                  💻 Coder
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2.5 rounded-xl shadow-lg font-semibold text-xs"
                  animate={{ y: [0, -8, 0], x: [0, -5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 1.5 }}
                >
                  🎯 Creator
                </motion.div>

                {/* Orbiting tech icons */}
                <div className="absolute -inset-4 pointer-events-none">
                  {/* Top orbiting icon */}
                  <motion.div
                    className="absolute -top-8 left-1/2 -translate-x-1/2 bg-card-bg border border-primary/50 px-3 py-2 rounded-lg shadow-lg shadow-primary/30"
                    animate={{ y: [0, -5, 0], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <span className="text-xl">⚛️</span>
                  </motion.div>

                  {/* Right orbiting icon */}
                  <motion.div
                    className="absolute top-1/2 -right-8 -translate-y-1/2 bg-card-bg border border-accent/50 px-3 py-2 rounded-lg shadow-lg shadow-accent/30"
                    animate={{ x: [0, 5, 0], rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: 0.3 }}
                  >
                    <span className="text-xl">🐍</span>
                  </motion.div>

                  {/* Bottom orbiting icon */}
                  <motion.div
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-card-bg border border-cyan-500/50 px-3 py-2 rounded-lg shadow-lg shadow-cyan-500/30"
                    animate={{ y: [0, 5, 0], rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.6 }}
                  >
                    <span className="text-xl">🌪️</span>
                  </motion.div>

                  {/* Left orbiting icon */}
                  <motion.div
                    className="absolute top-1/2 -left-8 -translate-y-1/2 bg-card-bg border border-purple-500/50 px-3 py-2 rounded-lg shadow-lg shadow-purple-500/30"
                    animate={{ x: [0, -5, 0], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: 0.9 }}
                  >
                    <span className="text-xl">🔧</span>
                  </motion.div>
                </div>

                {/* Animated particles */}
                <div className="absolute -inset-8 pointer-events-none overflow-hidden">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${10 + i * 12}%`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.8, 0.2],
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Tagline card */}
              <motion.div
                className="absolute -bottom-20 left-1/2 -translate-x-1/2 bg-card-bg border border-primary/30 rounded-2xl px-6 py-4 shadow-xl shadow-primary/20 backdrop-blur-sm max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
              >
                <div className="text-center">
                  <p className="text-sm text-secondary mb-1">Building the future with</p>
                  <p className="text-lg font-bold bg-gradient-to-r from-primary via-cyan-400 to-accent bg-clip-text text-transparent">
                    Code + AI + Creativity
                  </p>
                </div>
                {/* Arrow pointing up */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-card-bg border-t border-l border-primary/30 rotate-45" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section: Story + Stats */}
        <div className="space-y-12">
          {/* Story Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <div className="space-y-4 text-secondary text-lg leading-relaxed max-w-4xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                I am a passionate <span className="text-primary font-semibold">self-taught developer</span> based in{' '}
                <span className="text-accent font-semibold">Hyderabad, Pakistan</span>, with a strong focus on{' '}
                <span className="text-primary font-semibold">Web Development</span> and{' '}
                <span className="text-accent font-semibold">Artificial Intelligence</span>.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                I enjoy building practical, <span className="text-primary">real-world applications</span> that solve
                meaningful problems. My work combines modern frontend technologies like{' '}
                <span className="text-primary">Next.js</span> with backend logic in{' '}
                <span className="text-accent">Python</span> to create intelligent and user-friendly systems.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Currently, I am focused on improving my skills, gaining real-world experience, and working towards
                becoming a <span className="text-primary font-semibold">professional software engineer</span>.
              </motion.p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <div className="grid grid-cols-1 gap-6">
              {[
                { value: '10+', label: 'Projects Built', icon: '🚀' },
                { value: '5+', label: 'Technologies', icon: '🛠️' },
                { value: 'Real', label: 'Problem Solving', icon: '💡' },
                { value: 'Continuous', label: 'Learning AI', icon: '🤖' },
                { value: '∞', label: 'Experiments', icon: '⚡' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="relative group text-left p-6 bg-card-bg border border-card-border rounded-2xl min-h-[120px] md:min-h-[140px] flex flex-row items-center gap-4 md:gap-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    borderColor: 'var(--primary)',
                    boxShadow: '0 0 30px rgba(0, 240, 255, 0.2)',
                  }}
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-accent/0 to-primary/0 group-hover:from-primary/10 group-hover:via-accent/10 group-hover:to-primary/10 transition-all duration-500" />

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />

                  {/* Content */}
                  <div className="relative flex flex-row items-center gap-4 md:gap-6 w-full">
                    {/* Icon */}
                    <motion.div
                      className="text-3xl md:text-4xl lg:text-5xl flex-shrink-0"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + index * 0.1, type: 'spring', stiffness: 200 }}
                      whileHover={{ scale: 1.3, rotate: 15 }}
                    >
                      {stat.icon}
                    </motion.div>

                    {/* Value */}
                    <motion.div
                      className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-cyan-400 to-accent bg-clip-text text-transparent leading-tight flex-shrink-0"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + index * 0.1, type: 'spring', stiffness: 200 }}
                    >
                      {stat.value}
                    </motion.div>

                    {/* Label */}
                    <motion.div
                      className="text-base md:text-lg lg:text-xl text-primary font-semibold leading-snug flex-grow"
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {stat.label}
                    </motion.div>

                    {/* Vertical accent line */}
                    <motion.div
                      className="h-8 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full flex-shrink-0 ml-auto"
                      initial={{ height: 0 }}
                      whileInView={{ height: '2rem' }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
