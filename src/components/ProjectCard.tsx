
import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Project } from '@/lib/projects';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden rounded-xl border border-border/50 hover-card-animation"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-10 px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
          Featured
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <div 
          className={cn(
            "absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out-expo",
            isHovered ? "scale-110" : "scale-100"
          )}
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-medium">{project.title}</h3>
          <div className="flex space-x-1">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 text-foreground/70 hover:text-foreground rounded-full hover:bg-secondary transition-colors"
              aria-label="View GitHub repository"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href={project.liveUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1.5 text-foreground/70 hover:text-foreground rounded-full hover:bg-secondary transition-colors"
              aria-label="View live demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span 
              key={tech} 
              className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground font-medium">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
        
        <div className="pt-2 border-t border-border/50">
          <a 
            href={project.liveUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="group/link inline-flex items-center text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            View project details
            <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
