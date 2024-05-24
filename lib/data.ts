import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { DiAngularSimple } from "react-icons/di";
import { SiFlutter } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";


import AskytImg from "@/public/Asky.png";
import WaslImg from "@/public/Wasl.png";
import TataouineImg from "@/public/tataouine1.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Trainee-Internship",
    location: "TATA IT",
    description:
      "Development of IT data center website.",
    icon: React.createElement(DiAngularSimple),
    date: "2021",
  },
  {
    title: "Trainee-Internship",
    location: "Tecyom Digital Solution",
    description:
      "Development of a mobile application for an announcements website.",
    icon: React.createElement(SiFlutter),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Asky",
    description:
      "mobile education platform dedicated for universities (forum app) .",
    tags: ["Flutter", "Firebase", "Dart"],
    imageUrl: AskytImg,
  },
  {
    title: "Wasl",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Spring Boot", "Mysql"],
    imageUrl: WaslImg,
  },
  {
    title: "Tataouine Brand Identity",
    description:
      "A Brand Identity Project representing the city of Tataouine ",
    tags: ["Adobe Illustrator", "Adobe Photoshop"],
    imageUrl: TataouineImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Flutter",
  "MongoDB",
  "Firebase",
  "Express",
  "PostgreSQL",
  "Python",
  "Graphic Design"
] as const;
