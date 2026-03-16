import Project, { type ProjectData } from "../components/Project"

const projects: ProjectData[] = [
    {
        title: "Aha! A real-time multiplayer quiz app",
        description:
            "Aha! Quiz Built with Spring Boot, React/TypeScript, Redis & WebSockets. Features live leaderboards, room management, session-based auth, and a full CI/CD pipeline with Docker & GitHub Actions.",
        techStack: {
            frontend: ["React", "TypeScript", "React Router", "Vite", "@stomp/stompjs", "Vitest+React Testing Library"],
            backend: ["Java", "Spring Boot", "Spring Web MVC", "Spring Data Redis", "Spring WebSocket (STOMP)", "Spring Validation", "SpringDoc OpenAPI 3", "JUnit 5", "Mockito"],
            dataStore: ["Redis"],
            infraAndDevOps: ["Docker", "Docker Compose", "Nginx", "Render", "Vercel", "GitHub Actions", "CI/CD"],
            security: ["Session Auth", "HttpOnly Cookies", "WebSocket Handshake Interceptors", "CORS Config", "Spring Validation"],
        },
        githubUrl: "https://github.com/A1231/Aha",
        vercelUrl: "https://aha-sigma-puce.vercel.app/",
    },
    {
        title: "Portfolio Website",
        description:
            "A responsive personal portfolio built with React 19, TypeScript, and Vite. Features a custom typewriter hero, mobile-first layout, and a design system with semantic tokens. Showcases projects across full-stack, systems, and security",
        techStack: {
            frontend: ["React", "TypeScript", "React Router", "Vite", "Tailwind CSS", "Lucide Icons", "React Icons", "Component based UI", "Client Side routing","SPA","Custom hooks"],
            
        },
        githubUrl: "",
    },
    {
        title: "Custom CPU Process Scheduler",
        description:
            "Built two preemptive CPU scheduling algorithms directly inside the Xinu operating system kernel. The first scheduler uses an exponential probability distribution to allocate CPU time across processes. The second replicates the Linux 2.2 SCHED_OTHER epoch-based scheduler, featuring dynamic time quantum computation, goodness-based priority ranking, and unused quantum carry-over. Both required modifying core kernel structures, timer interrupt handlers, and x86 context-switching routines to support correct preemption across 50+ concurrent scheduling cycles.",
        techStack:  ["C", "x86 Assembly", "Xinu OS", "Process Control Blocks", "Priority Queues", "Preemptive Scheduling", "Round-Robin", "Epoch-Based Scheduling", ],
       isPrivate: true,
        
    },
    {
        title: "Unix File System Defragmentor",
        description:
            "Built a low-level disk defragmentation tool in C that reads a fragmented Unix-style disk image and produces a new image where every file's blocks are stored contiguously. The tool parses the raw binary layout: boot block, superblock, inode region, data blocks, and swap region. It then traverses each inode's direct and indirect block pointers, remaps them to sequential addresses, and reconstructs the free block list.",
        techStack: ["C", "POSIX Sockets", "pthreads", "Makefile"],
        isPrivate: true,
    },
    {
        title: "Todo Management API",
        description:
            "A production-grade backend API built with Spring Boot 4 and Java 17 that powers a multi-user task management system. Users can register, authenticate via JWT tokens, and manage their tasks. Admins get elevated controls for user management and role promotion. The entire API is secured with Spring Security, follows a clean layered architecture, and is fully documented with an interactive Swagger UI.",
        techStack: {
            
            backend: ["Java", "Spring Boot", "Spring Web MVC", "Spring Data JPA", "Hibernate ORM", "Maven", "REST API", "SpringDoc OpenAPI 3", "Swagger UI", "bean Validation", "DTO Pattern", "Layered Architecture", "SOLID principles"],
            infraAndDevOps: ["Maven Build Tool", "Spring boot devtools", "Git", "GitHub"],
            security: ["Spring Security", "JWT (JSON Web Tokens)", "JJWT 0.13", "Role-Based Access Control (RBAC)", "Stateless Authentication", "Token Expiry Management", "Spring Boot DevTools"],
            dataStore: ["MySQL","Spring Data JPA", "Hibernate ORM", "CrudRepository", "Entity Relationships (ManyToOne)", "lazy Loading", "Transaction Management"],
        },
        githubUrl:"https://github.com/A1231/todo-management-api",
        
    },
    {
        title: "Employee Management API",
        description:
            "A production-ready RESTful API for managing employee records, built with Spring Boot 4 and Java 17. The API features full CRUD operations secured behind a three-tier Role-Based Access Control system (Employee, Manager, Admin) powered by Spring Security with database-backed authentication. Every request is validated using Jakarta Bean Validation, and the entire API is self-documented through an interactive Swagger UI powered by OpenAPI 3.0. Built with a clean layered architecture separating controllers, services, and repositories - the same patterns used in enterprise Java backends.",
        techStack: {
            
            backend: ["Java", "Spring Boot", "Spring Web MVC", "Spring Data JPA", "Hibernate ORM", "Jakarta Bean Validation", "REST API", "CRUD", "DTO Pattern", "Layered Architecture", "Dependency Injection", "Repository Pattern", "Service Layer Pattern", "OpenAPI 3.0", "Swagger UI", "SpringDoc", "JUnit 5"],
            infraAndDevOps: ["Maven", "Spring Boot DevTools", "Git", "Version Control"],
            security: ["Spring Security", "Role-Based Access Control (RBAC)", "HTTP Basic Authentication", "JDBC Authentication", "JdbcUserDetailsManager", "Custom AuthenticationEntryPoint", "SecurityFilterChain", "Least-Privilege Access",  "Authorization", "Authentication"],
            dataStore: ["H2 Database (In-Memory RDBMS)", "JPA/Hibernate ORM", "Spring Data JPA Repository", "SQL", "Custom SQL Queries", "Database-Backed User Management", "Relational Schema Design", "Foreign Key Constraints"],
        },
        githubUrl: "https://github.com/A1231/employee-management-api",
    },
    
    {
        title: "Secure File Transfer System",
        description:
            "A Python-based secure file transfer project that applies core cryptography concepts in practice. The system supports unencrypted, password-based (AES-GCM + PBKDF2), and Diffie-Hellman key exchange modes, with custom PDUs and socket-based networking. To show how protocols can fail, I also implemented an on-path (man-in-the-middle) attack proxy that intercepts and decrypts DH traffic. Built with PyCryptodome and Python sockets.",
        techStack: ["Python3", "PyCryptodome", "AES-256-GCM",  "Diffie-Hellman key exchange",  "PBKDF2", "SHA256", "Socket Programming", "Network Protocol design"],
        isPrivate: true,
    },
    
]

function ProjectsPage() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-medium text-text mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {projects.map((project) => (
                    <Project key={project.title} project={project} />
                ))}
            </div>
        </div>
    )
}

export default ProjectsPage
