export default function Header() {
  return (
    <header className="sticky top-0 z-10">
      <nav className="fixed w-screen px-4 lg:px-6 py-2.5">
        <ul className="flex justify-center sm:space-x-10 md:space-x-16 lg:space-x-40 list-reset text-slate-300">
          <li>
            <button className="rounded-full p-3 hover:bg-slate-800/25 backdrop-blur-sm font-bold transition-all duration-200">
              Projects
            </button>
            {/* Make this scroll to the portfolio section (id="portfolio") */}
          </li>
          <li>
            <button className="rounded-full p-3 hover:bg-slate-800/25 backdrop-blur-sm font-bold transition-all duration-200">
              Resume
            </button>
            {/* Make this scroll to the resume section (id="resume")*/}
          </li>
          <li>
            <button className="rounded-full p-3 hover:bg-slate-800/25 backdrop-blur-sm font-bold transition-all duration-200">
              Contact
            </button>
            {/* Make this scroll to the contact section (id="contact")*/}
          </li>
        </ul>
      </nav>
    </header>
  );
}
