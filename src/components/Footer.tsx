import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiSpringboot,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiNodedotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiLinux,
  SiRedis,
  SiGithubactions,
  SiMysql,
  SiDjango,
  SiCircleci,
  SiNestjs,
  SiMongodb,
  SiSupabase,
  SiVercel,
  SiRender,
  SiPostman,
  SiBurpsuite,
  SiOwasp,
  SiZap,
  SiSwagger,
  SiOpenapiinitiative,
} from "react-icons/si"
import { DiJava } from "react-icons/di"
import { FaAws } from "react-icons/fa"
import { Network, ShieldCheck } from "lucide-react"

// Brand colors from simple-icons (icons display in their official colors)
const skills = [
  { Icon: DiJava, label: "Java", color: "#ED8B00" },
  { Icon: SiSpringboot, label: "Spring Boot", color: "#6DB33F" },
  { Icon: SiReact, label: "React", color: "#61DAFB" },
  { Icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { Icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
  { Icon: SiPython, label: "Python", color: "#3776AB" },
  { Icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1" },
  { Icon: SiMysql, label: "MySQL", color: "#4479A1" },
  { Icon: SiRedis, label: "Redis", color: "#DC382D" },
  { Icon: SiDjango, label: "Django", color: "#092E20" },
  { Icon: SiGithubactions, label: "GitHub Actions", color: "#2088FF" },
  { Icon: SiCircleci, label: "CI/CD", color: "#343434" },
  { Icon: SiDocker, label: "Docker", color: "#2496ED" },
  { Icon: SiGit, label: "Git", color: "#F05032" },
  { Icon: SiNodedotjs, label: "Node.js", color: "#339933" },
  { Icon: SiTailwindcss, label: "Tailwind", color: "#06B6D4" },
  { Icon: SiHtml5, label: "HTML5", color: "#E34F26" },
  { Icon: SiCss, label: "CSS3", color: "#1572B6" },
  { Icon: FaAws, label: "AWS", color: "#FF9900" },
  { Icon: SiLinux, label: "Linux", color: "#FCC624" },
  { Icon: SiNestjs, label: "NestJS", color: "#E0234E" },
  { Icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  { Icon: SiSupabase, label: "Supabase", color: "#3ECF8E" },
  { Icon: SiVercel, label: "Vercel", color: "#ffffff" },
  { Icon: SiRender, label: "Render", color: "#46E3B7" },
  { Icon: SiPostman, label: "Postman", color: "#FF6C37" },
  { Icon: SiBurpsuite, label: "Burp Suite", color: "#FF6633" },
  { Icon: Network, label: "Nmap", color: "#8b949e" },
  { Icon: SiOwasp, label: "OWASP", color: "#ffffff" },
  { Icon: SiZap, label: "OWASP ZAP", color: "#00549e" },
  { Icon: ShieldCheck, label: "ASVS", color: "#8b949e" },
  { Icon: SiSwagger, label: "Swagger", color: "#85EA2D" },
  { Icon: SiOpenapiinitiative, label: "OpenAPI", color: "#6BA539" },
]

function Footer() {
  return (
    <div className="border-t border-border py-6 px-4">
      <div className="flex flex-wrap items-center justify-center gap-4">
        <span className="text-muted text-sm font-medium mr-2">Skills:</span>
        {skills.map(({ Icon, label, color }) => (
          <div
            key={label}
            className="flex items-center gap-2 border border-border rounded-md px-3 py-2 hover:border-accent/50 transition-colors"
            title={label}
          >
            <Icon size={20} style={{ color: color }} />
            <span className="text-text text-sm">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Footer