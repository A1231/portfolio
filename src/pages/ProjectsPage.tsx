import Project, { type ProjectData } from "../components/Project"

const projects: ProjectData[] = [
    {
        title: "Real-Time WebSocket Backend with Redis (Aha!)",
        description:
            "Architected a real-time multiplayer backend with Spring Boot, Redis pub/sub, and STOMP over WebSockets. Designed session-based auth with HttpOnly cookies and WebSocket handshake interceptors for secure real-time channels. Implemented room-based state management, live leaderboard aggregation, and a production CI/CD pipeline (Docker, Nginx, GitHub Actions). Demonstrates distributed state, low-latency messaging, and scalable real-time architecture.",
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
        title: "Portfolio",
        description:
            "Full-stack showcase site built with React 19, TypeScript, and Vite. Demonstrates component architecture, client-side routing, and a maintainable design system. Curates backend-heavy projects spanning REST APIs, real-time systems, kernel-level scheduling, and cryptographic protocols.",
        techStack: {
            frontend: ["React", "TypeScript", "React Router", "Vite", "Tailwind CSS", "Lucide Icons", "React Icons", "Component based UI", "Client Side routing","SPA","Custom hooks"],
            
        },
        githubUrl: "https://github.com/A1231/portfolio",
    },
    {
        title: "Kernel Process Scheduler (Xinu)",
        description:
            "Implemented two preemptive schedulers in the Xinu kernel: (1) an exponential-probability scheduler for fair CPU allocation, and (2) a Linux 2.2–style epoch-based scheduler with dynamic time quanta, goodness-based priority, and quantum carry-over. Modified kernel structures, timer ISRs, and x86 context-switch routines to support correct preemption under 50+ concurrent processes. Systems-level work in C and assembly.",
        techStack:  ["C", "x86 Assembly", "Xinu OS", "Process Control Blocks", "Priority Queues", "Preemptive Scheduling", "Round-Robin", "Epoch-Based Scheduling", ],
       isPrivate: true,
        
    },
    {
        title: "Unix Disk Defragmenter",
        description:
            "Designed a disk defragmenter in C that parses raw Unix-style disk images (boot block, superblock, inode region, data blocks) and rewrites them with contiguous block allocation. Traverses direct and indirect block pointers, remaps addresses, and reconstructs the free-block list. Low-level I/O, binary layout parsing, and file system internals.",
        techStack: ["C", "POSIX Sockets", "pthreads", "Makefile"],
        isPrivate: true,
    },
    {
        title: "Todo REST API — JWT, RBAC, Multi-Tenant",
        description:
            "Production REST API with Spring Boot 4 and Java 17: JWT-based stateless auth, RBAC (user/admin), multi-tenant task isolation, and Spring Security. Layered architecture (controller → service → repository), DTOs, Bean Validation, Hibernate/JPA with MySQL. OpenAPI 3 docs and Swagger UI. Built for scalability and maintainability.",
        techStack: {
            
            backend: ["Java", "Spring Boot", "Spring Web MVC", "Spring Data JPA", "Hibernate ORM", "Maven", "REST API", "SpringDoc OpenAPI 3", "Swagger UI", "bean Validation", "DTO Pattern", "Layered Architecture", "SOLID principles"],
            infraAndDevOps: ["Maven Build Tool", "Spring boot devtools", "Git", "GitHub"],
            security: ["Spring Security", "JWT (JSON Web Tokens)", "JJWT 0.13", "Role-Based Access Control (RBAC)", "Stateless Authentication", "Token Expiry Management", "Spring Boot DevTools"],
            dataStore: ["MySQL","Spring Data JPA", "Hibernate ORM", "CrudRepository", "Entity Relationships (ManyToOne)", "lazy Loading", "Transaction Management"],
        },
        githubUrl:"https://github.com/A1231/todo-management-api",
        
    },
    {
        title: "Employee CRUD API — Spring Security, RBAC",
        description:
            "Enterprise REST API for employee CRUD with Spring Boot 4 and Java 17. RBAC (Employee/Manager/Admin) via Spring Security and JDBC-backed user store. Jakarta Bean Validation, DTO pattern, repository layer, and least-privilege authorization. OpenAPI 3.0 and Swagger UI. Demonstrates layered design, dependency injection, and production-ready Java patterns.",
        techStack: {
            
            backend: ["Java", "Spring Boot", "Spring Web MVC", "REST API", "Spring Data JPA","CRUD", "Hibernate ORM", "Jakarta Bean Validation",   "DTO Pattern", "JUnit 5", "Layered Architecture", "Dependency Injection", "Repository Pattern", "Service Layer Pattern", "OpenAPI 3.0", "Swagger UI", "SpringDoc", ],
            infraAndDevOps: ["Maven", "Spring Boot DevTools", "Git", "Version Control"],
            security: ["Spring Security", "RBAC", "HTTP Basic Authentication", "JDBC Authentication", "JdbcUserDetailsManager", "SecurityFilterChain", "Least-Privilege Access",  "Authorization", "Authentication"],
            dataStore: ["H2 Database (In-Memory RDBMS)", "Spring Data JPA Repository", "SQL", "Custom SQL Queries", "Database-Backed User Management", "Relational Schema Design", "Foreign Key Constraints"],
        },
        githubUrl: "https://github.com/A1231/employee-management-api",
    },
    
    {
        title: "Secure File Transfer Protocol (Custom)",
        description:
            "Custom network protocol over raw sockets with three modes: plaintext, password-based (AES-256-GCM + PBKDF2), and Diffie-Hellman key exchange. Designed PDUs, handshake flows, and encryption/decryption pipelines. Implemented an on-path (MITM) attack proxy to demonstrate protocol weaknesses and defense-in-depth. Cryptography, protocol design, and security analysis in Python.",
        techStack: ["Python3", "PyCryptodome", "AES-256-GCM",  "Diffie-Hellman key exchange",  "PBKDF2", "SHA256", "Socket Programming", "Network Protocol design"],
        isPrivate: true,
    },
    
]

function ProjectsPage() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-medium text-text mb-8">Projects</h2>

            <div className="mb-12 text-muted text-sm leading-relaxed space-y-3">
                <p className="text-text">
                    I enjoy building systems where performance, correctness, and security intersect.
                </p>
                <p>I&apos;m particularly interested in:</p>
                <ul className="list-disc list-inside space-y-1 ml-1">
                    <li>Distributed systems & real-time communication</li>
                    <li>Backend scalability & caching strategies</li>
                    <li>Secure authentication & system hardening</li>
                </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {projects.map((project) => (
                    <Project key={project.title} project={project} />
                ))}
            </div>
        </div>
    )
}

export default ProjectsPage
