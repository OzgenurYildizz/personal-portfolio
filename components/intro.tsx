"use client";
/*component altında direkt intro folder-> page.tsx olursa urlde /intro olarak görünür*/
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload, HiMail } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'

import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {  /*component names should be start with upper-case */
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [text, count] = useTypewriter({
    words: [
      "Ozgenur Yildiz",
    ],
    loop: true,
    delaySpeed: 3000,
  });

  const handleCloseButton = () => {
    const connectBox = document.getElementById('connectBox');
    
    if(connectBox){
      connectBox.classList.add('hidden');
    }
  };


  return (
    <section /*section tagi ile her şeyin bağlantılı olduğunu belirtiyoruz hepsi tek bir bölümün içeriği */
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center scroll-mt-[100rem]"
    >
      <motion.div
        className="bg-transparent m-0 p-0  top-[4.5rem] mx-auto sm:text-sm"
        id="connectBox"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}>
        <div className="mt-10 text-xs justify-center sm:mt-0 flex sm:text-sm">
          <div className="font-bold text-slate-50 dark:text-gray-900 ">
            Hi there, thanks for visiting my website! I'd love to
            <a href="https://www.linkedin.com/in/ozgenuryildiz/" target="_blank" className="cursor-pointer text-indigo-600 hover:text-indigo-200 px-1"> connect </a>
            with you
          </div>
          <button
            className="relative cursor-pointer ml-3 text-indigo-600 hover:text-indigo-200 "
            onClick={handleCloseButton}>
              &#10006;</button>
        </div>
      </motion.div>

      <motion.div
        className="mb-10 mt-[6rem] px-4 text-slate-100" /*leading: line height ! diğer font ayarlarını overright etmesi için*/
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-serif font-bold tracking-wide">
          <span className="text-5xl">{text}</span>
          <Cursor cursorColor="#4338CA"/>
        </h1>
        <p className="mt-3 sm:text-sm">Hello, I'am a 4th year computer engineering student.
          <br></br>My focus is <span className="font-bold">front-end</span> development
        </p>
       <hr className="w-[25rem] mt-3 ml-[5.5rem] sm:w-[20rem]"></hr>
      </motion.div>

      <motion.div
  className="flex flex-col sm:flex-col items-center justify-center gap-2 px-4 text-lg font-medium"
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    delay: 0.1,
  }}
>
  
  <div className="flex gap-4">
    <Link
      href="#contact" /*group hover for give the full element hover feature*/
      className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition
                 sm:focus:scale-80"
      onClick={() => {
        setActiveSection("Contact");
        setTimeOfLastClick(Date.now());
      }}
    >
      Contact me here{" "}
      <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
    </Link>

    <a
      className="group bg-white px-7 py-3 flex items-center gap-2 rounded outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer  dark:bg-white/10
                sm:px-5 sm:py-2 sm:focus:scale-80 "
      href="/OzgenurYildizCV.pdf"
      download
    >
      Download CV{" "}
      <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
    </a>
  </div>

  <ul className="mt-3">
    <li className="inline-block">
      <a
        className="bg-violet-100 p-4 text-indigo-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-slate-100"
        href="mailto:yildiz.ozgenur@hotmail.com"
        target="_blank"
      >
        <HiMail />
      </a>
    </li>
    <li className="inline-block mx-3">
      <a
        className="bg-violet-100 p-4 text-indigo-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-slate-100"
        href="https://www.linkedin.com/in/ozgenuryildiz/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
    </li>
    <li className="inline-block ">
      <a
        className="bg-violet-100 p-4 text-indigo-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-slate-100"
        href="https://github.com/OzgenurYildizz"
        target="_blank"
      >
        <FaGithubSquare />
      </a>
    </li>
  </ul>

</motion.div>

    </section>
  );
}
