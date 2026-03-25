'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Online Quran Academy Platform',
    description: 'A responsive web platform designed to connect students with qualified Quran tutors for personalized online learning.',
    image: '/images/projects/quran-academy.png',
    tags: ['HTML', 'JavaScript', 'Tailwind CSS'],
    liveUrl: 'https://quran-academy-iota.vercel.app/',
    githubUrl: 'https://github.com/MuaazAttari/Quran-Academy',
  },
  {
    id: 2,
    title: 'Unified Book – Documentation System',
    description: 'A structured documentation platform built using spec-driven development with scalable architecture and MDX-based content.',
    image: '/images/projects/unified-book.png',
    tags: ['Python', 'TypeScript', 'MDX', 'CSS'],
    liveUrl: 'https://unified-book-project.vercel.app/',
    githubUrl: 'https://github.com/MuaazAttari/UnifiedBookProject',
  },
  {
    id: 3,
    title: 'Student Admission Management System',
    description: 'A web-based admission system with automated email notifications for students and administrators.',
    image: '/images/projects/student-admission.png',
    tags: ['HTML', 'Python'],
    liveUrl: undefined,
    githubUrl: 'https://github.com/MuaazAttari/Student-Addmission-Form',
  },
  {
    id: 4,
    title: 'Birthday Countdown Calculator',
    description: 'An interactive tool that calculates the remaining time until your next birthday in real-time.',
    image: '/images/projects/birthday-countdown.jpg',
    tags: ['JavaScript', 'HTML'],
    liveUrl: undefined,
    githubUrl: 'https://github.com/MuaazAttari/BirthDay-remaining-time-Calculator',
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-24 bg-background overflow-hidden"
      aria-label="Projects section"
    >
      {/* Background effects */}
      <div className="absolute inset-0 animated-grid opacity-30" aria-hidden="true" />
      
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"
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
            whileHover={{ scale: 1.05, borderColor: 'var(--accent)' }}
          >
            🚀 Featured Work
          </motion.span>
          
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-primary">My </span>
            <span className="bg-gradient-to-r from-accent via-purple-400 to-primary bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          
          <motion.p
            className="text-secondary max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A collection of real-world projects showcasing my expertise in web development and problem-solving
          </motion.p>
        </motion.div>

        {/* Projects grid - Auto-responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Add more projects indicator */}
        {projects.length >= 4 && (
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-secondary text-sm">
              Want to see more? Check out my{' '}
              <a
                href="https://github.com/MuaazAttari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                GitHub <ExternalLink size={14} />
              </a>
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      className="group relative flex flex-col h-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
      
      {/* Card */}
      <div className="relative flex flex-col h-full bg-card-bg border border-card-border rounded-2xl overflow-hidden backdrop-blur-sm group-hover:border-card-border-hover transition-all duration-500">
        {/* Image container */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20">
          {/* Project image with fallback */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const placeholder = target.parentElement?.querySelector('.placeholder');
              if (placeholder) placeholder.classList.remove('hidden');
            }}
          />
          
          {/* Placeholder for missing images */}
          <div className="placeholder hidden absolute inset-0 flex items-center justify-center">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="text-3xl">💻</span>
              </div>
              <p className="text-xs text-secondary font-medium">Project Preview</p>
            </div>
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />

          {/* Action buttons on hover */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500"
            initial={false}
          >
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary text-black rounded-full shadow-lg shadow-primary/50 hover:bg-primary/80 transition-all"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`View ${project.title} live`}
              >
                <ExternalLink size={18} />
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card-bg border border-card-border text-primary rounded-full shadow-lg hover:bg-primary hover:text-black hover:border-primary transition-all"
                whileHover={{ scale: 1.15, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github size={18} />
              </motion.a>
            )}
          </motion.div>

          {/* Project number badge */}
          <div className="absolute top-3 left-3 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white font-medium">
            #{project.id}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-5">
          {/* Title */}
          <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-secondary text-sm mb-4 line-clamp-2 flex-grow">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-gradient-to-r from-card-bg to-card-bg-hover border border-card-border rounded-lg text-xs font-medium text-secondary group-hover:border-primary/30 group-hover:text-primary transition-all duration-300"
                style={{ transitionDelay: `${tagIndex * 50}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

export default Projects;
