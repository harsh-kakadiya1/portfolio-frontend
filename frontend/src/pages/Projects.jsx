import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import { useMobile } from '../hooks/useMobile';

export default function Projects() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const { isMobile, isTablet } = useMobile();
  const navigate = useNavigate();

  // Mouse tracking for parallax effect (disabled on mobile for performance)
  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 7;
      const y = (e.clientY / window.innerHeight) * 7;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  const projects = [
    {
      id: 1,
      title: "AI-Powered Portfolio",
      description: "Interactive portfolio with terminal interface and AI features",
      tech: ["React", "Framer Motion", "Node.js"],
      image: "/images/projects/portfolio-preview.png",
      github: "https://github.com/harsh-kakadiya1/portfolio",
      live: "https://harsh-kakadiya.vercel.app/",
      status: "completed"
    },
    {
        id: 2,
        title: "StyleMe - Fashion Stylist",
        description: "StyleMe is a Flutter-based mobile application designed to be your personal fashion assistant.",
        tech: ["Flutter", "Dart"],
        image: "/images/projects/styleme-preview.png",
        github: "https://github.com/harsh-kakadiya1/StyleMe--Your-Personal-AI-Fashion-Stylist",
        live: "https://drive.google.com/file/d/1cEGu5loU0iYGm8pfTZFS5jb9EX4E9Pbe/view?usp=drivesdk",
        status: "in-progress"
      },
    {
      id: 3,
      title: "DataMimic.io",
      description: "Advanced Synthetic Data Generation & No-Code EDA/Pre-processing Platform",
      tech: ["Python", "Flask", "Pandas", "NumPy", "Scikit-learn", "Faker", "Bootstrap 5", "JavaScript"],
      image: "/images/projects/datamimic-preview.png",
      github: "https://github.com/harsh-kakadiya1/DataMimic.io",
      live: "https://datamimic-io.onrender.com/",
      status: "completed"
    },
    {
      id: 4,
      title: "Arthiik invoice management",
      description: "Arthiik is a web-based invoice generator application built with Next.js, TypeScript, React. It provides an easy way to create and manage professional invoices.",
      tech: ["Next.js","TypeScript","React","Shadcn UI","TailwindCSS"],
      image: "/images/projects/arthiik-preview.png",
      github: "https://github.com/harsh-kakadiya1/Arthik-invoice-management",
      live: "#",
      status: "in-progress"
    },
      {
        id: 5,
        title: "INFINITE-WIKI",
        description: "An AI-powered encyclopedia application that generates encyclopedia-style definitions and ASCII art visualizations for any topic using Google's Gemini 2.5 Flash API.",
        tech: ["React 19","TypeScript","Vite 6","Gemini 2.5 Flash"],
        image: "/images/projects/infinite-wiki-preview.png",
        github: "https://github.com/harsh-kakadiya1/INFINITE-WIKI",
        live: "https://infinite-wikip.netlify.app/",
        status: "completed"
      },
      {
        id: 6,
        title: "nyayasetu.AI ",
        description: "NyayaSetu AI is designed to demystify legal documents. It provides multi-language insights, students, and small business owners to interpret and act on their legal documents confidently—without needing a lawyer for the initial review.",
        tech: ["React 19","TypeScript","Vite 6","Gemini 2.5 Flash"],
        image: "/images/projects/nyayasetu.ai-preview.png",
        github: "https://github.com/harsh-kakadiya1/nyayasetu.AI",
        live: "https://nyaya-setu-ai.netlify.app/",
        status: "completed"
      },
      {
        id: 7,
        title: "Hand Gesture Filter",
        description: "This Python application uses your webcam and hand gestures to apply real-time image filters to a selected region of the video feed.",
        tech: ["Python","OpenCV","MediaPipe","NumPy"],
        image: "/images/projects/hand-gesture-filter-preview.png",
        github: "https://github.com/harsh-kakadiya1/computer-vision/tree/main/Vision-Gestures",
        live: "#",
        status: "completed"
      },
      {
        id: 8,
        title: "Face Recognition Studio",
        description: "Face Recognition Studio is a modern, responsive web UI for an AI-powered face matching and recognition system.",
        tech: ["HTML5","CSS3","Vanilla JavaScript"],
        image: "/images/projects/face-recognition-studio-preview.png",
        github: "https://github.com/harsh-kakadiya1/FaceReco-Studio",
        live: "https://facerec-studio.netlify.app/home",
        status: "completed"
      },
      {
        id: 9,
        title: "Machine Learning Projects",
        description: "Vast collection of ML projects for data analysis and model evaluation and comparison for different datasets. it is made for learning and understanding the machine learning models",
        tech: ["Python","NumPy","Pandas","Matplotlib","Scikit-learn"],
        image: "/images/projects/ml-project-preview.png",
        github: "https://github.com/harsh-kakadiya1/Machine-Learning-projects",
        live: "#",
        status: "in-progress"
      },
    
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Main Content */}
      <div className={`relative z-10 container mx-auto ${isMobile ? 'px-3 py-16 pt-20' : 'px-4 py-24 pt-32'}`}>
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-center ${isMobile ? 'mb-12' : 'mb-20'}`}
        >
          <h1 className={`${isMobile ? 'text-4xl' : 'text-6xl md:text-8xl'} font-bold text-white ${isMobile ? 'mb-4' : 'mb-6'}`}>
            My <span className="text-cyan-400">Projects</span>
          </h1>
          <p className={`${isMobile ? 'text-lg' : 'text-2xl'} text-gray-300 ${isMobile ? 'max-w-sm' : 'max-w-3xl'} mx-auto leading-relaxed ${isMobile ? 'px-2' : ''}`}>
            A showcase of my technical journey and creative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'} ${isMobile ? 'max-w-sm mx-auto' : ''}`}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`bg-black/30 backdrop-blur-sm border border-white/20 ${isMobile ? 'rounded-xl p-4' : 'rounded-2xl p-6'} hover:border-cyan-400/50 transition-all duration-300 group`}
            >
              {/* Project Image */}
              <div className={`${isMobile ? 'h-40 mb-4' : 'h-48 mb-6'} bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg overflow-hidden relative`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Status Badge */}
                <div className={`absolute ${isMobile ? 'top-2 right-2' : 'top-3 right-3'}`}>
                  <span className={`${
                    project.status === 'completed' 
                      ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                  } px-2 py-1 rounded-full text-xs font-medium border backdrop-blur-sm`}>
                    {project.status === 'completed' ? '✓ Completed' : '⏳ In Progress'}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div>
                <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold text-white ${isMobile ? 'mb-2' : 'mb-3'} group-hover:text-cyan-400 transition-colors`}>
                  {project.title}
                </h3>
                <p className={`text-gray-300 ${isMobile ? 'text-sm mb-3 leading-relaxed' : 'text-base mb-4 leading-relaxed'}`}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className={`flex flex-wrap gap-2 ${isMobile ? 'mb-4' : 'mb-6'}`}>
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`bg-cyan-500/10 text-cyan-400 ${isMobile ? 'px-2 py-1 text-xs' : 'px-3 py-1 text-sm'} rounded-full border border-cyan-500/20 font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className={`flex ${isMobile ? 'flex-col gap-2' : 'gap-4'}`}>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${isMobile ? 'w-full py-2 text-sm' : 'flex-1 py-3 text-base'} bg-black/20 backdrop-blur-sm text-white px-4 rounded-lg font-medium transition-all hover:bg-black/40 border border-white/20 text-center flex items-center justify-center gap-2`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </motion.a>
                  
                  {project.live !== '#' && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        scale: isMobile ? 1.02 : 1.05,
                        boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className={`${isMobile ? 'w-full py-2 text-sm' : 'flex-1 py-3 text-base'} bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/50 text-cyan-400 px-4 rounded-lg font-medium transition-all hover:bg-cyan-500/30 hover:border-cyan-400/70 hover:text-cyan-300 text-center flex items-center justify-center gap-2 group`}
                    >
                      <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`${isMobile ? 'mt-12' : 'mt-20'} text-center bg-black/30 backdrop-blur-sm border border-white/50 ${isMobile ? 'rounded-xl p-6' : 'rounded-2xl p-12'}`}
        >
          <h2 className={`${isMobile ? 'text-2xl' : 'text-4xl md:text-5xl'} font-bold text-white ${isMobile ? 'mb-3' : 'mb-6'}`}>
            Interested in <span className="text-cyan-400">Collaborating?</span>
          </h2>
          <p className={`${isMobile ? 'text-base mb-6' : 'text-xl mb-8'} text-gray-300 ${isMobile ? 'max-w-sm' : 'max-w-2xl'} mx-auto`}>
            Let's build something amazing together. I'm always open to new opportunities and exciting projects.
          </p>
          
          <motion.button
            onClick={() => navigate('/contact')}
            whileHover={{ 
              scale: isMobile ? 1.02 : 1.05, 
              boxShadow: "0 0 30px rgba(0, 212, 170, 0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
            className={`bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/50 text-cyan-400 hover:bg-cyan-500/30 hover:border-cyan-400/70 ${isMobile ? 'px-6 py-3 text-base' : 'px-8 py-4 text-lg'} rounded-xl font-bold transition-all`}
          >
            Get In Touch
          </motion.button>
        </motion.section>
      </div>
      
    </div>
  );
}
