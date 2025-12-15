"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiPython,
  SiPostgresql,
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiHuggingface,
  SiScikitlearn,
  SiFastapi,
  SiStreamlit,
  SiGithub,
  SiLinux,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiApacheairflow,
  SiGooglecloud,
} from "react-icons/si";
import Card from "@/components/ui/Card";
import { skills } from "@/lib/data";

const iconMap: Record<string, any> = {
  SiPython,
  SiPostgresql,
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiHuggingface,
  SiScikitlearn,
  SiFastapi,
  SiStreamlit,
  SiGithub,
  SiLinux,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiApacheairflow,
  SiGooglecloud,
};

interface SkillItemProps {
  skill: { name: string; level: number; icon: string; highlight?: boolean };
  index: number;
  isInView: boolean;
}

function SkillItem({ skill, index, isInView }: SkillItemProps) {
  const Icon = iconMap[skill.icon] || SiPython;

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Icon className="text-primary" size={20} />
          <span className="font-medium">{skill.name}</span>
        </div>
        <span className="text-sm text-text-muted">{skill.level}%</span>
      </div>
      <div className="w-full bg-background-surface rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.05 + 0.2 }}
          className={`h-full rounded-full ${
            skill.highlight
              ? "bg-gradient-to-r from-primary via-secondary to-accent"
              : "bg-primary"
          }`}
        />
      </div>
    </motion.div>
  );
}

interface DomainSkillProps {
  skill: { name: string; level: number; highlight?: boolean };
  index: number;
  isInView: boolean;
}

function DomainSkill({ skill, index, isInView }: DomainSkillProps) {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (skill.level / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card hover={true} className="flex flex-col items-center justify-center p-6">
        <div className="relative w-28 h-28 mb-4">
          {/* Background Circle */}
          <svg className="transform -rotate-90 w-28 h-28">
            <circle
              cx="56"
              cy="56"
              r={radius}
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              className="text-background-surface"
            />
            {/* Progress Circle */}
            <motion.circle
              cx="56"
              cy="56"
              r={radius}
              stroke={skill.highlight ? "url(#gradient)" : "currentColor"}
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              initial={{ strokeDashoffset: circumference }}
              animate={
                isInView
                  ? { strokeDashoffset }
                  : { strokeDashoffset: circumference }
              }
              transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
              strokeDasharray={circumference}
              className={skill.highlight ? "" : "text-primary"}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d9ff" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
          </svg>
          {/* Percentage Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-gradient">
              {skill.level}%
            </span>
          </div>
        </div>
        <h4
          className={`text-center font-semibold ${
            skill.highlight ? "text-gradient" : ""
          }`}
        >
          {skill.name}
        </h4>
      </Card>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-background-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-heading font-bold text-center mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8"></div>
          <p className="text-center text-text-muted max-w-2xl mx-auto mb-12">
            Specialized in AI/ML technologies with hands-on experience in
            production systems and research implementations.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Domain Expertise - Circular Progress */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              <span className="text-gradient">Domain Expertise</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.domain.map((skill, index) => (
                <DomainSkill
                  key={skill.name}
                  skill={skill}
                  index={index}
                  isInView={isInView}
                />
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <h3 className="text-2xl font-bold mb-6">
                <span className="text-primary">Languages</span>
              </h3>
              <div className="space-y-4">
                {skills.languages.map((skill, index) => (
                  <SkillItem
                    key={skill.name}
                    skill={skill}
                    index={index}
                    isInView={isInView}
                  />
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Frameworks & Libraries */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card>
              <h3 className="text-2xl font-bold mb-6">
                <span className="text-secondary">Frameworks & Libraries</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {skills.frameworks.map((skill, index) => (
                  <SkillItem
                    key={skill.name}
                    skill={skill}
                    index={index}
                    isInView={isInView}
                  />
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Tools & Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card>
              <h3 className="text-2xl font-bold mb-6">
                <span className="text-accent">Tools & Stack</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {skills.tools.map((skill, index) => (
                  <SkillItem
                    key={skill.name}
                    skill={skill}
                    index={index}
                    isInView={isInView}
                  />
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

