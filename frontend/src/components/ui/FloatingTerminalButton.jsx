import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const FloatingTerminalButton = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Don't show the button on the terminal page
  if (location.pathname === '/terminal') return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        onClick={() => navigate('/terminal')}
        className="relative group p-4 rounded-2xl transition-all duration-300
                 bg-white/5 border border-white/10 shadow-lg shadow-cyan-500/5
                 hover:bg-white/10 hover:shadow-cyan-500/10 backdrop-blur-xl"
        whileHover={{ 
          scale: 1.05,
          boxShadow: '0 8px 32px 0 rgba(6, 182, 212, 0.1)'
        }}
        whileTap={{ 
          scale: 0.98,
          boxShadow: '0 4px 20px 0 rgba(6, 182, 212, 0.05)'
        }}
        title="Chat with AI"
        aria-label="Open AI Chat"
      >
        <div className="relative">
          {/* Button content */}
          <div className="relative flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-white/90" />
          </div>
        </div>
      </motion.button>
    </div>
  );
};

export default FloatingTerminalButton;
