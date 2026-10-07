export type BlogPost = {
  category: string
  title: string
  description: string
}

export const blogPosts: BlogPost[] = [
  { category: 'Routing', title: 'What is OSPF?', description: 'A practical overview of the Open Shortest Path First protocol and when it is used in enterprise networks.' },
  { category: 'Networking', title: 'VLAN vs Subnet', description: 'Understand how VLANs and subnets differ and how they work together in a segmented enterprise design.' },
  { category: 'DNS', title: 'How DNS Works', description: 'Learn how domain names are resolved, cached, and used in both enterprise and cloud environments.' },
  { category: 'Protocols', title: 'TCP vs UDP', description: 'Compare connection-oriented and connectionless traffic models for transport-level networking decisions.' },
  { category: 'Troubleshooting', title: 'How to Troubleshoot Packet Loss', description: 'Follow a practical checklist for isolating packet loss across access, distribution, and WAN layers.' },
  { category: 'DHCP', title: 'DHCP Troubleshooting', description: 'Diagnose lease failures, helper-address issues, and scope errors in routed networks.' },
  { category: 'DNS', title: 'DNS Troubleshooting', description: 'Review common hostname resolution issues, recursive failures, and server reachability checks.' },
  { category: 'NOC', title: 'NOC Engineer Troubleshooting Methodology', description: 'Learn an operational approach to incident triage, isolation, escalation, and root cause analysis.' },
  { category: 'Cisco', title: 'Cisco Troubleshooting Commands', description: 'A compact reference for the essential Cisco commands used during live network diagnosis.' },
  { category: 'TCP/IP', title: 'TCP/IP Explained', description: 'Review the layered model and how each protocol contributes to end-to-end communication.' },
  { category: 'Security', title: 'Network Security Fundamentals', description: 'Explore the foundations of segmentation, ACLs, firewalls, and defense-in-depth strategies.' },
  { category: 'Cloud', title: 'AWS VPC Fundamentals', description: 'A high-level summary of VPC components, routing, and network design in the AWS cloud.' },
]
