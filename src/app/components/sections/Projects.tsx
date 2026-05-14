'use client';

import { useEffect, useRef, useState } from 'react';

const PROJECTS = [
  {
    title: "Industrial Refrigeration Plant",
    category: "Refrigeration",
    description: "Complete turnkey installation of 500-ton industrial refrigeration system for major food processing facility",
    image: "refrigeration-plant",
    metric: "500 Ton Capacity",
    location: "Western Province",
    badge: "Completed"
  },
  {
    title: "Cold Storage Facility",
    category: "Cold Storage",
    description: "Design and installation of temperature-controlled storage facility with multi-zone cooling systems",
    image: "cold-storage",
    metric: "10,000 sq ft",
    location: "Southern Province",
    badge: "Completed"
  },
  {
    title: "Commercial HVAC System",
    category: "HVAC",
    description: "Energy-efficient HVAC installation for 20-story commercial building with smart climate control",
    image: "hvac-system",
    metric: "20 Floors",
    location: "Colombo",
    badge: "Completed"
  },
  {
    title: "Food Processing Cooling",
    category: "Refrigeration",
    description: "Specialized cooling system installation for food processing plant with hygiene compliance standards",
    image: "food-processing",
    metric: "BRC Grade A",
    location: "Central Province",
    badge: "Completed"
  },
  {
    title: "Pharmaceutical Storage",
    category: "Cold Storage",
    description: "Temperature-controlled storage solution for pharmaceutical facility with 24/7 monitoring systems",
    image: "pharma-storage",
    metric: "2-8°C Control",
    location: "Western Province",
    badge: "Ongoing"
  },
  {
    title: "System Upgrade Project",
    category: "Maintenance",
    description: "Complete retrofit and upgrade of existing industrial cooling systems with modern energy-efficient technology",
    image: "system-upgrade",
    metric: "40% Energy Saving",
    location: "Multiple Sites",
    badge: "Ongoing"
  }
];

const CATEGORIES = ['All', 'Refrigeration', 'HVAC', 'Cold Storage', 'Maintenance'];

interface ProjectsProps {}

export default function Projects({}: ProjectsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.project-card');
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            cards.forEach((card, index) => {
              if (prefersReducedMotion) {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0)';
              } else {
                setTimeout(() => {
                  card.classList.add('animate-fade-in-up');
                }, index < 2 ? index * 80 : index * 120);
              }
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(PROJECTS);
    } else {
      setFilteredProjects(PROJECTS.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <section ref={sectionRef} className="py-20 bg-background" role="region" aria-labelledby="projects-heading">
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .project-card {
          opacity: 0;
          transform: translateY(10px);
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .project-card {
            opacity: 1;
            transform: translateY(0);
          }
          .animate-fade-in-up {
            animation: none;
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Our Projects
          </h2>
          <p className="text-lg text-primary-dark/70 max-w-3xl mx-auto">
            Proven engineering excellence across Sri Lanka's most demanding industrial environments.
            Each project represents our commitment to reliability, precision, and lasting performance.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white/80 backdrop-blur-sm text-primary-dark border border-neutral hover:bg-neutral/50 hover:border-primary/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="project-card group bg-white/95 backdrop-blur-sm border border-neutral/50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary/20"
              role="article"
              aria-labelledby={`project-${index}-title`}
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm text-primary font-medium text-xs rounded-full border border-primary/20">
                    {project.category}
                  </span>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center px-3 py-1 backdrop-blur-sm font-medium text-xs rounded-full border ${
                    project.badge === 'Completed'
                      ? 'bg-white/90 text-accent border-accent/20'
                      : 'bg-white/90 text-primary-light border-primary-light/30'
                  }`}>
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 id={`project-${index}-title`} className="text-xl font-semibold text-primary-dark group-hover:text-primary transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-primary-dark/70 leading-relaxed text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Project Metrics */}
                <div className="flex items-center gap-4 pt-2 border-t border-neutral/50">
                  {project.metric && (
                    <div className="flex items-center text-sm text-primary-dark/60">
                      <svg className="w-4 h-4 mr-1 text-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      {project.metric}
                    </div>
                  )}
                  {project.location && (
                    <div className="flex items-center text-sm text-primary-dark/60">
                      <svg className="w-4 h-4 mr-1 text-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-primary-dark/50 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
