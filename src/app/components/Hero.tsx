import Image from "next/image";

export default function Hero() {
  return (
    <div id="about" className="h-screen mt-32 scroll-mt-32">
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-2 w-1/3">
          <Image
            src="/images/main/ben-milner.jpg"
            width={500}
            height={500}
            alt="Ben Milner"
            className="rounded-full bg-gradient-to-br from-teal-400 to-blue-400 p-1 shadow-xl shadow-slate-900"
          />
        </div>
        <div className="row-span-2 col-span-2">
          <p>TEST</p>
        </div>
      </div>
    </div>
  );
}
