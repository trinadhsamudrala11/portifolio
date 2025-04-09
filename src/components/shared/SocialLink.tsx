import React from 'react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactElement;
  label: string;
}

export const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-white/50 backdrop-blur-sm rounded-full text-gray-600 hover:text-indigo-600 hover:bg-white transition-all duration-300 shadow-sm"
    aria-label={label}
  >
    {React.cloneElement(icon, { className: 'w-6 h-6' })}
  </a>
);