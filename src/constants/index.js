import {
  java,
  express,
  sql,
  postgres,
  photoshop,
  illustrator,
  fireboltlogo,
  sds,
  baja,
  firebolt,
  self1,
  self2,
  simon,
  bb,
  weather,
  fb,
  insta,
  linkedin,
  gits,
  c,
  hr,
  python,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const socials = [
  {
    title: "gits",
    icon: gits,
    visit: "https://github.com/Lavkeshjazz",
  },

  {
    title: "linkedin",
    icon: linkedin,
    visit: "https://www.linkedin.com/in/lavkesh-jaiswal-5550a0279",
  },
  {
    title: "instagram",
    icon: insta,
    visit: "https://www.instagram.com/laaavkeshh/",
  },
  {
    title: "medium",
    icon: fb,
    visit: "https://medium.com/@zen.jaiswal34",
  },
];

const technologies = [
  {
    name: "c++",
    icon: c,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "postgres",
    icon: postgres,
  },
  {
    name: "photoshop",
    icon: photoshop,
  },
  
];

const experiences = [
  {
    title: "Sales Business Presentation",
    company_name: "BAJA SAE India, Indore",
    icon: baja,
    iconBg: "#FFFFFF",
    date: "Dec 2023 - Jan 2024",
    points: [
      "The objective was for the “Company” (the team) to convince the “Investors” (the judges) to invest in their vehicle design for production at a rate of 4000 units per year.",
      "The project helped to instill an entrepreneurial mindset.",
      "It required presentation skills, creative thinking, managerial perspective, and business aptitude fundamentals like forecasting, financing, marketing, and management.",
    ],
  },
  {
    title: "Cost Presentation",
    company_name: "BAJA SAE India, Indore",
    icon: baja,
    iconBg: "#FFFFFF",
    date: "Dec 2023 - Jan 2024",
    points: [
      "The objective was to prepare an accurate bill of materials, and cost accounting clarifies components used, production time, and cost per part.",
      "Such classification helps control cost, ascertain process profitability, and make strategic decisions for efficient manufacturing.",
      "Project helped to learn cost accounting nuances and the benefits of maintaining a bill of materials in product development.",
    ],
  },
  {
    title: "Participated in Hackathon",
    company_name: "Data Science Sumit 2023",
    icon: sds,
    iconBg: "#FFFFFF",
    date: "August 2023",
    points: [
      "Problem statement for us was to create an innovative platform that fosters professional connections and allows users to share their professional journeys. Users can engage with peers, mentors, and companies, apply for jobs, and receive personalized career recommendations.",
      "Challenges we faced were designing a user-friendly interface, ensuring robust data security, implementing accurate recommendation algorithms, and creating scalable infrastructure to support high user engagement and dynamic real-time interactions.",
    ],
  },
  {
    title: "Management Coordinator, Tech (Web Developer)",
    company_name: "Firebolt Racing",
    icon: fireboltlogo,
    iconBg: "#FFFFFF",
    date: "Jan 2022 - Till Date",
    points: [
      "Tasked with overseeing various club activities including event planning and management, financial budgeting and handling, and ensuring the smooth functioning of the club.",
      "Headed development of the club's official website, showcasing a 15-year legacy of club achievements.",
      "Improved Performance by 24%, Page load time by 40% and SEO by 10% of the club's offical website.",
    ],
  },
];

const projects = [
  {
    name: "BudgetBuddy",
    description:
      "Developed a MERN stack (MongoDB, Express.js, React.js, and Node.js) based website for price tracking of products across multiple e-commerce platforms. Applied Web Scraping to tag products from Amazon, Flipkart, Ajio and IndiaMart. Implemented real-time notifications for users when product prices drop or fall within their budget. Enabled wholesalers to monitor demand trends and compare e-commerce pricing. Integrated a feature to predict the likelihood of future price drops, aiding user purchase decisions.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: bb,
    source_code_link: "https://github.com/Lavkeshjazz/BudgetBuddy",
  },
  {
    name: "Firebolt Racing",
    description:
      "Headed development of the club’s official website, showcasing a 15-year legacy of club achievements. Improved Performance by 24%, Page load time by 40% and SEO by 10%. Developed with HTML, CSS and JavaScript.",
    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: firebolt,
    source_code_link: "https://www.fireboltracing.com/",
  },
  {
    name: "WeatherHub",
    description:
      "WeatherHub is a real-time weather application developed using ReactJS and powered by the OpenWeatherMap API. Users can access current weather information and view weather details for any location worldwide.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/Lavkeshjazz/Weather-Forecaster-React",
  },
  {
    name: "Simon Musical Memory Game",
    description:
      "• Developed a Game, made with HTML, CSS and JavaScript, providing an engaging and entertaining experience for users of all ages.",
    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: simon,
    source_code_link:
      "https://github.com/Lavkeshjazz/Simon-Musical-Memory-Game",
  },
  {
    name: "Autonomous Driving Car",
    description:
      "Developed a self driving car which steers, move forward or backward and even brakes itself independently without human interaction. Decision made by car is helped by Mathematical Calculations and Ray Casting.",
    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "Vanila JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: self1,
    source_code_link: "",
  },
  {
    name: "Simulation of Virtual World",
    description:
      "This project uses HTML, CSS, and JavaScript to create a complete virtual world simulation from scratch. The project's main goal is to establish a dynamic environment that allows autonomous driving automobiles to travel about freely.",
    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "Vanila JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: self2,
    source_code_link: "https://github.com/Lavkeshjazz/Simulation-of-Virtual-World",
  },
];

export { socials, technologies, experiences, projects };