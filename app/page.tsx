import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import GoDown from "@/components/goDown";
import Skills from "@/components/skills";
import GoUp from "@/components/goUp";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4" /*centered*/> 
      <Intro />
      <GoDown/>
      <About />
      <Skills />
      <Experience />
      <Contact />
      <GoUp/>
    </main>
  );
}
