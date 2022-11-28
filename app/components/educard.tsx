import { motion } from "framer-motion";

interface Iprops {
  logo?: any;
  tahun?: string;
  fakultas?: string;
  jurusan?: string;
  ipk?: string;
}

export default function Educard({ logo, tahun, fakultas, jurusan, ipk }: Iprops) {
  return (
    <div className="snap-center flex flex-wrap flex-shrink-0  w-[250px] h-52 md:h-72 bg-sky-500 rounded-[4px] text-zinc-200 overflow-hidden">
      <div className="flex items-end pl-2 pb-2 w-full h-2/5 bg-sky-700">
        <div className="flex w-56 overflow-hidden">
          <motion.img
            initial={{ x: 200, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="object-cover"
            src={logo}
          />
        </div>
      </div>
      <div className="flex flex-col h-3/5 w-full items-center justify-evenly p-3">
        <h1 className="text-xl">{tahun}</h1>
        <h1 className="text-xl">{fakultas}</h1>
        <h1 className="text-xl">{jurusan}</h1>
        <h1 className="text-xl">{ipk}</h1>
      </div>
    </div>
  );
}
