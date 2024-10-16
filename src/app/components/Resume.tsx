import Link from "next/link";

export default function Resume() {
  return (
    <div id="resume" className="h-[calc(100vh-5rem)] scroll-mt-20">
      <h2 className="text-center text-slate-300 font-bold text-5xl mt-20 mb-10">
        Resume
      </h2>
      <object
        data="/resume.pdf"
        type="application/pdf"
        width="55%"
        height="85%"
        className="m-auto"
      />
    </div>
  );
}
