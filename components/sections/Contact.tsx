"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { personalInfo } from "@/lib/data";
import { sendEmail, validateContactForm, type ContactFormData } from "@/lib/email";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: "" });

    // Validate form
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    // Send email
    const result = await sendEmail(formData);

    setIsSubmitting(false);
    setSubmitStatus({
      type: result.success ? "success" : "error",
      message: result.message,
    });

    // Clear form on success
    if (result.success) {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    }
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
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
                            className="text-text hover:text-primary transition-colors"
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

            {/* Social Links */}
            <Card>
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-background rounded-lg border border-border ${link.color} transition-all duration-300 hover:scale-110 hover:border-current`}
                      aria-label={link.label}
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-background border ${
                      errors.name ? "border-red-500" : "border-border"
                    } rounded-lg focus:outline-none focus:border-primary transition-colors text-text`}
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-background border ${
                      errors.email ? "border-red-500" : "border-border"
                    } rounded-lg focus:outline-none focus:border-primary transition-colors text-text`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-background border ${
                      errors.subject ? "border-red-500" : "border-border"
                    } rounded-lg focus:outline-none focus:border-primary transition-colors text-text`}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-background border ${
                      errors.message ? "border-red-500" : "border-border"
                    } rounded-lg focus:outline-none focus:border-primary transition-colors text-text resize-none`}
                    placeholder="Your message here..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  glow
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <FiSend className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {/* Status Message */}
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-500/10 text-green-500 border border-green-500/30"
                        : "bg-red-500/10 text-red-500 border border-red-500/30"
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}

                {/* Note about EmailJS setup */}
                <p className="text-xs text-text-muted text-center">
                  Note: Configure EmailJS credentials in .env.local for the
                  contact form to work
                </p>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

