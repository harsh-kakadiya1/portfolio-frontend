import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMobile } from '../../hooks/useMobile';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isMobile } = useMobile();

  const navItems = [
    { id: 'about', label: 'Harsh', icon: '◉', path: '/' },
    { id: 'terminal', label: 'Terminal', icon: '▣', path: '/terminal' },
    { id: 'projects', label: 'Projects', icon: '▲', path: '/projects' },
    { id: 'playground', label: 'Playground', icon: '◈', path: '/playground' },
    { id: 'contact', label: 'Contact', icon: '✉', path: '/contact' }
  ];

  const getCurrentPage = () => {
    const currentPath = location.pathname;
    const currentItem = navItems.find(item => item.path === currentPath);
    return currentItem ? currentItem.id : 'about';
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const currentPage = getCurrentPage();

  return (
    <nav className={`fixed ${isMobile ? 'top-2' : 'top-6'} left-1/2 transform -translate-x-1/2 z-50`}>
      <div className={`bg-black/20 backdrop-blur-lg border border-white/10 ${isMobile ? 'rounded-xl px-2 py-1' : 'rounded-2xl px-3 py-2'} shadow-2xl`}>
        <div className={`flex items-center ${isMobile ? 'gap-1' : 'gap-3'}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.path)}
              className={`relative ${isMobile ? 'px-2 py-2' : 'px-4 py-2'} rounded-xl font-medium ${isMobile ? 'text-xs' : 'text-sm'} transition-colors duration-300 ${
                currentPage === item.id
                  ? 'text-white bg-white/20'
                  : 'text-gray-300 hover:text-white'
              } ${isMobile ? 'min-w-[44px] min-h-[44px]' : ''}`}
            >
              {/* Active indicator */}
              {currentPage === item.id && (
                <div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-xl border border-cyan-400/30"
                />
              )}
              
              {/* Content */}
              <div className={`relative flex items-center ${isMobile ? 'justify-center' : 'gap-2'}`}>
                <span className={isMobile ? 'text-sm' : 'text-base'}>{item.icon}</span>
                <span className={`${isMobile ? 'hidden' : 'hidden sm:inline'}`}>{item.label}</span>
              </div>

              {/* Hover glow effect */}
              <div
                className="absolute inset-0 rounded-xl opacity-0"
                style={{
                  boxShadow: currentPage === item.id 
                    ? "0 0 20px rgba(0, 212, 170, 0.3)" 
                    : "0 0 15px rgba(255, 255, 255, 0.1)"
                }}
              />
            </button>
          ))}
        </div>

        {/* Glassmorphism border glow */}
        <div className={`absolute inset-0 ${isMobile ? 'rounded-xl' : 'rounded-2xl'} bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 opacity-50 pointer-events-none`} />
      </div>
    </nav>
  );
}
