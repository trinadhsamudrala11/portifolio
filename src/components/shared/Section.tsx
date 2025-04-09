import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
}

export const Section = ({ children, className = '', id, title, subtitle }: SectionProps) => (
  <section id={id} className={`py-24 ${className}`}>
    <div className="container mx-auto px-4">
      {(title || subtitle) && (
        <div className="max-w-3xl mx-auto text-center mb-16">
          {title && <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">{title}</h2>}
          {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
);