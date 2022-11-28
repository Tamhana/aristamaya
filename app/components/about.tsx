import foto from "~/assets/img/rista.jpg";
import univ from "~/assets/img/stei.png";
import smk from "~/assets/img/smk.png";
import smp from "~/assets/img/smp.png";
import { motion } from "framer-motion";
import Educard from "./educard";

export default function About() {
  return (
    <div className="relative h-screen max-w-full items-center px-2 md:px-10">
      <h1 className="tracking-[10px] text-center text-lg">About</h1>
      <div className="relative w-full flex flex-col md:flex-row justify-evenly text-center md:text-left md:py-8 py-0">
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          transition={{ duration: 1.3 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="flex-shrink-0 w-28 h-28 md:w-48 md:h-56 mx-auto rounded-full md:rounded-lg overflow-hidden my-4 md:my-0 md:mr-4"
        >
          <img src={foto} alt="Rista's Foto" className="object-cover" />
        </motion.div>

        <div className="">
          <h1 className="text-lg md:text-2xl font-semibold tracking-[4px] md:tracking-[6px]">ARISTA MELIANA,Se</h1>
          <p className="text-xs md:text-base">
            “You have to understand accounting and you have to understand the nuances of accounting. It’s the language of
            business and it’s an imperfect language, but unless you are willing to put in the effort to learn accounting, how to
            read and interpret financial statements. you really shouldn't select stocks yourself.”
            <span className="ml-3 italic tracking-widest">—Warren Buffett</span>
          </p>
        </div>
      </div>

      <h1 className="text-center tracking-[7px] mt-4">Education</h1>

      <div className="relative flex h-fit justify-evenly">
        <div className="flex space-x-8 snap-x snap-mandatory overflow-x-scroll overflow-y-hidden px-2 py-1">
          <Educard logo={univ} tahun="2009 - 2013" fakultas="Program Studi" jurusan="S1 Akuntasnsi" ipk="IPK 3.35" />
          <Educard logo={smk} tahun="2006 - 2009" fakultas="Program Keahlian" jurusan="Akuntasnsi" />
          <Educard logo={smp} tahun="2003 - 2006" />
        </div>
      </div>
    </div>
  );
}
