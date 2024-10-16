import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div id="portfolio" className="h-[calc(100vh-5rem)] scroll-mt-20">
      <h2 className="text-center text-slate-300 font-bold text-5xl mt-20">
        Portfolio
      </h2>
      <div className="h-auto grid grid-cols-1 md:grid-cols-2 justify-items-center mb-7 gap-5">
        <Link
          className="bg-slate-400 text-white rounded-lg w-11/12 lg:w-9/12 shadow-lg transition duration-200 hover:scale-105"
          href="https://www.pickupapiece.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={"/images/portfolio/puap.png"}
            width={1000}
            height={500}
            alt="Pick Up A Piece landing page"
          />
        </Link>

        <Link
          className="bg-slate-400 text-white rounded-lg w-11/12 lg:w-9/12 shadow-lg transition duration-200 hover:scale-105"
          href="https://bm-skyscape.onrender.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={"/images/portfolio/skyscape.png"}
            width={1000}
            height={500}
            alt="Skyscape landing page"
          />
        </Link>

        <Link
          className="bg-slate-400 text-white rounded-lg w-11/12 lg:w-9/12 shadow-lg transition duration-200 hover:scale-105"
          href="https://regal-help.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={"/images/portfolio/regal.png"}
            width={1000}
            height={500}
            alt="Regal landing page"
          />
        </Link>

        <Link
          className="bg-slate-400 text-white rounded-lg w-11/12 lg:w-9/12 shadow-lg transition duration-200 hover:scale-105"
          href="https://BlinkingHeimdall.github.io/show-pro/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={"/images/portfolio/showpro.png"}
            width={1000}
            height={500}
            alt="ShowPro landing page"
          />
        </Link>
      </div>
    </div>
  );
}
