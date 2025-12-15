"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiGithub, FiExternalLink, FiSearch, FiStar } from "react-icons/fi";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { projects } from "@/lib/data";

const categories = ["All", "Agentic AI", "RAG", "Computer Vision", "MLOps"];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-heading font-bold text-center mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8"></div>
          <p className="text-center text-text-muted max-w-2xl mx-auto mb-12">
            A showcase of my work in AI/ML, featuring production-ready systems,
            research implementations, and innovative solutions.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-6">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-muted" size={20} />
            <input
              type="text"
              placeholder="Search projects, technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-background-surface border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-text"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-background shadow-lg scale-105"
                    : "bg-background-surface text-text-muted hover:bg-background-surface/80 hover:text-primary border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <Card
                  hover={true}
                  className="h-full flex flex-col relative overflow-hidden group"
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="flex items-center px-3 py-1 bg-accent/90 text-white rounded-full text-sm font-medium">
                        <FiStar className="mr-1" size={14} />
                        Featured
                      </div>
                    </div>
                  )}

                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold pr-4">
                          {project.title}
                        </h3>
                      </div>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-text-muted mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4 flex-grow">
                      {project.achievements.slice(0, 2).map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-text-muted"
                        >
                          <span className="text-secondary mr-2 mt-1">✓</span>
                          <span className="line-clamp-2">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 5).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-background text-xs text-text-muted border border-border rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-1 text-xs text-primary">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>

                    {/* Duration */}
                    <p className="text-sm text-text-muted mb-4">
                      {project.duration}
                    </p>

                    {/* Links */}
                    <div className="flex gap-3 mt-auto">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button variant="outline" size="sm" className="w-full">
                            <FiGithub className="mr-2" />
                            Code
                          </Button>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button variant="primary" size="sm" className="w-full">
                            <FiExternalLink className="mr-2" />
                            Demo
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-12"
            >
              <p className="text-text-muted text-lg">
                No projects found matching your criteria.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

