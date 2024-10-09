import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-10">
      <nav className="fixed w-screen px-4 lg:px-6 py-2.5">
        <ul className="flex justify-center sm:space-x-8 md:space-x-10 lg:space-x-20 list-reset text-slate-300 pt-6">
          <li>
            <Link
              href="#about"
              className="rounded-full p-3 hover:bg-slate-800/25 backdrop-blur-sm font-bold transition-all duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#portfolio"
              className="rounded-full p-3 hover:bg-slate-800/25 backdrop-blur-sm font-bold transition-all duration-200"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#resume"
              className="rounded-full p-3 hover:bg-slate-800/25 backdrop-blur-sm font-bold transition-all duration-200"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="rounded-full p-3 hover:bg-slate-800/25 backdrop-blur-sm font-bold transition-all duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
