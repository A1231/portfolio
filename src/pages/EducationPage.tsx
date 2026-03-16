const education = [
  {
    institution: "North Carolina State University",
    degree: "Master of Computer Science, Computer Science",
    gpa: "4.0/4.0",
    dates: "Aug 2023 - May 2025",
    location: "Raleigh, NC",
    // Ordered by hiring relevance: security first, then core SDE, then foundational
    courses: [
      "Software Security",
      "Computer and Network Security",
      "System Attacks and Defenses",
      "Software Engineering",
      "Design and Analysis of Algorithms",
      "Cloud Computing",
      "Operating Systems",
      "Computer Networks",
      "Automated Learning and Data Analysis",
      "Neural Networks",
    ],
  },
  {
    institution: "Thadomal Shahani Engineering College",
    degree: "Bachelor of Engineering, Information Technology",
    gpa: "9.02/10",
    dates: "Jun 2015 - May 2019",
    location: "Mumbai, India",
    // Ordered by hiring relevance: DSA first, then practical skills
    courses: [
      "Data Structures and Algorithms",
      "Database Management",
      "Object Oriented Programming",
      "Web Security",
      "Computer Networks",
      "Cloud Computing",
      "Operating Systems",
      "Data Mining and Business Intelligence",
    ],
  },
]

function EducationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-medium text-text mb-8 pb-2 border-b border-border">
        Education
      </h2>
      <div className="flex flex-col gap-12">
        {education.map((edu) => (
          <div
            key={edu.institution}
            className="border border-border rounded-lg p-6 hover:border-accent/30 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <h3 className="text-lg font-semibold text-text">
                {edu.institution}
              </h3>
              <span className="text-muted text-sm font-mono shrink-0">
                {edu.dates}
              </span>
            </div>
            <p className="text-muted italic text-sm mb-1 flex flex-wrap items-center gap-2">
              {edu.degree}
              <span className="not-italic font-semibold text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/30">
                GPA: {edu.gpa}
              </span>
            </p>
            <p className="text-muted italic text-sm mb-4">{edu.location}</p>
            <div>
              <h4 className="text-sm font-medium text-accent mb-2">
                Relevant Courses
              </h4>
              <ul className="flex flex-wrap gap-2">
                {edu.courses.map((course) => (
                  <li
                    key={course}
                    className="text-muted text-sm px-3 py-1 rounded-md bg-surface border border-border"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EducationPage
