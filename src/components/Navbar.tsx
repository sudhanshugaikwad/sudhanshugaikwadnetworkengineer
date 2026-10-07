import { useState } from 'react'
import {
  Award,
  BriefcaseBusiness,
  Download,
  Home,
  Mail,
  Menu,
  Sparkles,
  UserRound,
  Wrench,
  X,
} from 'lucide-react'
import { profile } from '../data/profile'
import { ThemeToggle } from './ThemeToggle'


type NavbarProps = {
  activeSection: string
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

const mainLinks = [
  { label: 'Home', id: 'home', icon: Home },
  { label: 'About', id: 'about', icon: UserRound },
  { label: 'Skills', id: 'skills', icon: Sparkles },
  { label: 'Work', id: 'work', icon: BriefcaseBusiness },
  { label: 'Certificates', id: 'certificates', icon: Award },
  { label: 'Tools', id: 'tools', icon: Wrench },
  { label: 'Contact', id: 'contact', icon: Mail },
]

export function Navbar({ activeSection, theme, onToggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobileMenu = () => setMobileOpen(false)

  return (
    <header className="topbar">
      <nav className="navbar" aria-label="Main navigation">
        <a href="#home" className="brand" aria-label="Sudhanshu Gaikwad home">
          <span className="brand-mark">{'{ SG }'}</span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((current) => !current)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className={`nav-panel ${mobileOpen ? 'open' : ''}`}>
          <div className="nav-links">
            {mainLinks.map(({ label, id, icon: Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`${activeSection === id ? 'active' : ''} text-[0.75rem] sm:text-[0.8rem] md:text-[0.82rem]`}
                onClick={(event) => {
                  event.preventDefault()
                  const section = document.getElementById(id)
                  section?.classList.add('is-visible')
                  section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  window.history.replaceState(null, '', `#${id}`)
                  closeMobileMenu()
                }}
              >
                <Icon size={15} />
                <span>{label}</span>
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="primary-button compact-button text-[0.74rem] sm:text-[0.78rem]">
              <Download size={15} />
              Download CV
            </a>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>
        </div>
      </nav>
    </header>
  )
}
