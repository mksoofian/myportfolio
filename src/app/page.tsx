import Image from "next/image";
import { Badge, badgeVariants } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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

export default function Home() {
  const projects: Projects = [
    {
      name: "Menu",
      description: "Restaurant menu rendered based on a heavily nested API.",
      image: "/menu_site_screenshot.png",
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
      github:
        "https://github.com/mksoofian/FEM-ECOMM-VANILLA?tab=readme-ov-file",
      badges: ["javascript", "custom css", "carousel"],
    },
  ];
  const tabsArray: Tabs = [
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
  const relatedExperience: RelatedExperiences = [
    {
      role: "Freelance Web Developer",
      companyName: "AtoZ Supplies ",
      companyDescription:
        "A to Z Supplies is a  distributor of food-service packaging  and janitorial disposable  products.",
      dates: "Nov 2023 - Jun 2024",
      bulletPoints: [
        `Designed a temporary website using figma, HTML and CSS and deployed via Github and Vercel to funnel visitors to our WhatsApp Business account.`,
        `Designed and created an updated company ecommerce website with Nextjs, React, Typescript, CSS, and PayloadCMS to help offload non-stock product, reach new customers and increase brand visibility.`,
        // `Designed and created an updated company ecommerce website with ${(
        //   <span className="font-semibold">Nextjs, React, Typescript</span>
        // )}, CSS, and PayloadCMS to help offload non-stock product, reach new customers and increase brand visibility.`,
        "Proactively revamped and modernizing company branding and marketing materials with figma to better connect with customers and improve the brand positioning and website.",
        "Continuously reviewing warehousing software and office SOP for improving  efficiency and preparation for growth and  scale. ",
      ],
      websiteUrl: "https://atozsupplies.com/",
      projectUrl:
        "https://drive.google.com/file/d/17j06Yh6RGSEEcvliiJnM9vK1Kz8ZkDWx/view?usp=sharing",
    },
    {
      role: "Freelance Web Developer",
      companyName: "Greenfield Accounting ",
      companyDescription:
        "Greenfield Accounting is a accounting firm in Rockland County, NY",
      dates: "May 2023",
      bulletPoints: [
        " Removed bloated CSS frameworks and unused code from a legacy site and updated CSS to use new and improved layout schemes. Built new site in Next.js and React and deployed with Vercel. (website link). Utilized emotion CSS, Javascript, and React hooks in this project.",
      ],
      websiteUrl: "https://greenfieldtax.com/",
    },
    {
      role: "Customer Experience Engineer (React & Automation)",
      companyName: "Tivuna",
      companyDescription:
        "Tivuna is a glass and aluminum glazing business focused on building facade projects.",
      dates: "July 2022 - Feb 2023",
      bulletPoints: [
        "Maintained and improved design for the company website.",
        "Established an outline for the proper flow of internal information leading to improved time management, efficiency, and accountability.",
        "Extended the company’s use of Hubspot beyond basic CRM features and automated workflows. Automation included correspondence maintained in Hubspot deals, deal stages, alerts to notify staff when tasks were completed or new tasks created, and reminders for tasks to be completed. ",
        "Managed projects from initial lead creation through completion and maintained client relationships. ",
      ],
    },
  ];

  return (
    <main className="sm:mt-10 mt-2 flex flex-col">
      <section className="flex justify-evenly flex-wrap gap-8" id="About">
        {/* About Me */}
        <div className="lg:max-w-96 px-8 sm:px-4">
          <h2 className="text-2xl font-semibold pb-2 rounded-lg text-orange-800">
            {`< react developer />`}
          </h2>
          <p>
            Passionate and motivated web developer with proven ability to
            deliver beautiful and interactive web apps, optimize user
            experience, and collaborate with teams. Technical skills include
            strong UX and UI abilities with a focus on{" "}
            <span className="font-bold">React, Nextjs</span> and a preference of
            <span className="font-bold"> Tailwind + Shadcn</span> for styling.
            Effective communicator with advanced soft skills developed over a
            decade of experience in the apparel industry.
          </p>
        </div>
        {/* Tabs Card */}
        <div>
          <Tabs defaultValue="technologies" className="w-80 sm:w-[400px]">
            <TabsList className="w-full">
              <>
                {tabsArray.map(({ title, subtitle, description, badges }) => {
                  return (
                    <TabsTrigger key={title} value={title.toLowerCase()}>
                      {title}
                    </TabsTrigger>
                  );
                })}
              </>
            </TabsList>
            <>
              {tabsArray.map(({ title, subtitle, description, badges }) => {
                return (
                  <TabsContent key={title} value={title.toLowerCase()}>
                    <Card className="h-[275px]">
                      <CardHeader>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>
                          {subtitle ? subtitle : description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex flex-wrap gap-2">
                        {subtitle && description}
                        <>
                          {badges.map((badge) => {
                            return (
                              <Badge
                                key={badge}
                                className={badgeVariants({
                                  variant: "secondary",
                                })}
                              >
                                {badge}
                              </Badge>
                            );
                          })}
                        </>
                      </CardContent>
                      <CardFooter></CardFooter>
                    </Card>
                  </TabsContent>
                );
              })}
            </>
          </Tabs>
        </div>
      </section>
      <section id="Projects" className="my-8">
        {/* Projects */}
        <Label htmlFor="projectList" className="text-2xl pl-4 ">
          Projects
        </Label>
        <div id="projectList" className="mt-2 flex flex-col md:flex-row gap-4 ">
          <>
            {projects.map(
              ({ name, description, image, url, github, badges }) => {
                return (
                  <Card
                    key={name}
                    className=" w-full md:w-1/3 p-4 flex flex-col justify-between hover:border-zinc-300 hover:bg-slate-50 "
                  >
                    <Link href={url} className="w-full ">
                      <Image
                        src={image}
                        alt={description}
                        width={2880}
                        height={1552}
                        className=" border-zinc-100 border-solid border-2"
                      />
                    </Link>
                    <CardHeader>
                      <CardTitle>{name}</CardTitle>
                      <CardDescription>{description}</CardDescription>
                      <CardContent className="flex flex-wrap gap-2 p-0">
                        <>
                          {badges.map((badge) => {
                            return (
                              <Badge
                                key={badge}
                                className={"text-zinc-600"}
                                variant={"outline"}
                              >
                                {badge}
                              </Badge>
                            );
                          })}
                        </>
                      </CardContent>
                    </CardHeader>

                    <CardFooter className="flex gap-2">
                      <Button size="sm">
                        <Link href={url}>Website</Link>
                      </Button>{" "}
                      <Button size="sm">
                        <Link href={github}>Github</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                );
              }
            )}
          </>
        </div>
      </section>
      <section id="Resume" className="my-10">
        {/* Resume / CV */}
        {/* remove this outer div? */}
        <div>
          <Label htmlFor="relatedExperience" className="text-2xl pl-4">
            Work Experience
          </Label>
          <div id="relatedExperience">
            {relatedExperience.map(
              ({
                role,
                companyName,
                companyDescription,
                dates,
                bulletPoints,
                websiteUrl,
                projectUrl,
              }) => {
                return (
                  <div key={`${role}-${dates}`} className="py-6 px-6 sm:py-2">
                    {/* Header */}
                    <div className="py-2">
                      <div id="row1" className="flex justify-between my-2">
                        <div className="flex flex-wrap ">
                          <h3 className="font-semibold pr-1">{role},</h3>
                          <p>{companyName}</p>
                        </div>
                        <p id="dates">{dates}</p>
                      </div>
                      <div id="row2" className="italic text-sm text-zinc-500">
                        {companyDescription}
                      </div>
                    </div>
                    {/* Details */}
                    <ul id="bulletPoints" className="list-disc">
                      <>
                        {bulletPoints.map((bullet, index) => {
                          return (
                            <li key={bulletPoints[index]} className="">
                              {bullet}
                            </li>
                          );
                        })}
                      </>
                    </ul>
                    {/* Relevant Website Link/ Buttons */}
                    {websiteUrl && (
                      <div key={companyName} className="my-4 flex gap-2">
                        <Button variant={"outline"}>
                          <Link href={websiteUrl}>Website</Link>
                        </Button>
                        {projectUrl && (
                          <Button variant={"outline"}>
                            <Link href={projectUrl}>Project</Link>
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div className="italic font-light text-sm py-6 bg-zinc-100 my-10 text-center">
          Prior experience includes 12 years in the apparel production industry.
        </div>
      </section>

      {/* <footer id="Contact"></footer> */}
    </main>
  );
}
