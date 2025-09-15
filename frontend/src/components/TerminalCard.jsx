import React from 'react';
import { motion } from 'framer-motion';

const TerminalCard = ({ title, description, icon: Icon, color, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="relative group"
    >
      <div className="h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10">
        <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
        
        {/* Animated border effect */}
        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-cyan-400/20 transition-all duration-300 pointer-events-none"></div>
      </div>
    </motion.div>
  );
};

export default TerminalCard;
