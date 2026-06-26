import { useState, useEffect } from "react";
import { SiInstagram } from "react-icons/si";
import { Mail, Moon, Sun, Linkedin, Github } from "lucide-react";
import "./link-hub.css";

const links = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/nb._.fk01/",
    icon: SiInstagram,
    border: "border-rose-300 dark:border-rose-600",
    bg: "hover:bg-rose-50 dark:hover:bg-rose-950/30",
    iconColor: "text-rose-500 dark:text-rose-400",
    glow: "hover:shadow-rose-200/60 dark:hover:shadow-rose-900/60",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nabila-fkir-33a479321",
    icon: Linkedin,
    border: "border-sky-300 dark:border-sky-600",
    bg: "hover:bg-sky-50 dark:hover:bg-sky-950/30",
    iconColor: "text-sky-500 dark:text-sky-400",
    glow: "hover:shadow-sky-200/60 dark:hover:shadow-sky-900/60",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/fkirnabila5295fsts-lab",
    icon: Github,
    border: "border-slate-300 dark:border-slate-500",
    bg: "hover:bg-slate-50 dark:hover:bg-slate-700/30",
    iconColor: "text-slate-600 dark:text-slate-300",
    glow: "hover:shadow-slate-200/60 dark:hover:shadow-slate-700/60",
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:nabilafkirnf01@gmail.com",
    icon: Mail,
    border: "border-violet-300 dark:border-violet-600",
    bg: "hover:bg-violet-50 dark:hover:bg-violet-950/30",
    iconColor: "text-violet-500 dark:text-violet-400",
    glow: "hover:shadow-violet-200/60 dark:hover:shadow-violet-900/60",
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
    <div className="link-hub-root min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">

      {/* ── Animated background blobs ── */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div className="blob blob-4" />

      {/* Noise overlay for texture */}
      <div className="noise-overlay" />

      {/* ── Dark mode toggle ── */}
      <button
        onClick={() => setDark(!dark)}
        className="z-20 absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center
          bg-white/70 dark:bg-slate-900/70 backdrop-blur-md
          border border-white/80 dark:border-slate-700/80
          shadow-sm hover:shadow-md transition-all duration-200
          text-slate-600 dark:text-slate-300"
        aria-label="Toggle dark mode"
      >
        {dark ? <Sun size={16} /> : <Moon size={16} />}
      </button>

      {/* ── Main card ── */}
      <div className="card-enter z-10 relative w-full max-w-sm flex flex-col items-center gap-6">

        {/* Avatar */}
        <div className="avatar-enter relative">
          <div className="avatar-ring w-24 h-24 rounded-full p-[3px] shadow-xl">
            <div className="w-full h-full rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm flex items-center justify-center">
              <span className="text-3xl font-black bg-gradient-to-br from-violet-600 via-pink-500 to-sky-500 bg-clip-text text-transparent select-none">
                NF
              </span>
            </div>
          </div>
          <div className="badge-pulse absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center shadow-lg">
            <span className="text-white text-xs">✦</span>
          </div>
        </div>

        {/* Name */}
        <div className="name-enter text-center">
          <h1 className="text-4xl font-black tracking-tight leading-tight
            bg-gradient-to-r from-violet-600 via-pink-500 to-sky-500
            dark:from-violet-400 dark:via-pink-400 dark:to-sky-400
            bg-clip-text text-transparent">
            Nabila FKIR
          </h1>
        </div>

        {/* Bio bubble */}
        <div className="bio-enter relative bg-white/70 dark:bg-slate-900/60 backdrop-blur-md
          border border-white/90 dark:border-slate-700/60
          rounded-2xl px-5 py-3 shadow-lg max-w-xs text-center">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4
            bg-white/80 dark:bg-slate-900/70
            border-l border-t border-white/90 dark:border-slate-700/60 rotate-45" />
          <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed relative z-10">
            ✨ student · creator · dreamer<br />
            building things & finding my way
          </p>
        </div>

        {/* Links grid */}
        <div className="links-enter w-full grid grid-cols-2 gap-3 mt-1">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <a
                key={link.id}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                style={{ animationDelay: `${0.55 + i * 0.08}s` }}
                className={`
                  link-card group flex items-center gap-3 px-4 py-3.5 rounded-2xl
                  bg-white/70 dark:bg-slate-900/60 backdrop-blur-md
                  border-2 ${link.border} ${link.bg}
                  shadow-md hover:shadow-lg ${link.glow}
                  transition-all duration-250 hover:-translate-y-1 hover:scale-[1.02]
                  cursor-pointer
                `}
              >
                <div className={`shrink-0 ${link.iconColor} transition-transform duration-200 group-hover:scale-110 group-hover:rotate-6`}>
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
        <p className="footer-enter text-xs text-slate-400/80 dark:text-slate-500/80 mt-1 tracking-wide">
          © 2025 Nabila FKIR
        </p>
      </div>
    </div>
  );
}
