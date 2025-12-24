import constantData from "@/constant/constant";
import { Briefcase, Calendar, Award, CheckCircle2 } from "lucide-react";


export function Certifications() {
    return (
        <section id="certifications" className="py-24 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col items-center mb-16 space-y-4 text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Professional Certifications</h2>
                    <div className="h-1.5 w-12 bg-blue-600 rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {constantData.certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 hover:bg-white dark:hover:bg-slate-950 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500"
                        >
                            <div className="flex gap-6 items-start">
                                <div className="h-14 w-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                                    <Award className="h-8 w-8" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{cert.title}</h3>
                                        <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                                    </div>
                                    <p className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-4">{cert.organization}</p>

                                    <div className="flex flex-wrap gap-4 mb-6">
                                        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-400">
                                            <Calendar className="h-4 w-4" /> Issued {cert.year}
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-400">
                                            <Briefcase className="h-4 w-4" /> {cert.duration} Program
                                        </div>
                                    </div>

                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic">
                                        {cert.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}