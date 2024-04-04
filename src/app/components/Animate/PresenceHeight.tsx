import { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PresenceModalProps } from "@/Types/ComponentProps";

const PresenceModal: FC<PresenceModalProps> = ({ children, isOpen }) => {
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
};

export default PresenceModal;
