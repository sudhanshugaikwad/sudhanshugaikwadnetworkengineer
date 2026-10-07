
import { certifications } from '../data/certifications'

type CertificatesPageProps = {
  onBack?: () => void
}

export function CertificatesPage(_props: CertificatesPageProps = {}) {
  return (
    <div className="about-info-box cert-page-panel">
      

      <p className="mini-tag">Certificates</p>
      <h3>All Certifications</h3>

      <div className="education-stack">
        {certifications.map((item) => (
          <article key={item.title} className="education-card cert-page-card">
            <h3>{item.title}</h3>
            <p className="education-school">{item.issuer}</p>
            <p className="education-period">{item.date}</p>
            <p className="education-meta">
              {item.status} • {item.credentialId}
            </p>
            <p className="cert-summary-text">
              Certification progress focused on networking, security operations, and continued
              professional growth in modern infrastructure environments.
            </p>

            <div className="cert-actions">
              <a href={item.verification} target="_blank" rel="noreferrer"
                     
                      className="mark-sheet-button">
               View Certificates
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
