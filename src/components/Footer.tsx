import { BriefcaseBusiness, Code2, Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '../data/profile'

const socialLinks = [
  { label: 'LinkedIn', href: profile.linkedin, icon: BriefcaseBusiness },
  { label: 'GitHub', href: profile.github, icon: Code2 },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
  { label: 'Phone', href: `tel:${profile.phones[0].replace(/\s+/g, '')}`, icon: Phone },
  { label: 'Location', href: 'https://maps.google.com/?q=Hyderabad, India', icon: MapPin },
]

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand-block">
          <p className="footer-name">© 2026 {profile.name}</p>
        </div>

        <div className="footer-links compact-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials" aria-label="Social links">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="footer-social" title={label} aria-label={label}>
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
