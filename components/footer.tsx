import React from "react";

export default function Footer() {
  return (    
      <footer className="px-4 text-center relative h-[8rem] w-full text-indigo-400 bg-violet-200 dark:bg-violet-950 opacity-70 backdrop-blur-xl">
        <small className="mb-2 pt-10 block text-xs ml-8">
          &copy;Ozgenur Yildiz.
        </small>
        <p className="text-xs">
          <span className="font-semibold">About this website:</span> built with
          React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
          Framer Motion, React Email & Resend, Vercel hosting.
        </p>
      </footer>
  );
}
