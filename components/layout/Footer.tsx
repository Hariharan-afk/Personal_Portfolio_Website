"use client";

import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: personalInfo.links.github, label: "GitHub" },
    { icon: FiLinkedin, href: personalInfo.links.linkedin, label: "LinkedIn" },
    { icon: FiMail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <footer className="bg-background-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-gradient mb-4">
              Hariharan Chandrasekar
            </h3>
            <p className="text-text-muted">
              AI Engineer | Machine Learning Specialist
            </p>
            <p className="text-text-muted mt-2">
              Building intelligent systems with cutting-edge AI
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-text-muted hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-text-muted hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-text-muted hover:text-primary transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-text-muted hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-background rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-300"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
            <div className="space-y-2 text-sm text-text-muted">
              <p className="flex items-center">
                <FiMail className="mr-2" />
                {personalInfo.email}
              </p>
              <p className="flex items-center">
                <FiPhone className="mr-2" />
                {personalInfo.phone.us}
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center text-text-muted">
          <p>© {currentYear} Hariharan Chandrasekar. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Built with Next.js, Three.js, and ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}

