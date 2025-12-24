import constantData from "@/constant/constant";
import { Github, Linkedin, Mail, Heart } from "lucide-react";


export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Brand/Logo in Footer */}
          <div className="flex flex-col items-center gap-2">
            <div className="text-2xl font-black tracking-tighter">
              {constantData.name.split(' ')[0]}<span className="text-blue-600">.</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Building digital experiences that matter.</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {constantData.socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>

          {/* Copyright & Info */}
          <div className="flex flex-col items-center gap-4 pt-8 border-t border-slate-200/60 dark:border-slate-800/60 w-full max-w-sm">
            <p className="text-sm text-slate-500 dark:text-slate-400 text-center font-medium">
              © {currentYear} {constantData.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">
              Made with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> in Pakistan
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
