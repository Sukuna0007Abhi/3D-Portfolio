import {
  novalearn,
  ponggame,
  portfolio,
  backend,
  creator,
  coursera,
  hr,
  cp,
  fcc,
  mobile,
  web,
  ideas,
  concepts,
  designs,
  code,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "achievement",
    title: "Achievement",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: creator,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Ruby Developer",
    icon: web,
  },
  {
    title: "Software Engineer",
    icon: mobile,
  },
];

const achievements = [
  {
    title: ["Pi Hackathon Winner"],
    company_name: "Pi Network",
    icon: fcc,
    iconBg: "#FFD700",
    date: "2024",
    points: [
      "Winner - Pi Hackathon Competition",
      "Awarded 250 Pi Coins",
      "Innovative Blockchain Solution",
      "Recognition for Technical Excellence",
    ],
  },
  {
    title: ["Award Recognition"],
    company_name: "Academic Excellence",
    icon: coursera,
    iconBg: "#383E56",
    date: "2024",
    points: [
      "Outstanding Academic Performance",
      "Excellence in Computer Science",
      "Recognition for Programming Skills",
      "Merit-based Achievement Award",
    ],
  },
  {
    title: ["HackerRank Certifications"],
    company_name: "HackerRank",
    icon: hr,
    iconBg: "#E6DEDD",
    date: "2024",
    points: [
      "Python (Basic) Certificate",
      "Problem Solving (Basic) Certificate",
      "SQL (Basic) Certificate",
    ],
  },
  {
    title: ["Academic Projects"],
    company_name: "Polaris School of Technology",
    icon: cp,
    iconBg: "#0056d2",
    date: "2023-2024",
    points: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Software Engineering Principles",
    ],
  },
  {
    title: ["Programming Skills"],
    company_name: "Self-Learning",
    icon: hr,
    iconBg: "#383E56",
    date: "2022-2024",
    points: [
      "Ruby Programming",
      "Python Development",
      "JavaScript & Web Technologies",
      "C Programming",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Abhijit shows exceptional dedication to learning programming languages and consistently delivers quality code. His problem-solving approach is methodical and efficient.",
    name: "Faculty Mentor",
    designation: "Professor",
    company: "Polaris School of Technology",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "Working with Abhijit on group projects has been great. His knowledge of multiple programming languages and ability to adapt quickly makes him a valuable team member.",
    name: "Study Partner",
    designation: "B.Tech Student",
    company: "Polaris School of Technology",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    testimonial:
      "Abhijit's portfolio demonstrates strong technical skills across Ruby, Python, and JavaScript. His project implementations show a solid understanding of software development principles.",
    name: "Technical Reviewer",
    designation: "Senior Developer",
    company: "Tech Industry",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const projects = [
  {
    name: "3D Portfolio Website",
    description:
      "A modern 3D portfolio website built with React, Three.js, and advanced animations. Features immersive 3D graphics, smooth scrolling, and interactive elements to showcase projects and skills.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Sukuna0007Abhi/3D-Portfolio",
  },
  {
    name: "E-Commerce Website",
    description:
      "A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart functionality, and secure payment integration. Built with modern web technologies and responsive design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Sukuna0007Abhi",
  },
  {
    name: "Weather Application",
    description:
      "A real-time weather application that provides current weather conditions, forecasts, and location-based weather data. Features clean UI/UX design and integration with weather APIs.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Sukuna0007Abhi",
  },
  {
    name: "Task Management System",
    description:
      "A collaborative task management application with features for creating, assigning, and tracking tasks. Includes user roles, real-time updates, and progress monitoring capabilities.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "sqlite",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "orange-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Sukuna0007Abhi",
  },
  {
    name: "Ruby CLI Application",
    description:
      "A command-line interface application built with Ruby showcasing object-oriented programming principles, file handling, and user interaction. Demonstrates Ruby programming proficiency.",
    tags: [
      {
        name: "ruby",
        color: "blue-text-gradient",
      },
      {
        name: "cli",
        color: "green-text-gradient",
      },
      {
        name: "oop",
        color: "pink-text-gradient",
      },
      {
        name: "terminal",
        color: "orange-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Sukuna0007Abhi",
  },
  {
    name: "Python Data Analysis Project",
    description:
      "A comprehensive data analysis project using Python libraries like Pandas, NumPy, and Matplotlib. Includes data visualization, statistical analysis, and insights generation from real datasets.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "matplotlib",
        color: "pink-text-gradient",
      },
      {
        name: "numpy",
        color: "orange-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Sukuna0007Abhi",
  },
];

const words = [
  { text: "Ideas", imgPath: ideas, font: "Arial, sans-serif" },
  {
    text: "Concepts",
    imgPath: concepts,
    font: "'Courier New', Courier, monospace",
  },
  {
    text: "Designs",
    imgPath: designs,
    font: "'Times New Roman', Times, serif",
  },
  { text: "Code", imgPath: code, font: "'Fira Mono', monospace" },
  {
    text: "Ideas",
    imgPath: ideas,
    font: "'Comic Sans MS', cursive, sans-serif",
  },
  { text: "Concepts", imgPath: concepts, font: "'Roboto', sans-serif" },
  { text: "Designs", imgPath: designs, font: "'Georgia', serif" },
  { text: "Code", imgPath: code, font: "'Source Code Pro', monospace" },
];

export { achievements, projects, services, testimonials, words };
