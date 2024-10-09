export default function Header() {
  return (
    <nav className="py-6 fixed w-screen top-0">
      <ul className="flex justify-center sm:space-x-10 md:space-x-16 lg:space-x-40 list-reset text-slate-300">
        <li>
          <button className="rounded-full p-3 hover:bg-slate-900 backdrop-blur-sm font-bold transition-all duration-200">
            Projects
          </button>
          {/* Make this scroll to the portfolio section (id="portfolio") */}
        </li>
        <li>
          <button className="rounded-full p-3 hover:bg-slate-900 backdrop-blur-sm font-bold transition-all duration-200">
            Resume
          </button>
          {/* Make this scroll to the resume section */}
        </li>
        <li>
          <button className="rounded-full p-3 hover:bg-slate-900 backdrop-blur-sm font-bold transition-all duration-200">
            Contact
          </button>
          {/* Make this scroll to the contact section */}
        </li>
      </ul>
    </nav>
  );
}
