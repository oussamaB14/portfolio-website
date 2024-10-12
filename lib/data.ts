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
import DevConnectImg from "@/public/dev-connect.png";

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
      "Development of IT data center website, The internship goal was building a web application with Angular ,Django and PostgreSQL ",
    icon: React.createElement(DiAngularSimple),
    date: "2021",
  },
  {
    title: "Graphic Designer",
    location: "AIESEC",
    description:
      "Part-time position as marketing and graphic designer in the marketing department of the AIESEC association",
    icon: React.createElement(SiAdobeillustrator),
    date: "2021 - 2022",
  },
  {
    title: "Trainee-Internship",
    location: "Tecyom Digital Solution",
    description:
      "Development of a mobile application for an announcements website with Flutter and Firebase",
    icon: React.createElement(SiFlutter),
    date: "2023",
  },
  {
    title: "Trainee-Internship",
    location: "CloudiaSys",
    description:
      "Working on Cloudiasys website to enhance the user interface and adding features to the website, The Intern goal was building a web application with Angular ,Nodejs and MySQL ",
    icon: React.createElement(DiAngularSimple),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Asky",
    description:
      "mobile education platform dedicated for universities (forum app) .",
    tags: ["Flutter", "Firebase", "Dart"],
    imageUrl: AskytImg,
    href: "https://github.com/oussamaB14/asky",
  },
  {
    title: "Wasl",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Spring Boot", "Mysql"],
    imageUrl: WaslImg,
    href: "https://github.com/belhajManel/wasl",
  },
  {
    title: "Dev Connect",
    description:
      "A full-stack web application built with React and NestJS, designed to be a platform where developers can share projects, connect with others, and learn from each other's experiences. ",
    tags: ["React", "TypeScript", "Nest js", "Mango DB", "Tailwind Css"],
    imageUrl: DevConnectImg,
    href: "https://dev-connect-beta.vercel.app/",
  },
  {
    title: "Tataouine Brand Identity",
    description: "A Brand Identity Project representing the city of Tataouine ",
    tags: ["Adobe Illustrator", "Adobe Photoshop"],
    imageUrl: TataouineImg,
    href: "https://www.behance.net/gallery/199169893/Tataouine",
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
  "Flutter",
  "Spring Boot",
  "Git",
  "Tailwind",
  "MongoDB",
  "Firebase",
  "Express",
  "PostgreSQL",
  "Python",
  "Graphic Design",
] as const;
