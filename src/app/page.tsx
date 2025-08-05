import { About, Contact, Projects, Resume } from "@/app/components";

export default function App() {
  return (
    <div className="scroll-smooth flex-1 overflow-auto bg-base-200">
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}
