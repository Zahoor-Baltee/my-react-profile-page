
import constantData from "@/constant/constant";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";



export function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center mb-16 space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Featured Projects</h2>
          <div className="h-1.5 w-12 bg-blue-600 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {constantData.projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col rounded-[2.5rem] bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="flex gap-3">
                    <Button variant="primary" size="sm" className="rounded-full gap-2">
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </Button>
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" className="rounded-full gap-2 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20">
                        <Github className="h-4 w-4" /> Source
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-bold rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}