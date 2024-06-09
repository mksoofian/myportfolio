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

export default function Home() {
  const techArray = [
    "React",
    "Next.js",
    "Vite",
    "TypeScript",
    "Javascript",
    "Tailwind",
    "Shadcn",
    "API",
    "HTML5",
    "CSS4",
    "Animation",
    "NPM",
    "Responsive Design",
    "PayloadCMS",
  ];
  const toolsArray = [
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
  const projects = [
    {
      name: "Menu",
      description: "Restaurant menu rendered based on a heavily nested API",
      image: "",
      url: "https://flip-dish-2.vercel.app/",
      github: "https://github.com/mksoofian/flip_dish_2",
      badges: ["api", "typescript", "tailwind", "shadcn"],
    },
    {
      name: "2-Back Game",
      description:
        "A memory game requiring users to click when the letter displayed matches the letter dispayed two letters previously",
      image: "",
      url: "https://thymea-2backgame.vercel.app/",
      github: "https://github.com/mksoofian/thymea-2backgame",
      badges: ["useReducer", "useContext", "user auth", "repsonsive design"],
    },
    {
      name: "Sneaker Ecommerce",
      description: "Product page design for ecommerce",
      image: "",
      url: "https://fem-ecomm-vanilla.vercel.app/",
      github:
        "https://github.com/mksoofian/FEM-ECOMM-VANILLA?tab=readme-ov-file",
      badges: ["javascript", "custom css", "carousel"],
    },
  ];
  return (
    <main className="mt-12">
      <section className="flex justify-evenly" id="About">
        <div className="max-w-96">
          <h2 className="text-xl font-semibold pb-2">About me</h2>
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
          <Tabs defaultValue="technologies" className="w-[400px]">
            <TabsList className="w-full">
              <TabsTrigger value="technologies">Technologies</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
            </TabsList>
            <TabsContent value="technologies">
              <Card>
                <CardHeader>
                  <CardTitle>Technologies</CardTitle>
                  <CardDescription>
                    proficiency demonstrated in below technologies:
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <>
                    {techArray.map((element) => {
                      return (
                        <Badge
                          key={element}
                          className={badgeVariants({ variant: "secondary" })}
                        >
                          {element}
                        </Badge>
                      );
                    })}
                  </>
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="tools">
              {" "}
              <Card>
                <CardHeader>
                  <CardTitle>Tools</CardTitle>
                  <CardDescription>
                    proficiency demonstrated in below tools:
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <>
                    {toolsArray.map((element) => {
                      return (
                        <Badge
                          key={element}
                          className={badgeVariants({ variant: "secondary" })}
                        >
                          {element}
                        </Badge>
                      );
                    })}
                  </>
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="community">
              {" "}
              <Card>
                <CardHeader>
                  <CardTitle>Volunteer Financial Educator</CardTitle>
                  <CardDescription>
                    {`Living Smarter Jewish (May 2023 - present)`}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Provide individuals with pro bono financial education
                  services, including budgets, financial assessments, financial
                  planning, and savings strategies.
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <section id="Projects" className="my-8">
        {/*  */}
        <Label className="text-2xl text-center">Projects</Label>
        <div className="flex w-full justify-evenly gap-4 py-4">
          <>
            {projects.map(
              ({ name, description, image, url, github, badges }) => {
                return (
                  <Card key={name} className="w-1/3">
                    <CardHeader>
                      <CardTitle>{name}</CardTitle>
                      <CardDescription>{description}</CardDescription>
                    </CardHeader>
                    <CardContent>
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
                    <CardFooter></CardFooter>
                  </Card>
                );
              }
            )}
          </>
        </div>
      </section>
      <section id="Resume">
        {/* Resume / CV */}
        <div></div>
      </section>
      <footer id="Contact"></footer>
    </main>
  );
}
