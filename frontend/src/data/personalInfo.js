export const personalInfo = {
  name: "Harsh Kakadiya",
  role: "3'rd year b.tech student specializing in artificial itelligence and machine learning & creating ai projects and web applications specialization in frontend and ai - ml domain and power bi and tablue expert",
  location: "Surat, Gujarat, India",
  about: "I'm a passionate developer with expertise in building modern web applications and exploring AI/ML technologies. I love solving complex problems and creating efficient, user-friendly solutions.",
  skills: [
    "JavaScript/TypeScript", "React", "Node.js", "Python",
    "Machine Learning", "Deep Learning", "Computer Vision",
    "MongoDB", "PostgreSQL", "Docker", "AWS"
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Gujarat Technological University",
      year: "2021 - 2025"
    }
  ],
  contact: {
    email: "harshkakadiya@example.com",
    github: "https://github.com/harsh-kakadiya1",
    linkedin: "https://linkedin.com/in/harsh-kakadiya",
    twitter: "https://twitter.com/harshkakadiya1"
  }
};

export const projects = [
  {
    id: 1,
    title: "AI-Powered Portfolio",
    description: "An interactive portfolio with terminal interface and AI assistant integration.",
    technologies: ["React", "Node.js", "OpenAI API", "Framer Motion"],
    github: "https://github.com/harsh-kakadiya1/portfolio",
    demo: "https://harshkakadiya.com",
    features: [
      "Interactive terminal interface",
      "AI-powered chat assistant",
      "Responsive design",
      "Project showcase"
    ]
  },
  {
    id: 2,
    title: "StyleMe - AI Fashion Stylist",
    description: "A Flutter-based mobile application that serves as a personal fashion assistant.",
    technologies: ["Flutter", "Dart", "Firebase", "TensorFlow Lite"],
    github: "https://github.com/harsh-kakadiya1/StyleMe--Your-Personal-AI-Fashion-Stylist",
    features: [
      "Outfit recommendations",
      "Virtual try-on",
      "Wardrobe management",
      "Style analysis"
    ]
  },
  {
    id: 3,
    title: "DataMimic.io",
    description: "Advanced Synthetic Data Generation & No-Code EDA/Pre-processing Platform",
    technologies: ["Python", "Streamlit", "Pandas", "Scikit-learn"],
    github: "https://github.com/harsh-kakadiya1/DataMimic",
    features: [
      "Synthetic data generation",
      "No-code data preprocessing",
      "Exploratory data analysis",
      "Data visualization"
    ]
  }
];

export const experience = [
  {
    id: 1,
    role: "AI/ML Intern",
    company: "Tech Innovations Inc.",
    duration: "May 2023 - Present",
    responsibilities: [
      "Developed and deployed machine learning models for image classification",
      "Optimized model performance for real-time inference",
      "Collaborated with cross-functional teams to integrate AI solutions"
    ]
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "WebCraft Solutions",
    duration: "Jan 2022 - Apr 2023",
    responsibilities: [
      "Built responsive web applications using React and Node.js",
      "Implemented RESTful APIs and database schemas",
      "Improved application performance and user experience"
    ]
  }
];

// Context for AI to understand how to respond
export const aiContext = `You are Agastya, the AI assistant for Harsh Kakadiya's portfolio. Your role is to help visitors learn about Harsh's skills, projects, and experience in a friendly and professional manner.

Key points to remember:
1. Always be helpful, polite, and professional
2. Use the provided project and experience data to answer questions accurately
3. For technical questions, reference Harsh's skills and technologies
4. Keep responses concise but informative
5. You can suggest viewing specific projects or contacting Harsh for more details
6. If you don't know something, say so honestly but offer to help with what you do know

Example responses:
- "Harsh has experience with [technology] in his [project/role] where he [specific detail]"
- "You can check out the [project name] project on GitHub: [link]"
- "For more details, you can connect with Harsh on LinkedIn: [link]"`;
