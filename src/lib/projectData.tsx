// ----- TypeScript
type Tabs = Tab[];
type Tab = {
  title: string;
  subtitle: string;
  description: string;
  badges: string[];
};
type Projects = Project[];
type Project = {
  name: string;
  description: string;
  image: string;
  url: string;
  github: string;
  badges: string[];
};
type RelatedExperiences = Experience[];
type Experience = {
  role: string;
  companyName: string;
  companyDescription: string;
  dates: string;
  bulletPoints: string[];
  websiteUrl?: string;
  projectUrl?: string;
};
type Badges = string[];
export const projects: Projects = [
  {
    name: "Menu",
    description:
      "FlipDish tech task to render a restaurant menu based on a heavily nested API .",
    image: "/flipdish-logo.svg",
    url: "https://flip-dish-2.vercel.app/",
    github: "https://github.com/mksoofian/flip_dish_2",
    badges: ["api", "typescript", "tailwind", "shadcn"],
  },
  {
    name: "2-Back Game",
    description:
      "A memory game requiring users to click when the letter displayed matches the letter dispayed two letters previously.",
    image: "/2back_site_screenshot.png",
    url: "https://thymea-2backgame.vercel.app/",
    github: "https://github.com/mksoofian/thymea-2backgame",
    badges: ["useReducer", "useContext", "user auth", "repsonsive design"],
  },
  {
    name: "Sneaker Ecommerce",
    description: "Product page design for ecommerce.",
    image: "/sneaker_site_screenshot.png",
    url: "https://fem-ecomm-vanilla.vercel.app/",
    github: "https://github.com/mksoofian/FEM-ECOMM-VANILLA?tab=readme-ov-file",
    badges: ["javascript", "custom css", "carousel"],
  },
];
export const tabsArray: Tabs = [
  {
    title: "Technologies",
    subtitle: "",
    description: "proficiency demonstrated in below technologies:",
    badges: [
      "React",
      "Next.js",
      "Vite",
      "TypeScript",
      "Javascript",
      "Tailwind",
      "Shadcn",
      "React-Hook-Form",
      "API",
      "HTML5",
      "CSS4",
      "Animation",
      "NPM",
      "Responsive Design",
      "PayloadCMS",
    ],
  },
  {
    title: "Tools",
    subtitle: "",
    description: "proficiency demonstrated in below tools:",
    badges: [
      "VS Code",
      "Git",
      "Github",
      "NPM",
      "Vercel",
      "Photoshop",
      "Figma",
      "Microsoft Office",
      "Google Workspace",
    ],
  },
  {
    title: "Community",
    subtitle: "Volunteer Financial Educator",
    description:
      "Provide individuals with pro bono financial education services, including budgets, financial assessments, financial planning, and savings strategies.",
    badges: [],
  },
];
export const relatedExperience: RelatedExperiences = [
  {
    role: "Freelance Web Developer",
    companyName: "AtoZ Supplies ",
    companyDescription:
      "Designed a temporary website using figma, React and CSS and deployed via Github and Vercel to funnel visitors to the WhatsApp Business account.",
    dates: "Nov 2023 - Jun 2024",
    bulletPoints: [
      `Designed a temporary website using figma, HTML and CSS and deployed via Github and Vercel to funnel visitors to our WhatsApp Business account.`,
      "Designed and created an updated company ecommerce website with Nextjs, React, Typescript, CSS,  and PayloadCMS to help offload non-stock products, reach new customers and increase brand visibility.",
      // `Designed and created an updated company ecommerce website with ${(
      //   <span className="font-semibold">Nextjs, React, Typescript</span>
      // )}, CSS, and PayloadCMS to help offload non-stock product, reach new customers and increase brand visibility.`,
      "Proactively revamped and modernized company branding and marketing materials with Figma to better connect with customers and improve the brand positioning and website.",
      "Continuously reviewing  warehousing software and office SOP for improving  efficiency and preparation for growth and  scale.",
    ],
    websiteUrl: "https://atozsupplies.com/",
    projectUrl: "https://atoz-local.vercel.app/",
  },
  {
    role: "Freelance Web Developer",
    companyName: "Greenfield Accounting ",
    companyDescription:
      "Greenfield Accounting is a accounting firm in Rockland County, NY",
    dates: "Apr 2023 - Nov 2023",
    bulletPoints: [
      "Created a new  website. Removed bloated CSS frameworks and unused code from a legacy site and updated CSS to use new and improved layout schemes. Built a new site in Next.js and React and deployed with Vercel. Utilized emotion CSS, Javascript, and React hooks.",
    ],
    websiteUrl: "https://greenfieldtax.com/",
  },
  {
    role: "Customer Experience Engineer (React & Automation)",
    companyName: "Tivuna",
    companyDescription:
      "Tivuna is a glass and aluminum glazing business focused on building facade projects.",
    dates: "Jul 2022 - Feb 2023",
    bulletPoints: [
      "Maintained and improved design for the company website.",
      "Established an outline for the proper flow of internal information leading to improved time management, efficiency, and accountability.",
      "Extended the company’s use of Hubspot beyond basic CRM features and automated workflows. Automation included correspondence maintained in Hubspot deals, deal stages, alerts to notify staff when tasks were completed or new tasks created, and reminders for tasks to be completed. ",
      "Managed projects from initial lead creation through completion and maintained client relationships. ",
    ],
  },
];
export const allBadges = [
  "React",
  "Next.js",
  "Vite",
  "TypeScript",
  "Javascript",
  "Tailwind",
  "Shadcn",
  "React-Hook-Form",
  "API",
  "HTML5",
  "CSS4",
  "Animation",
  "Responsive Design",
  "PayloadCMS",
  "VS Code",
  "Git",
  "Github",
  "NPM",
  "Vercel",
  "Photoshop",
  "Figma",
  "Microsoft Office",
  "Google Workspace",
];
