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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;


