'use client';

import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './Button';

interface CaseStudy {
  id: number;
  title: string;
  overview: string;
  problem: string;
  solution: string;
  techStack: string[];
  challenges: { title: string; description: string }[];
  learnings: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  isOpen,
  onClose,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
}) => {
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && hasNext) {
        onNext();
      } else if (e.key === 'ArrowLeft' && hasPrevious) {
        onPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrevious, hasNext, hasPrevious]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!caseStudy) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="relative bg-background border border-card-border rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-background/95 backdrop-blur-sm border-b border-card-border">
                <h2 className="text-lg sm:text-xl font-bold text-primary line-clamp-1">
                  {caseStudy.title}
                </h2>
                <div className="flex items-center gap-2">
                  {/* Navigation */}
                  <div className="flex items-center gap-1 mr-2">
                    <button
                      onClick={onPrevious}
                      disabled={!hasPrevious}
                      className="p-2 rounded-lg hover:bg-card-bg disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      aria-label="Previous project"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={onNext}
                      disabled={!hasNext}
                      className="p-2 rounded-lg hover:bg-card-bg disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      aria-label="Next project"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                  {/* Close button */}
                  <button
                    onClick={onClose}
                    className="p-2 rounded-lg hover:bg-card-bg transition-colors"
                    aria-label="Close modal"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-6 sm:p-8">
                {/* Overview */}
                <section className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">📋</span>
                    <h3 className="text-lg font-bold text-primary">Overview</h3>
                  </div>
                  <p className="text-secondary leading-relaxed">{caseStudy.overview}</p>
                </section>

                {/* Problem */}
                <section className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">🎯</span>
                    <h3 className="text-lg font-bold text-primary">Problem</h3>
                  </div>
                  <div className="bg-card-bg border border-card-border rounded-xl p-4">
                    <p className="text-secondary leading-relaxed">{caseStudy.problem}</p>
                  </div>
                </section>

                {/* Solution */}
                <section className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">💡</span>
                    <h3 className="text-lg font-bold text-primary">Solution</h3>
                  </div>
                  <p className="text-secondary leading-relaxed">{caseStudy.solution}</p>
                </section>

                {/* Tech Stack */}
                <section className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">🛠️</span>
                    <h3 className="text-lg font-bold text-primary">Tech Stack</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-card-bg to-card-bg-hover border border-card-border rounded-lg text-sm text-secondary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Challenges */}
                <section className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">⚡</span>
                    <h3 className="text-lg font-bold text-primary">Challenges</h3>
                  </div>
                  <div className="space-y-3">
                    {caseStudy.challenges.map((challenge, index) => (
                      <div
                        key={index}
                        className="bg-card-bg border border-card-border rounded-xl p-4"
                      >
                        <h4 className="font-semibold text-primary mb-2">{challenge.title}</h4>
                        <p className="text-secondary text-sm leading-relaxed">
                          {challenge.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Learnings */}
                <section className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">🎓</span>
                    <h3 className="text-lg font-bold text-primary">Learnings</h3>
                  </div>
                  <ul className="space-y-2">
                    {caseStudy.learnings.map((learning, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-secondary"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span className="leading-relaxed">{learning}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Action Buttons */}
                <section className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-card-border">
                  {caseStudy.liveUrl && (
                    <Button variant="primary" size="lg" href={caseStudy.liveUrl} target="_blank">
                      <ExternalLink size={18} className="mr-2" />
                      View Live Demo
                    </Button>
                  )}
                  {caseStudy.githubUrl && (
                    <Button
                      variant="outline"
                      size="lg"
                      href={caseStudy.githubUrl}
                      target="_blank"
                      className="border-card-border text-primary hover:bg-card-bg"
                    >
                      <Github size={18} className="mr-2" />
                      View Code
                    </Button>
                  )}
                </section>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyModal;
