import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Technologies", link: "#techstack" },
  { name: "Skills", link: "#skills" },
  { name: "Certifications", link: "#certifications" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize learning new technologies. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently a fresher eager to gain some experience",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Autonomous Navigating Car",
    des: "Developed an autonomous navigating car using Embedded C, featuring obstacle detection and obstacle avoidance",
    img: "/roborover.jpg",
    iconLists: ["/ebc.svg", "/arduino.svg"],
    link: "https://github.com/Nathan-sudo-pycharm/Arduino_code/blob/main/finalobstacle.ino",
    time: "Build Time: 4 Months",
  },
  {
    id: 2,
    title: "Large Language Powered PDF Reader",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/pdfreader.jpg",
    iconLists: ["/python.svg", "/openai.svg"],
    link: "https://github.com/Nathan-sudo-pycharm/Pdf_reader",
    time: "Build Time: 1 week",
  },
  {
    id: 3,
    title: "Multi-Language Invoice Analyzer",
    des: "Gemini Pro: Efficient multi-language invoice analyzer for international financial documents.",
    img: "/p3.svg",
    iconLists: ["/python.svg", "google.svg"],
    link: "https://github.com/Nathan-sudo-pycharm/Multilang_Invoice_Analyzer",
    time: "Build Time:3 Weeks",
  },
  {
    id: 4,
    title: "Street Fighter Clone Made in Python",
    des: "This project is a Clone of the Street Fighter Game. It has been developed in Python programming language, using the Pygame library.",
    img: "/multiplayer.png",
    iconLists: ["/python.svg"],
    link: "/multiplayer.png",
    time: "Build Time:1 Week",
  },
];

export const companies = [
  {
    id: 1,
    name: "React JS",
    img: "/react.svg",
  },
  {
    id: 2,
    name: "Python",
    img: "/python.svg",
  },
  {
    id: 3,
    name: "Tailwind CSS",
    img: "/tailwind.svg",
  },
  {
    id: 4,
    name: "Next JS",
    img: "/next.svg",
  },
];

export const Skills = [
  {
    id: 1,
    title: "Soft Skills",
    desc: "Leadership, Communication , Public Speaking , Analytical Skills",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 2,
    title: "Technical Skills ",
    desc: "HTML5 , CSS3 , C , C++ , PYTHON , MySQL , PHP , Reacy JS , Next JS",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Tools and Software",
    desc: "Git , Github , Sentry ",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Languages Spoken",
    desc: "English , Hindi, Kannada , German [ Basic ] ",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Nathan-sudo-pycharm?tab=repositories",
  },

  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/nathan-sequeira-941736255/",
  },
];
