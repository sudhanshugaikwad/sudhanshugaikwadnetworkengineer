export type Certification = {
  title: string
  issuer: string
  credentialId: string
  date: string
  verification: string
  status: 'Completed' | 'In Progress' | 'Planned'
  isPrimary?: boolean
}

export const certifications: Certification[] = [
  {
    title: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    credentialId: 'Certificate',
    date: 'Oct 2026',
    verification: 'https://drive.google.com/file/d/1fAWV60Nor_uNH4zSNhcv2vX2Cc4oo9sf/view?usp=drive_link',
    status: 'Completed',
    isPrimary: true,
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    credentialId: 'Certificate',
    date: 'Oct 2026',
    verification: 'https://drive.google.com/file/d/1Ge9D3EQABJfOVAcX9LxwNZuuBhum_bAQ/view?usp=drive_link',
    status: 'Completed',
  },
  {
    title: 'Microsoft Model 1834 Certification (Profile)',
    issuer: 'Microsoft',
    credentialId: 'Profile',
    date: 'Oct 2026',
    verification: 'https://learn.microsoft.com/en-us/users/sudhanshugaikwad-1834/achievements',
    status: 'Completed',
  },
  {
    title: 'SQL (Basic)',
    issuer: 'HackerRank',
    credentialId: 'Certificate',
    date: 'Aug 2025',
    verification: 'https://www.hackerrank.com/certificates/iframe/293c53812c36',
    status: 'Completed',
  },
  {
    title: 'Python (Basic)',
    issuer: 'HackerRank',
    credentialId: 'Certificate',
    date: 'Aug 2025',
    verification: 'https://www.hackerrank.com/certificates/iframe/1abe9d7b47ec',
    status: 'Completed',
  },
  {
    title: 'Cyber Security Pledge for Students',
    issuer: 'Ministry of Electronics & IT, Government of India',
    credentialId: 'Certificate',
    date: 'Feb 2022',
    verification: 'https://drive.google.com/file/d/1nbG1spFpzJaQU1NJrjIgm7uUBJxh7LcZ/view',
    status: 'Completed',
  },
]
