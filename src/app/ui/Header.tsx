export default function Header() {
  return (
    <header className="sticky top-0 z-10">
      <nav className="fixed w-screen px-4 lg:px-6 py-2.5">
        <ul className="flex justify-center sm:space-x-8 md:space-x-10 lg:space-x-20 list-reset text-slate-300 pt-6">
        <li>
            <a href={'/#hero'} className="rounded-full p-3 hover:bg-slate-800/25 backdrop-blur-sm font-bold transition-all duration-200">
              About
            </a>
          </li>
          <li>
            <a href={'/#portfolio'} className="rounded-full p-3 hover:bg-slate-800/25 backdrop-blur-sm font-bold transition-all duration-200">
              Projects
            </a>
          </li>
          <li>
            <a href={'/#resume'} className="rounded-full p-3 hover:bg-slate-800/25 backdrop-blur-sm font-bold transition-all duration-200">
              Resume
            </a>
          </li>
          <li>
            <a href={'/#contact'} className="rounded-full p-3 hover:bg-slate-800/25 backdrop-blur-sm font-bold transition-all duration-200">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
