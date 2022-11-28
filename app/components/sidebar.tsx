import { Link } from "@remix-run/react";
import { AiOutlineHome, AiOutlineUser, AiOutlineCrown } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { FaSlideshare } from "react-icons/fa";

interface Iprops {
  heroView: Boolean;
  aboutView: Boolean;
  expView: Boolean;
  skillsView: Boolean;
  extraView: Boolean;
}

export default function Sidebar({ heroView, aboutView, expView, skillsView, extraView }: Iprops) {
  return (
    <div
      className="z-[99] fixed w-fit h-fit text-zinc-300 text-2xl border border-zinc-700 items-center rounded-full
      flex bottom-1 left-1/2 -translate-x-1/2 px-3 py-1 gap-3 
      md:flex-col md:left-1 md:top-1/2 md:translate-x-0 md:-translate-y-1/2 md:px-1 md:py-2"
    >
      <Link
        to="#Home"
        className={`flex rounded-full items-center justify-center p-1 h-7 w-7 transition-all duration-300 ${
          heroView && `bg-sky-500`
        }`}
      >
        <AiOutlineHome />
      </Link>
      <Link
        to="#About"
        className={`flex rounded-full items-center justify-center p-1 h-7 w-7 transition-all duration-300 ${
          aboutView && `bg-sky-500`
        }`}
      >
        <AiOutlineUser />
      </Link>
      <Link
        to="#Experiences"
        className={`flex rounded-full items-center justify-center p-1 h-7 w-7 transition-all duration-300 ${
          expView && `bg-sky-500`
        }`}
      >
        <AiOutlineCrown />
      </Link>
      <Link
        to="#Skills"
        className={`flex rounded-full items-center justify-center p-1 h-7 w-7 transition-all duration-300 ${
          skillsView && `bg-sky-500`
        }`}
      >
        <GiSkills />
      </Link>
      <Link
        to="#Extra"
        className={`flex rounded-full items-center justify-center p-1 h-7 w-7 transition-all duration-300 ${
          extraView && `bg-sky-500`
        }`}
      >
        <FaSlideshare />
      </Link>
    </div>
  );
}
