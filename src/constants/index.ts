import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaNodeJs,
  FaFigma,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
export const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];
// Todo: add socila links
export const socials = [
  { icon: FaGithub, path: "#" },
  { icon: FaLinkedinIn, path: "#" },
  { icon: FaYoutube, path: "#" },
  { icon: FaTwitter, path: "#" },
];

export const status = [
  { num: 12, text: "Years of experiance" },
  { num: 26, text: "Project completed" },
  { num: 8, text: "Technologies masterd" },
  { num: 500, text: "Code commits" },
];

export const services = [
  {
    num: "01",
    title: "Web development",
    descripetion:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, eum sit atque porro iusto ratione deserunt tenetur.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    descripetion:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, eum sit atque porro iusto ratione deserunt tenetur.",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    descripetion:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, eum sit atque porro iusto ratione deserunt tenetur.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    descripetion:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, eum sit atque porro iusto ratione deserunt tenetur.",
    href: "",
  },
];

export const about = {
  title: "About me",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, eum sit atque porro iusto ratione deserunt tenetur.",
  info: [
    {
      fildName: "Name",
      fildValue: "Luka Coleman",
    },
    {
      fildName: "Phone",
      fildValue: "(+20) 114 701 8091",
    },
    {
      fildName: "Expreience",
      fildValue: "+3 Years",
    },
    {
      fildName: "skybe",
      fildValue: "Luka.01",
    },
    {
      fildName: "Nationality",
      fildValue: "Egyptian",
    },
    {
      fildName: "Email",
      fildValue: "matrixhc00@gmail.com",
    },
    {
      fildName: "Freelance",
      fildValue: "Available",
    },
    {
      fildName: "Languages",
      fildValue: "English, Arabic",
    },
  ],
};

export const education = {
  icon: "/accets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, eum sit atque porro iusto ratione deserunt tenetur.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Developer Bootcamp",
      duration: "2023",
    },
    {
      institution: "Codecademy",
      degree: "Front End Track",
      duration: "2022",
    },
    {
      institution: "Tech Inctitute",
      degree: "Certified Web Developer",
      duration: "2019",
    },
    {
      institution: "Design School",
      degree: "Diploma in Graphic Desgin",
      duration: "2016 - 2018",
    },
    {
      institution: "Community College",
      degree: "Associate Degree in Computer Science",
      duration: "2014 - 2016",
    },
  ],
};
export const skills = {
  title: "My skills",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, eum sit atque porro iusto ratione deserunt tenetur.",
  skillList: [
    {
      icon: FaHtml5,
      name: "html 5",
    },
    {
      icon: FaCss3,
      name: "css 3",
    },
    {
      icon: FaJs,
      name: "javascript",
    },
    {
      icon: FaReact,
      name: "react.js",
    },
    {
      icon: SiNextdotjs,
      name: "next.js",
    },
    {
      icon: SiTailwindcss,
      name: "tailwind css",
    },
    {
      icon: FaNodeJs,
      name: "node.js",
    },
    {
      icon: FaFigma,
      name: "figma",
    },
  ],
};

export const experiance = {
  icon: "/accets/resume/bage.svg",
  title: "My expreience",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, eum sit atque porro iusto ratione deserunt tenetur.",
  items: [
    {
      company: "Tech Soultions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Studio",
      position: "Front End Developer",
      duration: "Summer 2021",
    },
    {
      company: "E-cmmerce Startup",
      position: "Freelance Web Developer",
      duration: "2020 - 2021",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2019 - 2020",
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2018 - 2019",
    },
    {
      company: "Sofware Development Firm",
      position: "Junior Developer",
      duration: "2017 - 2018",
    },
  ],
};

export const projects = [
  {
    num: "01",
    category: "fronted",
    title: "project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aliquam explicabo.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javasctipt" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aliquam explicabo.",
    stack: [{ name: "Next.js" }, { name: "Tailwind Css" }, { name: "Node.js" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "fronted",
    title: "project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aliquam explicabo.",
    stack: [{ name: "Next.js" }, { name: "Tailwind Css" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

export const info = [
  {
    icon: FaPhoneAlt,
    title: "Phone",
    describtion: "(+20) 114 701 8091",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    describtion: "username@domin.com",
  },
  {
    icon: FaMapMarkedAlt,
    title: "Address",
    describtion: "Code Corner, Tech Town 13579",
  },
];
