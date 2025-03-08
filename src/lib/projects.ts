
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  technologies: string[];
  category: 'frontend' | 'fullstack' | 'mobile' | 'other';
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce solution with cart functionality, user authentication, and payment processing.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1632&auto=format&fit=crop',
    liveUrl: 'https://example.com/ecommerce',
    githubUrl: 'https://github.com/username/ecommerce',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'fullstack',
    featured: true
  },
  {
    id: 'project-2',
    title: 'Weather Dashboard',
    description: 'Real-time weather application that displays current conditions and forecasts for any location.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1665&auto=format&fit=crop',
    liveUrl: 'https://example.com/weather',
    githubUrl: 'https://github.com/username/weather',
    technologies: ['React', 'Redux', 'OpenWeather API', 'Tailwind CSS'],
    category: 'frontend',
    featured: true
  },
  {
    id: 'project-3',
    title: 'Task Management App',
    description: 'Productivity application for organizing tasks with drag-and-drop functionality and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1672&auto=format&fit=crop',
    liveUrl: 'https://example.com/tasks',
    githubUrl: 'https://github.com/username/tasks',
    technologies: ['React', 'Firebase', 'React DnD', 'Material UI'],
    category: 'fullstack',
    featured: false
  },
  {
    id: 'project-4',
    title: 'Portfolio Generator',
    description: 'A tool that helps developers create beautiful portfolio websites without writing code.',
    image: 'https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=1740&auto=format&fit=crop',
    liveUrl: 'https://example.com/portfolio-generator',
    githubUrl: 'https://github.com/username/portfolio-generator',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
    category: 'frontend',
    featured: true
  },
  {
    id: 'project-5',
    title: 'Fitness Tracker',
    description: 'Mobile application for tracking workouts, progress, and nutrition with data visualization.',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1740&auto=format&fit=crop',
    liveUrl: 'https://example.com/fitness',
    githubUrl: 'https://github.com/username/fitness',
    technologies: ['React Native', 'Redux', 'D3.js', 'Firebase'],
    category: 'mobile',
    featured: false
  },
  {
    id: 'project-6',
    title: 'AI Content Generator',
    description: 'Web application that uses AI to generate blog posts, social media content, and marketing copy.',
    image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1734&auto=format&fit=crop',
    liveUrl: 'https://example.com/ai-content',
    githubUrl: 'https://github.com/username/ai-content',
    technologies: ['React', 'TypeScript', 'OpenAI API', 'Node.js'],
    category: 'fullstack',
    featured: true
  }
];
