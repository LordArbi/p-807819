
import React from 'react';
import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-lg font-display font-medium">
              Portfolio
            </a>
            <p className="text-sm text-muted-foreground mt-2 max-w-md">
              A showcase of my development projects, skills, and experiences.
              Feel free to reach out if you'd like to collaborate.
            </p>
          </div>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-foreground/70 hover:text-foreground rounded-full hover:bg-secondary transition-colors"
              aria-label="GitHub profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-foreground/70 hover:text-foreground rounded-full hover:bg-secondary transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-foreground/70 hover:text-foreground rounded-full hover:bg-secondary transition-colors"
              aria-label="Twitter profile"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border/40 mt-8 pt-8 text-sm text-muted-foreground">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
