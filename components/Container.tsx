import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'sm' | 'md' | 'lg' | 'none';
}

const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '', 
  maxWidth = '2xl', 
  padding = 'md' 
}) => {
  const maxWidthClass = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full',
  }[maxWidth];

  const paddingClass = {
    none: 'px-0',
    sm: 'px-4',
    md: 'px-6',
    lg: 'px-8',
  }[padding];

  return (
    <div className={`mx-auto ${maxWidthClass} ${paddingClass} w-full ${className}`}>
      {children}
    </div>
  );
};

export default Container;