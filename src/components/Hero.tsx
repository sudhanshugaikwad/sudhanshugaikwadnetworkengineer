import { useEffect, useState } from 'react'
import { ArrowRight, Download, Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { profile } from '../data/profile'

const roleList = [
  'Network Engineer',
  'NOC Engineer',
  'CCNA',
  'Cyber Security Enthusiast',
]

export function Hero() {
  const [activeRole, setActiveRole] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveRole((current) => (current + 1) % roleList.length)
    }, 2200)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section id="home" className="hero-section section-shell">
      <div className="hero-copy">
        <div className="status-badge">
          <span className="status-live-dot" aria-hidden="true" />
          <span>{profile.tag}</span>
        </div>

        <h1>{profile.name}</h1>

        <div className="hero-role-wrapper" aria-live="polite">
          <div className="role-rotator" aria-label="Professional roles">
            {roleList.map((role, index) => (
              <span
                key={role}
                className={`role-text ${index === activeRole ? 'active' : ''}`}
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        <p className="hero-tagline">{profile.heroTagline}</p>
        

        <div className="hero-actions">
          <a href="#work" className="primary-button">
            View My Work
            <ArrowRight size={18} />
          </a>
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="secondary-button">
            <Download size={17} />
            Download Resume
          </a>
          <a href="#contact" className="secondary-button">
            <Mail size={17} />
            Contact Me
          </a>
        </div>

        <div className="social-row" aria-label="Social links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" data-tooltip="LinkedIn" title="LinkedIn">
            <FaLinkedinIn size={18} aria-hidden="true" />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" data-tooltip="GitHub" title="GitHub">
            <FaGithub size={18} aria-hidden="true" />
          </a>
          <a href="#contact" aria-label="Contact" data-tooltip="Contact" title="Contact">
            <Mail size={18} />
          </a>
        </div>
      </div>

    </section>
  )
}
