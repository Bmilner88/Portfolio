import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="min-h-screen flex container items-center space-x-4">
        <div className="w-1/2">
          <img
            className="max-w-md rounded-lg shadow-lg object-scale-down"
            src={require("../assets/images/main/ben-milner.jpg")}
            alt="Ben Milner"
          />
        </div>
        <div className="w-1/2">
          <p className="text-slate-300">
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
