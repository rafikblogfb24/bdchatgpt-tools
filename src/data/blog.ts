export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readingTime: string;
  image: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'how-to-use-ai-word-counter',
    title: 'How to Use AI Word Counter for Better Writing',
    excerpt: 'Learn how to leverage our word counter tool to optimize your content for readability and SEO.',
    content: `
      <h2>The Importance of Word Count</h2>
      <p>Word count is a crucial metric for any writer, whether you're a student, blogger, or professional copywriter. But it's not just about hitting a target; it's about structure and clarity.</p>
      
      <h2>Using Our AI Tool</h2>
      <p>Our tool does more than just count words. It analyzes your text for common patterns and provides insights into your writing style.</p>
      
      <h3>Key Features:</h3>
      <ul>
        <li>Real-time counting</li>
        <li>Character count (with and without spaces)</li>
        <li>Sentence and paragraph tracking</li>
        <li>Estimated reading time</li>
      </ul>

      <h2>Best Practices for Writing</h2>
      <p>Always aim for clarity. Shorter sentences are often better for online reading. Use our tool to monitor your sentence length and paragraph density.</p>
    `,
    author: 'AI Expert',
    date: 'July 10, 2024',
    category: 'Guides',
    readingTime: '5 min',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=60'
  },
  {
    id: 'top-10-ai-tools-2024',
    title: 'Top 10 AI Tools Every Developer Needs in 2024',
    excerpt: 'Discover the most essential AI-powered tools that will boost your productivity and streamline your workflow.',
    content: `
      <h2>The AI Revolution in Development</h2>
      <p>Developers are now using AI to write code, debug, and even design architectures. In this post, we explore the top tools currently available on BDchatGPT.</p>
      
      <h2>1. JSON Formatter & Validator</h2>
      <p>A must-have for any backend developer. Quickly format your JSON responses for readability.</p>
      
      <h2>2. SQL Formatter</h2>
      <p>Keep your queries clean and optimized with our SQL formatting tool.</p>
      
      <h2>3. Markdown Previewer</h2>
      <p>Write your documentation with confidence using our real-time markdown previewer.</p>
    `,
    author: 'Dev Master',
    date: 'July 12, 2024',
    category: 'Technology',
    readingTime: '8 min',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60'
  }
];
