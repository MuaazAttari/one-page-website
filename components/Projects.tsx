'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import CaseStudyModal from './CaseStudyModal';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    techStack: string[];
    challenges: { title: string; description: string }[];
    learnings: string[];
  };
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
    caseStudy: {
      overview: 'A comprehensive platform connecting students with qualified Quran tutors across Pakistan, featuring advanced search, secure booking, and integrated video calls.',
      problem: 'In Pakistan, finding qualified Quran tutors online was extremely difficult. Students had to rely on word-of-mouth recommendations or unreliable platforms with no verification system. Tutors struggled to reach students beyond their local area.',
      solution: 'Built a full-featured platform with tutor profiles showcasing qualifications and reviews, advanced search and filtering by specialty and availability, a secure booking system with calendar integration, and integrated video calling for seamless online lessons.',
      techStack: ['HTML5', 'JavaScript ES6+', 'Tailwind CSS', 'Vercel', 'Git'],
      challenges: [
        {
          title: 'Video Integration',
          description: 'Tested 5 different video APIs before finding an affordable solution that worked reliably in Pakistan with varying internet speeds.',
        },
        {
          title: 'Payment Gateway',
          description: 'Limited payment options in Pakistan. Integrated JazzCash and EasyPaisa for local users alongside international cards.',
        },
        {
          title: 'Performance Optimization',
          description: 'Initial load time was 8 seconds. Optimized images, implemented lazy loading, and reduced to under 2 seconds.',
        },
      ],
      learnings: [
        'User research is critical before building - interviewed 30+ potential users',
        'Performance matters more than features in Pakistan market',
        'Local payment methods are essential for adoption',
        'Trust and verification are key for educational platforms',
      ],
    },
  },
  {
    id: 2,
    title: 'Unified Book – Documentation System',
    description: 'A structured documentation platform built using spec-driven development with scalable architecture and MDX-based content.',
    image: '/images/projects/unified-book.png',
    tags: ['Python', 'TypeScript', 'MDX', 'CSS'],
    liveUrl: 'https://unified-book-project.vercel.app/',
    githubUrl: 'https://github.com/MuaazAttari/UnifiedBookProject',
    caseStudy: {
      overview: 'A modern documentation platform using MDX for rich content, built with spec-driven development methodology for maintainable and scalable documentation.',
      problem: 'Technical teams struggled with outdated, hard-to-maintain documentation. Traditional wikis were slow, lacked version control, and made collaboration difficult. Finding specific information was time-consuming.',
      solution: 'Created a documentation system using MDX for rich interactive content, implemented spec-driven development for consistent structure, added full-text search with instant results, and enabled real-time collaboration with version history.',
      techStack: ['Python', 'TypeScript', 'MDX', 'Next.js', 'Vercel', 'Git'],
      challenges: [
        {
          title: 'MDX Integration',
          description: 'Configuring MDX to work seamlessly with React components while maintaining fast build times required careful optimization.',
        },
        {
          title: 'Search Performance',
          description: 'Initial search was slow with large documentation. Implemented client-side search with pre-built indices for instant results.',
        },
        {
          title: 'Spec-Driven Workflow',
          description: 'Creating a spec-driven workflow that developers would actually follow required balancing structure with flexibility.',
        },
      ],
      learnings: [
        'Spec-driven development creates consistency without stifling creativity',
        'Developer experience is as important as user experience',
        'Good documentation is a product feature, not an afterthought',
        'MDX opens possibilities for interactive documentation',
      ],
    },
  },
  {
    id: 3,
    title: 'Student Admission Management System',
    description: 'A web-based admission system with automated email notifications for students and administrators.',
    image: '/images/projects/student-admission.png',
    tags: ['HTML', 'Python', 'Email API', 'CSS'],
    liveUrl: undefined,
    githubUrl: 'https://github.com/MuaazAttari/Student-Addmission-Form',
    caseStudy: {
      overview: 'An automated admission management system that streamlines the student enrollment process with automated notifications and centralized data management.',
      problem: 'Educational institutions were using manual paper-based admission processes. This led to lost forms, delayed responses, poor communication with applicants, and administrative overhead tracking applications.',
      solution: 'Developed a web-based system with online form submission, automatic email confirmations to students, admin notifications for new applications, centralized dashboard for tracking all applications, and automated status updates.',
      techStack: ['HTML5', 'Python', 'Email API', 'CSS3', 'Git'],
      challenges: [
        {
          title: 'Email Deliverability',
          description: 'Ensuring emails reached inbox not spam. Configured SPF, DKIM records and used reputable email service.',
        },
        {
          title: 'Form Validation',
          description: 'Creating comprehensive validation that catches errors without frustrating users required multiple iterations.',
        },
        {
          title: 'Data Privacy',
          description: 'Student data is sensitive. Implemented encryption at rest and secure transmission protocols.',
        },
      ],
      learnings: [
        'Automation saves time but requires careful error handling',
        'Email communication is critical for user trust',
        'Data privacy cannot be an afterthought in education tech',
        'Simple UI reduces support tickets significantly',
      ],
    },
  },
  {
    id: 4,
    title: 'Birthday Countdown Calculator',
    description: 'An interactive tool that calculates the remaining time until your next birthday in real-time.',
    image: '/images/projects/birthday-countdown.jpg',
    tags: ['JavaScript', 'HTML', 'CSS'],
    liveUrl: undefined,
    githubUrl: 'https://github.com/MuaazAttari/BirthDay-remaining-time-Calculator',
    caseStudy: {
      overview: 'A fun, interactive web tool that shows real-time countdown to your next birthday with days, hours, minutes, and seconds precision.',
      problem: 'Wanted to create a simple, engaging tool that demonstrates JavaScript date manipulation and real-time updates. Also a great learning project for understanding intervals and DOM manipulation.',
      solution: 'Built a clean interface where users input their birthday, then see a live countdown updating every second. Added visual progress bar and shareable results.',
      techStack: ['JavaScript ES6+', 'HTML5', 'CSS3', 'Git'],
      challenges: [
        {
          title: 'Leap Year Handling',
          description: 'Accurately calculating birthdays for people born on Feb 29 required special leap year logic.',
        },
        {
          title: 'Timezone Awareness',
          description: 'Ensuring countdown works correctly regardless of user timezone required careful Date object handling.',
        },
        {
          title: 'Performance',
          description: 'Updating every second without causing reflows or performance issues required optimized DOM updates.',
        },
      ],
      learnings: [
        'JavaScript Date object is trickier than it seems',
        'Real-time updates require careful performance consideration',
        'Simple projects can teach fundamental concepts deeply',
        'Edge cases (leap years, timezones) matter for accuracy',
      ],
    },
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const handleNext = () => {
    const currentIndex = projects.findIndex((p) => p.id === selectedProject?.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  const handlePrevious = () => {
    const currentIndex = projects.findIndex((p) => p.id === selectedProject?.id);
    const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    setSelectedProject(projects[prevIndex]);
  };

  const currentIndex = selectedProject ? projects.findIndex((p) => p.id === selectedProject.id) : -1;

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

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onViewDetails={() => handleOpenModal(project)}
            />
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

      {/* Case Study Modal */}
      <CaseStudyModal
        caseStudy={selectedProject ? { ...selectedProject.caseStudy, id: selectedProject.id, title: selectedProject.title, liveUrl: selectedProject.liveUrl, githubUrl: selectedProject.githubUrl } : null}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onNext={handleNext}
        onPrevious={handlePrevious}
        hasNext={currentIndex < projects.length - 1}
        hasPrevious={currentIndex > 0}
      />
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
  onViewDetails: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onViewDetails }) => {
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
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
          {/* Project image */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />

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
            <motion.button
              onClick={onViewDetails}
              className="p-3 bg-gradient-to-r from-primary to-accent text-black rounded-full shadow-lg hover:shadow-primary/50 transition-all"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`View case study for ${project.title}`}
            >
              <span className="text-lg font-bold">📖</span>
            </motion.button>
          </motion.div>

          {/* Project number badge */}
          <div className="absolute top-3 left-3 px-3 py-1 bg-background/80 backdrop-blur-sm border border-card-border rounded-full text-xs text-primary font-medium">
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

          {/* View Details Button (Always Visible on Mobile) */}
          <button
            onClick={onViewDetails}
            className="mt-4 w-full py-2.5 px-4 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-lg text-sm font-medium text-primary hover:bg-primary/20 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
          >
            View Case Study
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Bottom accent line */}
        <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

export default Projects;
