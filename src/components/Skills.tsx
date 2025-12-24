import constantData from "@/constant/constant";
import { Code2, Database, Cpu, Layers, Settings } from "lucide-react";




export function Skills() {
  const IconMap = { Code2, Database, Settings, Cpu, Layers };

  return (
    <section id="skills" className="py-24 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center mb-16 space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Technical Expertise</h2>
          <div className="h-1.5 w-12 bg-blue-600 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {constantData.skills.map((category, index) => {
            const IconComponent = IconMap[category.icon] || Code2;
            return (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center group-hover:rotate-6 transition-transform">
                    <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-sm font-semibold text-slate-700 dark:text-slate-300 border border-transparent hover:border-blue-500/30 hover:bg-white dark:hover:bg-slate-800 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
