const projects = [
  {
    id: "1",
    name: "AI Portfolio Terminal",
    description: "Interactive AI-powered portfolio website with retro terminal interface and real-time chat functionality",
    tech_stack: ["React", "Node.js", "Express", "OpenAI API", "Tailwind CSS", "Vite"],
    github_url: "https://github.com/harsh-kakadiya1/PORTFOLIO",
    live_demo: "YOU ARE VIEWING IT NOW",
    category: "web_development",
    status: "you are viewing it now",
    ascii_art: "    💻 TERMINAL\n    ┌─────────────┐\n    │ > /help     │\n    │ > /projects │\n    │ > AI Chat   │\n    └─────────────┘"
  },
  {
    id: "2",
    name: "DataMimic.io",
    description: "Advanced Synthetic Data Generation & No-Code EDA/Pre-processing Platform - A comprehensive web application for generating highly customizable synthetic datasets and performing intuitive, no-code Exploratory Data Analysis (EDA) and data pre-processing",
    tech_stack: ["Python", "Flask", "Pandas", "NumPy", "Scikit-learn", "Faker", "HTML", "CSS", "Bootstrap 5", "JavaScript"],
    github_url: "https://github.com/harsh-kakadiya1/DataMimic.io",
    live_demo: "https://datamimic-io.onrender.com/",
    category: "ai_ml",
    status: "completed version-0.7.1 is available | version-0.7.2 is in progress",
    ascii_art: "    📊 DATA MIMIC\n    ┌─────────────┐\n    │ 🔄 Generate │\n    │ 📈 Analyze  │\n    │ 🛠️ Process  │\n    └─────────────┘"
  },
  {
    id: "3",
    name: "StyleMe - AI Fashion Stylist",
    description: "A Flutter-based mobile application that serves as a personal fashion assistant, providing outfit recommendations and style analysis",
    tech_stack: ["Flutter", "Dart", "Firebase", "TensorFlow Lite", "Google ML Kit"],
    github_url: "https://github.com/harsh-kakadiya1/StyleMe--Your-Personal-AI-Fashion-Stylist",
    live_demo: "https://github.com/harsh-kakadiya1/StyleMe--Your-Personal-AI-Fashion-Stylist",
    category: "mobile_app",
    status: "Completed with core features | UI/UX improvements in progress",
    ascii_art: "    👗 STYLE ME\n    ┌─────────────┐\n    │ 👕 Outfits  │\n    │ 👖 Wardrobe  │\n    │ 🎨 Style AI  │\n    └─────────────┘"
  }
];

// Get all projects
export const getAllProjects = () => {
  return projects;
};

// Get project by ID
export const getProjectById = (id) => {
  return projects.find(project => project.id === id) || null;
};

// Get projects by category
export const getProjectsByCategory = (category) => {
  return projects.filter(project => project.category === category);
};

export default projects;
