import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Copy } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose?: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          id="toast-notification"
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.96 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-200 shadow-2xl text-xs font-medium"
        >
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/20 text-blue-400">
            <Check className="w-3 h-3" />
          </span>
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
