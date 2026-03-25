import { Variants } from 'framer-motion';

// Professional animation variants for premium feel
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const slideInFromLeft: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const slideInFromRight: Variants = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const hoverEffect: Variants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
};

export const cardHover: Variants = {
  rest: {
    y: 0,
    boxShadow: 'var(--shadow)',
  },
  hover: {
    y: -5,
    boxShadow: 'var(--shadow-lg)',
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
};