import React from "react";
import { Hero, Portfolio, Resume, Contact } from "@/app/components";

export default function Home() {
  return (
    <div className="bg-slate-700">
      <Hero />
      <h2
        id="portfolio"
        className="text-center text-slate-300 font-bold text-5xl my-12"
      >
        Portfolio
      </h2>
      <Portfolio />
      <h2
        id="resume"
        className="text-center text-slate-300 font-bold text-5xl my-12"
      >
        Resume
      </h2>
      <Resume />
      <h2
        id="contact"
        className="text-center text-slate-300 font-bold text-5xl my-12"
      >
        Contact
      </h2>
      <Contact />
    </div>
  );
}
