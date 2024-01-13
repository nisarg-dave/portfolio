"use client";

import { motion } from "framer-motion";
import useScrollProgress from "@/hooks/useScrollProgress";

interface TemplateProps {
  children: React.ReactNode;
}

// Variants allow you to define animation states and organise them by name.
// They allow you to control animations throughout a component tree by switching a single animate prop.
// After passing variants to one or more motion component's variants prop, these variants can be used in place of values on the animate, initial, whileFocus, whileTap and whileHover props.
const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

// A template file is similar to a layout in that it wraps each child layout or page. Unlike layouts that persist across routes and maintain state, templates create a new instance for each of their children on navigation
function Template({ children }: TemplateProps) {
  const completion = useScrollProgress();
  return (
    <>
      {/* Motion components are DOM primitives optimised for 60fps animation and gestures  */}
      {/* There's a motion component for every HTML and SVG element, for instance motion.div, motion.circle etc. */}
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>
      {/* completion bar */}
      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all"
      ></span>
    </>
  );
}

export default Template;
