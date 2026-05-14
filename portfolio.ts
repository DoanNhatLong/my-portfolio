import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  title: "Hi all, I'm Nhat Long",
  description:
    "I'm a Full-Stack Web Developer with Spring Boot, ReactJs, MySql and Redis. " +
    "I'm a self-motivated and hardworking individual who is always ready to learn new things " +
    "and work in a team.\n\n" +
    "Email: longs3515@gmail.com \n" +
    "Tel: 0912 84 92 94",
  resumeLink: "/CV_DoanNhatLongpdf.pdf",
};
export const openSource = {
  githubUserName: "DoanNhatLong",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  github: "https://github.com/DoanNhatLong",
  facebook: 'https://www.facebook.com/profile.php?id=100033657721507',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json",
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) in ReactJs"),
        emoji("⚡ Building RESTful APIs in Spring Boot or NestJS"),
        emoji("⚡ Utilized Redis for performance optimization and high-concurrency."),
        emoji("⚡ Deployed using Docker and GitHub Actions."),
      ],
      softwareSkills: [
        {
          skillName: "Java",
          iconifyTag: "logos:java",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "NestJS",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const educationInfo: EducationType[] = [
  {
    schoolName: "Da Nang University of Technology",
    grade: "3.26/4.00",
    descBullets: [],
  },
  {
    schoolName: "CodeGym Da Nang",
    grade: "86/100",
    descBullets: [],
  },
  {
    schoolName: "Toeic",
    grade: "635/990",
    descBullets: [],
  }
];

export const projects: ProjectType[] = [
  {
    name: "Quiz_Management",
    desc: "A high-performance real-time examination platform featuring a cross-device reconnection mechanism " +
      ". I leveraged Redis to optimize performance and handle high concurrency",
    github: "https://github.com/DoanNhatLong/project-quiz-frontend",
    link: "https://project-quiz-frontend.vercel.app/",
  },
  {
    name: "Rent_Yard",
    desc: "A web-based platform designed to simplify the process of searching and booking sports yards (such as football pitches or tennis courts).",
    github: "https://github.com/DoanNhatLong/project_rent_yard/tree/main/project_rent_yard",
  }
];

export const seoData: SEODataType = {
  title: "LongDoan_CV",
  author: "Long Doan",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
};
