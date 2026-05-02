"use client";

import { useEffect, useSyncExternalStore } from "react";

type ThemeId = "green" | "dark" | "ocean" | "violet" | "sunset";

const THEMES: { id: ThemeId; color: string; label: string }[] = [
  { id: "green",  color: "#16a34a", label: "Green" },
  { id: "dark",   color: "#111a11", label: "Dark" },
  { id: "ocean",  color: "#0284c7", label: "Ocean" },
  { id: "violet", color: "#7c3aed", label: "Violet" },
  { id: "sunset", color: "#ea580c", label: "Sunset" },
];

const KEY = "wcTheme";
const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): ThemeId {
  return (localStorage.getItem(KEY) as ThemeId) || "green";
}

function getServerSnapshot(): ThemeId {
  return "green";
}

export default function ThemeSwitcher() {
  const active = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", active);
  }, [active]);

  const setTheme = (id: ThemeId) => {
    localStorage.setItem(KEY, id);
    listeners.forEach((cb) => cb());
  };

  return (
    <div role="group" aria-label="Color theme" className="flex items-center gap-1.5">
      {THEMES.map((theme) => (
        <button
          key={theme.id}
          onClick={() => setTheme(theme.id)}
          aria-label={`${theme.label} theme`}
          aria-pressed={active === theme.id}
          title={theme.label}
          className={`w-5 h-5 rounded-full cursor-pointer transition-all duration-150 ${
            active === theme.id
              ? "scale-110 ring-2 ring-offset-2 ring-offset-[var(--nav-bg)] ring-[var(--accent)]"
              : "opacity-60 hover:opacity-90 hover:scale-105"
          }`}
          style={{ backgroundColor: theme.color }}
        />
      ))}
    </div>
  );
}
