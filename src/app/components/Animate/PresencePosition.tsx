import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface Presence {
  children: React.ReactNode;
  isOpen: boolean;
  pos: "fixed" | "absolute";
}

export default function PresencePosition({ children, isOpen, pos }: Presence) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, position: pos, zIndex: 999 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
