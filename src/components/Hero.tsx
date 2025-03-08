
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const elementRefs = useRef<(HTMLElement | null)[]>([]);

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

    elementRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-20 blurred-bg-gradient"
    >
      <div className="section-container flex flex-col items-center text-center">
        <span 
          ref={(el) => (elementRefs.current[0] = el)}
          className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/5 text-primary/80 text-sm font-medium reveal"
        >
          Full Stack Developer
        </span>
        
        <h1 
          ref={(el) => (elementRefs.current[1] = el)}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold mb-4 tracking-tight reveal reveal-delay-1 text-balance"
        >
          Creating digital experiences that matter
        </h1>
        
        <p 
          ref={(el) => (elementRefs.current[2] = el)}
          className="max-w-xl md:text-lg text-muted-foreground mb-8 reveal reveal-delay-2 text-balance"
        >
          I design and develop applications that are fast, accessible, and built with best practices. 
          My focus is creating engaging user experiences that solve real problems.
        </p>
        
        <div 
          ref={(el) => (elementRefs.current[3] = el)}
          className="flex flex-col sm:flex-row gap-4 reveal reveal-delay-3"
        >
          <a 
            href="#projects" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-all hover:scale-[1.02] active:scale-[0.98] hover:shadow-md"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-secondary text-secondary-foreground font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-hover-bounce">
        <a href="#projects" className="flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border/50 shadow-sm hover:shadow transition-shadow">
          <ArrowDown className="w-5 h-5 text-foreground/70" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
