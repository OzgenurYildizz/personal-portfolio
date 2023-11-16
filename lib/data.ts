import React from "react";

/*icons */
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { CgFigma } from "react-icons/cg";
import { FaPhp } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },

  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const; /*as const olmadan string olarak görünüyor ve alınıyor as const ile daha kesin ve direkt objeleri (name,hash) yolluyo*/
/*not just any string but specifically thsi strings ->as const ile only read yaparız*/

export const skillsData = [
  {
    title: "HTML",
    icon: React.createElement(FaHtml5, {color: "#ED5D29"}),
    profieciency: "%100",
  },
  {
    title: "CSS",
    icon: React.createElement(FaCss3Alt, {color: "#1572B7"}),
    profieciency: "%100",
  },
  {
    title: "JavaScript",
    icon: React.createElement(RiJavascriptFill, {color: "#F0DC4E"}),
    profieciency: "%80",
  },
  {
    title: "React",
    icon: React.createElement(FaReact, {color: "#68DAF8"}),
    profieciency: "%80",
  },
  {
    title: "Next.js",
    icon: React.createElement(TbBrandNextjs, {color: "#000000"}),
    profieciency: "%80",
  },
  {
    title: "TypeScript",
    icon: React.createElement(SiTypescript, {color: "#007ACC"} ),
    profieciency: "%85",
  },
  {
    title: "Tailwind",
    icon: React.createElement(SiTailwindcss, {color: "#1EB4B2"}),
    profieciency: "%95",
  },
  {
    title: "Bootstrap",
    icon: React.createElement(FaBootstrap, {color: "#7811F2"}),
    profieciency: "%90",
  },
  {
    title: "Git",
    icon: React.createElement(FaGithub, {color: "#1A1818"}),
    profieciency: "%70",
  },
  {
    title: "Jquery",
    icon: React.createElement(DiJqueryLogo, {color: "#0868B2"}),
    profieciency: "%65",
  },
  {
    title: "Figma",
    icon: React.createElement(CgFigma, {color: "#B056F7"}),
    profieciency: "%90",
  },
  {
    title: "Java",
    icon: React.createElement(FaJava, {color: "#E84135"}),
    profieciency: "%60",
  },  
  {
    title: "PHP",
    icon: React.createElement(FaPhp, {color: "#848DB9"}),
    profieciency: "%50",
  },
  {
    title: "C++",
    icon: React.createElement(SiCplusplus , {color: "#017CC7"}),
    profieciency: "%50",
  },
 
] as const;


export const experiencesData = [
  {
    title: "Front-End Development Intern",
    company: "MIA Technology",
    link: "https://www.miateknoloji.com/",
    description:
      "Project-Based Front-End Development with React, Next.js, and TypeScript.  My expertise includes crafting user-friendly web interfaces with Tailwind CSS, PrimeReact libraries, and CSS3. Experienced in designing web and mobile applications with Figma, and knowledgeable in the HTTP protocol.",
    icon: React.createElement(LuGraduationCap),
    date: "September 2023 - Present",
  },
  {
    title: "UI/UX Designer Intern",
    company: "Deka Electronic",
    link: "https://www.dekaelectronic.com/tr/",
    description:
      "Designed user-friendly web and mobile applications using Figma, prioritizing user-centered and visually appealing layouts. Implemented responsive and adaptive design solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "August - September 2023",
  },
  {
    title: "Front-End Development Intern",
    company: "Turkish Technic | TCI Aircraft Interiors",
    link: "https://turkishtechnic.com/",
    description:
      "Developed responsive web applications using HTML, CSS, JavaScript, and Bootstrap. Implemented seamless server communication by managing data with JSON and XML. Collaborated with cross-functional teams to achieve project goals.",
    icon: React.createElement(FaReact),
    date: "January - April 2023",
  },
  {
    title: "Web Development Intern",
    company: "Mezopotamya Living Lab",
    link: "https://www.mezopotamyall.com/",
    description:
      "Web programing fundamentals including core languages like HTML, CSS, and JavaScript for creating dynamic and interactive websites.",
    icon: React.createElement(FaReact),
    date: "August - October 2022",
  },
] as const;


