import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  href?: string;
  target?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  onClick,
  disabled = false,
  className = '',
  href,
  target,
}) => {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none ring-offset-background';

  // Variant classes - Updated for theme support
  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary to-cyan-600 text-black hover:from-primary hover:to-cyan-500 shadow-lg hover:shadow-primary/50',
    secondary: 'bg-gray-800 dark:bg-gray-800 text-white hover:bg-gray-700 dark:hover:bg-gray-600 border border-gray-700 dark:border-gray-600',
    outline: 'border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary',
    ghost: 'bg-transparent text-secondary hover:bg-card-bg hover:text-primary',
  }[variant];

  // Size classes
  const sizeClasses = {
    sm: 'text-xs py-2 px-4',
    md: 'text-sm py-2.5 px-5',
    lg: 'text-base py-3.5 px-8',
  }[size];

  const buttonClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`;

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={buttonClasses}
        onClick={handleClick}
        whileHover={disabled ? undefined : { scale: 1.03 }}
        whileTap={disabled ? undefined : { scale: 0.98 }}
        aria-disabled={disabled}
        role="button"
        tabIndex={0}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled}
      whileHover={disabled ? undefined : { scale: 1.03 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      aria-disabled={disabled}
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {children}
    </motion.button>
  );
};

export default Button;