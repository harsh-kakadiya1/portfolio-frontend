import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/navigation/Navbar';
import FloatingTerminalButton from './components/ui/FloatingTerminalButton';
import { Component as AnimatedBackground } from './components/ui/raycast-animated-blue-background';
import { ThemeProvider } from './components/ui/theme-provider';
import CustomCursor from './components/ui/CustomCursor';
import About from './pages/About';
import Terminal from './pages/Terminal';
import Projects from './pages/Projects';
import Playground from './pages/Playground';
import Contact from './pages/Contact';
import BootSequence from './components/terminal/BootSequence';
import { useMobile } from './hooks/useMobile';

function App() {
  const [showBootScreen, setShowBootScreen] = useState(false);
  const { isMobile } = useMobile();

  useEffect(() => {
    // Immediate mobile detection
    const isMobileDevice = () => {
      const width = window.innerWidth;
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      return width < 768 || isMobileUA || (isTouchDevice && width < 1024);
    };

    // Skip boot screen entirely on mobile
    if (isMobileDevice()) {
      return;
    }

    const hasBootedThisSession = sessionStorage.getItem('hasBooted');
    const isManualRefresh = performance.getEntriesByType('navigation')[0]?.type === 'reload';
    
    // Show boot screen only on desktop for first visit or manual refresh
    if (isManualRefresh || !hasBootedThisSession) {
      setShowBootScreen(true);
      sessionStorage.setItem('hasBooted', 'true');
    }
  }, []);

  const handleBootComplete = () => {
    setShowBootScreen(false);
  };

  if (showBootScreen) {
    return <BootSequence onComplete={handleBootComplete} />;
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <Router>
        <div className="min-h-screen bg-black text-white relative">
          {/* Global Animated Background - Covers All Pages */}
          <div className="fixed inset-0 z-0 w-full h-full">
            <AnimatedBackground />
            {/* Subtle overlay for better content readability */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          
        <div className="relative z-10">
          <Navbar />
          <main className="pt-16 md:pt-20">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/terminal" element={<Terminal />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/playground" element={<Playground />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </main>
          <FloatingTerminalButton />
          <CustomCursor />
        </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;