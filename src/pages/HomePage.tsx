import { useEffect, useState } from 'react'
import {
  ArrowUp,
  ChevronDown,
  Code2,
  Download,
  ExternalLink,
  FileText,
  Mail,
  MapPin,
  Network,
  Phone,
  Shield,
  Sparkles,
  Wrench,
} from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { SectionHeader } from '../components/SectionHeader'
import { Footer } from '../components/Footer'
import { AboutSection } from '../components/AboutSection'
import { CertificatesPage } from '../components/CertificatesPage'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
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
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]

        if (visible) {
          setActiveSection(visible.target.id)
          visible.target.classList.add('is-visible')
        }
      },
      { rootMargin: '-112px 0px -65% 0px', threshold: 0 },
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

          <Accordion className="skill-accordion" multiple>
            {skillGroups.map((group) => (
              <AccordionItem key={group.title} value={group.title} className="skill-accordion-item">
                <AccordionTrigger className="skill-accordion-trigger">
                  <span className="skill-group-title">{group.title}</span>
                  <span className="skill-group-count">{group.items.length} skills</span>
                </AccordionTrigger>
                <AccordionContent className="skill-accordion-content">
                  <ul className="skill-list">
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <span>{item.name}</span>
                        <span className="skill-level">{item.level}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section id="work" className="section-shell">
          <SectionHeader
            eyebrow="Work"
            title="Projects"
            description="A selection of network engineering and operations projects focused on troubleshooting, reliability, security, and practical deployment work."
          />

          <div className="project-grid">
            {projects.map((project) => {
              const hasGithub = project.github !== '#'
              const hasDocumentation = project.docs !== '#'

              return (
                <Card key={project.title} className="project-card">
                  <CardHeader className="project-card-header">
                    <div className="project-card-topline">
                      <Badge className="work-role-badge">{project.role}</Badge>
                      <div className="project-icons" aria-hidden="true">
                        <Network size={17} />
                        <Code2 size={17} />
                      </div>
                    </div>
                    <CardTitle className="project-card-title">{project.title}</CardTitle>
                    <CardDescription className="project-description">{project.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="project-card-content">
                    <div className="tech-stack" aria-label="Technologies used">
                      {project.technologies.map((technology) => (
                        <Badge key={technology} className="work-tech-badge">{technology}</Badge>
                      ))}
                    </div>

                    <details className="project-highlights">
                      <summary>
                        <span>Project highlights</span>
                        <span className="project-feature-count">{project.features.length}</span>
                        <ChevronDown size={16} aria-hidden="true" />
                      </summary>
                      <ul className="feature-list">
                        {project.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </details>
                  </CardContent>

                  <CardFooter className="project-actions">
                    <Button
                      className="work-action-button"
                      size="sm"
                      disabled={!hasGithub}
                      title={hasGithub ? undefined : 'Repository link not provided'}
                      render={hasGithub ? <a href={project.github} target="_blank" rel="noreferrer" /> : undefined}
                    >
                      <FaGithub size={15} aria-hidden="true" />
                      GitHub
                    </Button>
                    <Button
                      className="work-action-button"
                      size="sm"
                      disabled={!hasDocumentation}
                      title={hasDocumentation ? undefined : 'Documentation link not provided'}
                      render={hasDocumentation ? <a href={project.docs} target="_blank" rel="noreferrer" /> : undefined}
                    >
                      <FileText size={15} aria-hidden="true" />
                      Documentation
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </section>

        <section id="tools" className="section-shell">
          <SectionHeader
            eyebrow="Tools"
            title="Operational Toolkit"
            description="Support tools for network operations, troubleshooting, security, cloud networking, and automation."
          />

          <div className="tool-grid">
            {toolGroups.map((group) => {
              const ToolIcon = group.title === 'Network'
                ? Network
                : group.title === 'Cisco'
                  ? Code2
                  : group.title === 'Security'
                    ? Shield
                    : group.title === 'Automation'
                      ? Wrench
                      : Sparkles

              return (
                <Card key={group.title} className="tool-card">
                  <CardHeader className="tool-card-header">
                    <div className="tool-card-topline">
                      <span className="tool-card-icon"><ToolIcon size={18} aria-hidden="true" /></span>
                      <Badge className="tool-count-badge">{group.items.length} tools</Badge>
                    </div>
                    <CardTitle className="tool-card-title">{group.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="tool-card-content">
                    <div className="tool-badges" aria-label={`${group.title} tools`}>
                      {group.items.map((item) => (
                        <Badge key={item} className="tool-item-badge">{item.trim()}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        <section id="resume" className="section-shell resume-shell">
          <Card className="resume-panel">
            <CardHeader className="resume-header">
              <span className="resume-icon"><FileText size={21} aria-hidden="true" /></span>
              <div>
              <p className="section-eyebrow">Resume</p>
              <h2>Professional Resume</h2>
              </div>
            </CardHeader>
            <CardContent className="resume-content">
              <p>Network engineering, NOC operations, troubleshooting, cloud networking, and security fundamentals.</p>
            </CardContent>
            <CardFooter className="resume-actions">
              <Button
                variant="primary"
                render={<a href={profile.resumeUrl} target="_blank" rel="noreferrer" />}
              >
                <FileText size={17} aria-hidden="true" />
                View resume
              </Button>
              <Button
                variant="outline"
                render={<a href={profile.resumeUrl} download />}
              >
                <Download size={17} />
                Download resume
              </Button>
            </CardFooter>
          </Card>
        </section>

        <section id="contact" className="section-shell contact-shell">
          <SectionHeader
            eyebrow="Contact"
            title="Let's Connect"
            description="I am interested in network engineering, NOC operations, network security, and cloud networking opportunities."
          />

          <div className="contact-grid contact-method-grid">
            <Card className="contact-method-card">
              <CardHeader className="contact-method-header">
                <span className="contact-method-icon"><Phone size={18} aria-hidden="true" /></span>
                <CardTitle className="contact-method-title">Phone</CardTitle>
              </CardHeader>
              <CardContent className="contact-method-content">
                {profile.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone.replace(/\s+/g, '')}`}>{phone}</a>
                ))}
              </CardContent>
            </Card>

            <Card className="contact-method-card">
              <CardHeader className="contact-method-header">
                <span className="contact-method-icon"><Mail size={18} aria-hidden="true" /></span>
                <CardTitle className="contact-method-title">Email</CardTitle>
              </CardHeader>
              <CardContent className="contact-method-content">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <a href={`mailto:${profile.alternateEmail}`}>{profile.alternateEmail}</a>
              </CardContent>
            </Card>

            <Card className="contact-method-card">
              <CardHeader className="contact-method-header">
                <span className="contact-method-icon"><MapPin size={18} aria-hidden="true" /></span>
                <CardTitle className="contact-method-title">Location</CardTitle>
              </CardHeader>
              <CardContent className="contact-method-content">
                <address>{profile.location}</address>
              </CardContent>
            </Card>
          </div>

          <div className="contact-actions">
            <Button variant="primary" render={<a href={`mailto:${profile.email}`} />}>
              <Mail size={16} aria-hidden="true" />
              Email me
            </Button>
            <Button variant="outline" render={<a href={profile.linkedin} target="_blank" rel="noreferrer" />}>
              <ExternalLink size={16} aria-hidden="true" />
              LinkedIn
            </Button>
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

