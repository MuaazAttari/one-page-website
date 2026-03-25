'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';

interface TerminalCommand {
  command: string;
  output: string[];
}

const terminalCommands: TerminalCommand[] = [
  {
    command: 'whoami',
    output: [
      '> Muhammad Muaaz Ansari',
      '> Web Developer & AI Solutions Builder',
      '> Based in Hyderabad, Pakistan',
      '> Building real-world solutions with Next.js & Python',
    ],
  },
  {
    command: 'skills',
    output: [
      '> Frontend: HTML, CSS, JavaScript, Next.js, Tailwind CSS',
      '> Backend: Python, Streamlit',
      '> Tools: Git, GitHub',
      '> AI Workflow: Claude AI, Qwen AI, Spec-Driven Development',
    ],
  },
  {
    command: 'goal',
    output: [
      '> Creating practical applications that solve real problems',
      '> Delivering meaningful user experiences',
      '> Open for web development & AI projects',
      '> GitHub: github.com/MuaazAttari',
    ],
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Terminal = () => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showOutput, setShowOutput] = useState(false);
  const [outputLines, setOutputLines] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  const currentCommand = terminalCommands[currentCommandIndex];

  // Typing effect for command
  useEffect(() => {
    if (!isTyping && !showOutput) {
      // Execute command and show output
      setShowOutput(true);
      typeOutput(0);
    }
  }, [isTyping]);

  // Initial typing
  useEffect(() => {
    let charIndex = 0;
    const commandText = currentCommand.command;

    const typeInterval = setInterval(() => {
      if (charIndex < commandText.length) {
        setDisplayedText(commandText.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentCommandIndex]);

  // Type output lines
  const typeOutput = (lineIndex: number) => {
    if (lineIndex < currentCommand.output.length) {
      setTimeout(() => {
        setOutputLines((prev) => [...prev, currentCommand.output[lineIndex]]);
        typeOutput(lineIndex + 1);
      }, 300);
    } else {
      // Move to next command after delay
      setTimeout(() => {
        setCurrentCommandIndex((prev) => (prev + 1) % terminalCommands.length);
        setDisplayedText('');
        setShowOutput(false);
        setOutputLines([]);
        setIsTyping(true);
      }, 2000);
    }
  };

  return (
    <section
      id="terminal"
      className="relative py-24 bg-background overflow-hidden"
      aria-label="AI Terminal section"
    >
      {/* Background effects */}
      <div className="absolute inset-0 animated-grid opacity-30" aria-hidden="true" />
      
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-card-bg border border-card-border rounded-full text-sm text-primary mb-4"
            whileHover={{ scale: 1.05 }}
          >
            💻 Interactive Terminal
          </motion.span>
          
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-primary">Command </span>
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-accent bg-clip-text text-transparent">
              Interface
            </span>
          </motion.h2>
          
          <motion.p
            className="text-secondary max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Watch me introduce myself through the command line
          </motion.p>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          ref={terminalRef}
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative bg-gray-950 border border-white/10 rounded-xl overflow-hidden shadow-2xl glow-primary">
            {/* Terminal header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-900/80 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-gray-500 font-mono">bash — ai-portfolio</span>
              <div className="w-10" />
            </div>

            {/* Terminal body */}
            <div className="p-6 h-80 overflow-y-auto font-mono text-sm">
              {/* Previous commands (static for visual) */}
              <div className="space-y-4">
                {/* Current command */}
                <div>
                  <div className="flex items-center gap-2 text-green-400">
                    <span>➜</span>
                    <span className="text-cyan-400">~</span>
                    <span>{displayedText}</span>
                    {isTyping && (
                      <motion.span
                        className="w-2 h-5 bg-primary inline-block"
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      />
                    )}
                  </div>
                  
                  {/* Output */}
                  {showOutput && outputLines.length > 0 && (
                    <motion.div
                      className="mt-2 space-y-1 text-gray-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {outputLines.map((line, index) => (
                        <motion.div
                          key={index}
                          className="text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {line}
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </div>

                {/* Blinking cursor for next command */}
                {!isTyping && showOutput && outputLines.length === currentCommand.output.length && (
                  <div className="flex items-center gap-2 text-green-400 opacity-50">
                    <span>➜</span>
                    <span className="text-cyan-400">~</span>
                    <motion.span
                      className="w-2 h-5 bg-primary inline-block"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Scan line effect */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-primary/5 to-transparent h-2 animate-scan" style={{ animation: 'scan 3s linear infinite' }} />
          </div>

          {/* Command hints */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {terminalCommands.map((cmd, index) => (
              <button
                key={cmd.command}
                onClick={() => {
                  setCurrentCommandIndex(index);
                  setDisplayedText('');
                  setShowOutput(false);
                  setOutputLines([]);
                  setIsTyping(true);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-mono transition-all duration-300 ${
                  currentCommandIndex === index
                    ? 'bg-primary text-black shadow-lg shadow-primary/30'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {cmd.command}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Custom scan animation */}
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
      `}</style>
    </section>
  );
};

export default Terminal;
