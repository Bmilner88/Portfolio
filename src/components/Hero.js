import React from "react";

const Hero = () => {
  return (
    <section className="pt-28 sm:pt-0 -mt-[88px]">
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:mx-36 justify-items-center items-center mt-[88px]">
        <div className="w-3/4 sm:w-1/2 md:w-9/12">
          <img
            className="rounded-lg shadow-lg self-center transition-all duration-1000 opacity-0 opacity-100"
            src={require("../assets/images/main/ben-milner.jpg")}
            alt="Ben Milner"
          />
        </div>
        <div className="w-3/4 text-justify">
          <p className="text-slate-300 mt-7 sm:mt-0">
            Hi there! My name is Ben Milner, and I am seeking employment in the
            field of Web Development. I am well qualified, having completed a
            Full-Stack Web Development Boot Camp through the University of Utah
            in addition to my professional and personal experience. I am a fast
            learner, a reliable employee, and I work well with others both as
            part of a team and in assisting clients and fellow employees.
            <br />
            <br />I have about 4 years of professional experience in IT and have
            always been fascinated with technology. In my spare time I enjoy
            skiing, hiking and playing lots of games. I've been learning how to
            resin 3D print which definitely keeps my mind active. I love
            traveling to new places and learning new things.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
