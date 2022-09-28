import React from "react";
import { BsLinkedin, BsGithub, BsStackOverflow } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="grid grid-cols-3 items-center py-3">
      <a
        href="https://www.linkedin.com/in/bmilner88"
        target="_blank"
        rel="noreferrer"
        className="text-white justify-self-end"
      >
        <span>
          <BsLinkedin size={25} />
        </span>
      </a>
      <a
        href="https://github.com/Bmilner88"
        target="_blank"
        rel="noreferrer"
        className="text-white justify-self-center"
      >
        <span>
          <BsGithub size={25} />
        </span>
      </a>
      <a
        href="https://stackoverflow.com/users/19388818/ben-milner"
        target="_blank"
        rel="noreferrer"
        className="text-white justify-self-start"
      >
        <span>
          <BsStackOverflow size={25} />
        </span>
      </a>
    </div>
  );
};

export default Footer;
