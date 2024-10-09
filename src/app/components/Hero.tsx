import Image from "next/image";

export default function Hero() {
  return (
    <section className="container mx-auto py-40z">
      <div className="columns-2">
        <Image
          className="gap-8 w-1/2 rounded-lg bg-gradient-to-br from-indigo-600 to-pink-600 p-1 shadow-xl shadow-slate-900"
          src={"/images/main/ben-milner.jpg"}
          width={500}
          height={500}
          alt="Ben Milner"
        />
      </div>
    </section>
  );
}
