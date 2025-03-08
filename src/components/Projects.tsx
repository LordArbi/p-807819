
import React, { useState, useEffect, useRef } from 'react';
import { projects as allProjects } from '@/lib/projects';
import ProjectCard from './ProjectCard';
import { cn } from '@/lib/utils';

const Projects = () => {
  const [category, setCategory] = useState<string>('all');
  const elementRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);

  const filteredProjects = category === 'all'
    ? allProjects
    : allProjects.filter(project => project.category === category);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'other', name: 'Other' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Reset project animations when category changes
    projectsRef.current.forEach((el, i) => {
      if (el) {
        el.classList.remove('active');
        setTimeout(() => {
          el.classList.add('active');
        }, 50 + i * 50);
      }
    });
  }, [category]);

  return (
    <section id="projects" className="bg-secondary/30 py-16 sm:py-24">
      <div 
        ref={elementRef}
        className="section-container reveal"
      >
        <div className="text-center mb-16">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle mx-auto">
            A showcase of my recent development work, featuring live demos and detailed case studies.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                category === cat.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-background hover:bg-background/80 text-foreground/70 hover:text-foreground"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <div 
              key={project.id}
              ref={el => projectsRef.current[i] = el}
              className={`reveal reveal-delay-${Math.min(i % 4, 3)}`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
