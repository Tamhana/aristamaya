import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "~/components/navbar";
import Hero from "~/components/hero";
import About from "~/components/about";
import Exp from "~/components/exp";
import Skill from "~/components/skill";
import Contact from "~/components/contact";
import Sidebar from "~/components/sidebar";

export default function Index() {
  const { ref: HeroRef, inView: HeroView } = useInView({ threshold: 0.75 });
  const { ref: AboutRef, inView: AboutView } = useInView({ threshold: 0.75 });
  const { ref: SkillsRef, inView: SkillsView } = useInView({ threshold: 0.75 });
  const { ref: ExpRef, inView: ExpView } = useInView({ threshold: 0.75 });
  const { ref: ExtraRef, inView: ExtraView } = useInView({ threshold: 0.75 });

  return (
    <div className="h-screen w-full bg-zinc-800 text-sky-500 px-5 lg:px-32 snap-y snap-mandatory overflow-y-scroll hidesb">
      {/* Header */}
      <Navbar />

      {/* Hero */}
      <motion.section
        id="Home"
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
        <Exp />
      </section>

      {/* Skills */}
      <section id="Skills" ref={SkillsRef} className="snap-start h-screen pt-8">
        <Skill />
      </section>

      {/* Contact */}
      <section id="Extra" ref={ExtraRef} className="snap-start h-screen pt-8">
        <Contact />
      </section>

      {/* --------------------------------------------------------------------------------------------------- */}
      {/* ScrollDown */}
      {HeroView && (
        <div className="fixed flex left-0 bottom-9 w-screen justify-center">
          <span className="flex opacity-30 animate-bounce">⬇️ Please Scroll Down ⬇️</span>
        </div>
      )}

      {/* SideBar */}
      <Sidebar heroView={HeroView} aboutView={AboutView} expView={ExpView} skillsView={SkillsView} extraView={ExtraView} />
    </div>
  );
}
