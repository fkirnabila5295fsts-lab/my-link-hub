import { useState, useEffect } from "react";
import { SiInstagram } from "react-icons/si";
import { Mail, Moon, Sun, Linkedin, Github } from "lucide-react";

const links = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/nb._.fk01/",
    icon: SiInstagram,
    color: "from-rose-400 to-pink-500",
    border: "border-rose-300 dark:border-rose-700",
    bg: "hover:bg-rose-50 dark:hover:bg-rose-950/40",
    iconColor: "text-rose-500 dark:text-rose-400",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nabila-fkir-33a479321",
    icon: Linkedin,
    color: "from-sky-400 to-blue-500",
    border: "border-sky-300 dark:border-sky-700",
    bg: "hover:bg-sky-50 dark:hover:bg-sky-950/40",
    iconColor: "text-sky-500 dark:text-sky-400",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/fkirnabila5295fsts-lab",
    icon: Github,
    color: "from-slate-400 to-slate-600",
    border: "border-slate-300 dark:border-slate-600",
    bg: "hover:bg-slate-50 dark:hover:bg-slate-800/40",
    iconColor: "text-slate-700 dark:text-slate-300",
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:nabilafkirnf01@gmail.com",
    icon: Mail,
    color: "from-violet-400 to-purple-500",
    border: "border-violet-300 dark:border-violet-700",
    bg: "hover:bg-violet-50 dark:hover:bg-violet-950/40",
    iconColor: "text-violet-500 dark:text-violet-400",
  },
];

export default function LinkHub() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-[#f8f6ff] dark:bg-[#0d0d1a] flex flex-col items-center justify-center px-4 py-12 relative">
      {/* Dark mode toggle */}
      <button
        onClick={() => setDark(!dark)}
        className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200 text-slate-600 dark:text-slate-300"
        aria-label="Toggle dark mode"
      >
        {dark ? <Sun size={16} /> : <Moon size={16} />}
      </button>

      {/* Card */}
      <div className="w-full max-w-sm flex flex-col items-center gap-6">

        {/* Avatar ring */}
        <div className="relative">
          <div className="w-24 h-24 rounded-full p-[3px] bg-gradient-to-br from-violet-400 via-pink-400 to-sky-400 shadow-lg">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-violet-100 to-pink-100 dark:from-violet-900 dark:to-pink-900 flex items-center justify-center">
              <span className="text-3xl font-black bg-gradient-to-br from-violet-600 via-pink-500 to-sky-500 bg-clip-text text-transparent select-none">
                NF
              </span>
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-br from-violet-400 to-pink-400 flex items-center justify-center shadow-md">
            <span className="text-white text-xs">✦</span>
          </div>
        </div>

        {/* Name */}
        <div className="text-center">
          <h1 className="text-4xl font-black tracking-tight bg-gradient-to-r from-violet-600 via-pink-500 to-sky-500 dark:from-violet-400 dark:via-pink-400 dark:to-sky-400 bg-clip-text text-transparent leading-tight">
            Nabila FKIR
          </h1>
        </div>

        {/* Bio bubble */}
        <div className="relative bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-3 shadow-md max-w-xs text-center">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-slate-800 border-l border-t border-slate-200 dark:border-slate-700 rotate-45" />
          <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed relative z-10">
            ✨ student · creator · dreamer<br />
            building things & finding my way
          </p>
        </div>

        {/* Links grid — 2 per row */}
        <div className="w-full grid grid-cols-2 gap-3 mt-2">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.id}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`
                  group flex items-center gap-3 px-4 py-3.5 rounded-2xl
                  bg-white dark:bg-slate-800/60
                  border-2 ${link.border}
                  ${link.bg}
                  shadow-sm hover:shadow-md
                  transition-all duration-200 hover:-translate-y-0.5
                  cursor-pointer
                `}
              >
                <div className={`shrink-0 ${link.iconColor} transition-transform duration-200 group-hover:scale-110`}>
                  <Icon size={20} />
                </div>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 truncate">
                  {link.label}
                </span>
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <p className="text-xs text-slate-400 dark:text-slate-600 mt-2 tracking-wide">
          © 2025 Nabila FKIR
        </p>
      </div>
    </div>
  );
}
