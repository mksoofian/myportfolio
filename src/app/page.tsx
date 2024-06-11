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
import { tabsArray, projects, relatedExperience } from "@/lib/projectData";

export default function Home() {
  return (
    <main className="sm:mt-10 mt-2 flex flex-col">
      <section className="flex justify-evenly flex-wrap gap-8" id="About">
        {/* About Me */}
        {/* <div className="lg:max-w-96 px-8 sm:px-4">
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
        </div> */}
        <div className="lg:max-w-96 px-8 sm:px-4">
          <h1 className="!text-6xl sm:text-8xl">web developer</h1>
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
        {/* <div>
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
        </div> */}
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
                            <li key={bulletPoints[index]} className="my-2">
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
