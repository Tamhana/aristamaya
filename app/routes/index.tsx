import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "~/components/navbar";
import Hero from "~/components/hero";
import About from "~/components/about";

export default function Index() {
  const { ref: HeroRef, inView: HeroView } = useInView({ threshold: 0.75 });
  const { ref: AboutRef, inView: AboutView } = useInView({ threshold: 0.75 });
  const { ref: SkillsRef, inView: SkillsView } = useInView({ threshold: 0.75 });
  const { ref: ExpRef, inView: ExpView } = useInView({ threshold: 0.75 });
  const { ref: ContactRef, inView: ContactView } = useInView({ threshold: 0.75 });

  return (
    <div className="h-screen w-full bg-zinc-800 text-sky-500 px-5 lg:px-32 snap-y snap-mandatory overflow-y-scroll hidesb">
      {/* Header */}
      <Navbar />

      {/* Hero */}
      <motion.section
        ref={HeroRef}
        className="snap-start h-screen w-full text-center pt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1.2 }}
      >
        <Hero />
      </motion.section>

      {/* About */}
      <section id="About" ref={AboutRef} className="snap-start h-screen pt-8">
        <About />
      </section>

      {/* Experiences */}
      <section id="Experiences" ref={ExpRef} className="snap-start h-screen pt-8">
        <h1 className="text-center">Experiences</h1>
      </section>

      {/* Skills */}
      <section id="Skills" ref={SkillsRef} className="snap-start h-screen pt-8">
        <h1 className="text-center">Skills</h1>{" "}
      </section>

      {/* Contact */}
      <section id="Contact" ref={ContactRef} className="snap-start h-screen pt-8">
        <h1 className="text-center">Contact</h1>
      </section>

      {/* ScrollDown */}
      <div className="fixed flex left-0 bottom-5 w-screen justify-center">
        {HeroView && <span className="flex opacity-30 animate-bounce">⬇️ Please Scroll Down ⬇️</span>}
      </div>

      {/* Scroll */}
      <div className="fixed flex flex-col left-1 top-1/2 -translate-y-1/2 gap-3">
        <span
          className={`flex h-[3px] rounded-lg transition-all duration-300 ${
            HeroView ? `bg-sky-500 w-5 md:w-8` : `bg-sky-300 w-4 md:w-5`
          }`}
        ></span>
        <span
          className={`flex h-[3px] rounded-lg transition-all duration-300 ${
            AboutView ? `bg-sky-500 w-5 md:w-8` : `bg-sky-300 w-4 md:w-5`
          }`}
        ></span>
        <span
          className={`flex h-[3px] rounded-lg transition-all duration-300 ${
            ExpView ? `bg-sky-500 w-5 md:w-8` : `bg-sky-300 w-4 md:w-5`
          }`}
        ></span>
        <span
          className={`flex h-[3px] rounded-lg transition-all duration-300 ${
            SkillsView ? `bg-sky-500 w-5 md:w-8` : `bg-sky-300 w-4 md:w-5`
          }`}
        ></span>
        <span
          className={`flex h-[3px] rounded-lg transition-all duration-300 ${
            ContactView ? `bg-sky-500 w-5 md:w-8` : `bg-sky-300 w-4 md:w-5`
          }`}
        ></span>
      </div>
    </div>
  );
}
