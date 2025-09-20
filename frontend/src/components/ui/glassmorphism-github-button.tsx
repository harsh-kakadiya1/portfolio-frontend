import React from 'react';

interface GlassmorphismGitHubButtonProps {
  href: string;
  className?: string;
}

const GlassmorphismGitHubButton: React.FC<GlassmorphismGitHubButtonProps> = ({ 
  href, 
  className = "" 
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group ${className}`}
      aria-label="GitHub"
    >
      <div className="relative w-12 h-12 flex items-center justify-center border-none bg-transparent rounded-lg cursor-pointer transition-all duration-300 overflow-hidden">
        {/* Background tilt element */}
        <div className="absolute inset-0 bg-black/80 rounded-lg transition-all duration-300 group-hover:rotate-[35deg] group-hover:origin-bottom pointer-events-none" />
        
        {/* Glassmorphism container */}
        <div className="relative w-full h-full flex items-center justify-center bg-transparent backdrop-blur-0 border border-gray-400/30 rounded-lg transition-all duration-300 group-hover:bg-gray-400/20 group-hover:backdrop-blur-sm">
          {/* GitHub Icon */}
          <svg 
            className="w-6 h-6 text-white transition-all duration-300 group-hover:scale-110" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-.6-1.12-.75-1.12-.75-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.36 1.08 2.93.83.1-.63.35-1.08.63-1.33-2.2-.24-4.52-1.1-4.52-4.9 0-1.08.38-1.97 1.03-2.67-.1-.24-.45-1.23.1-2.56 0 0 .84-.26 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.9-1.28 2.75-1.02 2.75-1.02.55 1.33.2 2.32.1 2.56.65.7 1.03 1.59 1.03 2.67 0 3.8-2.32 4.66-4.52 4.9.36.3.68.92.68 1.85v2.75c0 .26.18.58.7.48C21.13 20.17 24 16.42 24 12c0-5.52-4.48-10-10-10z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default GlassmorphismGitHubButton;
