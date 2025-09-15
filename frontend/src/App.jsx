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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
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
    </Router>
  );
}

export default App;