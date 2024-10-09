import React from "react";
import { Hero, Portfolio, Resume, Contact } from "@/app/components";

export default function Home() {
  return (
    <div className="flex-1 overflow-auto">
      <Hero />
      <h2
        id="portfolio"
        className="text-center text-slate-300 font-bold text-5xl"
      >
        Portfolio
      </h2>
      <Portfolio />
      <h2
        id="resume"
        className="text-center text-slate-300 font-bold text-5xl"
      >
        Resume
      </h2>
      <Resume />
      <h2
        id="contact"
        className="text-center text-slate-300 font-bold text-5xl"
      >
        Contact
      </h2>
      <Contact />
    </div>
  );
}
