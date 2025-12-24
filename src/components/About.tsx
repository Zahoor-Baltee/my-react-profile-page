
import constantData from "@/constant/constant";
import { Code2, Palette, Rocket } from "lucide-react";

export function About() {
  const IconMap = {
    Code2: Code2,
    Palette: Palette,
    Rocket: Rocket
  };

  return (
    <section id="about" className="py-24 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">About Me</h2>
          <div className="h-1.5 w-12 bg-blue-600 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 italic font-medium">
              "{constantData.aboutme.description1}"
            </p>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              {constantData.aboutme.description2}
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              {constantData.aboutme.description3}
            </p>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              {constantData.aboutme.description4}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {constantData.aboutme.tilesData.map((tile, i) => {
            const IconComponent = IconMap[tile.icon] || Code2;
            return (
              <div key={i} className="group p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="h-14 w-14 rounded-2xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{tile.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {tile.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
