"use client";

import React from "react";
import { motion } from "framer-motion";
import { IoMdArrowDropdownCircle } from "react-icons/io";

export default function SectionDivider() {
  return (
    <motion.p
      className="md:mt-6 sm:mt-3"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <a href="#about" className="text-white  opacity-80 dark:text-gray-900 hover:text-indigo-700 dark:hover:text-indigo-300 transition duration-300 ease-in-out">
      <IoMdArrowDropdownCircle style={{ width: '3em', height: '3em'}} />
      </a>
    </motion.p>
  );
}

