import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

export default function Navbar() {
  return (
    <nav className="sticky top-0 flex py-1 max-w-6xl items-center justify-between">
      <motion.div
        className="flex flex-row items-center text-sm"
        initial={{ x: "-500", opacity: 0, scale: 0.2 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 2, type: "spring", bounce: 0.3 }}
      >
        <SocialIcon
          target="_blank"
          url="https://www.youtube.com/@ristamhana/"
          bgColor="transparent"
          fgColor="rgb(14 165 233)"
          style={{ height: 30, width: 30 }}
        />
        <SocialIcon
          target="_blank"
          url="https://www.instagram.com/ristamhana"
          bgColor="transparent"
          fgColor="rgb(14 165 233)"
          style={{ height: 30, width: 30 }}
        />
        <SocialIcon
          target="_blank"
          url="https://www.facebook.com/"
          bgColor="transparent"
          fgColor="rgb(14 165 233)"
          style={{ height: 30, width: 30 }}
        />
        <SocialIcon
          target="_blank"
          url="https://www.twiter.com/"
          bgColor="transparent"
          fgColor="rgb(14 165 233)"
          style={{ height: 30, width: 30 }}
        />
      </motion.div>

      <motion.div
        className="flex flex-row items-center cursor-pointer"
        initial={{ x: "500", opacity: 0, scale: 0.2 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 2, type: "spring", bounce: 0.3 }}
        style={{ height: 30, width: 30 }}
      >
        <SocialIcon network="email" bgColor="transparent" fgColor="rgb(14 165 233)" url="#Contact" />
      </motion.div>
    </nav>
  );
}
