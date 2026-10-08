import { Download } from 'lucide-react'
import { BookOpenText, Gauge, GraduationCap, UserRound } from 'lucide-react'
import profilePhoto from '../assets/Sudhanshu02.jpeg'
import { profile } from '../data/profile'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

const competencyRows = [
  { label: 'Network Operations', value: 90 },
  { label: 'Routing & Switching', value: 88 },
  { label: 'Cyber Security', value: 76 },
  { label: 'Automation & AI', value: 72 },
] as const

const aboutTabs = [
  { id: 'about', label: 'About', icon: UserRound },
  { id: 'education', label: 'Education', icon: BookOpenText },
  { id: 'proficiency', label: 'Proficiency', icon: Gauge },
] as const

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div className="about-layout">
        <Tabs defaultValue="about" className="about-tabs">
        <TabsList className="about-tab-header" aria-label="About section content">
          {aboutTabs.map(({ id, label, icon: Icon }) => (
            <TabsTrigger
              key={id}
              value={id}
              className="about-tab"
            >
              <Icon size={18} aria-hidden="true" />
              <span>{label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="about" className="about-content-panel about-tab-panel">
              <div className="about-visual">
                <div className="profile-avatar">
                    <img src={profilePhoto} alt="Sudhanshu Gaikwad" decoding="async" />
                </div>
              </div>

              <div className="about-profile-copy">
                <h2>Sudhanshu Gaikwad</h2>
                <h3>Network Engineer | NOC Engineer | CCNA</h3>

                <p>
                  NOC Engineer with a strong foundation in networking, network monitoring,
                  troubleshooting, and security operations. Skilled in monitoring network
                  infrastructure, identifying and resolving connectivity issues, handling
                  incidents and alerts, and maintaining network availability and performance.
                </p>

                <p>
                  CCNA-certified with hands-on knowledge of TCP/IP, OSI model, VLANs,
                  routing, switching, DNS, DHCP, VPNs, and network troubleshooting.
                  Experienced with Sophos Firewall, including firewall monitoring, rule
                  management, VPN connectivity, traffic analysis, and basic security
                  configuration.
                </p>

                <p>
                  Passionate about Cyber Security and Network Security, with a continuous-learning
                  mindset focused on advanced networking, security technologies, cloud
                  networking, and SOC/NOC operations.
                </p>

                <div className="about-action-row">
                  <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="primary-button compact-button">
                    <Download size={17} />
                    Download Resume
                  </a>
                </div>
              </div>
        </TabsContent>

        <TabsContent value="education" className="about-content-panel about-tab-panel">
            <div className="about-info-box">
              <div className="education-header-block">
                <h2 className="education-heading">My Education</h2>
              </div>

              <div className="education-stack">
                <article className="education-card">
                  <div className="education-card-top">
                    <div className="education-icon">
                      <GraduationCap size={26} />
                    </div>

                    <div className="education-copy">
                      <h3>MCA (Master of Computer Applications)</h3>
                      <p className="education-school">Institute of Management and Technology, Nanded</p>
                      <p className="education-period">Completed in 2024 - 2026</p>
                      <p>
                        Successfully completed postgraduate studies in Computer Science with a focus on
                        AI integration and modern AI tools. Gained strong knowledge in software
                        engineering, system design, and application development.
                      </p>
                      <p className="education-meta">
                        CGPA: 8.56 | Percentage: 79.30% | Class: A+
                      </p>
                    </div>
                  </div>

                  <div className="education-card-action">
                    <a
                      href="https://drive.google.com/file/d/1LPTuYV__ijFiOhm9JhXuArtXa1hQAj3M/view"
                      target="_blank"
                      rel="noreferrer"
                      className="mark-sheet-button"
                    >
                      <GraduationCap size={18} />
                      View Mark Sheet
                    </a>
                  </div>
                </article>

                <article className="education-card">
                  <div className="education-card-top">
                    <div className="education-icon">
                      <GraduationCap size={26} />
                    </div>

                    <div className="education-copy">
                      <h3>BCA (Bachelor of Computer Applications)</h3>
                      <p className="education-school">Vishwabharti Mahavidyalaya, Nanded</p>
                      <p className="education-period">Completed in 2021 - 2024</p>
                      <p>
                        Graduated with a focus on foundational computer science principles,
                        programming, database management, and software engineering concepts including
                        SDLC and SRS.
                      </p>
                      <p className="education-meta">
                        CGPA: 9.06 | Percentage: 79.47% | Final Grade: O
                      </p>
                    </div>
                  </div>

                  <div className="education-card-action">
                    <a
                      href="https://drive.google.com/file/d/1FP7clVujcXuM4fS1tXbobG0N5bjBWHvw/view"
                      target="_blank"
                      rel="noreferrer"
                      className="mark-sheet-button"
                    >
                      <GraduationCap size={18} />
                      View Mark Sheet
                    </a>
                  </div>
                </article>
              </div>
            </div>
        </TabsContent>

        <TabsContent value="proficiency" className="about-content-panel about-tab-panel">
            <div className="about-info-box proficiency-panel">
              <h2 className="proficiency-heading">Core Competencies</h2>

              <div className="about-tags proficiency-roles" aria-label="Professional roles">
                <span>Network Engineer</span>
                <span>CCNA</span>
                <span>NOC Engineer</span>
              </div>

              <div className="proficiency-grid">
                {competencyRows.map((item) => (
                  <div key={item.label} className="proficiency-row">
                    <div className="proficiency-label-wrap">
                      <span className="proficiency-icon">{item.label.includes('AI') ? '◌' : item.label.includes('Security') ? '▣' : item.label.includes('Routing') ? '▭' : '</>'}</span>
                      <span className="proficiency-label">{item.label}</span>
                    </div>

                    <div className="proficiency-value">{item.value}%</div>

                    <div className="proficiency-bar-track" aria-label={`${item.label} proficiency ${item.value}%`}>
                      <span className="proficiency-bar" style={{ width: `${item.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
