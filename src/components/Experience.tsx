
import constantData from "@/constant/constant";
import { Briefcase, Calendar } from "lucide-react";



export function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="flex flex-col items-center mb-16 space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Experience</h2>
          <div className="h-1.5 w-12 bg-blue-600 rounded-full" />
        </div>

        <div className="space-y-12">
          {constantData.experiences.map((exp, index) => (
            <div key={index} className="relative group pl-8 md:pl-0">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-[-48px] w-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2 hidden md:block" />

              <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Time Indicator */}
                <div className="flex-1 text-left md:text-right hidden md:block">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-semibold text-slate-500 dark:text-slate-400 shadow-sm ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-6 w-4 h-4 rounded-full border-4 border-white dark:border-slate-950 bg-blue-600 z-10 -translate-x-1/2 shadow-[0_0_0_4px_rgba(37,99,235,0.1)] group-hover:scale-125 transition-transform" />

                {/* Content Card */}
                <div className="flex-1 w-full">
                  <div className="p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                        <Briefcase className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">{exp.title}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                      </div>
                    </div>

                    {/* Mobile Date */}
                    <div className="md:hidden flex items-center gap-2 text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest">
                      <Calendar className="h-3 w-3" /> {exp.period}
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                          <span className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed italic">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
