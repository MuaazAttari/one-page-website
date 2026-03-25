'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface Skill {
  name: string;
  icon: React.ReactNode;
  gradient: string;
}

const skills: Skill[] = [
  { name: 'HTML5', icon: '🌐', gradient: 'from-orange-500 to-red-500' },
  { name: 'CSS3', icon: '🎨', gradient: 'from-blue-500 to-cyan-500' },
  { name: 'JavaScript', icon: '⚡', gradient: 'from-yellow-400 to-orange-400' },
  { name: 'Next.js', icon: '▲', gradient: 'from-gray-200 to-gray-400' },
  { name: 'Tailwind', icon: '🌪️', gradient: 'from-cyan-400 to-teal-500' },
  { name: 'Python', icon: '🐍', gradient: 'from-blue-500 to-yellow-500' },
  { name: 'Streamlit', icon: '📊', gradient: 'from-red-500 to-orange-500' },
  { name: 'Git', icon: '📦', gradient: 'from-red-500 to-orange-500' },
  { name: 'GitHub', icon: '🐙', gradient: 'from-gray-700 to-gray-900' },
  { name: 'Claude AI', icon: '🤖', gradient: 'from-purple-400 to-pink-400' },
  { name: 'Qwen AI', icon: '💡', gradient: 'from-blue-600 to-purple-600' },
  { name: 'SDD', icon: '📋', gradient: 'from-green-400 to-emerald-500' },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 bg-background overflow-hidden"
      aria-label="Skills section"
    >
      {/* Background effects */}
      <div className="absolute inset-0 animated-grid opacity-30" aria-hidden="true" />
      
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-card-bg border border-card-border rounded-full text-sm text-primary mb-4"
            whileHover={{ scale: 1.05, borderColor: 'var(--primary)' }}
          >
            ✨ Technologies & Tools
          </motion.span>
          
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-primary">My </span>
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-accent bg-clip-text text-transparent">
              Tech Stack
            </span>
          </motion.h2>
          
          <motion.p
            className="text-secondary max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            My toolkit for building modern web apps and AI solutions — from frontend to deployment
          </motion.p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 },
      }}
    >
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />

      {/* Card */}
      <div className="relative h-full bg-card-bg border border-card-border rounded-2xl p-6 backdrop-blur-sm overflow-hidden group-hover:border-card-border-hover transition-colors duration-300">
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full">
          {/* Icon with glow */}
          <motion.div
            className="text-4xl md:text-5xl mb-3"
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {skill.icon}
          </motion.div>

          {/* Name */}
          <span className="text-sm md:text-base text-secondary font-medium group-hover:text-primary transition-colors">
            {skill.name}
          </span>
          
          {/* Bottom accent line */}
          <div className={`w-0 group-hover:w-12 h-0.5 bg-gradient-to-r ${skill.gradient} mt-3 transition-all duration-300`} />
        </div>
        
        {/* Corner accent */}
        <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity duration-300`} />
      </div>
    </motion.div>
  );
};

export default Skills;
