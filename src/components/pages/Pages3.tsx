import { useState } from "react";

enum SkillLevel {
  Process,
  Beginner,
  Intermediate,
  Advanced,
}

interface Technology {
  icon: string;
  title: string;
  category: "Framework" | "Language" | "OS" | "Database" | "Runtime" | "PackageManager";
  skillLevel: SkillLevel;
}

const technologies: Technology[] = [
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", title: "React", category: "Framework", skillLevel: SkillLevel.Advanced },
  { icon: "https://zod.dev/logo.svg", title: "Zod", category: "Framework", skillLevel: SkillLevel.Advanced },
  { icon: "data:image/jpeg;base64,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", title: "ElysiaJS", category: "Framework", skillLevel: SkillLevel.Advanced },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", title: "TailwindCSS", category: "Framework", skillLevel: SkillLevel.Advanced },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", title: "PrismaORM", category: "Framework", skillLevel: SkillLevel.Advanced },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", title: "Express.js", category: "Framework", skillLevel: SkillLevel.Advanced },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", title: "JavaScript", category: "Language", skillLevel: SkillLevel.Advanced },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", title: "TypeScript", category: "Language", skillLevel: SkillLevel.Intermediate },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", title: "PHP", category: "Language", skillLevel: SkillLevel.Beginner },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/archlinux/archlinux-original.svg", title: "Linux", category: "OS", skillLevel: SkillLevel.Advanced },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows11/windows11-original.svg", title: "Windows", category: "OS", skillLevel: SkillLevel.Advanced },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", title: "MongoDB", category: "Database", skillLevel: SkillLevel.Advanced },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", title: "PostgreSQL", category: "Database", skillLevel: SkillLevel.Beginner },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bun/bun-original.svg", title: "Bun", category: "Runtime", skillLevel: SkillLevel.Beginner },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", title: "Node", category: "Runtime", skillLevel: SkillLevel.Beginner },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pnpm/pnpm-original.svg", title: "pnpm", category: "PackageManager", skillLevel: SkillLevel.Beginner },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    title: "npm",
    category: "PackageManager",
    skillLevel: SkillLevel.Advanced,
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg",
    title: "Yarn",
    category: "PackageManager",
    skillLevel: SkillLevel.Intermediate,
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/archlinux/archlinux-original.svg",
    title: "AUR (yay)",
    category: "PackageManager",
    skillLevel: SkillLevel.Advanced,
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg",
    title: "pacman",
    category: "PackageManager",
    skillLevel: SkillLevel.Advanced,
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-original.svg",
    title: "APT",
    category: "PackageManager",
    skillLevel: SkillLevel.Advanced,
  },
];

const Pages3 = () => {
  const [categoryFilter] = useState<string | null>(null);
  const [skillFilter] = useState<SkillLevel | null>(null);
  const [ShowSkill, setShowSkill] = useState<boolean>(false)

  const filteredTechnologies = technologies.filter(
    (tech) =>
      (!categoryFilter || tech.category === categoryFilter) &&
      (skillFilter === null || tech.skillLevel === skillFilter)
  );
  console.log(ShowSkill)
  return (
    <div className="p-4">
      <div className="flex gap-4 flex-col b-4">
        <button onClick={() => setShowSkill((prev) => !prev)} className={`btn-default btn ${ShowSkill ? "btn-error" : "btn-success"}`}>{ShowSkill ? "Hide My Skills" : "Show My Skills"}</button>
        {ShowSkill ?
        <div className="w-full gap-3 flex flex-col">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredTechnologies.map((tech) => (
          <div key={tech.title} className="p-4 border rounded-lg flex flex-col items-center">
            <img src={tech.icon} alt={tech.title} className="w-12 h-12 mb-2" />
            <p className="font-semibold">{tech.title}</p>
          </div>
        ))}
      </div>
        </div>
        :
        null
         }
    </div>
    </div>
  );
};

export default Pages3;
