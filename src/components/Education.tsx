import constantData from "@/constant/constant";
import { GraduationCap, Calendar } from "lucide-react";


export function Education() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="flex flex-col items-center mb-16 space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Education</h2>
          <div className="h-1.5 w-12 bg-blue-600 rounded-full" />
        </div>

        <div className="space-y-8">
          {constantData.education.map((edu, index) => (
            <div
              key={index}
              className="group p-8 rounded-[2rem] bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex gap-5 items-start">
                  <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <GraduationCap className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 leading-tight">{edu.degree}</h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">{edu.institution}</p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 max-w-2xl">{edu.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-800"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 text-sm font-bold text-slate-400 border border-slate-100 dark:border-slate-800 shrink-0 self-start">
                  <Calendar className="h-4 w-4" />
                  {edu.period}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
