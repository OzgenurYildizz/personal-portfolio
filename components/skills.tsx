"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index, /*böylece her element ardı ardına gelir*/
    },
  }),
};

const hoverStyles = {
  scale: 1.1,
  
};

export default function Skills() {
  const {ref} = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <h3 className="mb-6 text-gray-500 dark:text-slate-400">Hover over a skill for currency profieciency</h3>
      <div className="flex flex-wrap justify-center gap-4 text-lg text-gray-800 ">
        {skillsData.map((skill) => (
          <React.Fragment key={skill.id}>
          <div className="group relative flex cursor-pointer">
          <motion.div
            className="group bg-white borderBlack flex flex-col items-center justify-center rounded-xl w-[7rem] h-[7rem] dark:bg-slate-600 transition duration-300 ease-in-out transform hover:grayscale"
            key={skill.id}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate" /*view olduğunda*/
            viewport={{ /*sadece bir kere */
              once: true,
            }}
            custom={skill.id}
            whileHover={hoverStyles}
          >
              {React.cloneElement(skill.icon, {
               style: { fontSize: '3rem' },})}
              <span className="text-sm mt-1 text-gray-500 dark:text-slate-100">{skill.title}</span>
          </motion.div>

          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 w-[7rem] h-[7rem] ease-in-out rounded-xl dark:hover:bg-gray-500 hover:bg-white ">
            <div className="flex items-center justify-center h-full">
              <p className="font-bold text-black opacity-100 dark:text-white ">{skill.profieciency}</p>
            </div>
          </div>
          </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}