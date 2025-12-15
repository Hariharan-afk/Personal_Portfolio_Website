"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiAward, FiMapPin, FiCalendar } from "react-icons/fi";
import Card from "@/components/ui/Card";
import { education } from "@/lib/data";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-heading font-bold text-center mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-12"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card hover={true} className="h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <FiAward className="text-primary mr-2" size={28} />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gradient">
                      {edu.gpa}
                    </div>
                    <div className="text-sm text-text-muted">GPA</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                
                <h4 className="text-lg text-secondary font-semibold mb-4">
                  {edu.institution}
                </h4>

                <div className="flex flex-col space-y-2 mb-4 text-text-muted">
                  <div className="flex items-center">
                    <FiMapPin className="mr-2" size={16} />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center">
                    <FiCalendar className="mr-2" size={16} />
                    <span>{edu.duration}</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <h5 className="font-semibold mb-2 text-primary">
                    Achievements:
                  </h5>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-text-muted text-sm"
                      >
                        <span className="text-secondary mr-2 mt-1">★</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

