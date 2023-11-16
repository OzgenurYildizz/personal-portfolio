"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 mt-[9rem] max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
              delay: 0.1,
            }}
          >
            <Image
              src="/images/OzgenurYildiz.jpg"
              alt="Ozgenur Yildiz"
              width="250"
              height="300"
              quality="95" /*deafult hali 80 */
              priority={true} /*daha hızlı yüklenmesi için */
              className="h-30 w-30 rounded-full object-cover shadow-xl border-4 border-indigo-700 dark:border-slate-100"
            />
          </motion.div>
          <span
            className="absolute bottom-0 rigth-[0.5] ml-[2.5rem] text-5xl" /*absolute çünkü resmin üstüne gelmesini istiyoruz absolute genellikle diğer elementi relative yaparak kullanırız*/
           /*alternative: for emoji tap window logo+dot*/>
            &#128075;
          </span>
        </div>

      </div>
      <p className="my-6">
        I am a highly motivated web developer with good knowledge of <span className="font-bold">front-end</span> techniques.
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem.
        <span className="italic"> In addition,</span> I find great joy in creating user-friendly and aesthetically pleasing <span className="font-bold">UI/UX</span> designs.
        I am currently looking for a{" "} <span className="font-medium">full-time position</span> as a software developer.
      </p>
      <p className="mb-8">
        <span className="italic">When I'm not coding</span>, exploring my creative side through activities like drawing and diving into the captivating world of books.
      </p>

      <div className="flex flex-col sm:flex-row items-center">
        <div>
          <h3 className="text-2xl font-medium capitalize mb-4 text-indigo-700 dark:text-indigo-200">Details</h3>
          <ul>
            <li className="mr-8">
              <strong className="text-gray-400 inline-block mr-3">Fullname:</strong>
              <span className="italic">Özgenur Yıldız</span>
            </li>
            <li className="mr-4">
              <strong className="text-gray-400 inline-block mr-3">Birth Date:</strong>
              <span className="italic">October 1, 2001</span>
            </li>

            <li className="mr-6">
              <strong className="text-gray-400 inline-block mr-3">Location:</strong>
              <span className="italic">Istanbul/ Turkey</span>
            </li>
            <li className="ml-[2.5rem]">
              <strong className="text-gray-400 inline-block mr-3">Email:</strong>
              <a className="italic text-indigo-500 hover:text-indigo-200 transition dark:hover:text-indigo-900" href="mailto:yildiz.ozgenur@hotmail.com">yildiz.ozgenur@hotmail.com</a>
            </li>
          </ul>
        </div>

        <div className="mt-8 sm:mt-0 sm:ml-[7rem] text-center">
          <h3 className="text-2xl font-medium capitalize mb-4 text-indigo-700 dark:text-indigo-200">Education</h3>
          <ul>
            <li>
              <strong>Istanbul Sabahattin Zaim University</strong><br></br>
              <p className="text-gray-400 inline-block mr-6 ">Bachelor Degree<span className="italic"> | 2020-2024</span></p>
            </li>
            <li>
              <strong>Sanliurfa Yukselis College</strong><br></br>
              <p className="text-gray-400 inline-block mr-6">High School Degree <span className="italic"> | 2017-2019</span></p>
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
