
export interface Skill {
  name: string;
  level: number; // 1-10
  category: 'frontend' | 'backend' | 'design' | 'tools';
  icon?: string;
}

export interface SkillCategory {
  name: string;
  key: 'frontend' | 'backend' | 'design' | 'tools';
}

export const skillCategories: SkillCategory[] = [
  { name: 'Frontend', key: 'frontend' },
  { name: 'Backend', key: 'backend' },
  { name: 'Design', key: 'design' },
  { name: 'Tools', key: 'tools' }
];

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML/CSS', level: 9, category: 'frontend' },
  { name: 'JavaScript', level: 9, category: 'frontend' },
  { name: 'TypeScript', level: 8, category: 'frontend' },
  { name: 'React', level: 9, category: 'frontend' },
  { name: 'Next.js', level: 8, category: 'frontend' },
  { name: 'Tailwind CSS', level: 9, category: 'frontend' },
  { name: 'Redux', level: 7, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 8, category: 'backend' },
  { name: 'Express', level: 8, category: 'backend' },
  { name: 'MongoDB', level: 7, category: 'backend' },
  { name: 'PostgreSQL', level: 7, category: 'backend' },
  { name: 'GraphQL', level: 6, category: 'backend' },
  { name: 'Firebase', level: 8, category: 'backend' },
  
  // Design
  { name: 'Figma', level: 8, category: 'design' },
  { name: 'UI/UX', level: 7, category: 'design' },
  { name: 'Responsive Design', level: 9, category: 'design' },
  
  // Tools
  { name: 'Git', level: 9, category: 'tools' },
  { name: 'Docker', level: 7, category: 'tools' },
  { name: 'CI/CD', level: 7, category: 'tools' },
  { name: 'Jest', level: 7, category: 'tools' },
  { name: 'AWS', level: 6, category: 'tools' }
];
