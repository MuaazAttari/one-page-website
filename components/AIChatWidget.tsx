'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, Trash2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

interface ConversationHistory {
  role: 'user' | 'assistant';
  content: string;
}

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! 👋 I'm Muhammad Muaaz's AI assistant. Ask me about his skills, projects, or experience!",
      timestamp: Date.now(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && chatContainerRef.current && !chatContainerRef.current.contains(event.target as Node)) {
        const chatButton = document.querySelector('[aria-label="Toggle chat"]');
        if (!chatButton?.contains(event.target as Node)) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Quick suggestion chips
  const suggestions = [
    "What projects has Muhammad Muaaz built?",
    "What technologies does he use?",
    "Is he available for work?",
    "How can I contact him?",
  ];

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      // Prepare conversation history for API
      const conversationHistory: ConversationHistory[] = messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.content,
          conversationHistory,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response');
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.response,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong';
      setError(errorMessage);

      // Add error as a message
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `Sorry, I encountered an error: ${errorMessage}. Please try again!`,
          timestamp: Date.now(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    setTimeout(() => handleSend(), 100);
  };

  const clearConversation = () => {
    setMessages([
      {
        role: 'assistant',
        content: "Hi! 👋 I'm Muhammad Muaaz's AI assistant. Ask me about his skills, projects, or experience!",
        timestamp: Date.now(),
      },
    ]);
    setError(null);
  };

  // Format timestamp
  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <>
      {/* Chat Toggle Button - Positioned on LEFT to avoid scroll buttons */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-4 sm:left-6 z-40 p-4 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <X size={24} className="text-black" />
        ) : (
          <MessageCircle size={24} className="text-black" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatContainerRef}
            className="fixed bottom-20 left-4 sm:left-6 z-40 w-[calc(100vw-2rem)] sm:w-[400px] max-h-[70vh] flex flex-col bg-card-bg border border-card-border rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-primary/20 to-accent/20 border-b border-card-border backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-gradient-to-r from-primary to-accent rounded-lg">
                  <Sparkles size={18} className="text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-sm sm:text-base">Muhammad Muaaz's AI Assistant</h3>
                  <p className="text-xs text-secondary">Powered by AI</p>
                </div>
              </div>
              <button
                onClick={clearConversation}
                className="p-2 text-secondary hover:text-primary hover:bg-card-bg-hover rounded-lg transition-all duration-300"
                aria-label="Clear conversation"
                title="Clear conversation"
              >
                <Trash2 size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0 scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className={`flex flex-col max-w-[80%] ${message.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div
                      className={`px-4 py-2.5 rounded-2xl ${
                        message.role === 'user'
                          ? 'bg-gradient-to-r from-primary to-accent text-black rounded-br-sm'
                          : 'bg-card-bg border border-card-border text-primary rounded-bl-sm shadow-md'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap leading-relaxed font-medium">{message.content}</p>
                    </div>
                    <span className="text-xs text-secondary mt-1 px-1">
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="bg-card-bg border border-card-border px-4 py-3 rounded-2xl rounded-bl-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggestion chips */}
            {messages.length <= 2 && (
              <div className="px-4 py-3 border-t border-card-border bg-card-bg/80 backdrop-blur-sm">
                <p className="text-xs text-secondary mb-2 font-medium">Try asking:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-3 py-1.5 bg-card-bg border border-card-border rounded-full text-xs text-secondary hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-card-border bg-card-bg/80 backdrop-blur-sm">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your question..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-2.5 bg-card-bg border border-card-border rounded-xl text-sm text-primary placeholder-secondary/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors disabled:opacity-50"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="p-2.5 bg-gradient-to-r from-primary to-accent rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                  aria-label="Send message"
                >
                  <Send size={20} className="text-black" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatWidget;
