import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navigation/Navbar';
import GitHubHeatmap from '../components/github/GitHubHeatmap';

export default function Playground() {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock GitHub data - replace with actual API calls
  const githubStats = {
    user: {
      username: 'harsh-kakadiya1',
      name: 'Harsh Kakadiya',
      avatar: 'https://github.com/harsh-kakadiya1.png',
      bio: 'Maybe i am having your DATA 😉',
      followers: 12,
      following: 8,
      publicRepos: 20,
      stars: 40,
    },
    stats: {
      followers: 12,
      following: 8,
      stars: '40+',
      repositories: '22',
      contributions: '400+',
    },
    featuredRepos: [
      {
        name: 'DataMimic.io',
        description: 'Advanced Synthetic Data Generation & No-Code EDA/Pre-processing Platform',
        stars: 16,
        forks: 1,
        language: 'Python',
        url: 'https://github.com/harsh-kakadiya1/DataMimic.io'
      },
      {
        name: 'nyayasetu.AI',
        description: 'See Your Legal Documents Clearly. Understand Your Rights, Identify Risks, Take Action.',
        stars: 3,
        forks: 0,
        language: 'TypeScript',
        url: 'https://github.com/harsh-kakadiya1/nyayasetu.AI'
      },
      {
        name: 'StyleMe',
        description: 'AI Fashion Stylist mobile application',
        stars: 1,
        forks: 0,
        language: 'Dart',
        url: 'https://github.com/harsh-kakadiya1/StyleMe--Your-Personal-AI-Fashion-Stylist'
      }
    ]
  };

  const githubUsername = 'harsh-kakadiya1'; // Your GitHub username

  const tools = [
    {
      name: "VS CODE",
      description: "My coding sanctuary where ideas transform into reality",
      icon: "",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "CISCO PKT TRACER",
      description: "Network wizardry and infrastructure simulation mastery",
      icon: "",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      name: "OVERLEAF",
      description: "LaTeX perfection for academic and technical documentation",
      icon: "",
      color: "from-green-500 to-green-600"
    },
    {
      name: "GITHUB",
      description: "Code collaboration hub and version control paradise",
      icon: "",
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "GIT",
      description: "Time machine for code - track every brilliant change",
      icon: "",
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "MONGODB",
      description: "NoSQL database magic for scalable data storage",
      icon: "",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      name: "PYTHON",
      description: "The Swiss Army knife of programming languages",
      icon: "",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      name: "POWER BI",
      description: "Transforming raw data into compelling visual stories and insights",
      icon: "",
      color: "from-amber-500 to-amber-600"
    },
    {
      name: "TABLEAU",
      description: "Crafting interactive and shareable data visualizations",
      icon: "",
      color: "from-blue-400 to-blue-500"
    },
    {
      name: "MENDELEY",
      description: "Reference management and academic research organization",
      icon: "",
      color: "from-red-500 to-red-600"
    },
    {
      name: "REACT",
      description: "Building interactive UIs with component-based architecture",
      icon: "",
      color: "from-blue-400 to-blue-500"
    },
    {
      name: "NODE.JS",
      description: "JavaScript runtime powering scalable backend solutions",
      icon: "",
      color: "from-green-400 to-green-500"
    },
    {
      name: "FLASK",
      description: "Lightweight Python web framework for rapid development",
      icon: "",
      color: "from-red-500 to-red-600"
    },
    {
      name: "UBUNTU",
      description: "Linux powerhouse for development and server deployment",
      icon: "",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "VERCEL",
      description: "Lightning-fast deployment platform for modern web apps",
      icon: "",
      color: "from-black to-gray-800"
    },
    {
      name: "NETLIFY",
      description: "Seamless continuous deployment and hosting solution",
      icon: "",
      color: "from-teal-500 to-teal-600"
    },
    {
      name: "RENDER",
      description: "Cloud platform for effortless app deployment and scaling",
      icon: "",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      name: "JAVA",
      description: "Enterprise-grade programming for robust applications",
      icon: "",
      color: "from-red-600 to-red-700"
    },
    {
      name: "ANDROID STUDIO",
      description: "Mobile app development IDE for Android ecosystem",
      icon: "",
      color: "from-green-600 to-green-700"
    },
    {
      name: "SPOTIFY",
      description: "Coding soundtrack curator - music fuels creativity",
      icon: "",
      color: "from-green-500 to-green-400"
    },
    {
      name: "NOTION",
      description: "All-in-one workspace for notes, planning, and organization",
      icon: "",
      color: "from-gray-600 to-gray-700"
    },
    {
      name: "POSTMAN",
      description: "API development and testing platform for seamless integration",
      icon: "",
      color: "from-purple-500 to-purple-600"
    }
  ];

  // Generate stable heatmap data once on component mount
  const heatmapData = useMemo(() => {
    const data = [];
    const now = new Date();
    
    for (let i = 0; i < 30; i++) {
      const date = new Date(now);
      date.setDate(now.getDate() - (29 - i));
      
      // Use a fixed seed for consistent random values
      const seed = new Date(date).toISOString().split('T')[0];
      const randomValue = Math.abs(seed.split('').reduce((a, b) => {
        a = ((a << 5) - a) + b.charCodeAt(0);
        return a & a;
      }, 0)) % 10;
      
      data.push({
        date: date.toISOString().split('T')[0],
        count: randomValue
      });
    }
    
    return data;
  }, []);

  // Function to get color based on count
  const getHeatmapColor = (count) => {
    if (count === 0) return 'bg-gray-800';
    if (count < 3) return 'bg-green-500/30';
    if (count < 6) return 'bg-green-500/60';
    return 'bg-green-500';
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 pt-32">
        {/* GitHub Stats Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="text-cyan-400">GitHub</span> Activity
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              My open-source contributions and development journey
            </p>
          </div>

          {/* Profile Overview */}
          <div className="bg-black/30 backdrop-blur-sm border border-white/50 rounded-2xl p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center">
              <img 
                src={githubStats.user.avatar} 
                alt={githubStats.user.name}
                className="w-24 h-24 rounded-full border-2 border-cyan-500/50 mb-4 md:mb-0 md:mr-6"
              />
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-white">{githubStats.user.name}</h2>
                <p className="text-cyan-400 mb-2">@{githubStats.user.username}</p>
                <p className="text-gray-300 mb-4">{githubStats.user.bio}</p>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {Object.entries(githubStats.stats).map(([key, value]) => (
              <motion.div
                key={key}
                whileHover={{ y: -5 }}
                className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-cyan-400 mb-2">{value}</div>
                <div className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contribution Heatmap */}
          <GitHubHeatmap username={githubUsername} />
          {/* Featured Repositories */}
          <div className="bg-black/30 backdrop-blur-sm border border-white/50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-6">Featured Repositories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {githubStats.featuredRepos.map((repo, i) => (
                <motion.a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="block bg-black/20 hover:bg-black/40 border border-white/20 rounded-xl p-5 transition-all"
                >
                  <div className="flex items-center mb-3">
                    <h4 className="text-lg font-bold text-white">{repo.name}</h4>
                    <span className="ml-auto px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-full">
                      {repo.language}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{repo.description}</p>
                  <div className="flex items-center text-xs text-gray-400">
                    <span className="flex items-center mr-4">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 7a1 1 0 100-2 1 1 0 000 2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                      {repo.stars} stars
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      {repo.forks} forks
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Tools Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              My <span className="text-cyan-400">Toolkit</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The arsenal of tools and technologies that power my development journey
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0, 212, 170, 0.15)"
                }}
                className="bg-black/30 backdrop-blur-sm border border-white/50 rounded-2xl p-6 group cursor-pointer relative overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-4xl mb-4 text-center">
                    {tool.icon}
                  </div>
                  
                  {/* Tool Name */}
                  <h3 className="text-white font-bold text-lg mb-3 text-center group-hover:text-cyan-400 transition-colors">
                    {tool.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm text-center leading-relaxed group-hover:text-gray-300 transition-colors">
                    {tool.description}
                  </p>
                </div>

                {/* Hover Border Glow */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400/30 transition-colors duration-300" />
                
                {/* Corner Accent */}
                <div className="absolute top-3 right-3 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 text-lg">
              Each tool is a brushstroke in the masterpiece of development
            </p>
          </motion.div>
        </motion.section>
      </div>
      
    </div>
  );
}
