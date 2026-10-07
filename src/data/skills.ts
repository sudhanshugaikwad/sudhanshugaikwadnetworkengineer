
export type SkillCategory = {
  title: string
  items: {
    name: string
    level: 'Fundamental' | 'Working Knowledge' | 'Intermediate' | 'Hands-on'
  }[]
}

export const skillGroups: SkillCategory[] = [
  {
    title: 'Networking Fundamentals',
    items: [
      { name: 'OSI Model', level: 'Working Knowledge' },
      { name: 'TCP/IP Model', level: 'Working Knowledge' },
      { name: 'TCP/IP', level: 'Working Knowledge' },
      { name: 'LAN', level: 'Working Knowledge' },
      { name: 'WAN', level: 'Working Knowledge' },
      { name: 'MAC Address', level: 'Fundamental' },
      { name: 'IP Addressing', level: 'Working Knowledge' },
      { name: 'IPv4', level: 'Working Knowledge' },
      { name: 'IPv6 Fundamentals', level: 'Fundamental' },
      { name: 'Subnetting', level: 'Working Knowledge' },
      { name: 'Subnet Mask', level: 'Working Knowledge' },
      { name: 'Private IP Addresses', level: 'Working Knowledge' },
      { name: 'IP Address Classes', level: 'Fundamental' },
      { name: 'Unicast', level: 'Fundamental' },
      { name: 'Multicast', level: 'Fundamental' },
      { name: 'Broadcast', level: 'Fundamental' },
      { name: 'Network Devices', level: 'Working Knowledge' },
    ],
  },

  {
    title: 'Routing',
    items: [
      { name: 'Routing Fundamentals', level: 'Working Knowledge' },
      { name: 'Connected Routes', level: 'Fundamental' },
      { name: 'Static Routing', level: 'Working Knowledge' },
      { name: 'Default Routing', level: 'Working Knowledge' },
      { name: 'Dynamic Routing', level: 'Fundamental' },
      { name: 'OSPF', level: 'Working Knowledge' },
      { name: 'EIGRP Fundamentals', level: 'Fundamental' },
      { name: 'BGP Fundamentals', level: 'Fundamental' },
      { name: 'Routing Protocols', level: 'Fundamental' },
    ],
  },

  {
    title: 'Switching',
    items: [
      { name: 'Switching Fundamentals', level: 'Working Knowledge' },
      { name: 'VLAN', level: 'Working Knowledge' },
      { name: 'VLAN Configuration', level: 'Working Knowledge' },
      { name: 'Trunking', level: 'Working Knowledge' },
      { name: 'STP', level: 'Fundamental' },
      { name: 'Inter-VLAN Routing', level: 'Fundamental' },
      { name: 'Layer 3 Switching', level: 'Fundamental' },
      { name: 'Routing & Switching', level: 'Working Knowledge' },
    ],
  },

  {
    title: 'Networking Protocols',
    items: [
      { name: 'TCP', level: 'Working Knowledge' },
      { name: 'UDP', level: 'Working Knowledge' },
      { name: 'Network Ports', level: 'Working Knowledge' },
      { name: 'ARP', level: 'Working Knowledge' },
      { name: 'DHCP', level: 'Working Knowledge' },
      { name: 'DNS', level: 'Working Knowledge' },
      { name: 'SSH', level: 'Fundamental' },
      { name: 'Telnet', level: 'Fundamental' },
      { name: 'FTP', level: 'Fundamental' },
      { name: 'TFTP', level: 'Fundamental' },
      { name: 'SNMP', level: 'Fundamental' },
      { name: 'HTTP', level: 'Working Knowledge' },
      { name: 'HTTPS', level: 'Working Knowledge' },
      { name: 'Ping', level: 'Hands-on' },
      { name: 'Traceroute', level: 'Hands-on' },
    ],
  },

  {
    title: 'Access Control & NAT',
    items: [
      { name: 'ACL Fundamentals', level: 'Fundamental' },
      { name: 'Standard ACL', level: 'Fundamental' },
      { name: 'Extended ACL', level: 'Fundamental' },
      { name: 'NAT Fundamentals', level: 'Working Knowledge' },
      { name: 'Static NAT', level: 'Fundamental' },
      { name: 'Dynamic NAT', level: 'Fundamental' },
    ],
  },

  {
    title: 'NOC Operations',
    items: [
      { name: 'NOC Fundamentals', level: 'Working Knowledge' },
      { name: 'Network Monitoring', level: 'Fundamental' },
      { name: 'Network Troubleshooting', level: 'Working Knowledge' },
      { name: 'Network Documentation', level: 'Working Knowledge' },
    ],
  },

  {
    title: 'Network Security',
    items: [
      { name: 'Network Security Fundamentals', level: 'Working Knowledge' },
      { name: 'Firewall Fundamentals', level: 'Working Knowledge' },
      { name: 'Firewall Technologies', level: 'Fundamental' },
      { name: 'IDS/IPS', level: 'Fundamental' },
      { name: 'ACL Security', level: 'Fundamental' },
      { name: 'DHCP Spoofing', level: 'Fundamental' },
      { name: 'Network Attack Awareness', level: 'Fundamental' },
      { name: 'Malware Threats', level: 'Working Knowledge' },
      { name: 'Malware Types', level: 'Working Knowledge' },
      { name: 'Malware Prevention', level: 'Working Knowledge' },
      { name: 'Anti-Spam Policies', level: 'Fundamental' },
      { name: 'Anti-Phishing Policies', level: 'Fundamental' },
      { name: 'Anti-Malware Policies', level: 'Fundamental' },
      { name: 'SPF', level: 'Fundamental' },
      { name: 'DKIM', level: 'Fundamental' },
      { name: 'DMARC', level: 'Fundamental' },
      { name: 'MFA', level: 'Working Knowledge' },
      { name: 'IAM', level: 'Working Knowledge' },
      { name: 'SSO', level: 'Fundamental' },
      { name: 'DLP', level: 'Fundamental' },
    ],
  },

  {
    title: 'Cloud',
    items: [
      { name: 'AWS Fundamentals', level: 'Working Knowledge' },
      { name: 'Cloud Networking Fundamentals', level: 'Fundamental' },
    ],
  },

  {
    title: 'Programming / Automation',
    items: [
      { name: 'Python', level: 'Working Knowledge' },
      { name: 'JavaScript', level: 'Fundamental' },
      { name: 'SQL', level: 'Working Knowledge' },
      { name: 'MySQL', level: 'Fundamental' },
      { name: 'GitHub', level: 'Working Knowledge' },
      { name: 'REST APIs', level: 'Fundamental' },
      { name: 'API Integration', level: 'Fundamental' },
      { name: 'Network Automation', level: 'Fundamental' },
    ],
  },

  {
    title: 'AI / LLM',
    items: [
      { name: 'LLM Fundamentals', level: 'Working Knowledge' },
      { name: 'Prompt Engineering', level: 'Working Knowledge' },
      { name: 'AI Tools for Networking', level: 'Working Knowledge' },
      { name: 'OpenAI / API Integration', level: 'Fundamental' },
    ],
  },
]


