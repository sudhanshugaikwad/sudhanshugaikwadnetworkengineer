
import { certifications } from '../data/certifications'
import { Award, Building2, CalendarDays, ExternalLink } from 'lucide-react'
import { SectionHeader } from './SectionHeader'
import { Badge } from './ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

type CertificatesPageProps = {
  onBack?: () => void
}

export function CertificatesPage(_props: CertificatesPageProps = {}) {
  const completedCount = certifications.filter((item) => item.status === 'Completed').length
  const statusVariants = {
    Completed: 'completed',
    'In Progress': 'in-progress',
    Planned: 'planned',
  } as const

  return (
    <div className="certificates-page">
      <div className="certificates-heading">
        <SectionHeader
          eyebrow="Credentials"
          title="Certificates & Training"
          description="Professional learning across networking, cybersecurity, programming, and technology platforms."
        />
        <div className="certificate-count" aria-label={`${completedCount} completed credentials`}>
          <Award size={19} aria-hidden="true" />
          <strong>{completedCount}</strong>
          <span>completed</span>
        </div>
      </div>

      <div className="certificate-grid" aria-label="Certificates and credentials">
        {certifications.map((item) => (
          <Card key={item.title} className="certificate-card certificate-card-item">
            <CardHeader className="certificate-card-header">
              <div className="certificate-card-topline">
                <span className="certificate-icon"><Award size={19} aria-hidden="true" /></span>
                <div className="certificate-badges">
                  <Badge className="certificate-badge" variant={statusVariants[item.status]}>
                    {item.status}
                  </Badge>
                  {item.isPrimary && <Badge className="certificate-badge" variant="featured">Featured</Badge>}
                </div>
              </div>
              <CardTitle className="certificate-card-title">{item.title}</CardTitle>
              <CardDescription className="certificate-card-description certificate-issuer">
                <Building2 size={15} aria-hidden="true" />
                <span>{item.issuer}</span>
              </CardDescription>
            </CardHeader>

            <CardContent className="certificate-card-content">
              <dl className="certificate-details">
                <div>
                  <dt><CalendarDays size={14} aria-hidden="true" /> Issued</dt>
                  <dd>{item.date}</dd>
                </div>
                <div>
                  <dt>Credential</dt>
                  <dd>{item.credentialId}</dd>
                </div>
              </dl>
            </CardContent>

            <CardFooter className="certificate-card-footer">
              <Button
                render={<a href={item.verification} target="_blank" rel="noreferrer" />}
                size="sm"
                className="certificate-button"
                aria-label={`Verify ${item.title}`}
              >
                View credential
                <ExternalLink size={15} aria-hidden="true" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
