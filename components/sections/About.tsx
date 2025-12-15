"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Card from "@/components/ui/Card";
import { personalInfo, achievements } from "@/lib/data";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-heading font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-12"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <h3 className="text-2xl font-bold mb-4 text-gradient">
                Passionate AI Engineer
              </h3>
              <p className="text-text-muted text-lg leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-primary mr-2">📍</span>
                  <span className="text-text-muted">{personalInfo.location}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2">🎓</span>
                  <span className="text-text-muted">
                    Master&apos;s in AI at Northeastern University
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2">💼</span>
                  <span className="text-text-muted">
                    Specializing in Agentic AI, RAG, and MLOps
                  </span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">
              Achievements & <span className="text-gradient">Recognition</span>
            </h3>
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              >
                <Card hover={true}>
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold">
                          {achievement.title}
                        </h4>
                        <span className="text-sm text-primary font-medium">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-text-muted">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

