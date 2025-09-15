# AI-Powered Portfolio (Frontend Only)

A modern, interactive portfolio website with an AI-powered terminal interface, built with React and the Google Gemini API.

## Features

- 🚀 **Frontend-only** - No backend server required
- 🤖 **AI-Powered Chat** - Integrated with Google's Gemini AI
- 🎨 **Modern UI** - Clean, responsive design with smooth animations
- ⚡ **Fast & Lightweight** - Built with Vite for optimal performance
- 🔒 **Secure** - API keys are managed on the client side

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google Gemini API key

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Add your Gemini API key:
     ```
     VITE_GEMINI_API_KEY=your_api_key_here
     ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in your browser**
   The app will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/       # Reusable UI components
├── data/            # Local data files
├── hooks/           # Custom React hooks
├── pages/           # Page components
├── services/        # API and service integrations
└── styles/          # Global styles and themes
```

## Customization

- Update project data in `src/data/projects.js`
- Modify the terminal commands in `src/components/terminal/CommandProcessor.jsx`
- Customize the theme in `tailwind.config.js`

## Security Note

This implementation stores the Gemini API key in the frontend code, which means it will be visible to anyone who inspects the browser's developer tools. For production use, consider:

1. Using a backend service to proxy API requests
2. Implementing rate limiting
3. Setting up proper CORS policies

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Google Gemini](https://ai.google.dev/) - For the AI capabilities
- [React](https://reactjs.org/) - For the UI library
- [Vite](https://vitejs.dev/) - For the build tool
- [Tailwind CSS](https://tailwindcss.com/) - For styling

---

Happy coding! 🚀
