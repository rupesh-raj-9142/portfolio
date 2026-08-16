// ============================================================
// Portfolio Data — Single source of truth for all content
// Edit this file to update your portfolio without touching components
// ============================================================

// ─── Personal Info ───
export const PERSONAL = {
  name: "Rupesh Raj",
  initials: "RR",
  title: "Full-Stack Developer & AI/ML Enthusiast",
  tagline: "CSE (AI/ML) Student • Full-Stack Developer • Builder",
  heroDescription:
    "I'm a 2nd-year Computer Science & Engineering (AI/ML) student who enjoys building modern web applications, solving real-world problems, and exploring AI-powered technologies.",
  email: "rajrupesh824143@gmail.com",
  github: "https://github.com/rupesh-raj-9142",
  linkedin: "https://www.linkedin.com/in/rupesh-raj-b9a353210/",
  resumeUrl: "/resume.pdf", // ← drop your resume PDF in /public
  profileImage: "/rupesh-profile.png",
};

// ─── Navigation ───
export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

// ─── Hero Stats ───
export const HERO_STATS = [
  { value: "2nd Year", label: "B.Tech CSE (AI/ML)" },
  { value: "3rd Semester", label: "Current Academic Stage" },
  { value: "Projects", label: "Real-world Applications" },
  { value: "Always Learning", label: "Build • Learn • Improve" },
];

// ─── About ───
export const ABOUT = {
  paragraphs: [
    "I'm a 2nd-year B.Tech student specializing in Computer Science & Engineering with AI/ML. I enjoy turning ideas into practical software and learning by building real projects.",
    "My main focus is full-stack web development, while I continue exploring AI/ML, backend systems, databases and modern software engineering.",
    "I believe the best way to learn technology is to build with it. Every project I work on helps me understand how real products are designed, developed and improved.",
  ],
  exploring: [
    { title: "Advanced React", icon: "⚛️" },
    { title: "Backend Development", icon: "🔧" },
    { title: "REST APIs", icon: "🔗" },
    { title: "Database Design", icon: "🗄️" },
    { title: "AI/ML", icon: "🤖" },
    { title: "Cloud & Deployment", icon: "☁️" },
    { title: "System Design", icon: "📐" },
    { title: "ROS 2 / Robotics", icon: "🦾" },
  ],
};

// ─── Skills ───
export interface SkillCategory {
  category: string;
  items: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React.js", "Vite", "TypeScript"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Database",
    items: ["Supabase", "MongoDB", "MySQL", "SQL"],
  },
  {
    category: "Programming",
    items: ["Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
  },
  {
    category: "AI / ML",
    items: ["Python", "NumPy", "Pandas", "ML Fundamentals", "Data Analysis"],
  },
];

// ─── Projects ───
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  tech: string[];
  image: string;
  github: string;
  liveDemo: string;
  caseStudy?: boolean;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "tezx-crm",
    title: "TezX CRM",
    category: "Full-Stack CRM Platform",
    description:
      "TezX is a CRM and workflow management platform designed for small businesses, agencies and freelancers to manage inquiries, leads, meetings, projects and team workflows from one place.",
    features: [
      "Inquiry management",
      "Lead tracking",
      "Team management",
      "Meeting scheduling",
      "Project management",
      "Progress tracking",
      "Admin dashboard",
    ],
    tech: ["React", "Supabase", "JavaScript"],
    image: "/project-tezx.png",
    github: "https://github.com/rupesh-raj-9142", // ← update
    liveDemo: "#", // ← update with live URL
    caseStudy: true,
    featured: true,
  },
  {
    id: "meditrack",
    title: "MediTrack",
    category: "Healthcare Web Application",
    description:
      "MediTrack is a healthcare-focused web application concept designed to organize health-related information and create a cleaner digital experience.",
    features: [],
    tech: ["React", "JavaScript", "Supabase"],
    image: "/project-meditrack.png",
    github: "https://github.com/rupesh-raj-9142", // ← update
    liveDemo: "#", // ← update
  },
  {
    id: "ai-ml-project",
    title: "AI / ML Project",
    category: "Artificial Intelligence",
    description:
      "An AI/ML project focused on applying data and machine learning techniques to solve a practical problem.",
    features: [],
    tech: ["Python", "NumPy", "Pandas"],
    image: "/project-aiml.png",
    github: "#", // ← update when available
    liveDemo: "#",
  },
  {
    id: "fullstack-app",
    title: "Full-Stack Application",
    category: "Web Application",
    description:
      "Another full-stack application demonstrating modern frontend, backend and database development.",
    features: [],
    tech: ["React", "Node.js", "MongoDB"],
    image: "/project-fullstack.png",
    github: "#", // ← update when available
    liveDemo: "#",
  },
];

// ─── TezX Case Study ───
export const CASE_STUDY = {
  title: "Building TezX",
  sections: [
    {
      number: "01",
      heading: "The Problem",
      body: "Small businesses, agencies and freelancers can lose track of inquiries, leads, follow-ups, meetings and project progress. Without a centralized system, important information gets scattered across spreadsheets, emails and chat messages.",
    },
    {
      number: "02",
      heading: "The Idea",
      body: "Create one centralized platform to manage the entire workflow from initial inquiry to project completion — replacing fragmented tools with a single, clean interface.",
    },
    {
      number: "03",
      heading: "The Solution",
      body: "TezX combines CRM, team management, meetings and project tracking in one system. It's designed to be simple enough for small teams while powerful enough to handle real business workflows.",
    },
    {
      number: "04",
      heading: "Key Features",
      items: [
        "Inquiry Management",
        "Lead Tracking",
        "Team Management",
        "Meeting Scheduling",
        "Project Management",
        "Progress Tracking",
      ],
    },
    {
      number: "05",
      heading: "Technology",
      items: ["React", "Supabase", "JavaScript"],
    },
    {
      number: "06",
      heading: "What I Learned",
      items: [
        "Reusable React components",
        "Authentication & authorization",
        "Database integration with Supabase",
        "Application state management",
        "CRUD operations at scale",
        "Real-world workflow design",
        "Building a practical SaaS-style application",
      ],
    },
  ],
};

// ─── Experience Timeline ───
export const EXPERIENCE = [
  {
    period: "2026 — Present",
    title: "Full-Stack Development",
    description:
      "Building web applications using React, JavaScript, Supabase and backend technologies.",
  },
  {
    period: "2026 — Present",
    title: "AI/ML Exploration",
    description:
      "Learning Python, machine learning fundamentals and AI-powered applications.",
  },
  {
    period: "2026 — Present",
    title: "Project-Based Learning",
    description:
      "Building practical applications and experimenting with product and startup ideas.",
  },
];

// ─── Education ───
export const EDUCATION = {
  degree: "B.Tech in Computer Science & Engineering (AI/ML)",
  university: "Medhavi Skills University",
  year: "2nd Year • 3rd Semester",
  subjects: [
    "Data Structures & Algorithms",
    "DBMS",
    "Web Development",
    "Object-Oriented Programming",
    "AI/ML",
    "Software Engineering",
  ],
};

// ─── Certifications ───
export const CERTIFICATIONS: string[] = [
  // Add certifications here when available, e.g.:
  // "AWS Cloud Practitioner",
  // "Meta Frontend Developer Certificate",
];

// ─── Achievements ───
export const ACHIEVEMENT_CATEGORIES = [
  "Hackathons",
  "Technical Events",
  "Developer Communities",
  "Workshops",
  "Project Showcases",
  "Competitions",
];

// Add actual achievements here when available:
export const ACHIEVEMENTS: Array<{ category: string; title: string; description: string }> = [
  // { category: "Hackathons", title: "...", description: "..." },
];
