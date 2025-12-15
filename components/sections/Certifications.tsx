"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiAward, FiBookOpen } from "react-icons/fi";
import Card from "@/components/ui/Card";
import { certifications } from "@/lib/data";

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-20 bg-background-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-heading font-bold text-center mb-4">
            Certifications & <span className="text-gradient">Courses</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-12"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card hover={true} className="h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <FiBookOpen className="text-primary" size={32} />
                  </div>
                  <FiAward className="text-accent" size={24} />
                </div>

                <h3 className="text-lg font-bold mb-3 line-clamp-2">
                  {cert.title}
                </h3>

                <div className="flex items-center justify-between">
                  <span className="text-secondary font-semibold">
                    {cert.issuer}
                  </span>
                  <span className="text-sm text-text-muted">{cert.date}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

