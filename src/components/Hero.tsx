import { Button } from "@/components/ui/button";
import { Download, Mail, Terminal, Code2, Database, Github, Linkedin, Twitter } from "lucide-react";
import constantData from "@/constant/constant";

export function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Zahoor-Abbas-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-slate-950">
      {/* Background Ornaments */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/5 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.826 10.558c1.026 1.312 1.594 2.977 1.594 4.747V55.811h-3.877V15.305c0-1.127-.362-2.188-1.017-3.022L54.826 10.558z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="flex flex-col space-y-8 text-center lg:text-left animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest">
                Available for New Projects
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Modern Web <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                  Architect.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                {constantData.experties.split('|')[0]} specializing in building <span className="text-slate-900 dark:text-slate-200">resilient digital products</span> with React & Node.js.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button onClick={handleDownloadCV} className="w-full sm:w-auto gap-2">
                <Download className="h-5 w-5" />
                Download CV
              </Button>
              <Button variant="outline" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="w-full sm:w-auto gap-2">
                <Mail className="h-5 w-5" />
                Let's Talk
              </Button>
            </div>

            {/* Micro Tech Stack Badge */}
            <div className="pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-wrap justify-center lg:justify-start gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
              <div className="flex items-center gap-2 text-sm font-semibold"><Code2 className="h-5 w-5" /> React / Next.js</div>
              <div className="flex items-center gap-2 text-sm font-semibold"><Terminal className="h-5 w-5" /> Node.js</div>
              <div className="flex items-center gap-2 text-sm font-semibold"><Database className="h-5 w-5" />  MongoDB</div>
            </div>
          </div>

          {/* Visual Element (Desktop Only) */}
          <div className="hidden lg:block relative animate-in fade-in zoom-in duration-1000 delay-200">
            <div className="relative z-10 w-full aspect-square rounded-3xl bg-slate-900 shadow-2xl overflow-hidden border border-slate-800 flex flex-col">
              <div className="h-8 bg-slate-800 flex items-center px-4 gap-1.5 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <div className="ml-4 text-[10px] text-slate-500 font-mono tracking-widest uppercase italic">Zahoor_Portfolio.tsx</div>
              </div>
              <div className="p-6 font-mono text-sm space-y-2">
                <p className="text-blue-400">const <span className="text-white">Developer</span> = {'{'}</p>
                <p className="pl-4 text-slate-400">name: <span className="text-emerald-400">"{constantData.name}"</span>,</p>
                <p className="pl-4 text-slate-400">stack: [<span className="text-amber-400">"React", "Next.js", "Node"</span>],</p>
                <p className="pl-4 text-slate-400">focus: <span className="text-emerald-400">"Scalable Architectures"</span>,</p>
                <p className="pl-4 text-slate-400">passion: <span className="text-emerald-400">"Clean UI/UX"</span></p>
                <p className="text-blue-400">{'}'}</p>
                <div className="pt-4 space-y-2">
                  <div className="h-2 w-full bg-slate-800 rounded animate-pulse" />
                  <div className="h-2 w-3/4 bg-slate-800 rounded animate-pulse" />
                  <div className="h-2 w-5/6 bg-slate-800 rounded animate-pulse" />
                </div>
              </div>
              <div className="mt-auto p-4 bg-slate-800/50 flex justify-between items-center">
                <div className="flex gap-4">
                  <Github className="h-4 w-4 text-slate-400" />
                  <Linkedin className="h-4 w-4 text-slate-400" />
                  <Twitter className="h-4 w-4 text-slate-400" />
                </div>
                <div className="text-[10px] text-slate-500 font-mono">UTF-8 | LF</div>
              </div>
            </div>
            {/* Background floating squares */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/20 rounded-2xl blur-2xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-600/20 rounded-2xl blur-2xl animate-pulse delay-700" />
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-600 to-transparent animate-shimmer" />
      </div>
    </section>
  );
}
