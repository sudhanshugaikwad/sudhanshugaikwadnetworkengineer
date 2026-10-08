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
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from './ui/navigation-menu'


type NavbarProps = {
  activeSection: string
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

const mainLinks = [
  { label: 'Home', id: 'home', icon: Home },
  { label: 'About', id: 'about', icon: UserRound },
   { label: 'Certificates', id: 'certificates', icon: Award },
  { label: 'Skills', id: 'skills', icon: Sparkles },
  { label: 'Work', id: 'work', icon: BriefcaseBusiness },
  { label: 'Tools', id: 'tools', icon: Wrench },
  { label: 'Contact', id: 'contact', icon: Mail },
]

export function Navbar({ activeSection, theme, onToggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobileMenu = () => setMobileOpen(false)

  return (
    <header className="topbar">
      <NavigationMenu className="navbar" aria-label="Main navigation">
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
          <NavigationMenuList className="nav-links">
            {mainLinks.map(({ label, id, icon: Icon }) => (
              <NavigationMenuItem key={id} className="nav-item">
                <NavigationMenuLink
                  href={`#${id}`}
                  className={`nav-menu-link ${activeSection === id ? 'active' : ''}`}
                  aria-current={activeSection === id ? 'location' : undefined}
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
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>

          <div className="nav-actions">
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="primary-button compact-button text-[0.74rem] sm:text-[0.78rem]">
              <Download size={15} />
              Download CV
            </a>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>
        </div>
      </NavigationMenu>
    </header>
  )
}
