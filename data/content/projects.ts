import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "OmniBiz",
    desc: "Business Management System",
    img: "/static/projects/omniBiz.png",
    link: "https://github.com/Kekajan/omnibiz-frontend",
    github: "https://github.com/Kekajan/omnibiz-frontend",
    tags: ["NextJS", "Bootstrap", "Django", "MySQL"],
  },
  {
    id: 1,
    title: "CareerHub",
    desc: "Job Portal Application to connect job seekers with employers",
    img: "/static/projects/buildfaster.png",
    link: "https://github.com/Kekajan/CareerHub-Backend",
    github: "https://github.com/Kekajan/CareerHub-Backend",
    tags: ["NextJS", "Tailwind CSS", "NodeJS", "MongoDB"],
  },
  {
    id: 2,
    title: "Vehicle Vista",
    desc: "Platform which connects people and vehicle service stations",
    img: "/static/projects/react-emoji-search.png",
    link: "https://github.com/Kekajan/vehicleVista",
    github: "https://github.com/Kekajan/vehicleVista",
    tags: ["React", "Bootstrap", "PHP", "MySQL"],
  },
  {
    id: 3,
    title: "PRM",
    desc: "Task management system",
    img: "/static/projects/bitcointemp.png",
    link: "https://github.com/Kekajan/PRM",
    github: "https://github.com/Kekajan/PRM",
    tags: ["React", "Bootstrap", "Django", "MySQL"],
  },
  {
    id: 4,
    title: "VoteEASE",
    desc: "Election voting management system",
    img: "/static/projects/create-html-boilerplate.png",
    link: "https://github.com/Kekajan/VoteEASE",
    github: "https://github.com/Kekajan/VoteEASE",
    tags: ["HTML", "TailwindCSS", "JSP", "JavaServlet", "MySQL"],
  },
  {
    id: 5,
    title: "Movie-Site",
    desc: "Online movie ticket booking system",
    img: "/static/projects/8ball-rust.png",
    link: "https://github.com/Kekajan/Movie-Site",
    github: "https://github.com/Kekajan/Movie-Site",
    tags: ["HTML", "Bootstrap", "PHP", "MySQL"],
  },
  {
    id: 6,
    title: "Discover Lanka",
    desc: "Tourism guidence system",
    img: "/static/projects/dontleaveme.png",
    link: "https://github.com/Kekajan/Discover_Lanka_FE_new",
    github: "https://github.com/Kekajan/Discover_Lanka_FE_new",
    tags: ["React Native", "Django", "MongoDB"],
  },
];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
