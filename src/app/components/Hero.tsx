import Image from "next/image";

export default function Hero() {
  return (
    <div id="about" className="h-screen scroll-mt-32">
      <div className="section container mx-auto py-40z mt-32">
        <div className="columns-2">
          <Image
            src="/images/main/ben-milner.jpg"
            width={500}
            height={500}
            alt="Ben Milner"
            className="gap-8 w-1/2 rounded-lg bg-gradient-to-br from-teal-400 to-blue-400 p-1 shadow-xl shadow-slate-900"
          />
        </div>
      </div>
    </div>
  );
}
