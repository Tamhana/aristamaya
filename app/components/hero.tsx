import foto from "~/assets/img/rista.jpg";
import NavLink from "~/components/navlink";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "  ",
      "Critical thinking",
      "Problem solving",
      "Attention to detail",
      "Working well in a team",
      "Also as individual",
      "Advance Microsoft Offices skills",
      "Accounting software experience :",
      "Accurate, MYOB, Oracle",
    ],
    loop: true,
    typeSpeed: 70,
    delaySpeed: 1500,
  });

  return (
    <div>
      <h1 className="md:text-2xl text-xl mt-20 mb-5 md:tracking-[2px]">Hi, please take a look around</h1>
      <div className="flex-shrink-0 h-32 w-32 rounded-full mx-auto overflow-hidden my-5 md:my-16">
        <img src={foto} alt="Rista's Foto" className="object-cover" />
      </div>
      <h1 className="md:tracking-[20px] tracking-wider text-lg my-5">FINANCE ACCOUNTING</h1>
      <h2 className="h-14 md:text-2xl text-xl font-semibold tracking-wider my-5">
        <span>{text}</span>
        <Cursor cursorColor="rgb(14 165 233)" />
      </h2>
      <div className="md:space-x-4 space-x-2 left-1/2 my-5">
        <NavLink to="#About" title="About" />
        <NavLink to="#Experiences" title="Experience" />
        <NavLink to="#Skills" title="Skills" />
      </div>
    </div>
  );
}
