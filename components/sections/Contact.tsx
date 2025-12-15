"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";
import Card from "@/components/ui/Card";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: FiPhone,
      label: "Phone (US)",
      value: personalInfo.phone.us,
      href: `tel:${personalInfo.phone.us}`,
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: personalInfo.location,
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      label: "GitHub",
      href: personalInfo.links.github,
      color: "hover:text-primary",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      href: personalInfo.links.linkedin,
      color: "hover:text-secondary",
    },
    {
      icon: FiMail,
      label: "Email",
      href: `mailto:${personalInfo.email}`,
      color: "hover:text-accent",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-heading font-bold text-center mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-8"></div>
          <p className="text-center text-text-muted max-w-2xl mx-auto mb-12">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start space-x-4 p-4 rounded-lg bg-background hover:bg-background-surface/50 transition-colors"
                      >
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="text-primary" size={20} />
                        </div>
                        <div>
                          <p className="text-sm text-text-muted mb-1">
                            {info.label}
                          </p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-text hover:text-primary transition-colors break-all"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-text">{info.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
                <p className="text-text-muted mb-6">
                  Feel free to reach out through any of these platforms. I&apos;m always open to discussing new opportunities, collaborations, or just having a chat about AI/ML!
                </p>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 px-6 py-4 bg-background rounded-lg border border-border ${link.color} transition-all duration-300 hover:scale-105 hover:border-current flex-1 min-w-[200px] justify-center`}
                        aria-label={link.label}
                      >
                        <Icon size={24} />
                        <span className="font-medium">{link.label}</span>
                      </a>
                    );
                  })}
                </div>
                
                {/* Quick Email Button */}
                <div className="mt-6">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="block w-full text-center px-6 py-4 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 glow-primary"
                  >
                    Send me an email
                  </a>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Additional CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <Card>
              <h3 className="text-2xl font-bold mb-4">
                Let&apos;s Work Together!
              </h3>
              <p className="text-text-muted mb-6 max-w-2xl mx-auto">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I&apos;d love to hear from you. Drop me a message and I&apos;ll get back to you as soon as possible!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={`mailto:${personalInfo.email}?subject=Portfolio Inquiry`}
                  className="px-8 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/90 transition-all duration-300 hover:scale-105"
                >
                  Email Me
                </a>
                <a
                  href={personalInfo.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-background-surface text-text border border-border rounded-lg font-semibold hover:border-primary hover:text-primary transition-all duration-300 hover:scale-105"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

