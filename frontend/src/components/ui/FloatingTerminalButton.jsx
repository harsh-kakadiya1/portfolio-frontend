import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const FloatingTerminalButton = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Don't show the button on the terminal page
  if (location.pathname === '/terminal') return null;

  return (
    <motion.button
      onClick={() => navigate('/terminal')}
      className="fixed bottom-6 right-6 z-50 
                 bg-white/10 backdrop-blur-lg 
                 border border-white/20 
                 rounded-2xl p-3 
                 shadow-lg shadow-cyan-500/20 
                 hover:shadow-cyan-500/40 
                 transition-all duration-300 
                 flex items-center justify-center
                 group"
      whileHover={{ 
        scale: 1.05,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        boxShadow: '0 8px 32px 0 rgba(6, 182, 212, 0.3)'
      }}
      whileTap={{ 
        scale: 0.98,
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 20px 0 rgba(6, 182, 212, 0.15)'
      }}
      exit={{ opacity: 0, y: 20 }}
      title="Chat with my AI assistant"
      aria-label="Open terminal assistant"
    >
      <div className="relative">
        {/* Inner glow effect */}
        <div className="absolute inset-0 rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-all duration-300" />
        
        {/* Button content */}
        <div className="relative flex items-center px-3 py-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" 
            />
          </svg>
          <span className="ml-2 text-sm font-medium text-white/90 hidden sm:inline">AI Assistant</span>
        </div>
      </div>
    </motion.button>
  );
};

export default FloatingTerminalButton;
