import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky z-50">
      <nav className="fixed w-screen pt-6">
        <ul className="flex justify-center rounded-full space-x-2 sm:space-x-8 md:space-x-10 lg:space-x-20 list-reset text-zinc-300">
          <li draggable="false">
            <Link
              href="/#about"
              className="rounded-full p-3 hover:bg-slate-800/25 backdrop-blur-md font-bold transition-all duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/#portfolio"
              className="rounded-full p-3 hover:bg-slate-800/25 backdrop-blur-md font-bold transition-all duration-200"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/#resume"
              className="rounded-full p-3 hover:bg-slate-800/25 backdrop-blur-md font-bold transition-all duration-200"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              className="rounded-full p-3 hover:bg-slate-800/25 backdrop-blur-md font-bold transition-all duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
