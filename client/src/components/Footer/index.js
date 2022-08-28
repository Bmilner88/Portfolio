import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <a
        href="https://www.linkedin.com/in/bmilner88"
        target="_blank"
        rel="noreferrer"
        className="link-dark text-decoration-none"
      >
        <span>
          <i class="bi bi-linkedin"></i>
        </span>
      </a>{" "}
      {"|"}{" "}
      <a
        href="https://github.com/Bmilner88"
        target="_blank"
        rel="noreferrer"
        className="link-dark text-decoration-none"
      >
        <span>
          <i class="bi bi-github"></i>
        </span>
      </a>{" "}
      {"|"}{" "}
      <a
        href="https://stackoverflow.com/users/19388818/ben-milner"
        target="_blank"
        rel="noreferrer"
        className="link-dark text-decoration-none"
      >
        <span>
          <i class="bi bi-stack-overflow"></i>
        </span>
      </a>
    </footer>
  );
};

export default Footer;
