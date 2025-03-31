import { create } from "zustand";
import {
  Code2,
  Terminal,
  Globe,
  Server,
  Database,
  Cloud,
  Code,
  FileCode,
  Brain,
  Award,
} from "lucide-react";

export interface Skill {
  name: string;
  icon: any;
  color: string;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  icon: any;
}

export interface Contact {
  email: string;
  phone: string;
  location: string;
  availability?: string;
  preflanguages?: string;
  github?: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  icon: any;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon: any;
  link: string;
  color: string;
}

interface PortfolioState {
  skills: SkillCategory[];
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
  contact: Contact;
  updateSkills: (skills: SkillCategory[]) => void;
  updateExperiences: (experiences: Experience[]) => void;
  updateEducation: (education: Education[]) => void;
  updateCertifications: (certifications: Certification[]) => void;
  updateContact: (contact: Contact) => void;
}


export const usePortfolioStore = create<PortfolioState>((set) => ({
  skills: [
    {
      category: "Languages",
      items: [
        { name: "Java", icon: FileCode, color: "#61DAFB" },
        { name: "Python", icon: Code, color: "#E535AB" },
        { name: "JavaScript", icon: Terminal, color: "#FF9900" },
        { name: "TypeScript", icon: Code2, color: "#339933" },
      ],
    },
    {
      category: "Libraries",
      items: [
        { name: "React js", icon: Code2, color: "#339933" },
        { name: "jQuery", icon: Terminal, color: "#61DAFB" },
        { name: "Redux", icon: Globe, color: "#E535AB" },
        { name: "Framer Motion", icon: Code2, color: "#FF9900" },
      ],
    },
    {
      category: "Frameworks",
      items: [
        { name: "Next.js", icon: Code, color: "#FF9900" },
        { name: "Spring Boot", icon: Terminal, color: "#339933" },
        { name: "Django", icon: Code2, color: "#61DAFB" },
        { name: "Express.js", icon: Server, color: "#E535AB" },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "PostgreSQL", icon: Database, color: "#E535AB" },
        { name: "MongoDB", icon: Database, color: "#FF9900" },
        { name: "Mysql", icon: Database, color: "#339933" },
      ],
    },
  ],
  experiences: [
    {
      title: "Java Full Stack Developer",
      company: "Emerging Five",
      period: "Nov-2024 - Present",
      description:
        "Developed and maintained web applications using Java, Spring Boot, and React.js",
      icon: Terminal,
      // icon: Code2,
    },
    
  ],
  education: [
    {
      degree: "Bachelor of Technology in Information Technology",
      school: "Lj University",
      period: "2022 - 2026",
      icon: Brain,
    },
  ],
  certifications: [
    {
        name: "Oracle Cloude Infrastructure 2024",
        issuer: "Oracle",
        date: "july 2024",
        icon: Award,
        link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E4AAC872C08C3699571CC86CB8D41B6623A6028600DAC4E9A651E94565C0CC6E",
        color: "#FF9900",
      },
      {
        name: "AWS Cloud Technical Essentials",
        issuer: "Amazon Web Services",
        date: "feb-2025",
        icon: Cloud,
        link: "https://coursera.org/share/b1d4baa34dab8879da688423661fbadc",
        color: "#2496ED",
      },
      {
        name: "Exploratory Data Analysis for Machine Learning",
        issuer: "IBM",
        date: "july-2024",
        icon: Code2,
        link: "https://coursera.org/share/3cea3278e65b67d4b810a6506d434e2e",
        color: "#339933",
      },
      {
        name: "HTML, CSS, and Javascript for Web Developers",
        issuer: "The Johns Hopkins University",
        date: "feb-2024",
        icon: Code2,
        link: "https://coursera.org/share/7ee6a9dfa6c6c8ba741e0bfee86c91ee",
        color: "#61DAFB",
      },
      {
        name: "Introduction to Java",
        issuer: "LearnQuest",
        date: "jan-2023",
        icon: Code2,
        link: "https://coursera.org/share/33ca962c071ed2f3e36057ed19e3a4ae",
        color: "#E535AB",
      },
      {
        name: "Inheritance and Data Structures in Java",
        issuer: "University of Pennsylvania Carey Law School",
        date: "aug-2023",
        icon: Terminal,
        link: "https://www.coursera.org/account/accomplishments/certificate/ERDMQQJ9MYRL",
        color: "#3178C6",
      },
      {
        name: "Database Design and Basic SQL in PostgreSQL",
        issuer: "University of Michigan",
        date: "sept-2023",
        icon: Database,
        link: "https://coursera.org/share/e3055ff3ebc5d0c18b0edad977b4fbf7",
        color: "#2496ED",
      },
  ],
  contact: {
    email: "prince.dev@example.com",
    phone: "+91 7434052955",
    location: "Ahmedabad, India",
    availability: "Open to opportunities",
    preflanguages: "English, Hindi, Gujarati",
  },
  updateContact: (contact) => set({ contact }),
  updateSkills: (skills) => set({ skills }),
  updateExperiences: (experiences) => set({ experiences }),
  updateEducation: (education) => set({ education }),
  updateCertifications: (certifications) => set({ certifications }),
}));
