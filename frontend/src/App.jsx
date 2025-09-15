import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/navigation/Navbar';
import FloatingTerminalButton from './components/ui/FloatingTerminalButton';
import About from './pages/About';
import Terminal from './pages/Terminal';
import Projects from './pages/Projects';
import Playground from './pages/Playground';
import Contact from './pages/Contact';

// Grid Background Component
const GridBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,transparent,black)]">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white relative">
        <GridBackground />
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
        </div>
      </div>
    </Router>
  );
}

export default App;