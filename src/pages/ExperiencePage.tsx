const experiences = [
  {
    organization: "North Carolina State University (OpenPRA)",
    role: "Software Developer",
    dates: "Jul 2025 - Present",
    bullets: [
      "Implemented OAuth and JWT authentication using NestJS, securing all API routes and reducing unauthorized access incidents",
      "Configured least-privilege access policies with the CASL library, enabling fine-grained permission control and preventing unauthorized data exposure",
    ],
  },
  {
    organization: "Tata Consultancy Services",
    role: "Systems Engineer",
    dates: "Jul 2020 - Jan 2022",
    bullets: [
      "Executed 15+ web application penetration tests using Burp Suite, OWASP ZAP, and Postman, identifying broken authentication, authorization flaws, and unrestricted file upload, which led to remediation of critical vulnerabilities and strengthened application security",
      "Verified that multiple applications complied with the Application Security Verification Standard (ASVS) by reviewing code and security controls, resulting in confirmed ASVS compliance and reduced security gaps",
      "Collaborated with developers to build a mock application using Spring Boot, Bootstrap, and PostgreSQL for the ethical hacking contest, providing a realistic target that enabled participants to practice exploitation techniques and contributed to a successful event",
      "Performed network penetration tests on 100+ devices with Nmap and Core Impact, uncovering misconfigurations and vulnerable services that were patched, thereby decreasing the organization's attack surface",
      "Achieved the 'Special Achievement Award' for identifying and assisting teams in remediating vulnerabilities",
    ],
  },
  {
    organization: "Tata Consultancy Services (National Stock Exchange)",
    role: "Software Developer",
    dates: "Jan 2020 - Jul 2020",
    bullets: [
      "Developed new trading-interface features for the NEAT Frontend using C and Git, to streamline data handling, which improved order-processing efficiency for the National Stock Exchange",
      "Earned the 'On the Spot (teams)' Award for timely delivery of release",
    ],
  },
]

function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-medium text-text mb-8 pb-2 border-b border-border">
        Experience
      </h2>
      <div className="flex flex-col gap-12">
        {experiences.map((exp) => (
          <div
            key={`${exp.organization}-${exp.role}`}
            className="border border-border rounded-lg p-6 hover:border-accent/30 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-lg font-semibold text-text">
                  {exp.organization} | {exp.role}
                </h3>
              </div>
              <span className="text-muted text-sm font-mono shrink-0">
                {exp.dates}
              </span>
            </div>
            <ul className="space-y-2">
              {exp.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="text-muted text-sm leading-relaxed pl-4 border-l-2 border-accent/50"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExperiencePage
