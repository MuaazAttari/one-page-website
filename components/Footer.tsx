'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Youtube, Heart } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/MuaazAttari',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/muhammad-muaaz-ansari/',
    label: 'LinkedIn',
  },
  {
    icon: Youtube,
    href: 'https://www.youtube.com/@MuhammadMuaazAnsari12',
    label: 'YouTube',
  },
  {
    icon: Mail,
    href: 'mailto:muhammadmuaazansari92@gmail.com',
    label: 'Email',
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 bg-background border-t border-card-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Social links */}
          <motion.div
            className="flex gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card-bg border border-card-border rounded-xl text-secondary hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                aria-label={link.label}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="text-secondary text-sm text-center mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            © {currentYear} Muhammad Muaaz Ansari. All rights reserved.
          </motion.p>

          {/* Made with love */}
          <motion.p
            className="text-tertiary text-xs flex items-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Made with <Heart size={12} className="text-red-500 fill-red-500" /> and AI
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
