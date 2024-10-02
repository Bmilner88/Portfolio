import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-800">
      <section className="pt-28 sm:pt-0 -mt-[88px] animate-appear">
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:mx-60 justify-items-center items-center mt-[88px]">
        <div className="w-3/4 sm:w-1/2 md:w-9/12">
          <Image
            className="rounded-lg shadow-lg self-center transition-all duration-1000 opacity-0 opacity-100"
            src={"/images/main/ben-milner.jpg"}
            width={500}
            height={500}
            alt="Ben Milner"
          />
        </div>
        <div className="w-11/12 text-justify">
          <p className="text-slate-300 mt-7 sm:mt-0">
            Hi there! My name is Ben Milner, and I am seeking employment in the
            field of Web Development. I am well qualified, having completed a
            Full-Stack Web Development Boot Camp through the University of Utah
            in addition to my professional and personal experience. I am a fast
            learner, a reliable employee, and I work well with others both as
            part of a team and in assisting clients and fellow employees.
            <br />
            <br />I have about 5 years of professional experience in IT and have
            always been fascinated with technology. In my spare time I enjoy
            skiing, hiking and playing lots of games. I love traveling to new 
            places and learning new things.
          </p>
        </div>
      </div>
    </section>
    <h2 className="text-center text-slate-300 font-bold text-5xl my-12">
        Portfolio
      </h2>
      <section className="h-auto grid grid-cols-1 md:grid-cols-2 justify-items-center mb-7 gap-5">
        <a
          href="https://www.pickupapiece.com/"
          target="_blank"
          rel="noreferrer"
          className="bg-slate-400 text-white rounded-lg w-11/12 lg:w-9/12 shadow-lg transition duration-200 hover:scale-105"
        >
          <h3 className="text-center text-2xl font-bold my-2">Pick Up A Piece</h3>
          <Image 
            src={"/images/portfolio/puap.png"}
            width={1000}
            height={500}
            alt="Pick Up a Piece landing page"
          />
        </a>
        <a
          href="https://bm-skyscape.onrender.com/"
          target="_blank"
          rel="noreferrer"
          className="bg-slate-400 text-white rounded-lg w-11/12 lg:w-9/12 shadow-lg transition duration-200 hover:scale-105"
        >
          <h3 className="text-center text-2xl font-bold my-2">Skyscape</h3>
          <Image 
            src={"/images/portfolio/skyscape.png"}
            width={1000}
            height={500}
            alt="Skyscape landing page"
          />
        </a>
        <a
          href="https://regal-help.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
          className="bg-slate-400 text-white rounded-lg w-11/12 lg:w-9/12 shadow-lg transition duration-200 hover:scale-105"
        >
          <h3 className="text-center text-2xl font-bold my-2">Regal</h3>
          <Image 
            src={"/images/portfolio/regal.png"}
            width={1000}
            height={500}
            alt="Regal landing page"
          />
        </a>
        <a
          href="https://BlinkingHeimdall.github.io/show-pro/"
          target="_blank"
          rel="noreferrer"
          className="bg-slate-400 text-white rounded-lg w-11/12 lg:w-9/12 shadow-lg transition duration-200 hover:scale-105"
        >
          <h3 className="text-center text-2xl font-bold my-2">ShowPro</h3>
          <Image 
            src={"/images/portfolio/showpro.png"}
            width={1000}
            height={500}
            alt="ShowPro landing page"
          />
        </a>
      </section>
      <div className="flex place-content-center gap-x-10 py-3">
      <a
        href="https://www.linkedin.com/in/bmilner88"
        target="_blank"
        rel="noreferrer"
        className="text-white transition duration-500 hover:text-green-300"
      >
      </a>
      <a
        href="https://github.com/Bmilner88"
        target="_blank"
        rel="noreferrer"
        className="text-white transition duration-500 hover:text-green-300"
      >
      </a>
      <a
        href="https://stackoverflow.com/users/19388818/ben-milner"
        target="_blank"
        rel="noreferrer"
        className="text-white transition duration-500 hover:text-green-300"
      >
      </a>
    </div>
    </div>
  );
}
