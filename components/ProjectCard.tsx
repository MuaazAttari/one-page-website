import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-full flex flex-col"
      whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
            {project.category}
          </span>
        </div>
        
        <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>
        
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="text-xs font-medium px-2.5 py-0.5 rounded bg-gray-100 text-gray-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <a 
          href={project.link} 
          className="flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
        >
          View Project <ExternalLink className="ml-1 w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;