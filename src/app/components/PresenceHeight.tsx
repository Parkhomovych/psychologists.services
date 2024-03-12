import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface Presence {
  children: React.ReactNode;
  isOpen: boolean;
}

export default function PresenceModal({ children, isOpen }: Presence) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
