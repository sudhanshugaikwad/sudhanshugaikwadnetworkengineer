export type ExperienceItem = {
  title: string
  company: string
  location: string
  period: string
  responsibilities: string[]
  technologies: string[]
  achievements: string[]
}

export const experienceItems: ExperienceItem[] = [
  {
    title: '[Job Title]',
    company: '[Company Name]',
    location: '[Location]',
    period: '[Start Date – End Date]',
    responsibilities: [
      'Monitor network health and support users, services, and infrastructure operations.',
      'Troubleshoot routing, switching, IP connectivity, and service interruptions.',
      'Support incident lifecycle management, priority handling, and problem resolution.',
      'Document network designs, changes, and troubleshooting outcomes for operational continuity.',
    ],
    technologies: ['Cisco IOS', 'TCP/IP', 'VLAN', 'OSPF', 'Wireshark', 'Monitoring Tools'],
    achievements: [
      'Maintained visibility into service health and network performance across core and access layers.',
      'Contributed to investigation and resolution of connectivity and routing incidents.',
      'Prepared actionable documentation and troubleshooting records for recurring operational issues.',
    ],
  },
  {
    title: '[Job Title]',
    company: '[Company Name]',
    location: '[Location]',
    period: '[Start Date – End Date]',
    responsibilities: [
      'Support network availability and service continuity through alert monitoring and escalation workflows.',
      'Assist in validating changes, documenting procedures, and handling recurring incident patterns.',
      'Coordinate with stakeholders on issue triage, prioritization, and RCA activities.',
      'Participate in network documentation, operational handover, and service improvement activities.',
    ],
    technologies: ['DNS', 'DHCP', 'Firewall', 'ACL', 'Python', 'Network Monitoring'],
    achievements: [
      'Improved operational awareness through structured alert analysis and troubleshooting reviews.',
      'Helped identify common failure patterns and supported preventive documentation efforts.',
      'Contributed to a stable and well-documented operational environment.',
    ],
  },
]
