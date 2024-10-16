import Image from "next/image";
import main from "../../../public/images/main/ben-milner.png"

export default function Hero() {
  return (
    <div id="about" className="h-screen pt-32 scroll-mt-32 bg-cover bg-[url('/images/background/lc-river-1.jpg')] shadow-2xl">
      <div className="xl:pt-32 grid sm:grid-cols-5">
        <div>{/* EMPTY DIV FOR STYLING */}</div>
        <div className="col-span-3 flex flex-wrap xl:flex-nowrap items-center justify-center gap-6 p-10 mb-32 rounded-3xl bg-slate-100 bg-opacity-65 backdrop-blur-sm">
          <Image
            src={main}
            alt="Ben Milner"
            className="rounded-full w-3/4 bg-gradient-to-br from-teal-400 to-blue-400 p-1 shadow-lg shadow-slate-900"
          />
          <p className="text-gray-800 font-semibold">
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
        <div>{/* EMPTY DIV FOR STYLING */}</div>
      </div>
    </div>
  );
}
