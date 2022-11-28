import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { AiFillYoutube, AiFillInstagram, AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { FaSlideshare } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="sticky z-[99] top-0 flex py-1 max-w-6xl items-center justify-between">
      <motion.div
        className="flex flex-row items-center text-sm gap-3"
        initial={{ x: "-500", opacity: 0, scale: 0.2 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 2, type: "spring", bounce: 0.3 }}
      >
        <a href="https://www.youtube.com/@ristamhana/" target="_blank" className="text-2xl">
          <AiFillYoutube />
        </a>
        <a href="https://www.instagram.com/ristamhana" target="_blank" className="text-2xl">
          <AiFillInstagram />
        </a>
        <a href="https://www.facebook.com/" target="_blank" className="text-2xl">
          <AiFillFacebook />
        </a>
        <a href="https://www.twiter.com/" target="_blank" className="text-2xl">
          <AiFillTwitterSquare />
        </a>
      </motion.div>

      <motion.div
        className="flex flex-row items-center cursor-pointer"
        initial={{ x: "500", opacity: 0, scale: 0.2 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 2, type: "spring", bounce: 0.3 }}
        style={{ height: 30, width: 30 }}
      >
        <Link to="#Extra" className="text-2xl">
          <FaSlideshare />
        </Link>
      </motion.div>
    </nav>
  );
}
