import Image from "next/image";

export default function Hero() {
  return (
    <div id="about" className="h-[calc(100vh-8rem)] mt-32 scroll-mt-32">
      <div className="h-full w-full flex items-center">
          <Image
            src="/images/main/ben-milner.jpg"
            width={300}
            height={300}
            alt="Ben Milner"
            className="w-1/4 rounded-full bg-gradient-to-br from-teal-400 to-blue-400 p-1 shadow-xl shadow-slate-900"
          />
          <p className="w-1/4">
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
  );
}
