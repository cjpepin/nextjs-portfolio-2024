'use client';

import { motion } from "framer-motion";

const FadeInTransition = ({
    children,
}: {
    children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
        {children}
    </motion.div>
  );
}

export default FadeInTransition;