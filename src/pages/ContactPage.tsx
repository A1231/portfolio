import { SlSocialLinkedin } from "react-icons/sl"
import { Mail } from "lucide-react"

const contacts = [
  {
    label: "Email",
    value: "aiyer5@ncsu.edu",
    href: "mailto:aiyer5@ncsu.edu",
    icon: Mail,
    iconColor: undefined,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/apoorva--iyer",
    href: "https://linkedin.com/in/apoorva--iyer",
    icon: SlSocialLinkedin,
    iconColor: "#0A66C2",
  },
]

function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-medium text-text mb-8 pb-2 border-b border-border">
        Contact
      </h2>
      <div className="flex flex-col gap-6">
        {contacts.map(({ label, value, href, icon: Icon, iconColor }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-accent/30 transition-colors group"
          >
            {Icon && (
              <Icon
                size={28}
                className={iconColor ? "" : "text-muted"}
                style={iconColor ? { color: iconColor } : undefined}
              />
            )}
            <div>
              <p className="text-muted text-sm">{label}</p>
              <p className="text-text font-medium group-hover:text-accent transition-colors">
                {value}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default ContactPage
