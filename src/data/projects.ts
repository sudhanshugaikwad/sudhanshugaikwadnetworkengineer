export type Project = {
  title: string
  description: string
  role: string
  technologies: string[]
  features: string[]
  github: string
  docs: string
  demo: string
}

export const projects: Project[] = [
  {
    title: 'Enterprise LAN Network Design',
    description:
      'A comprehensive LAN design to improve segmentation, redundancy, and service stability for an enterprise environment.',
    role: 'Network Engineer',
    technologies: ['Cisco Packet Tracer', 'Cisco IOS', 'VLAN', 'DHCP', 'Routing', 'Switching'],
    features: [
      'VLAN segmentation',
      'IP addressing',
      'Subnetting',
      'DHCP',
      'Routing',
      'Switching',
      'Inter-VLAN routing',
      'Connectivity testing',
      'Troubleshooting',
      'Network documentation',
    ],
    github: '#',
    docs: '#',
    demo: '#',
  },
  {
    title: 'NOC Network Monitoring & Troubleshooting Lab',
    description:
      'A simulated NOC workflow for identifying and resolving connectivity and routing incidents in a controlled lab.',
    role: 'NOC Engineer',
    technologies: ['Cisco Packet Tracer', 'TCP/IP', 'DNS', 'DHCP', 'OSPF'],
    features: [
      'Ping',
      'Traceroute',
      'DNS troubleshooting',
      'DHCP troubleshooting',
      'Packet loss',
      'Latency',
      'Routing incidents',
      'Connectivity incidents',
      'Incident prioritization',
      'Escalation',
      'Root Cause Analysis',
    ],
    github: '#',
    docs: '#',
    demo: '#',
  },
  {
    title: 'OSPF Multi-Router Network',
    description:
      'An OSPF lab used to verify neighbor relationships, route propagation, and failover behavior across multiple routers.',
    role: 'Routing Engineer',
    technologies: ['Cisco Packet Tracer', 'OSPF', 'Routing', 'TCP/IP', 'Troubleshooting'],
    features: [
      'Multi-router topology',
      'OSPF configuration',
      'Neighbor relationships',
      'Routing table analysis',
      'Route verification',
      'Failure simulation',
      'Troubleshooting',
      'RCA',
    ],
    github: '#',
    docs: '#',
    demo: '#',
  },
  {
    title: 'VLAN & Inter-VLAN Routing Lab',
    description:
      'A topology built to understand access port configuration, trunking, and communications between VLANs using router-on-a-stick.',
    role: 'Network Engineer',
    technologies: ['Cisco Packet Tracer', 'VLAN', 'DHCP', 'Routing', 'Switching'],
    features: [
      'VLANs',
      'Access ports',
      'Trunking',
      'Router-on-a-stick',
      'DHCP',
      'Inter-VLAN communication',
      'Troubleshooting',
    ],
    github: '#',
    docs: '#',
    demo: '#',
  },
  {
    title: 'Network Security Lab',
    description:
      'A practical lab covering perimeter security, ACLs, email protection, and malware defense fundamentals.',
    role: 'Security Focus',
    technologies: ['Firewall', 'ACL', 'IDS/IPS', 'Email Security', 'Network Security'],
    features: [
      'Firewall',
      'ACL',
      'IDS/IPS concepts',
      'Malware prevention',
      'Anti-phishing',
      'Email security',
      'SPF',
      'DKIM',
      'DMARC',
    ],
    github: '#',
    docs: '#',
    demo: '#',
  },
  {
    title: 'AWS VPC Network Lab',
    description:
      'A cloud networking practice lab focused on subnets, route tables, gateway connectivity, and secure traffic flow.',
    role: 'Cloud Networking Engineer',
    technologies: ['AWS', 'VPC', 'EC2', 'Security Groups', 'Cloud Networking'],
    features: [
      'VPC',
      'Public subnet',
      'Private subnet',
      'Route tables',
      'Internet Gateway',
      'NAT Gateway concepts',
      'Security Groups',
      'Network ACL',
      'EC2',
      'Network troubleshooting',
    ],
    github: '#',
    docs: '#',
    demo: '#',
  },
]
