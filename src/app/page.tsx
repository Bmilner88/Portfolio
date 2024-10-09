import React from "react";
import { Hero, Portfolio, Resume, Contact } from "@/app/components";

export default function Home() {
  return (
    <div className="scroll-smooth flex-1 overflow-auto">
      <Hero />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  );
}
