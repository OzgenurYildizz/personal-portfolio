
"use client";

import React from "react";
import { motion } from "framer-motion";
import { IoMdArrowDropupCircle } from "react-icons/io";

export default function SectionDivider() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <a href="#home" className="text-indigo-950 absolute z-[999] bottom-[6.5rem]  sm:left-1/2 right-[10.5rem] itenopacity-80 dark:text-white hover:text-indigo-700 dark:hover:text-indigo-700 transition duration-300 ease-in-out">
        <IoMdArrowDropupCircle style={{ width: '3em', height: '3em' }} />
      </a>
    </motion.p>
  );
}





