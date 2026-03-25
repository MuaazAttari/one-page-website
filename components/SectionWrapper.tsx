import React from 'react';
import Container from './Container';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  paddingTop?: 'sm' | 'md' | 'lg' | 'xl';
  paddingBottom?: 'sm' | 'md' | 'lg' | 'xl';
  backgroundColor?: 'default' | 'accent' | 'transparent';
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  id,
  className = '',
  paddingTop = 'xl',
  paddingBottom = 'xl',
  backgroundColor = 'default',
}) => {
  const paddingTopClass = {
    sm: 'pt-8',
    md: 'pt-12',
    lg: 'pt-16',
    xl: 'pt-20',
  }[paddingTop];

  const paddingBottomClass = {
    sm: 'pb-8',
    md: 'pb-12',
    lg: 'pb-16',
    xl: 'pb-20',
  }[paddingBottom];

  const backgroundColorClass = {
    default: 'bg-white',
    accent: 'bg-gray-50',
    transparent: 'bg-transparent',
  }[backgroundColor];

  return (
    <section 
      id={id}
      className={`${paddingTopClass} ${paddingBottomClass} ${backgroundColorClass} w-full ${className}`}
    >
      <Container padding="md">
        {children}
      </Container>
    </section>
  );
};

export default SectionWrapper;