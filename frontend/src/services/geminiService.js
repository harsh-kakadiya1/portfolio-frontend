import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API with your API key
// Note: In a production environment, you should use environment variables
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';

if (!GEMINI_API_KEY) {
  console.warn('GEMINI_API_KEY is not set. Please set it in your .env file as VITE_GEMINI_API_KEY');
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export const chatWithGemini = async (prompt, conversationHistory = []) => {
  try {
    if (!prompt) {
      throw new Error('Prompt is required');
    }

    // Get the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    // Build conversation context
    let conversationContext = '';
    if (conversationHistory.length > 0) {
      conversationContext = `\n\nPrevious conversation context (last ${conversationHistory.length} inputs):\n${conversationHistory.map((input, index) => `${index + 1}. ${input}`).join('\n')}`;
    }
    
    // Create the system prompt with conversation context
    const systemPrompt = `You are the AI assistant named agustya.ai for terminal-style portfolio of harsh who is ai ml student and who developed you. if and only if someone ask who made you then say harsh made you remember when some one ask who made you then say harsh. Respond in character as a helpful, witty AI that knows about programming, technology, and this portfolio. Keep responses concise but engaging, and maintain the terminal/hacker aesthetic. Format your response as plain text that would look good in a terminal interface and don't repeat user input or query in the output of your response. if and only if someone ask for harsh's latest work or project then say he is attending hackathons and doing projects in computer vision and ml and also his future plan is datamimic.io which is synthetic data generation platform and no-code eda and preprocessing platform use /projects command to see his latest work or project. if and only if some ask for github link then say github link is https://github.com/harsh-kakadiya1 and if ask for linkdin then say linkdin link is https://www.linkedin.com/in/harsh-kakadiya1 .

${conversationContext}

Current user prompt: ${prompt}`;

    const result = await model.generateContent(systemPrompt);
    const response = await result.response.text();
    
    return { response };
  } catch (error) {
    console.error('Gemini API error:', error);
    
    // Handle specific Gemini errors
    if (error.message?.includes('API_KEY_INVALID') || error.message?.includes('API key not valid')) {
      throw new Error('Invalid Gemini API key. Please check your configuration.');
    }
    
    if (error.message?.includes('QUOTA_EXCEEDED')) {
      throw new Error('Gemini API quota exceeded. Please try again later.');
    }
    
    if (error.message?.includes('SAFETY')) {
      throw new Error('Request blocked by safety filters. Please try a different prompt.');
    }
    
    throw new Error('AI systems temporarily offline. Please try again later.');
  }
};
