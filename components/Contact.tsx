'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Mail, Github, MessageCircle, Send, ExternalLink, Linkedin, Youtube } from 'lucide-react';
import Button from './Button';
import Toast from './Toast';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    isOpen: boolean;
    message: string;
    type: 'success' | 'error';
  }>({
    isOpen: false,
    message: '',
    type: 'success',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setToast({
          isOpen: true,
          message: data.message,
          type: 'success',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setToast({
          isOpen: true,
          message: data.error || 'Failed to send message',
          type: 'error',
        });
      }
    } catch (error) {
      setToast({
        isOpen: true,
        message: 'Network error. Please try again.',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseToast = () => {
    setToast((prev) => ({ ...prev, isOpen: false }));
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'muhammadmuaazansari92@gmail.com',
      href: 'mailto:muhammadmuaazansari92@gmail.com',
      gradient: 'from-red-500 to-orange-500',
      color: 'text-red-400',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@MuaazAttari',
      href: 'https://github.com/MuaazAttari',
      gradient: 'from-gray-700 to-gray-900',
      color: 'text-gray-300',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Muhammad Muaaz Ansari',
      href: 'https://www.linkedin.com/in/muhammad-muaaz-ansari/',
      gradient: 'from-blue-600 to-blue-800',
      color: 'text-blue-400',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+92 311 0670563',
      href: 'https://wa.me/923110670563',
      gradient: 'from-green-500 to-emerald-500',
      color: 'text-green-400',
    },
    {
      icon: Youtube,
      label: 'YouTube',
      value: '@MuhammadMuaazAnsari12',
      href: 'https://www.youtube.com/@MuhammadMuaazAnsari12',
      gradient: 'from-red-600 to-red-700',
      color: 'text-red-500',
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 bg-background overflow-hidden"
      aria-label="Contact section"
    >
      {/* Background effects */}
      <div className="absolute inset-0 animated-grid opacity-30" aria-hidden="true" />

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-card-bg border border-card-border rounded-full text-xs sm:text-sm text-primary mb-4"
            whileHover={{ scale: 1.05 }}
          >
            📬 Get In Touch
          </motion.span>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-primary">Let's Work </span>
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-accent bg-clip-text text-transparent">
              Together
            </span>
          </motion.h2>

          <motion.p
            className="text-secondary max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Have a project in mind or want to discuss AI opportunities? I'd love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left: Contact methods */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">
              Connect With Me
            </h3>

            <p className="text-secondary text-sm md:text-base mb-6 md:mb-8">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out
              through any of the channels below.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-card-bg border border-card-border rounded-xl hover:border-card-border-hover transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  {/* Icon container */}
                  <div className={`relative p-2.5 sm:p-3 rounded-xl bg-gradient-to-br ${method.gradient} flex-shrink-0`}>
                    <method.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="text-xs sm:text-sm text-secondary truncate">{method.label}</div>
                    <div className="text-sm sm:text-base text-primary font-medium group-hover:text-primary transition-colors truncate">
                      {method.value}
                    </div>
                  </div>

                  {/* Arrow */}
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-secondary group-hover:text-primary transition-colors flex-shrink-0" />
                </motion.a>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="mt-8 md:mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button 
                variant="primary" 
                size="lg" 
                className="group w-full sm:w-auto" 
                href="mailto:muhammadmuaazansari92@gmail.com"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Send a Message
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-20" />

              {/* Form container */}
              <div className="relative bg-card-bg border border-card-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">
                  Send a Message
                </h3>

                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  {/* Name */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <label htmlFor="name" className="block text-xs sm:text-sm text-secondary mb-1.5 sm:mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      minLength={2}
                      disabled={isSubmitting}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-card-border rounded-lg sm:rounded-xl text-sm sm:text-base text-primary placeholder-secondary/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors disabled:opacity-50"
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <label htmlFor="email" className="block text-xs sm:text-sm text-secondary mb-1.5 sm:mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-card-border rounded-lg sm:rounded-xl text-sm sm:text-base text-primary placeholder-secondary/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors disabled:opacity-50"
                    />
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <label htmlFor="message" className="block text-xs sm:text-sm text-secondary mb-1.5 sm:mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      minLength={10}
                      disabled={isSubmitting}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-card-border rounded-lg sm:rounded-xl text-sm sm:text-base text-primary placeholder-secondary/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none disabled:opacity-50"
                    />
                  </motion.div>

                  {/* Submit button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Toast notification */}
      <Toast
        isOpen={toast.isOpen}
        message={toast.message}
        type={toast.type}
        onClose={handleCloseToast}
      />
    </section>
  );
};

export default Contact;
