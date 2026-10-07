import { useEffect, useState } from 'react'
import {
  ArrowUp,
  Code2,
  Download,
  ExternalLink,
  FileText,
  GitBranch,
  Network,
} from 'lucide-react'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { SectionHeader } from '../components/SectionHeader'
import { Footer } from '../components/Footer'
import { AboutSection } from '../components/AboutSection'
import { CertificatesPage } from '../components/CertificatesPage'
import { profile } from '../data/profile'
import { skillGroups } from '../data/skills'
import { projects } from '../data/projects'
import { toolGroups } from '../data/tools'

type HomePageProps = {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export default function HomePage({ theme, onToggleTheme }: HomePageProps) {
  const [activeSection, setActiveSection] = useState('home')
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 260)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const ids = Array.from(document.querySelectorAll<HTMLElement>('section[id]'))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) {
          setActiveSection(visible.target.id)
          visible.target.classList.add('is-visible')
        }
      },
      { threshold: [0.2, 0.4, 0.8] },
    )

    ids.forEach((section) => {
      section.setAttribute('data-reveal', 'true')
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar activeSection={activeSection} theme={theme} onToggleTheme={onToggleTheme} />

      <main>
        <Hero />

        <AboutSection />

        <section id="certificates" className="section-shell">
          <CertificatesPage onBack={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
        </section>

        <section id="skills" className="section-shell">
          <SectionHeader
            eyebrow="Skills"
            title="Core Network and Security Skills"
            description="Hands-on experience supporting secure, resilient, and well-documented engineering environments."
          />

          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article key={group.title} className="skill-card">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <span>{item.name}</span>
                      <span className="skill-level">{item.level}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section-shell">
          <SectionHeader
            eyebrow="Work"
            title="Projects"
            description="A selection of network engineering and operations projects focused on troubleshooting, reliability, security, and practical deployment work."
          />

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-head">
                  <div>
                    <p className="section-eyebrow small-space">{project.role}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <div className="project-icons">
                    <Code2 size={17} />
                    <Network size={17} />
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="tech-stack">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <ul className="feature-list">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                {(project.github !== '#' || project.docs !== '#' || project.demo !== '#') && (
                <div className="project-actions">
                  <a href={project.github} target="_blank" rel="noreferrer" className="secondary-button small-btn">
                    <GitBranch size={16} />
                    GitHub
                  </a>
                  <a href={project.docs} target="_blank" rel="noreferrer" className="secondary-button small-btn">
                    <FileText size={16} />
                    Docs
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="primary-button small-btn">
                    <ExternalLink size={16} />
                    View Project
                  </a>
                </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="tools" className="section-shell">
          <SectionHeader
            eyebrow="Tools"
            title="Operational Toolkit"
            description="Support tools for network operations, troubleshooting, security, cloud networking, and automation."
          />

          <div className="tool-grid">
            {toolGroups.map((group) => (
              <article key={group.title} className="tool-card">
                <h3>{group.title}</h3>
                <div className="tag-row">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <div className="resume-panel">
            <div>
              <p className="section-eyebrow">Resume</p>
              <h2>Resume</h2>
            </div>
            <p>Professional summary covering network engineering, NOC operations, troubleshooting, cloud awareness, and security fundamentals.</p>
            <div className="resume-actions">
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="primary-button">
                <FileText size={17} />
                View Resume
              </a>
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="secondary-button" download>
                <Download size={17} />
                Download Resume 
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell contact-shell">
          <SectionHeader
            eyebrow="Contact"
            title="Let's Connect"
            description="I am interested in network engineering, NOC operations, network security, and cloud networking opportunities."
          />

          <div className="contact-grid">
            <div className="contact-card">
              <div>
                <p className="contact-label">Mobile</p>
                <a href={`tel:${profile.phones[0].replace(/\s+/g, '')}`}>{profile.phones[0]}</a>
                <a href={`tel:${profile.phones[1].replace(/\s+/g, '')}`}>{profile.phones[1]}</a>
              </div>

              <div>
                <p className="contact-label">Email</p>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <a href={`mailto:${profile.alternateEmail}`}>{profile.alternateEmail}</a>
              </div>

              <div>
                <p className="contact-label">Location</p>
                <span>{profile.location}</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {showBackToTop && (
        <button
          type="button"
          className="back-to-top"
          aria-label="Back to Top"
          title="Back to Top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp size={18} />
        </button>
      )}

    </>
  )
}

