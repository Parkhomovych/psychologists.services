import { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PresencePositionProps } from "@/Types/ComponentProps";

const PresencePosition: FC<PresencePositionProps> = ({
  children,
  isOpen,
  pos,
}) => {
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
};

export default PresencePosition;
