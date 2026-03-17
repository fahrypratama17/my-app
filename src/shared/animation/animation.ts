import { Variants } from "framer-motion";

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    filter: "blur(0)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export const fadeInUp: Variants = {
  hidden: {
    y: 30,
    opacity: 0,
    filter: "blur(8px)",
  },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};
