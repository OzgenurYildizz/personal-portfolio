"use client"; /*for motion */

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();


  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.05] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }} /*-50 for transform: translateX(-50%)*/ /*shadow-lg: large sm-> küçk ekranlarda */
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed justify-center ml-5 sm:ml-0 top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 mr-10 text-[0.9rem] font-medium text-slate-400 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => ( /*links are from lib/data.ts */  /*sm:h-[initial] : varsayılan yükseklik fixed; CSS özelliği, bir elementi ekranın belirli bir noktasına sabitlemek için kullanılır. Bu, elementin sayfa kaydırıldıkça yer değiştirmeyeceği anlamına gelir.*/
            <motion.li           /*flax-wrap: sırasıyla sığması sırasında taşma durumunu yönetir. Değerler arasında nowrap, wrap, ve wrap-reverse bulunur. */
              className="h-3/4 flex items-center justify-center relative" /*h-3/4 perent elementinin 3/4ü kadar h*/
              key={link.hash} /*bc keys spouse to be uniqe like link.hash*/
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center p-3 hover:text-indigo-700 transition dark:text-slate-400 dark:hover:text-indigo-300",
                  { /*flex for horizontal display*/
                    "text-indigo-700 dark:text-indigo-300": /*active text*/
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name /*navbar içindeki başlıklar*/}

                {link.name === activeSection && ( /*active bg */
                  <motion.span
                    className="bg-violet-100 rounded absolute inset-0 -z-10 dark:bg-slate-800 "
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>

  );
}
