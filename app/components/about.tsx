import foto from "~/assets/img/rista.jpg";
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
          className="flex-shrink-0 object-cover w-28 h-28 md:w-48 md:h-56 rounded-full mx-auto md:rounded-xl overflow-hidden my-4 md:my-0 md:mr-4"
        >
          <img src={foto} alt="Rista's Foto" className="object-cover" />
        </motion.div>

        <div className="">
          <h2 className="text-lg md:text-2xl font-semibold tracking-[4px] md:tracking-[6px]">ARISTA MELIANA</h2>
          <p className="text-xs md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eos consectetur vero aspernatur eligendi dicta
            dolor amet dolore, molestiae quis sapiente labore quae magnam sint, nulla est. Ut ratione quas harum perspiciatis
            dolore explicabo enim non similique incidunt ipsa, eius possimus, ab, pariatur iste.
          </p>
        </div>
      </div>

      <h1 className="text-center tracking-[7px] my-2">Education</h1>

      <div className="relative flex h-64 md:h-80 items-center justify-evenly">
        <div className="flex space-x-5 snap-x snap-mandatory overflow-x-scroll overflow-y-hidden p-3">
          <Educard />
          <Educard />
          <Educard />
        </div>
      </div>
    </div>
  );
}
