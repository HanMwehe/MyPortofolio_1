
enum SkillLevel {
  Process,
  Beginner,
  Intermediate,
  Advanced,
}

interface Technology {
  icon: string;
  color? : string;
  title: string;
  category: "Framework" | "Language" | "OS" | "Database" | "Runtime" | "PackageManager";
  skillLevel: SkillLevel;
}

const technologies: Technology[] = [
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", title: "React", category: "Framework", skillLevel: SkillLevel.Advanced },
  { icon: "https://zod.dev/logo.svg", title: "Zod", category: "Framework", skillLevel: SkillLevel.Advanced },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", title: "TailwindCSS", category: "Framework", skillLevel: SkillLevel.Advanced },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", title: "PrismaORM", category: "Framework", skillLevel: SkillLevel.Advanced },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", title: "Express.js", category: "Framework", skillLevel: SkillLevel.Advanced },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", title: "JavaScript", category: "Language", skillLevel: SkillLevel.Advanced, color: "border-yellow-500" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", title: "TypeScript", category: "Language", skillLevel: SkillLevel.Intermediate, color: "border-blue-800"},
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", title: "PHP", category: "Language", skillLevel: SkillLevel.Beginner, color: "border-purple-600"},
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/archlinux/archlinux-original.svg", title: "Linux", category: "OS", skillLevel: SkillLevel.Advanced },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows11/windows11-original.svg", title: "Windows", category: "OS", skillLevel: SkillLevel.Advanced },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", title: "MongoDB", category: "Database", skillLevel: SkillLevel.Advanced },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", title: "PostgreSQL", category: "Database", skillLevel: SkillLevel.Beginner },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg", title: "Firebase", category: "Database", skillLevel: SkillLevel.Advanced },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg", title: "MariaDB", category: "Database", skillLevel: SkillLevel.Beginner },
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
  return (
    <div className="p-4">
      <div className="flex gap-4 flex-col b-4">
        <div className="w-full gap-3 flex flex-col">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {technologies.map((tech) => (
  <div
    key={tech.title}
    className="relative p-6 rounded-3xl border border-neutral-800 bg-neutral-900 flex flex-col items-center hover:border-blue-500 hover:bg-neutral-800 hover:shadow-lg"
  >
    <img
      src={tech.icon}
      alt={tech.title}
      className="w-12 h-12 mb-2 hover:scale-105"
    />
    <p className="font-semibold">{tech.title}</p>
  </div>
))}
</div>

        </div>
    </div>
    </div>
  );
};

export default Pages3;
