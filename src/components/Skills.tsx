
import React, { useRef, useEffect } from 'react';
import { skills, skillCategories } from '@/lib/skills';
import { cn } from '@/lib/utils';

const Skills = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<(HTMLDivElement | null)[]>([]);

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
    skillsRef.current.forEach((el, i) => {
      if (el) {
        setTimeout(() => {
          el.classList.add('active');
        }, 100 + i * 50);
      }
    });
  }, []);

  return (
    <section id="skills" className="py-16 sm:py-24">
      <div 
        ref={elementRef}
        className="section-container reveal"
      >
        <div className="text-center mb-16">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle mx-auto">
            I've worked with a range of technologies in the web development world.
            Here's an overview of my technical skills and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.key} 
              className="glass-panel rounded-xl p-6 reveal"
            >
              <h3 className="text-xl font-medium mb-4">{category.name}</h3>
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category.key)
                  .map((skill, skillIndex) => {
                    const globalIndex = categoryIndex * 10 + skillIndex;
                    return (
                      <div 
                        key={skill.name}
                        ref={el => skillsRef.current[globalIndex] = el}
                        className="reveal"
                      >
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">
                            {skill.level}/10
                          </span>
                        </div>
                        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full bg-primary transition-all duration-1000 ease-out-expo"
                            style={{ 
                              width: '0%',
                              transitionDelay: `${skillIndex * 100}ms`
                            }}
                            ref={el => {
                              if (el) {
                                setTimeout(() => {
                                  el.style.width = `${skill.level * 10}%`;
                                }, 300);
                              }
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
