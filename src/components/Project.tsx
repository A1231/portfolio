import { SiGithub } from "react-icons/si"
import { ExternalLink, Lock } from "lucide-react"
import { useState } from "react"

export type TechStack = {
    frontend?: string[]
    backend?: string[]
    dataStore?: string[]
    infraAndDevOps?: string[]
    security?: string[]
}

export type ProjectData = {
    title: string
    description: string
    techStack: TechStack | string[]
    githubUrl?: string
    vercelUrl?: string
    isPrivate?: boolean
}

const categories: { key: keyof TechStack; label: string; color: string }[] = [
    { key: "backend", label: "Backend", color: "text-accent-light" },
    { key: "infraAndDevOps", label: "Infra & DevOps", color: "text-purple" },
    { key: "security", label: "Security", color: "text-error" },
    { key: "dataStore", label: "Data Store", color: "text-amber" },
    { key: "frontend", label: "Frontend", color: "text-blue" },
]

function Project({ project }: { project: ProjectData }) {
    const [showPopup, setShowPopup] = useState(false)

    return (
        <div className="bg-surface border border-border rounded-lg p-5 flex flex-col gap-4 hover:border-muted transition-colors duration-200 relative">
            <div>
                <h3 className="text-lg font-medium text-text">{project.title}</h3>

                <div className="flex gap-3 mt-1.5">
                    {project.isPrivate ? (
                        <button
                            onClick={() => setShowPopup(true)}
                            className="flex items-center gap-1.5 text-muted text-sm hover:text-accent transition-colors cursor-pointer"
                        >
                            <Lock size={14} />
                            Repo
                        </button>
                    ) : project.githubUrl ? (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-muted text-sm hover:text-accent transition-colors"
                        >
                            <SiGithub size={16} />
                            Source
                        </a>
                    ) : null}

                    {project.vercelUrl && (
                        <a
                            href={project.vercelUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-muted text-sm hover:text-accent transition-colors"
                        >
                            <ExternalLink size={14} />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>

            <p className="text-muted text-sm leading-relaxed">{project.description}</p>

            {Array.isArray(project.techStack) ? (
                <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs font-mono px-2 py-0.5 rounded-md bg-bg border border-border text-muted"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 mt-auto">
                    {categories.map(({ key, label, color }) => {
                        const techs = (project.techStack as TechStack)[key]
                        if (!techs?.length) return null
                        return (
                            <>
                                <span key={`${key}-label`} className={`text-xs font-medium ${color} whitespace-nowrap self-center`}>
                                    {label}
                                </span>
                                <div key={`${key}-techs`} className="flex flex-wrap gap-1.5 self-center">
                                    {techs.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs font-mono px-2 py-0.5 rounded-md bg-bg border border-border text-muted"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </>
                        )
                    })}
                </div>
            )}

            {showPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg/70" onClick={() => setShowPopup(false)}>
                    <div className="bg-surface border border-border rounded-lg p-6 max-w-sm mx-4 shadow-xl" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center gap-2 mb-3">
                            <Lock size={16} className="text-amber" />
                            <h4 className="text-text font-medium">Private Repo</h4>
                        </div>
                        <p className="text-muted text-sm leading-relaxed">
                            This is an academic project hence kept private. Shoot me an email and I can provide GitHub access to the project.
                        </p>
                        <button
                            onClick={() => setShowPopup(false)}
                            className="mt-4 px-4 py-1.5 text-sm rounded-md bg-bg border border-border text-text hover:border-muted transition-colors cursor-pointer"
                        >
                            Got it
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Project
