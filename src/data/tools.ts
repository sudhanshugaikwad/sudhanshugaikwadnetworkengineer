export type ToolGroup = {
  title: string
  items: string[]
}

export const toolGroups: ToolGroup[] = [
  {
    title: 'Network',
    items: ['Cisco Packet Tracer', 'Wireshark',],
  },
  {
    title: 'Cisco',
    items: ['Cisco IOS', 'Routers', 'Switches', 'VLAN', 'OSPF', 'ACL'],
  },
  {
    title: 'Security',
    items: ['Firewall', 'Microsoft Defender'],
  },
  
  {
    title: 'Automation',
    items: ['JavaScript', 'Python', 'MySQL', 'SQL', 'Bash', 'GitHub', 'API Integration', 'REST APIs'],
  },
  {
    title: 'AI Tools',
    items: ['ChatGPT', 'Claude', 'Gemini ','LLM' ],
  },
]
