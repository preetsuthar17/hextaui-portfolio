import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Intro } from "@/components/Intro";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
