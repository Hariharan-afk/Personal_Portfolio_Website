"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiBriefcase, FiMapPin, FiCalendar } from "react-icons/fi";
import Card from "@/components/ui/Card";
import { experience } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-background-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-heading font-bold text-center mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-12"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent opacity-30"></div>

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto md:text-left"
              }`}
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? "" : "md:pl-12"} ${index % 2 === 0 ? "md:pr-12" : ""}`}>
                {/* Timeline dot */}
                <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background glow-primary z-10"></div>

                <Card hover={true}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <FiBriefcase className="text-primary mr-2" size={24} />
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                    </div>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>

                  <h4 className="text-lg font-semibold text-secondary mb-2">
                    {exp.company}
                  </h4>

                  <div className="flex flex-col space-y-2 mb-4 text-text-muted">
                    <div className="flex items-center">
                      <FiMapPin className="mr-2" size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center">
                      <FiCalendar className="mr-2" size={16} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <p className="text-text-muted mb-4">{exp.description}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start text-text-muted">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-background text-primary border border-primary/30 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

