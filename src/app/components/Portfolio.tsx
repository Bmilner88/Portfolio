import ProjectCard from "@/ui/ProjectCard";
import projects from "@/lib/projects.json";

export default function Portfolio() {
  return (
    <div id="portfolio" className="min-h-[calc(100vh-5rem)] scroll-mt-20">
      <h2 className="text-center text-slate-300 font-bold text-5xl mt-20">
        Portfolio
      </h2>
      <ul className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-5 px-5">
        {projects.map((project) => {
          return (
            <li
              key={project.key}
              className="bg-slate-400 text-white rounded-lg shadow-lg transition duration-200 hover:scale-105"
            >
              <ProjectCard data={project} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
