import {
  TbBrandPython,
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandReact,
  TbBrandReactNative,
  TbBrandNodejs,
  TbBrandNextjs,
  TbBrandKotlin,
  TbBrandVue,
  TbBrandFirebase,
  TbBrandDocker,
  TbBrandWordpress,
  TbBrandAzure,
  TbBrandAws,
  TbBrandMongodb,
  TbBrandCSharp,
} from "react-icons/tb";
import { SiGooglecloud, SiPostgresql, SiDotnet } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import type { IconType } from "react-icons";

const technologies: { name: string; icon: IconType; color: string }[] = [
  { name: "Python",        icon: TbBrandPython,      color: "#3776AB" },
  { name: "Java",          icon: FaJava,             color: "#ED8B00" },
  { name: "JavaScript",    icon: TbBrandJavascript,  color: "#F7DF1E" },
  { name: "TypeScript",    icon: TbBrandTypescript,  color: "#3178C6" },
  { name: "React",         icon: TbBrandReact,       color: "#61DAFB" },
  { name: "React Native",  icon: TbBrandReactNative, color: "#61DAFB" },
  { name: "Vue.js",        icon: TbBrandVue,         color: "#4FC08D" },
  { name: "Node.js",       icon: TbBrandNodejs,      color: "#339933" },
  { name: "Next.js",       icon: TbBrandNextjs,      color: "#171717" },
  { name: "Kotlin",        icon: TbBrandKotlin,      color: "#7F52FF" },
  { name: "AWS",           icon: TbBrandAws,         color: "#FF9900" },
  { name: "Azure",         icon: TbBrandAzure,       color: "#0078D4" },
  { name: "Google Cloud",  icon: SiGooglecloud,      color: "#4285F4" },
  { name: "Firebase",      icon: TbBrandFirebase,    color: "#FFCA28" },
  { name: "Docker",        icon: TbBrandDocker,      color: "#2496ED" },
  { name: "PostgreSQL",    icon: SiPostgresql,       color: "#336791" },
  { name: "WordPress",     icon: TbBrandWordpress,   color: "#21759B" },
  { name: "MongoDB",       icon: TbBrandMongodb,     color: "#47A248" },
  { name: "ASP.NET",       icon: SiDotnet,           color: "#512BD4" },
  { name: "C#",            icon: TbBrandCSharp,      color: "#9B4F96" },
];

export default function TechnologiesSection() {
  return (
    <section id="technologies" className="py-20 bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">Our Stack</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-fg">Technologies We Use</h2>
          <p className="mt-3 text-fg-muted max-w-xl mx-auto">
            Hover over an icon to see the technology name.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map(({ name, icon: Icon, color }) => (
            <div key={name} className="relative group">
              {/* Tooltip */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-fg text-canvas text-xs font-medium px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap pointer-events-none z-20 shadow-lg">
                {name}
                <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-fg" />
              </span>

              {/* Icon tile */}
              <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center cursor-default transition-all duration-200 hover:-translate-y-1.5 hover:shadow-xl">
                <Icon
                  className="w-8 h-8 transition-all duration-200 group-hover:scale-110"
                  style={{ color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
