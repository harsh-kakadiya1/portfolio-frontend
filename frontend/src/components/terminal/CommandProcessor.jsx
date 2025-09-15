import React from 'react';
import { chatWithGemini } from '../../services/geminiService';
import { getAllProjects, getProjectById, getProjectsByCategory } from '../../data/projects';

const ASCII_ARTS = {
  welcome: `
     ╔═══════════════════════════════════════╗
     ║                                       ║
     ║         WELCOME TO MY PORTFOLIO       ║
     ║                                       ║
     ║          AI-Powered Interface         ║
     ║                                       ║
     ╚═══════════════════════════════════════╝`,
  
  coffee: `
                    (  )   (   )  )
                     ) (   )  (  (
                     ( )  (    ) )
                     _____________
                    <_____________> ___
                    |             |/ _ \
                    |               | | |
                    |               |_| |
                 ___|             |\___/
                /    \___________/    \
                \_____________________/`,
};

export default class CommandProcessor {
  constructor() {
    this.commands = {
      '/help': this.showHelp,
      '/about': this.showAbout,
      '/skills': this.showSkills,
      '/projects': this.showProjects,
      '/project': this.showProject,
      '/contact': this.showContact,
      '/clear': () => ({ type: 'clear' }),
      '/whoami': this.showWhoami,
      '/history': this.showHistory,
      '/matrix': this.matrixEffect,
      '/coffee': this.showCoffee,
      '/sudo': this.sudoResponse,
      '/exit': this.exitResponse
    };
  }

  async processCommand(input, commandHistory) {
    const [command, ...args] = input.toLowerCase().split(' ');
    
    if (this.commands[command]) {
      return await this.commands[command](args, commandHistory);
    }
    
    // Return error for unknown commands
    if (input.startsWith('/')) {
      return {
        type: 'error',
        content: `Command "${command}" not found. Type '/help' to see available commands.`
      };
    }
    
    // Use AI for non-command input
    return await this.aiResponse(input, commandHistory);
  }

  showHelp = () => ({
    type: 'output',
    content: `${ASCII_ARTS.welcome}

Available Commands:
────────────────────
/help              Show this help menu
/about             Learn about me and my journey  
/skills            View my technical skills matrix
/projects          Browse my project portfolio
/project <name>    View specific project details
/contact           Get in touch with me
/whoami            Display current user info
/history           Show command history
/clear             Clear terminal screen

Easter Eggs:
────────────
/matrix            🌐 Enter the Matrix
/coffee            ☕ Coding fuel status  
/sudo              🔒 Try root access
/exit              🚪 Attempt to exit

Pro tip: Use ↑/↓ arrow keys to navigate command history!`
  });

  showAbout = async () => {
    return {
      type: 'output',
      content: `
╔══════════════════════════════════════════════════════════╗
║                        ABOUT ME                          ║
╚══════════════════════════════════════════════════════════╝

I'm a 3rd-year AI/ML student passionate about data science, machine learning, 
and building innovative solutions. I love working with Python, TensorFlow, 
and modern web technologies to create impactful projects.

When I'm not coding, you can find me exploring new technologies, 
contributing to open-source projects, or enjoying a good cup of coffee.

Type '/skills' to see my technical skills or '/projects' to view my work.`
    };
  };

  showSkills = () => ({
    type: 'output',
    content: `
╔══════════════════════════════════════════════════════════╗
║                      MY SKILLS                           ║
╚══════════════════════════════════════════════════════════╝

Programming & Data Science:
• Python (NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch)
• SQL & NoSQL Databases
• Data Analysis & Visualization
• Machine Learning & Deep Learning

Web Development:
• JavaScript (React, Node.js, Express)
• HTML5, CSS3, Tailwind CSS
• RESTful APIs

Tools & Platforms:
• Git & GitHub
• Docker
• AWS & GCP
• Jupyter Notebooks

Type '/projects' to see what I've built with these skills!`
  });

  showProjects = async () => {
    const projects = getAllProjects();
    const projectList = projects.map(project => 
      `• ${project.name} (ID: ${project.id}) - ${project.description.split('.')[0]}.`
    ).join('\n');

    return {
      type: 'output',
      content: `
╔══════════════════════════════════════════════════════════╗
║                      MY PROJECTS                         ║
╚══════════════════════════════════════════════════════════╝

${projectList}

Type '/project <id>' to view details about a specific project.
Example: /project 1`
    };
  };

  showProject = async (args) => {
    if (!args || args.length === 0) {
      return {
        type: 'error',
        content: 'Please specify a project ID. Type /projects to see available projects.'
      };
    }

    const projectId = args[0];
    const project = getProjectById(projectId);

    if (!project) {
      return {
        type: 'error',
        content: `Project with ID "${projectId}" not found. Type /projects to see available projects.`
      };
    }

    return {
      type: 'output',
      content: `
╔══════════════════════════════════════════════════════════╗
║                    ${project.name.padEnd(40)}║
╚══════════════════════════════════════════════════════════╝

${project.ascii_art || ''}

${project.description}

• Status: ${project.status}
• Technologies: ${project.tech_stack.join(', ')}
• GitHub: ${project.github_url}
• Live Demo: ${project.live_demo}`
    };
  };

  showContact = () => ({
    type: 'output',
    content: `
╔══════════════════════════════════════════════════════════╗
║                      GET IN TOUCH                        ║
╚══════════════════════════════════════════════════════════╝

Feel free to reach out to me through any of these channels:

• Email: your.email@example.com
• GitHub: github.com/yourusername
• LinkedIn: linkedin.com/in/yourusername
• Twitter: @yourusername

I'm always open to interesting discussions, collaboration opportunities,
or just a friendly chat about tech and beyond!`
  });

  showWhoami = () => ({
    type: 'output',
    content: `
╔══════════════════════════════════════════════════════════╗
║                        WHOAMI                            ║
╚══════════════════════════════════════════════════════════╝

You are a visitor to my interactive portfolio terminal.

I'm your friendly AI assistant, here to help you explore my work, 
skills, and experience in an engaging way.

Type '/help' to see what you can do!`
  });

  showHistory = (args, commandHistory) => ({
    type: 'output',
    content: commandHistory.length > 0 
      ? `Command History:\n${commandHistory.map((cmd, i) => `${i + 1}. ${cmd}`).join('\n')}`
      : 'No command history yet.'
  });

  matrixEffect = () => ({
    type: 'matrix',
    content: 'Entering the Matrix... (Press ESC to exit)'
  });

  showCoffee = () => ({
    type: 'output',
    content: `${ASCII_ARTS.coffee}\n\nCurrent coffee status: Brewing fresh ideas and code!`
  });

  sudoResponse = () => ({
    type: 'error',
    content: 'Nice try! But you need root privileges for that action. 😉'
  });

  exitResponse = () => ({
    type: 'output',
    content: 'There is no escape from the terminal! (Try /clear instead)'
  });

  aiResponse = async (input, commandHistory) => {
    try {
      // Extract previous commands for context
      const conversationHistory = commandHistory.slice(-5); // Last 5 commands for context
      
      // Call Gemini API
      const { response } = await chatWithGemini(input, conversationHistory);
      
      return {
        type: 'output',
        content: response
      };
    } catch (error) {
      console.error('AI Error:', error);
      return {
        type: 'error',
        content: `AI Service Error: ${error.message || 'Failed to get response from AI'}`
      };
    }
  };
}
