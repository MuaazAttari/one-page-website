'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Star, Github, Youtube, Users, Trophy, Heart, ExternalLink, Quote } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

// Placeholder testimonials - replace with real ones
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ahmed Khan',
    role: 'CEO',
    company: 'TechStart Solutions',
    content: 'Muhammad delivered an exceptional web application that exceeded our expectations. His attention to detail and AI integration skills are outstanding.',
  },
  {
    id: 2,
    name: 'Sarah Ahmed',
    role: 'Product Manager',
    company: 'Digital Innovations',
    content: 'Working with Muhammad was a pleasure. He understood our requirements quickly and built a solution that perfectly matched our vision.',
  },
  {
    id: 3,
    name: 'Hassan Raza',
    role: 'Founder',
    company: 'AI Ventures',
    content: 'His expertise in both web development and AI is rare. Muhammad built us an intelligent system that automated 80% of our manual work.',
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative py-24 bg-background overflow-hidden"
      aria-label="Testimonials and social proof section"
    >
      {/* Background effects */}
      <div className="absolute inset-0 animated-grid opacity-30" aria-hidden="true" />
      
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
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
            className="inline-block px-4 py-2 bg-card-bg border border-card-border rounded-full text-sm text-accent mb-4"
            whileHover={{ scale: 1.05 }}
          >
            💬 Testimonials
          </motion.span>
          
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-primary">What People </span>
            <span className="bg-gradient-to-r from-accent via-purple-400 to-primary bg-clip-text text-transparent">
              Say
            </span>
          </motion.h2>
          
          <motion.p
            className="text-secondary max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Feedback from clients, colleagues, and collaborators I've had the pleasure of working with
          </motion.p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Social Proof Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {/* GitHub Stats */}
          <StatCard
            icon={Github}
            label="GitHub Followers"
            value="100+"
            gradient="from-gray-700 to-gray-900"
            href="https://github.com/MuaazAttari"
            color="text-gray-300"
          />
          
          {/* YouTube Stats */}
          <StatCard
            icon={Youtube}
            label="YouTube Community"
            value="Growing"
            gradient="from-red-600 to-red-700"
            href="https://www.youtube.com/@MuhammadMuaazAnsari12"
            color="text-red-400"
          />
          
          {/* Projects Completed */}
          <StatCard
            icon={Trophy}
            label="Projects Completed"
            value="20+"
            gradient="from-primary to-cyan-600"
            color="text-primary"
          />
          
          {/* Happy Clients */}
          <StatCard
            icon={Heart}
            label="Happy Clients"
            value="15+"
            gradient="from-pink-500 to-rose-600"
            color="text-pink-400"
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-4">Want to be featured here?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-cyan-400 transition-colors font-medium"
          >
            Let's work together
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent to-purple-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
      
      {/* Card */}
      <div className="relative h-full bg-card-bg border border-card-border rounded-2xl p-6 backdrop-blur-sm group-hover:border-card-border-hover transition-all duration-500">
        {/* Quote icon */}
        <div className="absolute top-6 right-6 text-secondary/20 group-hover:text-secondary/30 transition-colors">
          <Quote size={40} fill="currentColor" />
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
          ))}
        </div>

        {/* Content */}
        <p className="text-primary mb-6 leading-relaxed">
          "{testimonial.content}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4">
          {/* Avatar placeholder */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center text-white font-bold">
            {testimonial.name.charAt(0)}
          </div>
          
          {/* Info */}
          <div>
            <div className="text-primary font-semibold">{testimonial.name}</div>
            <div className="text-secondary text-sm">
              {testimonial.role} at {testimonial.company}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  gradient: string;
  href?: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, label, value, gradient, href, color }) => {
  const content = (
    <div className="group relative">
      {/* Glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
      
      {/* Card */}
      <div className="relative bg-card-bg border border-card-border rounded-2xl p-6 backdrop-blur-sm group-hover:border-card-border-hover transition-all duration-500">
        <div className="flex items-center gap-4">
          {/* Icon */}
          <div className={`p-3 bg-gradient-to-br ${gradient} rounded-xl`}>
            <Icon size={24} className="text-white" />
          </div>
          
          {/* Stats */}
          <div>
            <div className={`text-2xl font-bold ${color}`}>{value}</div>
            <div className="text-secondary text-sm">{label}</div>
          </div>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
};

export default Testimonials;
