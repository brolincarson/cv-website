export const siteContent = {
  personal: {
    name: "Brolin Carson Osindi",
    title: "Software Developer & Network Infrastructure Specialist",
    email: "brolinosindi@gmail.com",
    phone: "+48 793 919 629",
    location: "Zoliborz, Warsaw, Poland",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Results-driven software developer and network infrastructure specialist with a strong background in software development, manual testing, and IT support. Experienced in end-to-end software development lifecycle (SDLC), network design, and cloud computing. Passionate about building robust systems and fintech innovations. Currently pursuing a Master's in Management while working as a Manual Tester at Educatifu. My expertise spans from network configuration and security implementation to software testing and cloud infrastructure deployment. I bridge theoretical computer engineering knowledge with practical system design applications, delivering measurable results in network optimization, software quality assurance, and infrastructure automation. With CCNA certification and Azure fundamentals knowledge, I specialize in creating scalable, secure network architectures and optimizing software development processes.",
    shortBio: "Results-driven software developer and network infrastructure specialist with expertise in SDLC, network design, and cloud computing. Currently working as a Manual Tester while pursuing Master's in Management, with CCNA certification and Azure fundamentals knowledge.",
    socialLinks: {
      github: "https://github.com/brolinosindi",
      linkedin: "https://linkedin.com/in/brolin-osindi",
      twitter: "https://twitter.com/brolinosindi"
    }
  },
  skills: [
    "Network Design", "Cisco CCNA", "Microsoft Azure", "Software Testing", "Linux Scripting", "Windows Server", 
    "TCP/IP", "Firewalls", "VPNs", "Wireshark", "Cisco Packet Tracer", "Cloud Computing", 
    "SDLC", "Manual Testing", "Network Security", "System Administration", "IT Support", "Database Scripting"
  ],
  projects: [
    {
      id: 1,
      title: "Network Design and Configuration using Cisco Packet Tracer",
      shortDescription: "Multi-VLAN network with inter-VLAN routing and security policies.",
      description: "Designed and implemented a comprehensive multi-VLAN network infrastructure with inter-VLAN routing capabilities. Configured dynamic routing protocols (OSPF, EIGRP) for optimized network communication and implemented robust security policies including access control lists (ACLs) and port security measures.",
      status: "complete",
      technologies: ["Cisco Packet Tracer", "OSPF", "EIGRP", "VLANs", "ACLs"],
      github: "https://github.com/brolinosindi",
      needsCollaboration: false
    },
    {
      id: 2,
      title: "Network Monitoring and Analysis using Wireshark",
      shortDescription: "Comprehensive network traffic analysis and security threat identification.",
      description: "Developed comprehensive network monitoring system using Wireshark for traffic analysis and security threat identification. Captured and analyzed network traffic to identify potential security threats and performance issues, diagnosed and resolved network bottlenecks through detailed packet capture interpretation.",
      status: "complete",
      technologies: ["Wireshark", "Network Analysis", "Security Monitoring", "Protocol Analysis"],
      github: "https://github.com/brolinosindi",
      needsCollaboration: false
    },
    {
      id: 3,
      title: "Azure Cloud: Virtual Machine Deployments",
      shortDescription: "Cloud infrastructure deployment with security and web server configuration.",
      description: "Designed and deployed scalable cloud infrastructure on Microsoft Azure including Ubuntu VMs running Nextcloud web servers with secured access using network security groups and bastion hosts. Set up Windows VMs with osTicket software, configuring comprehensive user roles, permissions, and SLAs for efficient IT service management.",
      status: "complete", 
      technologies: ["Microsoft Azure", "Ubuntu", "Windows Server", "Nextcloud", "osTicket"],
      github: "https://github.com/brolinosindi",
      needsCollaboration: false
    },
    {
      id: 4,
      title: "Automated Testing Framework Development",
      shortDescription: "Linux scripting automation for streamlined testing processes.",
      description: "Developed automated testing framework using Linux scripting to streamline repetitive testing tasks and improve overall testing efficiency. Created comprehensive test documentation and reporting systems that contributed to faster issue resolution and improved development process communication.",
      status: "complete",
      technologies: ["Linux Scripting", "Test Automation", "Documentation", "Process Optimization"],
      github: "https://github.com/brolinosindi",
      needsCollaboration: false
    },
    {
      id: 5,
      title: "Enterprise Network Security Implementation",
      shortDescription: "Comprehensive security infrastructure with monitoring and patch management.",
      description: "Implemented enterprise-level network security infrastructure including firewall configuration, VPN setup, and comprehensive monitoring systems. Collaborated on security patch deployment and system optimizations that enhanced overall network security and operational efficiency.",
      status: "complete",
      technologies: ["Network Security", "Firewalls", "VPN", "Security Patches", "System Monitoring"],
      github: "https://github.com/brolinosindi",
      needsCollaboration: false
    },
    {
      id: 6,
      title: "IT Infrastructure Optimization Project",
      shortDescription: "System performance enhancement and disaster recovery implementation.",
      description: "Led comprehensive IT infrastructure optimization project focusing on system performance enhancement, backup implementation, and disaster recovery preparedness. Supported data migration efforts during system upgrades ensuring data integrity and smooth operational transitions.",
      status: "ongoing",
      technologies: ["System Administration", "Backup Systems", "Data Migration", "Performance Optimization"],
      github: "https://github.com/brolinosindi",
      needsCollaboration: false
    }
  ],
  blogPosts: [
    {
      id: 1,
      title: "Advanced Network Design with Cisco Technologies",
      excerpt: "Deep dive into VLAN configuration and inter-VLAN routing best practices",
      date: "2024-12-10",
      slug: "advanced-network-design-cisco"
    },
    {
      id: 2,
      title: "Cloud Infrastructure Security on Azure",
      excerpt: "Comprehensive guide to implementing secure cloud architectures",
      date: "2024-11-15", 
      slug: "cloud-infrastructure-security-azure"
    },
    {
      id: 3,
      title: "Software Testing Automation with Linux Scripts",
      excerpt: "Practical approaches to automating testing workflows and improving efficiency",
      date: "2024-10-20",
      slug: "software-testing-automation-linux"
    }
  ]
};

export const experience = [
  {
    title: "Manual Tester",
    company: "Educatifu Sp Z o.o.",
    period: "February 2023 - Present",
    location: "Warsaw, Poland",
    shortSummary: "Leading quality assurance efforts and collaborating with development teams to optimize software applications.",
    achievements: [
      "Collaborated closely with developers and project managers to identify, communicate, and resolve defects, ensuring timely and effective fixes",
      "Prepared detailed test reports and documented test cases for functional, regression, and usability testing phases, contributing to continuous improvement in the development process",
      "Collaborated with developers to test and optimize software applications, improving system performance and reliability across multiple platforms",
      "Automated repetitive testing tasks using basic Linux scripting, streamlining processes and increasing overall efficiency by 40%",
      "Identified and resolved critical application issues through comprehensive testing, leading to improved functionality and user experience",
      "Generated detailed test reports and documentation, contributing to more efficient communication and faster issue resolution"
    ],
    technologies: ["Manual Testing", "Linux Scripting", "Test Documentation", "Quality Assurance", "Software Testing"]
  },
  {
    title: "Associate IS Analyst",
    company: "Franklin Templeton Investments",
    period: "June 2019 - August 2019",
    location: "Poznan, Poland",
    shortSummary: "Provided technical support and infrastructure management for investment operations systems.",
    achievements: [
      "Provided technical support to end-users, troubleshooting and resolving hardware and software issues to ensure smooth operations",
      "Supported the deployment and maintenance of key network infrastructure, leading to improved system stability and performance",
      "Assisted in managing cloud infrastructure and performing system upgrades, optimizing cloud system configurations for better application performance",
      "Collaborated with the IT team on security patches and system optimizations, enhancing overall network security and efficiency"
    ],
    technologies: ["Technical Support", "Network Infrastructure", "Cloud Management", "System Upgrades", "Security Patches"]
  },
  {
    title: "IT Intern",
    company: "Sanergy",
    period: "June 2016 - July 2016",
    location: "Nairobi, Kenya",
    shortSummary: "Supported IT infrastructure operations and contributed to system maintenance initiatives.",
    achievements: [
      "Provided ongoing support for IT infrastructure, reducing downtime through timely troubleshooting and issue resolution",
      "Assisted in data migration efforts during system upgrades, ensuring data integrity and smooth transitions",
      "Contributed to system maintenance, including backups and updates, improving disaster recovery preparedness",
      "Supported team-based IT projects that enhanced system performance and user experience"
    ],
    technologies: ["IT Support", "Data Migration", "System Maintenance", "Backup Systems", "Infrastructure Support"]
  }
];

export const education = [
  {
    degree: "Master in Management",
    institution: "Warsaw University of Business and Psychology", 
    period: "March 2025",
    gpa: "In Progress",
    focus: "Management, Leadership, Business Psychology, Entrepreneurship, Finance, Accounting, and Ethics"
  },
  {
    degree: "Bachelor in Computer Engineering and Mechatronics",
    institution: "University of Economy", 
    period: "March 2022",
    gpa: "Completed",
    focus: "Computer Networking, Programming, IT support, Cloud Computing, Database scripting, and Web Design"
  }
];

export const certifications = [
  {
    name: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco Systems",
    year: "2024",
    id: "CCNA-2024"
  },
  {
    name: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    year: "2024",
    id: "AZ-900-2024"
  }
];

export const skillIcons = {
  'Network Design': 'Server',
  'Cisco CCNA': 'Server',
  'Microsoft Azure': 'Database',
  'Software Testing': 'Terminal',
  'Linux Scripting': 'Terminal',
  'Windows Server': 'Database',
  'TCP/IP': 'Server',
  'Firewalls': 'Star',
  'VPNs': 'Star',
  'Wireshark': 'Terminal',
  'Cisco Packet Tracer': 'Terminal',
  'Cloud Computing': 'Database',
  'SDLC': 'TrendingUp',
  'Manual Testing': 'TrendingUp',
  'Network Security': 'Star',
  'System Administration': 'Server',
  'IT Support': 'Users',
  'Database Scripting': 'Database'
};

export const navigationItems = [
  { id: 'overview', label: 'Overview', icon: 'User' },
  { id: 'experience', label: 'Experience', icon: 'Briefcase' },
  { id: 'projects', label: 'Projects', icon: 'Code2' },
  { id: 'skills', label: 'Skills', icon: 'Star' },
  { id: 'education', label: 'Education', icon: 'Target' }
];
