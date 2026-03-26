'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  isOpen: boolean;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-sm max-w-md"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          style={{
            backgroundColor: type === 'success' 
              ? 'rgba(16, 185, 129, 0.1)' 
              : 'rgba(239, 68, 68, 0.1)',
            border: `1px solid ${type === 'success' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
          }}
        >
          {type === 'success' ? (
            <CheckCircle size={24} className="text-green-500 flex-shrink-0" />
          ) : (
            <XCircle size={24} className="text-red-500 flex-shrink-0" />
          )}
          
          <p className={`text-sm ${type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
            {message}
          </p>
          
          <button
            onClick={onClose}
            className="ml-auto p-1 hover:bg-card-bg-hover rounded-lg transition-colors"
            aria-label="Close notification"
          >
            <X size={16} className={type === 'success' ? 'text-green-400' : 'text-red-400'} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
