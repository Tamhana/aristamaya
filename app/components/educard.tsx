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
    <div className="snap-center flex flex-wrap flex-shrink-0  w-[250px] h-48 md:h-60 bg-sky-500 rounded-[4px] text-zinc-300 overflow-hidden group">
      <div className="flex items-end pl-2 pb-2 w-full h-1/2 bg-sky-700">
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
      <div className="relative flex flex-col h-1/2 w-full items-center justify-evenly p-3">
        <h1 className="absolute right-3 -top-4 text-lg font-semibold p-1 leading-none rounded-[4px] bg-zinc-800 shadow-md">
          {ipk}
        </h1>
        <h1 className="text-md font-semibold">{tahun}</h1>
        <h1 className="text-md font-semibold">{fakultas}</h1>
        <h1 className="text-md font-semibold">{jurusan}</h1>
      </div>
    </div>
  );
}
