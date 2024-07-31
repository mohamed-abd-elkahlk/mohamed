import {
  FaGithub,
  FaLinkedinIn,
  FaNodeJs,
  FaFigma,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt,
  FaStackOverflow,
  FaGit,
} from "react-icons/fa";

export const cv =
  "https://drive.google.com/file/d/1ii1xN3NIGcT__YbTDM_eANHpLSERc92Q/view?usp=drive_link";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiDevexpress,
} from "react-icons/si";
export const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];
export const socials = [
  { icon: FaGithub, path: "https://github.com/mohamed-abd-elkahlk" },
  {
    icon: FaLinkedinIn,
    path: "https://www.linkedin.com/in/mohamed-abd-elkhalk-55745026a/",
  },
  {
    icon: FaStackOverflow,
    path: "https://stackoverflow.com/users/23346660/mohamed-abd-elkhalk",
  },
];

export const status = [
  { num: 2, text: "Years of experiance" },
  { num: 26, text: "Project completed" },
  { num: 9, text: "Technologies masterd" },
  { num: 100, text: "Code commits" },
];

export const services = [
  {
    num: "01",
    title: "Front-End Development",
    descripetion:
      "Develop high-performance, cross-platform applications using modern frameworks like React, or Next.js.",
    href: "",
  },
  {
    num: "02",
    title: "Back-End Development",
    descripetion:
      "Build robust and scalable Node.js/Express APIs, integrating databases and third-party services.",
    href: "",
  },
];

export const about = {
  title: "About me",
  description:
    "I'm a passionate full-stack web developer with 2 years of experience crafting engaging and user-centric digital experiences. I thrive on turning complex challenges into innovative solutions. Continuously seeking new knowledge, I'm dedicated to delivering exceptional results for every project.",
  info: [
    {
      fildName: "Name",
      fildValue: "Mohamed Abd Elkhalq",
    },
    {
      fildName: "Phone",
      fildValue: "(+20) 114 701 8091",
    },
    {
      fildName: "Expreience",
      fildValue: "+2 Years",
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
    "Bachelor of Education candidate at Zagazig University, Egypt. Developing strong communication and classroom management skills through coursework in educational psychology and teaching methodologies. Actively involved in the university's English Language Club.",
  items: [
    {
      institution: "Elzero Web School",
      degree: "Front End Track",
      duration: "2023",
    },
    {
      institution: "SEF Academy",
      degree: "MERN stack",
      duration: "2022",
    },
  ],
};
export const skills = {
  title: "My skills",
  description:
    "Strong communication and interpersonal skills,i have a effective verbal and written communication skills, Critical thinking and problem-solving abilities, Efficiently organizing and managing tasks, Flexibility and openness to new ideas and approaches and collaborating effectively with others.",
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
      icon: SiTypescript,
      name: "typescript",
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
  ],
};

export const experiance = {
  icon: "/accets/resume/bage.svg",
  title: "My expreience",
  description:
    "I'm a passionate full-stack web developer with 2 years of experience crafting engaging and user-centric digital experiences. I thrive on turning complex challenges into innovative solutions. Continuously seeking new knowledge, I'm dedicated to delivering exceptional results for every project.",
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
    title: "Nike App",
    description:
      "Nike app is a front end web app built with the most used framework in web industry, the app is fully responsive and user friendly",
    stack: [{ name: "React" }, { name: "Vite" }, { name: "TailWind Css" }],
    image: "/assets/work/thumb1.png",
    live: "https://nike-website.netlify.app/",
    github: "https://github.com/mohamed-abd-elkahlk/nike-app",
  },
  {
    num: "02",
    category: "fronted",
    title: "Basic Portfolio",
    description:
      "this app is fully responsive and user friendly and you can put your project and past experience on it",
    stack: [{ name: "React" }, { name: "Vite," }, { name: "TailWind Css" }],
    image: "/assets/work/thumb2.png",
    live: "https://tubular-faloodeh-274d48.netlify.app/",
    github: "https://github.com/mohamed-abd-elkahlk/portfoluo-templete-1",
  },
  {
    num: "03",
    category: "full stack ",
    title: "Snapgram",
    description:
      "Snapgram is a modern social app with a stunning UI with a native mobile feel, a special tech stack, an infinite scroll feature, and amazing performance using React JS, Appwrite, TypeScript, and more.",
    stack: [
      { name: "React.js" },
      { name: "TypeScript" },
      { name: "Tailwind Css" },
      { name: "Appwrite" },
      { name: "Shadcn/UI " },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://snapgram-a.netlify.app/",
    github: "https://github.com/mohamed-abd-elkahlk/snapgram",
  },

  {
    num: "04",
    category: "full stack ",
    title: "Live Docs",
    description:
      "Live Docs is a collaborative application, an improved Google Docs that manages millions of collaborators in real-time.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind Css" },
      { name: "Shadcn/UI " },
    ],
    image: "/assets/work/thumb4.png",
    live: "https://live-docs-six.vercel.app/",
    github: "https://github.com/mohamed-abd-elkahlk/live-docs",
  },
  {
    num: "05",
    category: "full stack ",
    title: "Carepulse",
    description:
      "Carepulse app built with nextjs, this a healthcare platform that streamlines patient registration, appointment scheduling, and medical record",
    stack: [
      { name: "Next.js" },
      { name: "Appwrite" },
      { name: "TypeScript" },
      { name: "Tailwind Css" },
      { name: "Shadcn/UI " },
    ],
    image: "/assets/work/thumb5.png",
    live: "https://carepulse-ten.vercel.app/",
    github: "https://github.com/mohamed-abd-elkahlk/carepulse",
  },
  {
    num: "06",
    category: "full stack ",
    title: "Promptopia,",
    description:
      "Promptopia is an open-source AI prompting tool for modern world to discover create and share creative prompts",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind Css" },
      { name: "Mongodb" },
    ],
    image: "/assets/work/thumb6.png",
    live: "https://promtopia-jsm.vercel.app/",
    github: "https://github.com/mohamed-abd-elkahlk/promtopia_jsm",
  },
  {
    num: "07",
    category: "full stack ",
    title: "Hilink,",
    description:
      "this app is a feature-rich travel app with Next.js 14 and Tailwind CSS, covering everything from a sleek UI to mobile-first best practices.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind Css" },
    ],
    image: "/assets/work/thumb7.png",
    live: "https://travel-app-indol-psi.vercel.app/",
    github: "https://github.com/mohamed-abd-elkahlk/travel-app",
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
    describtion: "matrixhc00@gmail.com",
  },
  {
    icon: FaMapMarkedAlt,
    title: "Address",
    describtion: "Code Corner, Tech Town 13579",
  },
];
