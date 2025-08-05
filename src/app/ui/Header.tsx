"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNav = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", controlNav);

    return () => window.removeEventListener("scroll", controlNav);
  }, []);

  return (
    <div
      className={`navbar fixed w-full bg-base-100 shadow-lg transition-transform duration-300 z-50 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="navbar-start"></div>
      <div className="navbar-center gap-2 md:gap-8">
        <Link href="#about" className="btn btn-ghost">
          About
        </Link>
        <Link href="#projects" className="btn btn-ghost">
          Projects
        </Link>
        <Link href="#resume" className="btn btn-ghost">
          Resume
        </Link>
        <Link href="#contact" className="btn btn-ghost">
          Contact
        </Link>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
