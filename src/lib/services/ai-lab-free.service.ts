/**
 * AI Lab Service - Production Ready
 * Uses Google Gemini API for AI generation
 */

import { GoogleGenerativeAI } from '@google/generative-ai';

// Get API key from environment
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';

// Initialize Gemini AI
const genAI = GEMINI_API_KEY ? new GoogleGenerativeAI(GEMINI_API_KEY) : null;

export type CreationType = 'webapp' | 'chat';

export interface CreationResult {
  id: string;
  type: CreationType;
  prompt: string;
  output: string;
  timestamp: string;
  imageUrl?: string;
}

export interface GenerateOptions {
  prompt: string;
  type: CreationType;
}

class AILabFreeService {
  private model = genAI?.getGenerativeModel({ model: 'gemini-2.5-flash' });
  private historyKey = 'claymind_ai_lab_history';
  private maxHistoryItems = 50;

  /**
   * Main generate function - routes to appropriate generator
   */
  async generate(options: GenerateOptions): Promise<CreationResult> {
    const { prompt, type } = options;

    if (!GEMINI_API_KEY) {
      throw new Error('Please add your free Gemini API key to the .env file!');
    }

    switch (type) {
      case 'webapp':
        return this.generateWebapp(prompt);
      case 'chat':
        return this.chat(prompt);
      default:
        throw new Error('Invalid creation type');
    }
  }

  /**
   * Generate Webapp using Gemini (FREE)
   */
  private async generateWebapp(prompt: string): Promise<CreationResult> {
    if (!this.model) throw new Error('AI model not initialized');

    const enhancedPrompt = `You are an expert web developer creating apps for kids aged 8-16.
Create a COMPLETE, working, interactive HTML file for: "${prompt}"

CRITICAL REQUIREMENTS:
- Single self-contained HTML file with ALL CSS in a <style> tag and ALL JavaScript in a <script> tag
- Must include <!DOCTYPE html>, <html>, <head> with charset and viewport meta tags, and <body>
- Colorful, playful, kid-friendly design with modern CSS gradients, shadows, and animations
- Use fun emojis and large, readable text (minimum 16px body font)
- Make it highly INTERACTIVE - respond to clicks, inputs, hover, etc.
- Use only HTML, CSS, and vanilla JavaScript (NO external libraries, NO CDN links)
- Add CSS transitions and keyframe animations for polish
- Make all interactive elements large (min 44px touch targets) and accessible
- Use a vibrant color palette with good contrast
- Ensure the app works correctly - test your logic mentally before outputting
- Handle edge cases (empty inputs, invalid states) gracefully
- Make the layout responsive using flexbox or grid

IMPORTANT: Return ONLY the raw HTML code. No markdown code fences, no backticks, no explanations before or after.`;

    try {
      const result = await this.model.generateContent(enhancedPrompt);
      const response = await result.response;
      let code = response.text();

      // Clean up response
      code = this.cleanCode(code);

      const creation: CreationResult = {
        id: `webapp_${Date.now()}`,
        type: 'webapp',
        prompt,
        output: code,
        timestamp: new Date().toISOString(),
      };

      this.addToHistory(creation);
      return creation;
    } catch (error: any) {
      console.error('Webapp generation error:', error);
      const message = error?.message || 'Failed to generate webapp. Please try again!';
      throw new Error(message);
    }
  }


  /**
   * Chat with AI Tutor (FREE)
   */
  private async chat(prompt: string): Promise<CreationResult> {
    if (!this.model) throw new Error('AI model not initialized');

    const enhancedPrompt = `You are ClayBot 🤖, a super friendly AI tutor for kids aged 8-16 learning about AI and coding.

Student's question: "${prompt}"

RESPOND WITH:
- Simple, clear explanations a kid can understand
- Use emojis to make it fun!
- Give examples they can relate to
- Be encouraging and positive
- Keep it short and engaging (2-3 paragraphs max)
- Use analogies with things kids know (games, toys, school)

Be the coolest, most helpful AI teacher ever! 🌟`;

    try {
      const result = await this.model.generateContent(enhancedPrompt);
      const response = await result.response;
      const text = response.text();

      const creation: CreationResult = {
        id: `chat_${Date.now()}`,
        type: 'chat',
        prompt,
        output: text,
        timestamp: new Date().toISOString(),
      };

      this.addToHistory(creation);
      return creation;
    } catch (error: any) {
      console.error('Chat error:', error);
      const message = error?.message || 'Failed to chat with AI. Please try again!';
      throw new Error(message);
    }
  }

  /**
   * Clean code output from AI
   */
  private cleanCode(code: string): string {
    // Remove markdown code fences (```html ... ``` or ``` ... ```)
    code = code.replace(/^```[\w]*\n?/gm, '');
    code = code.replace(/\n?```$/gm, '');

    // Trim leading/trailing whitespace
    code = code.trim();

    // If the model returned extra text before the HTML, extract just the HTML
    const doctypeIndex = code.indexOf('<!DOCTYPE');
    const htmlIndex = code.indexOf('<html');
    const startIndex = doctypeIndex >= 0 ? doctypeIndex : htmlIndex;
    if (startIndex > 0) {
      code = code.substring(startIndex);
    }

    // Trim any trailing text after </html>
    const htmlEndIndex = code.lastIndexOf('</html>');
    if (htmlEndIndex >= 0) {
      code = code.substring(0, htmlEndIndex + '</html>'.length);
    }

    // Ensure proper HTML structure if missing
    if (!code.includes('<!DOCTYPE') && !code.includes('<html')) {
      code = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ClayMind Creation</title>
</head>
<body>
${code}
</body>
</html>`;
    }

    return code.trim();
  }

  /**
   * Get example prompts for each type
   */
  getExamplePrompts(type: CreationType): string[] {
    const examples = {
      webapp: [
        'A colorful calculator with big buttons',
        'A fun to-do list with checkboxes and confetti',
        'A rainbow color picker that changes the background',
        'A digital clock with fun animations',
        'A simple drawing app with different colors',
        'A memory matching game with emojis',
      ],
      chat: [
        'What is machine learning in simple terms?',
        'How do computers recognize faces in photos?',
        'Why is AI important for the future?',
        'How can I build my own AI project?',
        'What\'s the difference between AI and robots?',
        'How does Netflix know what I want to watch?',
      ],
    };

    return examples[type] || [];
  }

  /**
   * Save creation to history
   */
  private addToHistory(creation: CreationResult): void {
    const history = this.getHistory();
    history.unshift(creation);

    // Keep only recent items
    const trimmed = history.slice(0, this.maxHistoryItems);

    try {
      localStorage.setItem(this.historyKey, JSON.stringify(trimmed));
    } catch (error) {
      console.error('Failed to save history:', error);
    }
  }

  /**
   * Get creation history
   */
  getHistory(): CreationResult[] {
    try {
      const stored = localStorage.getItem(this.historyKey);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  /**
   * Clear history
   */
  clearHistory(): void {
    localStorage.removeItem(this.historyKey);
  }

  /**
   * Delete specific item from history
   */
  deleteHistoryItem(id: string): void {
    const history = this.getHistory();
    const filtered = history.filter(item => item.id !== id);
    localStorage.setItem(this.historyKey, JSON.stringify(filtered));
  }

  /**
   * Check if API key is configured
   */
  isConfigured(): boolean {
    return !!GEMINI_API_KEY && GEMINI_API_KEY !== '';
  }
}

export const aiLabFreeService = new AILabFreeService();
